import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: 'none' | 'blue' | 'cyan' | 'purple';
  onClick?: () => void;
  id?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  glow = 'none',
  onClick,
  id
}) => {
  const glowStyles = {
    none: '',
    blue: 'hover:shadow-[0_8px_30px_rgba(14,165,255,0.2)] hover:border-sky-500/40 dark:hover:border-[#0EA5FF]/40',
    cyan: 'hover:shadow-[0_8px_30px_rgba(34,211,238,0.2)] hover:border-cyan-500/40 dark:hover:border-[#22D3EE]/40',
    purple: 'hover:shadow-[0_8px_30px_rgba(99,102,241,0.2)] hover:border-indigo-500/40 dark:hover:border-[#6366F1]/40'
  };

  return (
    <div
      id={id}
      onClick={onClick}
      className={`relative rounded-2xl bg-white/95 dark:bg-[#0A192B]/70 backdrop-blur-xl border border-slate-200/90 dark:border-[#64B4FF]/15 text-slate-800 dark:text-[#E6F1FF] shadow-xs dark:shadow-none transition-all duration-300 ${
        hoverEffect
          ? 'hover:bg-white dark:hover:bg-[#0D2138]/85 hover:border-sky-400/40 dark:hover:border-[#0EA5FF]/35 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[0_12px_30px_-10px_rgba(14,165,255,0.2)]'
          : ''
      } ${glowStyles[glow]} ${className}`}
    >
      {/* Corner subtle highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0EA5FF]/30 to-transparent pointer-events-none rounded-t-2xl" />
      {children}
    </div>
  );
};
