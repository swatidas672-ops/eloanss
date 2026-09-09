import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'blue' | 'emerald' | 'purple' | 'amber' | 'neutral';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  className = '',
  dot = true
}) => {
  const variantStyles = {
    cyan: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/30 shadow-xs',
    blue: 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/30 shadow-xs',
    emerald: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30 shadow-xs',
    purple: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/30 shadow-xs',
    amber: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30 shadow-xs',
    neutral: 'bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/60'
  };

  const dotColors = {
    cyan: 'bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]',
    blue: 'bg-sky-500 dark:bg-sky-400 shadow-[0_0_8px_rgba(14,165,255,0.8)]',
    emerald: 'bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]',
    purple: 'bg-purple-500 dark:bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]',
    amber: 'bg-amber-500 dark:bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]',
    neutral: 'bg-slate-400'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border backdrop-blur-md whitespace-nowrap ${variantStyles[variant]} ${className}`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]}`} />}
      {children}
    </span>
  );
};
