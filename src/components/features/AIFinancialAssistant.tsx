import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Sparkles, 
  Send, 
  X, 
  ShieldCheck, 
  Loader2 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ChatMessage } from '../../types';
import { answerQuestion, type AssistantAction } from '../../data/assistantEngine';

interface AIFinancialAssistantProps {
  onNavigateTo?: (path: string) => void;
  onOpenApply?: (type: 'loan' | 'insurance', slug?: string) => void;
}

export const AIFinancialAssistant: React.FC<AIFinancialAssistantProps> = ({
  onNavigateTo,
  onOpenApply
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'assistant',
      text: "Hello! I'm your ELOANSS AI Financial Assistant. I can evaluate your profile, recommend optimal loan products, compare insurance tiers, or match you with a local distributor in your city. How can I guide you today?",
      timestamp: 'Just now',
      suggestions: [
        'What loan is best for me?',
        'Compare home loans',
        'Find insurance',
        'Find a distributor',
        'What documents do I need?'
      ]
    }
  ]);
  const [actionsByMsg, setActionsByMsg] = useState<Record<string, AssistantAction[]>>({});
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputVal.trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: 'Just now'
    };

    const history = messages
      .slice(-6)
      .map((m) => ({ role: m.sender === 'user' ? 'user' : 'assistant', text: m.text }));

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputVal('');
    setIsTyping(true);

    // The catalogue engine still supplies the action chips and follow-ups, so
    // navigation and Apply keep working whichever source answers.
    const local = answerQuestion(query);

    const post = async (): Promise<string | null> => {
      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ message: query, history })
        });
        if (!res.ok) return null;
        const data = (await res.json()) as { text?: string };
        return data.text?.trim() || null;
      } catch {
        // No API route in local dev, or the model is unreachable.
        return null;
      }
    };

    post().then((remote) => {
      const id = `assistant-${Date.now()}`;
      setMessages((prev) => [
        ...prev,
        {
          id,
          sender: 'assistant',
          text: remote ?? local.text,
          timestamp: 'Just now',
          suggestions: local.suggestions
        }
      ]);
      setActionsByMsg((prev) => ({ ...prev, [id]: local.actions }));
      setIsTyping(false);
    });
  };

  // Action chips navigate or open the apply modal instead of re-querying.
  const runAction = (action: AssistantAction) => {
    if (action.apply) {
      onOpenApply?.(action.apply.type, action.apply.slug);
      setIsOpen(false);
      return;
    }
    if (action.navigateTo) {
      if (onNavigateTo) {
        onNavigateTo(action.navigateTo);
      } else {
        window.location.assign(action.navigateTo);
      }
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Floating Prompt Pill */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <button
            id="ai-assistant-toggle-button"
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-3 p-3.5 sm:px-5 sm:py-3.5 rounded-2xl bg-white/95 dark:bg-[#081A2D]/90 border border-slate-200 dark:border-[#0EA5FF]/50 shadow-xl dark:shadow-[0_0_30px_rgba(14,165,255,0.35)] backdrop-blur-xl text-slate-800 dark:text-white hover:border-sky-500 dark:hover:border-cyan-400 hover:shadow-2xl transition-all cursor-pointer"
          >
            {/* Pulsing indicator */}
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 dark:bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-gradient-to-tr from-sky-500 to-cyan-400" />
            </span>

            <div className="text-left hidden sm:block">
              <div className="text-xs font-mono text-sky-600 dark:text-cyan-400 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI FINANCIAL COMPANION</span>
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">Ask Anything →</div>
            </div>

            <div className="sm:hidden p-1 rounded-lg bg-sky-500/10 dark:bg-cyan-500/20 text-sky-600 dark:text-cyan-400">
              <Bot className="w-6 h-6" />
            </div>
          </button>
        </motion.div>
      )}

      {/* Floating AI Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-[420px] h-[580px] max-h-[85vh] rounded-2xl bg-white/95 dark:bg-[#06111F]/95 border border-slate-200 dark:border-[#0EA5FF]/40 shadow-2xl backdrop-blur-2xl z-50 flex flex-col overflow-hidden text-left"
          >
            {/* Terminal Header */}
            <div className="p-4 bg-slate-100 dark:bg-[#081A2D] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 to-cyan-500 text-white flex items-center justify-center shadow-md">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display flex items-center gap-1.5">
                    ELOANSS AI Terminal
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                  </h4>
                  <p className="text-[10px] text-sky-600 dark:text-cyan-400 font-mono font-medium">Neural Guidance Engine v2035</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-[#A9BDD1] dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Conversation Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 ${
                      msg.sender === 'user'
                        ? 'bg-sky-600 dark:bg-gradient-to-r dark:from-[#0EA5FF] dark:to-[#168BFF] text-white rounded-br-none shadow-md'
                        : 'bg-slate-100 dark:bg-[#0A192B]/90 border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-[#E6F1FF] rounded-bl-none shadow-xs'
                    }`}
                  >
                    <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
                  </div>

                  <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 px-1">{msg.timestamp}</span>

                  {/* Action chips - these navigate or open the apply modal */}
                  {actionsByMsg[msg.id] && actionsByMsg[msg.id].length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {actionsByMsg[msg.id].map((action, i) => (
                        <button
                          key={i}
                          onClick={() => runAction(action)}
                          className="px-2.5 py-1 rounded-full bg-sky-600 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-[#0EA5FF] text-white hover:opacity-90 transition-all text-[11px] font-semibold cursor-pointer shadow-xs"
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Follow-up questions - these ask the assistant again */}
                  {msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {msg.suggestions.map((sug, i) => (
                        <button
                          key={i}
                          onClick={() => handleSend(sug)}
                          className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-[#0D2138] border border-slate-200 dark:border-cyan-500/30 text-sky-700 dark:text-cyan-300 hover:bg-sky-50 dark:hover:bg-cyan-500/20 transition-all text-[11px] font-medium cursor-pointer"
                        >
                          {sug}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-sky-600 dark:text-cyan-400 p-2 bg-slate-100 dark:bg-[#0A192B]/80 rounded-xl w-fit border border-slate-200 dark:border-slate-800">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span className="text-[11px] font-mono">Analyzing banking models...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-slate-50 dark:bg-[#081A2D]/90 border-t border-slate-200 dark:border-slate-800">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Ask about loans, documents, rates..."
                  className="flex-grow rounded-xl bg-white dark:bg-[#06111F] border border-slate-300 dark:border-slate-700 px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500 dark:focus:border-cyan-400 transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputVal.trim() || isTyping}
                  className="p-2.5 rounded-xl bg-sky-600 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-[#0EA5FF] text-white hover:opacity-90 disabled:opacity-40 transition-all shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 px-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-sky-600 dark:text-cyan-400" />
                  <span>Encrypted session</span>
                </span>
                <span>Powered by ELOANSS AI</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
