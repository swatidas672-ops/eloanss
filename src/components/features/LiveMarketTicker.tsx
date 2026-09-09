import React from 'react';
import { TrendingUp, Activity, ShieldCheck, Zap } from 'lucide-react';

export const LiveMarketTicker: React.FC = () => {
  const tickerItems = [
    { label: 'RBI REPO RATE', value: '6.50%', change: 'Steady', status: 'neutral' },
    { label: 'BENCHMARK HOME LOAN', value: '8.40% p.a.', change: 'Best Tier', status: 'up' },
    { label: '10Y SOVEREIGN G-SEC', value: '7.02%', change: '+0.03 bps', status: 'neutral' },
    { label: 'IRDAI CLAIM SETTLEMENT', value: '99.6%', change: 'Industry Peak', status: 'up' },
    { label: 'DIGITAL SANCTION SPEED', value: '< 4 Hours', change: 'Live SLA', status: 'up' },
    { label: 'DISTRIBUTOR GRID', value: '1,500+ Nodes', change: 'Online', status: 'up' },
    { label: 'GIFT CITY IFSC DESK', value: 'Active', change: 'Cross-Border', status: 'up' },
    { label: 'VAULT ENCRYPTION', value: '256-bit AES', change: 'Compliant', status: 'up' }
  ];

  return (
    <div className="bg-slate-100/90 dark:bg-[#050B16] border-b border-slate-200 dark:border-slate-800/80 py-2 overflow-hidden text-[11px] font-mono text-slate-600 dark:text-slate-300 select-none transition-colors">
      <div className="flex items-center">
        {/* Left static label */}
        <div className="hidden sm:flex items-center gap-1.5 px-4 font-bold text-sky-700 dark:text-cyan-400 shrink-0 border-r border-slate-200 dark:border-slate-800">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>INSTITUTIONAL METRICS</span>
        </div>

        {/* Scrolling Marquee */}
        <div className="flex overflow-x-auto whitespace-nowrap scrollbar-none gap-8 px-4 animate-marquee">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 shrink-0">
              <span className="text-slate-500 dark:text-slate-400 font-semibold">{item.label}:</span>
              <span className="font-bold text-slate-900 dark:text-white">{item.value}</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-sans font-medium">
                {item.change}
              </span>
              <span className="text-slate-300 dark:text-slate-700 ml-2">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
