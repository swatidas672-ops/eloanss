import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl select-none cursor-pointer overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold"
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#0284C7] hover:from-[#0EA5E9] hover:to-[#38BDF8] dark:from-[#0EA5FF] dark:to-[#168BFF] dark:hover:from-[#38BDF8] dark:hover:to-[#0EA5FF] text-white shadow-md hover:shadow-lg shadow-sky-500/20 border border-sky-400/30 font-semibold",
    secondary: "bg-white text-slate-800 hover:bg-slate-50 border border-slate-300/90 hover:border-sky-400 shadow-xs dark:bg-[#0A192B]/80 dark:text-[#E6F1FF] dark:hover:bg-[#0D2138] dark:border-sky-500/20 dark:hover:border-sky-400/40 dark:hover:text-white backdrop-blur-md",
    outline: "bg-transparent text-sky-600 dark:text-sky-400 border border-sky-500/30 hover:bg-sky-500/10 hover:border-sky-500 hover:text-sky-700 dark:hover:text-sky-300",
    glass: "bg-white/80 dark:bg-[#06111F]/60 text-slate-800 dark:text-white backdrop-blur-xl border border-slate-200 dark:border-white/10 hover:border-sky-500/40 hover:bg-white dark:hover:bg-[#0A192B]/70 shadow-xs",
    glow: "bg-gradient-to-r from-[#06B6D4] to-[#0EA5FF] text-white shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_30px_rgba(14,165,255,0.55)] border border-cyan-300/40 font-semibold"
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Light sheen overlay */}
      <span className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
      
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        leftIcon && <span className="shrink-0">{leftIcon}</span>
      )}
      
      <span>{children}</span>
      
      {!isLoading && rightIcon && (
        <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">{rightIcon}</span>
      )}
    </button>
  );
};
