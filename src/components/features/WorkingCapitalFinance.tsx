import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ChevronRight, Briefcase } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { workingCapitalItems } from '../../data/workingCapital';
import { loanProducts } from '../../data/loans';

interface WorkingCapitalFinanceProps {
  onOpenApply?: (type: 'loan' | 'insurance', slug?: string) => void;
}

/** Only offer an action for a slug that exists in the catalogue. */
const isRealProduct = (slug?: string) => !!slug && loanProducts.some((p) => p.slug === slug);

export const WorkingCapitalFinance: React.FC<WorkingCapitalFinanceProps> = ({ onOpenApply }) => (
  <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <SectionHeading
      badge="WORKING CAPITAL & BUSINESS FINANCE"
      title="Funding That Moves"
      highlight="At Business Speed"
      description="Fifteen facility types covering day-to-day liquidity, expansion capital and secured structures. Select any one to start an application with it pre-selected."
      align="center"
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
      {workingCapitalItems.map((item) => {
        const body = (
          <>
            <CheckCircle2
              className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <span className="text-sm font-semibold text-slate-800 dark:text-[#E6F1FF] leading-snug flex-1">
              {item.label}
            </span>
          </>
        );

        const shell =
          'flex items-start gap-3 p-4 rounded-xl bg-white/85 dark:bg-[#0B1528]/60 border border-slate-200/90 dark:border-slate-800/80 shadow-xs backdrop-blur-md transition-colors';

        if (onOpenApply && isRealProduct(item.slug)) {
          return (
            <button
              key={item.label}
              type="button"
              onClick={() => onOpenApply('loan', item.slug)}
              aria-label={`Apply for ${item.label}`}
              className={`${shell} group/item text-left w-full cursor-pointer hover:border-sky-400/60 dark:hover:border-cyan-400/50 hover:bg-white dark:hover:bg-[#0D2138]/80`}
            >
              {body}
              <ChevronRight
                className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover/item:text-sky-600 dark:group-hover/item:text-cyan-400 group-hover/item:translate-x-0.5 shrink-0 mt-0.5 transition-all"
                aria-hidden="true"
              />
            </button>
          );
        }

        return (
          <div key={item.label} className={shell}>
            {body}
          </div>
        );
      })}
    </div>

    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
      {onOpenApply && (
        <Button
          variant="glow"
          size="lg"
          onClick={() => onOpenApply('loan', 'business-loan')}
          rightIcon={<ArrowRight className="w-4 h-4" />}
        >
          Discuss Business Funding
        </Button>
      )}
      <Link to="/trade-banking">
        <Button
          variant="secondary"
          size="lg"
          leftIcon={<Briefcase className="w-4 h-4 text-sky-600 dark:text-cyan-400" />}
        >
          Trade & Banking Facilities
        </Button>
      </Link>
    </div>

    <p className="mt-8 text-center text-[11px] text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
      Facility availability, limits and pricing are set by the lender and remain subject to credit
      assessment, security cover and documentation. CGTMSE coverage is subject to scheme eligibility
      and guarantee approval.
    </p>
  </section>
);
