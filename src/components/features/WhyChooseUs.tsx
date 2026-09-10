import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { whyChooseUs } from '../../data/whyChooseUs';

export const WhyChooseUs: React.FC = () => (
  <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
    <SectionHeading
      badge="WHY CHOOSE US?"
      title="What You Get"
      highlight="Working With Us"
      description="Practical advantages that decide whether a facility gets sanctioned, on what terms, and how quickly."
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 text-left">
      {whyChooseUs.map((point) => (
        <div
          key={point.label}
          className="flex items-center gap-3.5 p-5 rounded-2xl bg-white/90 dark:bg-[#0A192B]/70 border border-slate-200/90 dark:border-[#64B4FF]/15 shadow-xs backdrop-blur-xl hover:border-sky-400/50 dark:hover:border-[#0EA5FF]/40 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-cyan-400 text-white flex items-center justify-center shrink-0 shadow-md">
            <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
          </div>
          <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white font-display leading-snug">
            {point.label}
            {point.qualified && (
              <span className="text-sky-600 dark:text-cyan-400" aria-hidden="true">
                *
              </span>
            )}
          </span>
        </div>
      ))}
    </div>

    <p className="mt-8 text-[11px] text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
      *Pricing and turnaround times are indicative, vary by lender and applicant profile, and are
      not guaranteed.
    </p>
  </section>
);
