import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options?: { value: string; label: string }[];
  placeholder?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({
  label,
  error,
  options = [],
  placeholder,
  children,
  className = '',
  id,
  ...props
}, ref) => {
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={selectId} className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-[#A9BDD1] mb-2">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        <select
          id={selectId}
          ref={ref}
          className={`w-full appearance-none rounded-xl bg-white dark:bg-[#06111F]/80 border border-slate-300 dark:border-slate-700/80 px-4 py-2.5 pr-10 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 dark:focus:border-[#0EA5FF] focus:ring-2 focus:ring-sky-500/20 dark:focus:ring-[#0EA5FF]/20 transition-all cursor-pointer shadow-xs ${
            error ? 'border-red-500/80' : ''
          } ${className}`}
          {...props}
        >
          {placeholder && <option value="" disabled className="bg-white dark:bg-[#081A2D] text-slate-400">{placeholder}</option>}
          {options.length > 0
            ? options.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-white dark:bg-[#081A2D] text-slate-900 dark:text-white">
                  {opt.label}
                </option>
              ))
            : children}
        </select>
        <div className="absolute right-3.5 pointer-events-none text-slate-400 dark:text-[#A9BDD1]">
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
      {error && <p className="mt-1.5 text-xs text-red-500 dark:text-red-400">{error}</p>}
    </div>
  );
});

Select.displayName = 'Select';
