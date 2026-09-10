/**
 * Cloudflare Worker entry.
 *
 * Serves the built SPA from the ASSETS binding and exposes one API route,
 * /api/chat, which proxies the AI Financial Companion to Gemini.
 *
 * The proxy exists so GEMINI_API_KEY stays server-side. Calling Gemini straight
 * from the browser would ship the key in the JS bundle, where anyone could lift
 * it and spend against the account.
 */

import { loanProducts } from '../src/data/loans';
import { insuranceProducts } from '../src/data/insurance';

export interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  GEMINI_API_KEY?: string;
  /** Optional override, e.g. "gemini-2.5-flash". */
  GEMINI_MODEL?: string;
}

interface ChatRequest {
  message?: string;
  history?: { role: 'user' | 'assistant'; text: string }[];
}

/** Compact catalogue so answers about ELOANSS products use real figures. */
const catalogue = () => {
  const loans = loanProducts
    .map(
      (p) =>
        `- ${p.name} (/loans/${p.slug}): rate ${p.interestRate}; tenure ${p.tenure}; max ${p.maxAmount}; processing fee ${p.processingFee}; sanction ${p.processingTime}; min income ${p.minIncome}`
    )
    .join('\n');
  const insurance = insuranceProducts
    .map(
      (p) =>
        `- ${p.name} (/insurance/${p.slug}): cover ${p.coverageUpTo}; premium ${p.startingPremium}; claim settlement ${p.claimSettlementRatio}`
    )
    .join('\n');
  return `LOAN PRODUCTS\n${loans}\n\nINSURANCE PRODUCTS\n${insurance}`;
};

const SYSTEM = `You are the ELOANSS AI Financial Companion on eloanss.com, an Indian loan and insurance marketplace.

Answer any question the visitor asks, helpfully and in plain English. You are not restricted to ELOANSS topics: general questions about finance, EMIs, credit, taxes, or anything else are fine to answer.

Rules that matter:
1. When a question touches an ELOANSS product, use the figures in the catalogue below. Never invent a rate, fee, tenure or limit. If a figure is not listed, say it varies by lender rather than guessing.
2. Do not give personalised investment, tax or legal advice, and do not promise approval, a specific rate, or a sanction amount. Approval always rests with the lender.
3. Never ask for and never accept passwords, OTPs, full card numbers, or bank credentials. If a visitor offers them, tell them not to share such details.
4. Be concise: usually two or three short paragraphs, or a short list. No markdown headings or bold.
5. If you genuinely do not know, say so.

CATALOGUE
${'${CATALOGUE}'}`;

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }
  });

async function handleChat(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') return json({ error: 'method_not_allowed' }, 405);

  // Without a key the client falls back to its built-in catalogue engine, so
  // this is a normal condition rather than an error worth surfacing.
  if (!env.GEMINI_API_KEY) return json({ error: 'not_configured' }, 503);

  let body: ChatRequest;
  try {
    body = (await request.json()) as ChatRequest;
  } catch {
    return json({ error: 'bad_request' }, 400);
  }

  const message = (body.message ?? '').trim();
  if (!message) return json({ error: 'empty_message' }, 400);
  if (message.length > 2000) return json({ error: 'message_too_long' }, 413);

  const model = env.GEMINI_MODEL || 'gemini-2.0-flash';
  const history = (body.history ?? []).slice(-6).map((m) => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: String(m.text).slice(0, 2000) }]
  }));

  const payload = {
    systemInstruction: { parts: [{ text: SYSTEM.replace('${CATALOGUE}', catalogue()) }] },
    contents: [...history, { role: 'user', parts: [{ text: message }] }],
    generationConfig: { temperature: 0.4, maxOutputTokens: 600 }
  };

  try {
    const upstream = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-goog-api-key': env.GEMINI_API_KEY },
        body: JSON.stringify(payload)
      }
    );

    if (!upstream.ok) {
      // Surface a status the client can fall back on, without leaking the
      // upstream error body (it can echo the key in some failure modes).
      return json({ error: 'upstream_failed', status: upstream.status }, 502);
    }

    const data = (await upstream.json()) as {
      candidates?: { content?: { parts?: { text?: string }[] } }[];
    };
    const text = data.candidates?.[0]?.content?.parts?.map((p) => p.text ?? '').join('').trim();
    if (!text) return json({ error: 'empty_response' }, 502);

    return json({ text });
  } catch {
    return json({ error: 'network_error' }, 502);
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/api/chat') return handleChat(request, env);
    return env.ASSETS.fetch(request);
  }
};
