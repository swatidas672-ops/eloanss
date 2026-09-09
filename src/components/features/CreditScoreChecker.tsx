import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Gauge,
  ShieldCheck,
  Info,
  TrendingUp,
  ArrowRight,
  RotateCcw,
  Lightbulb
} from 'lucide-react';
import { Button } from '../ui/Button';
import { GlassCard } from '../ui/GlassCard';
import { Select } from '../ui/Select';
import { Input } from '../ui/Input';
import {
  SCORE_MIN,
  SCORE_MAX,
  estimateCreditScore,
  defaultCreditScoreInput,
  paymentHistoryOptions,
  creditMixOptions,
  scoreBands,
  type CreditScoreInput,
  type PaymentHistory,
  type CreditMix
} from '../../data/creditScore';

interface CreditScoreCheckerProps {
  onOpenApply?: (type?: 'loan' | 'insurance', slug?: string) => void;
}

/** Semicircular arc geometry for the 300-900 dial. */
const GAUGE = { cx: 150, cy: 140, r: 110, stroke: 18 };

const polar = (value: number) => {
  const ratio = (value - SCORE_MIN) / (SCORE_MAX - SCORE_MIN);
  const angle = Math.PI * (1 - Math.min(1, Math.max(0, ratio)));
  return {
    x: GAUGE.cx + GAUGE.r * Math.cos(angle),
    y: GAUGE.cy - GAUGE.r * Math.sin(angle)
  };
};

const arcPath = (from: number, to: number) => {
  const start = polar(from);
  const end = polar(to);
  return `M ${start.x} ${start.y} A ${GAUGE.r} ${GAUGE.r} 0 0 1 ${end.x} ${end.y}`;
};

