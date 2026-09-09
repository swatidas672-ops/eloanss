import React, { useState } from 'react';
import { ShieldCheck, Activity } from 'lucide-react';

interface HubNode {
  id: string;
  name: string;
  zone: string;
  activePartners: number;
  x: number; // percentage
  y: number; // percentage
}

const networkNodes: HubNode[] = [
  { id: 'delhi', name: 'Delhi NCR Hub', zone: 'North Node', activePartners: 142, x: 42, y: 28 },
  { id: 'jaipur', name: 'Jaipur Corridor', zone: 'North-West', activePartners: 86, x: 34, y: 36 },
  { id: 'lucknow', name: 'Lucknow Center', zone: 'Central-North', activePartners: 95, x: 54, y: 35 },
  { id: 'ahmedabad', name: 'Ahmedabad IFSC Zone', zone: 'West Node', activePartners: 168, x: 26, y: 48 },
  { id: 'mumbai', name: 'Mumbai BKC Financial Epicenter', zone: 'West Master Hub', activePartners: 320, x: 28, y: 60 },
  { id: 'pune', name: 'Pune Innovation Axis', zone: 'West Node', activePartners: 110, x: 33, y: 64 },
  { id: 'hyderabad', name: 'Hyderabad Cyber Node', zone: 'South-Central', activePartners: 175, x: 47, y: 68 },
  { id: 'bengaluru', name: 'Bengaluru Silicon Corridor', zone: 'South Master Hub', activePartners: 280, x: 44, y: 80 },
  { id: 'chennai', name: 'Chennai Industrial Gate', zone: 'South-East', activePartners: 140, x: 52, y: 82 },
  { id: 'kolkata', name: 'Kolkata Eastern Terminal', zone: 'East Master Hub', activePartners: 115, x: 74, y: 48 }
];

export const IndiaNetworkVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activeHub, setActiveHub] = useState<HubNode>(networkNodes[4]); // Default Mumbai BKC

  return (
    <div className={`relative rounded-2xl bg-white/90 dark:bg-[#06111F]/90 border border-slate-200 dark:border-[#0EA5FF]/25 p-6 backdrop-blur-2xl overflow-hidden shadow-lg ${className}`}>
      {/* Background cyber grid & glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-25 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-sky-500/10 dark:bg-[#0EA5FF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-500/10 dark:bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 dark:bg-cyan-400 animate-ping" />
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-display">
              Pan India Distributor Network
            </h4>
          </div>
          <p className="text-xs text-slate-500 dark:text-[#A9BDD1] mt-0.5">
            500+ Cities • 1,500+ Certified Financial Advisors • Real-time Node Sync
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-[#081A2D] border border-sky-500/20 dark:border-cyan-500/30 text-sky-700 dark:text-cyan-300 text-xs font-mono font-semibold">
          <Activity className="w-3.5 h-3.5 animate-pulse" />
          <span>NETWORK: ACTIVE (99.98%)</span>
        </div>
      </div>

      {/* Interactive Abstract Network Canvas */}
      <div className="relative h-80 sm:h-96 w-full rounded-xl bg-slate-50 dark:bg-[#020817]/80 border border-slate-200 dark:border-slate-800/80 overflow-hidden flex items-center justify-center">
        {/* Abstract connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60 dark:opacity-40">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0EA5FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <line x1="42%" y1="28%" x2="34%" y2="36%" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="42%" y1="28%" x2="54%" y2="35%" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="42%" y1="28%" x2="26%" y2="48%" stroke="url(#lineGrad)" strokeWidth="1.5" />
          <line x1="34%" y1="36%" x2="26%" y2="48%" stroke="url(#lineGrad)" strokeWidth="1.5" />
          <line x1="54%" y1="35%" x2="74%" y2="48%" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="26%" y1="48%" x2="28%" y2="60%" stroke="url(#lineGrad)" strokeWidth="2" />
          <line x1="28%" y1="60%" x2="33%" y2="64%" stroke="url(#lineGrad)" strokeWidth="2" />
          <line x1="28%" y1="60%" x2="47%" y2="68%" stroke="url(#lineGrad)" strokeWidth="2" />
          <line x1="33%" y1="64%" x2="44%" y2="80%" stroke="url(#lineGrad)" strokeWidth="2" />
          <line x1="47%" y1="68%" x2="44%" y2="80%" stroke="url(#lineGrad)" strokeWidth="2" />
          <line x1="47%" y1="68%" x2="52%" y2="82%" stroke="url(#lineGrad)" strokeWidth="1.5" />
          <line x1="44%" y1="80%" x2="52%" y2="82%" stroke="url(#lineGrad)" strokeWidth="2" />
          <line x1="74%" y1="48%" x2="47%" y2="68%" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 4" />
        </svg>

        {/* Nodes */}
        {networkNodes.map((node) => {
          const isSelected = activeHub.id === node.id;
          return (
            <div
              key={node.id}
              onClick={() => setActiveHub(node)}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
            >
              {/* Ping Ring */}
              <div
                className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  isSelected
                    ? 'w-9 h-9 -left-1.5 -top-1.5 bg-sky-500/30 dark:bg-cyan-400/30 animate-ping'
                    : 'w-6 h-6 bg-sky-500/10 dark:bg-[#0EA5FF]/20 group-hover:scale-150'
                }`}
              />

              {/* Core Node Dot */}
              <div
                className={`relative rounded-full transition-all duration-300 border ${
                  isSelected
                    ? 'w-6 h-6 bg-gradient-to-tr from-sky-500 to-cyan-400 border-white shadow-md'
                    : 'w-4 h-4 bg-white dark:bg-[#081A2D] border-sky-500 dark:border-cyan-400/60 group-hover:border-cyan-300'
                }`}
              />

              {/* Micro label */}
              <div
                className={`absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] font-mono transition-all pointer-events-none ${
                  isSelected
                    ? 'text-sky-700 dark:text-cyan-300 font-bold bg-white dark:bg-[#06111F]/90 px-2 py-0.5 rounded border border-sky-400/40 dark:border-cyan-400/40 shadow-lg'
                    : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white hidden sm:block'
                }`}
              >
                {node.name.split(' ')[0]}
              </div>
            </div>
          );
        })}

        {/* Floating Active Node Telemetry Card */}
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-3.5 rounded-xl bg-white/95 dark:bg-[#081A2D]/90 border border-slate-200 dark:border-cyan-400/40 backdrop-blur-xl shadow-xl z-30">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-sky-600 dark:text-cyan-400 font-bold">{activeHub.zone}</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified
            </span>
          </div>
          <h5 className="text-sm font-bold text-slate-900 dark:text-white font-display mt-1">{activeHub.name}</h5>
          <div className="mt-2 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-200 dark:border-slate-700/60">
            <span>Accredited Distributors:</span>
            <span className="font-bold text-sky-600 dark:text-cyan-300">{activeHub.activePartners}+ Certified</span>
          </div>
        </div>
      </div>
    </div>
  );
};