export const CreditScoreChecker: React.FC<CreditScoreCheckerProps> = ({ onOpenApply }) => {
  const [input, setInput] = useState<CreditScoreInput>(defaultCreditScoreInput);

  const result = useMemo(() => estimateCreditScore(input), [input]);

  const set = <K extends keyof CreditScoreInput>(key: K, value: CreditScoreInput[K]) =>
    setInput((prev) => ({ ...prev, [key]: value }));

  const needle = polar(result.score);
  const formatINR = (val: number) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
      {/* ---------------- Inputs ---------------- */}
      <GlassCard hoverEffect={false} className="lg:col-span-7 p-6 sm:p-8">
        <div className="flex items-start gap-3 mb-6">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-500 to-cyan-400 text-white flex items-center justify-center shrink-0 shadow-md">
            <Gauge className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
              Credit Score Checker
            </h3>
            <p className="text-sm text-slate-600 dark:text-[#A9BDD1]">
              Answer five questions to see where you are likely to land on the 300-900 scale.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <Select
            label="Repayment track record"
            value={input.paymentHistory}
            onChange={(e) => set('paymentHistory', e.target.value as PaymentHistory)}
            options={paymentHistoryOptions}
          />

          <div>
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="credit-utilisation"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-[#A9BDD1]"
              >
                Credit card utilisation
              </label>
              <span className="text-sm font-bold text-sky-600 dark:text-cyan-300 font-display">
                {input.utilisation}%
              </span>
            </div>
            <input
              id="credit-utilisation"
              type="range"
              min={0}
              max={100}
              step={1}
              value={input.utilisation}
              onChange={(e) => set('utilisation', Number(e.target.value))}
              className="w-full accent-sky-500 dark:accent-cyan-400 cursor-pointer"
            />
            <p className="mt-1.5 text-[11px] text-slate-500 dark:text-slate-400">
              Share of your total card limit currently outstanding. Under 30% scores best.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input
              label="Years of credit history"
              type="number"
              min={0}
              max={40}
              value={input.creditAgeYears}
              onChange={(e) => set('creditAgeYears', Number(e.target.value))}
            />
            <Input
              label="Loan enquiries (6 months)"
              type="number"
              min={0}
              max={20}
              value={input.enquiries}
              onChange={(e) => set('enquiries', Number(e.target.value))}
            />
          </div>

          <Select
            label="Types of credit held"
            value={input.creditMix}
            onChange={(e) => set('creditMix', e.target.value as CreditMix)}
            options={creditMixOptions}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input
              label="Gross monthly income"
              type="number"
              min={0}
              step={1000}
              value={input.monthlyIncome}
              onChange={(e) => set('monthlyIncome', Number(e.target.value))}
            />
            <Input
              label="Total monthly EMIs"
              type="number"
              min={0}
              step={1000}
              value={input.monthlyEmi}
              onChange={(e) => set('monthlyEmi', Number(e.target.value))}
            />
          </div>

          <div className="flex items-center justify-between pt-1">
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {formatINR(input.monthlyEmi)} of {formatINR(input.monthlyIncome)} committed each month
            </p>
            <button
              type="button"
              onClick={() => setInput(defaultCreditScoreInput)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-100/80 dark:bg-[#06111F]/60 border border-slate-200 dark:border-slate-800">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
            Nothing you enter here leaves your browser. This tool runs entirely on your device, makes
            no enquiry against your credit file, and has no effect on your real score.
          </p>
        </div>
      </GlassCard>

      {/* ---------------- Result ---------------- */}
      <div className="lg:col-span-5 space-y-6">
        <GlassCard hoverEffect={false} className="p-6 sm:p-8 text-center">
          <svg
            viewBox="0 0 300 175"
            className="w-full max-w-[300px] mx-auto"
            role="img"
            aria-label={`Estimated credit score ${result.score} out of 900, rated ${result.band.label}`}
          >
            {/* Band track */}
            {scoreBands.map((band) => (
              <path
                key={band.label}
                d={arcPath(band.from, band.to)}
                fill="none"
                stroke={band.hex}
                strokeWidth={GAUGE.stroke}
                strokeLinecap="butt"
                opacity={band.label === result.band.label ? 1 : 0.22}
                className="transition-opacity duration-500"
              />
            ))}

            {/* Needle */}
            <line
              x1={GAUGE.cx}
              y1={GAUGE.cy}
              x2={needle.x}
              y2={needle.y}
              stroke={result.band.hex}
              strokeWidth={3}
              strokeLinecap="round"
              className="transition-all duration-700 ease-out"
            />
            <circle cx={GAUGE.cx} cy={GAUGE.cy} r={7} fill={result.band.hex} />

            <text
              x={GAUGE.cx}
              y={GAUGE.cy - 42}
              textAnchor="middle"
              className="fill-slate-900 dark:fill-white font-display"
              style={{ fontSize: 44, fontWeight: 800 }}
            >
              {result.score}
            </text>
            <text
              x={GAUGE.cx}
              y={GAUGE.cy - 20}
              textAnchor="middle"
              className="fill-slate-500 dark:fill-slate-400"
              style={{ fontSize: 12, letterSpacing: 1 }}
            >
              OF 900
            </text>

            <text x={26} y={166} className="fill-slate-400" style={{ fontSize: 11 }}>
              300
            </text>
            <text x={252} y={166} className="fill-slate-400" style={{ fontSize: 11 }}>
              900
            </text>
          </svg>

          <div className={`mt-2 text-xl font-black font-display ${result.band.tone}`}>
            {result.band.label}
          </div>
          <p className="mt-2 text-sm text-slate-600 dark:text-[#A9BDD1] leading-relaxed">
            {result.band.summary}
          </p>

          <div className="mt-6 space-y-3 text-left">
            {result.factors.map((factor) => (
              <div key={factor.key}>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-semibold text-slate-700 dark:text-slate-200">
                    {factor.label}
                    <span className="ml-1.5 font-mono text-[10px] text-slate-400">
                      {Math.round(factor.weight * 100)}%
                    </span>
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">{factor.detail}</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: `${Math.round(factor.performance * 100)}%`,
                      backgroundColor: result.band.hex
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {result.weakest && (
          <GlassCard hoverEffect={false} className="p-5 border-amber-500/30">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display">
                  Biggest opportunity: {result.weakest.label}
                </h4>
                <p className="mt-1 text-xs text-slate-600 dark:text-[#A9BDD1] leading-relaxed">
                  {result.weakest.advice}
                </p>
              </div>
            </div>
          </GlassCard>
        )}

        <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
          <Button
            variant="glow"
            className="w-full justify-center"
            onClick={() => onOpenApply?.('loan')}
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            See Loans You Can Get
          </Button>
          <Link to="/distributors" className="w-full">
            <Button
              variant="secondary"
              className="w-full justify-center"
              leftIcon={<TrendingUp className="w-4 h-4 text-sky-600 dark:text-cyan-400" />}
            >
              Talk to a Local Advisor
            </Button>
          </Link>
        </div>

        <div className="flex items-start gap-2.5 px-1">
          <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
          <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
            Indicative estimate only. ELOANSS is not a credit bureau. Your official CIBIL score is
            issued by TransUnion CIBIL and may differ from this figure.
          </p>
        </div>
      </div>
    </div>
  );
};
