import React from 'react';
import { Link } from 'react-router-dom';
import {
  IndianRupee,
  TrendingUp,
  Building2,
  Percent,
  Sprout,
  ArrowRight,
  MapPin
} from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

interface EligibilityIndicatorsProps {
  onOpenApply?: (type: 'loan' | 'insurance', slug?: string) => void;
  /** Drops the section heading and top padding for use inside a modal. */
  compact?: boolean;
}

interface Indicator {
  label: string;
  value: string;
  detail: string;
  icon: React.ReactNode;
  accent: string;
}

/** Edit this array to change what the section shows. */
const indicators: Indicator[] = [
  {
    label: 'Loan Amount',
    value: '₹10 Lakhs – ₹100 Crores',
    detail: 'Retail tickets through to large syndicated facilities.',
    icon: <IndianRupee className="w-5 h-5" />,
    accent: 'from-sky-500 to-cyan-400'
  },
  {
    label: 'Minimum Business Turnover',
    value: '₹60 Lakhs',
    detail: 'Assessed on audited financials or GST returns.',
    icon: <TrendingUp className="w-5 h-5" />,
    accent: 'from-emerald-600 to-emerald-400'
  },
  {
    label: 'Minimum Business Vintage',
    value: '1 Year',
    detail: 'Time your enterprise has been operational and revenue generating.',
    icon: <Building2 className="w-5 h-5" />,
    accent: 'from-indigo-600 to-indigo-400'
  },
  {
    label: 'Rate of Interest',
    value: 'Starting from 8.0% p.a.',
    detail: 'Final rate set by the lender against your credit profile.',
    icon: <Percent className="w-5 h-5" />,
    accent: 'from-blue-600 to-sky-500'
  },
  {
    label: 'Open Plot Funding',
    value: 'Starting from 9.0% p.a.',
    detail: 'Land purchase and plot plus construction facilities.',
    icon: <Sprout className="w-5 h-5" />,
    accent: 'from-teal-600 to-emerald-400'
  }
];

export const EligibilityIndicators: React.FC<EligibilityIndicatorsProps> = ({
  onOpenApply,
  compact = false
}) => (
  <section id={compact ? undefined : 'eligibility'} className={compact ? '' : 'scroll-mt-24 pt-20 sm:pt-24'}>
    {!compact && (
    <SectionHeading
      badge="ELIGIBILITY INDICATORS"
      title="What It Takes"
      highlight="To Qualify"
      description="Indicative thresholds we underwrite against across our lender panel. Meeting them does not guarantee sanction, but it is the band most approved applications fall within."
      align="center"
    />
    )}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
      {indicators.map((item) => (
        <GlassCard key={item.label} hoverEffect glow="cyan" className="p-6 flex flex-col h-full">
          <div
            className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${item.accent} text-white flex items-center justify-center shrink-0 shadow-md mb-4`}
            aria-hidden="true"
          >
            {item.icon}
          </div>

          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {item.label}
            <span className="text-sky-600 dark:text-cyan-400" aria-hidden="true">
              *
            </span>
          </div>

          <div className="mt-1.5 text-lg font-black text-slate-900 dark:text-white font-display leading-tight">
            {item.value}
          </div>

          <p className="mt-2.5 text-xs text-slate-600 dark:text-[#A9BDD1] leading-relaxed flex-1">
            {item.detail}
          </p>
        </GlassCard>
      ))}
    </div>

    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
      {onOpenApply && (
        <Button
          variant="glow"
          size="lg"
          onClick={() => onOpenApply('loan')}
          rightIcon={<ArrowRight className="w-4 h-4" />}
        >
          Check My Eligibility
        </Button>
      )}
      <Link to="/distributors">
        <Button
          variant="secondary"
          size="lg"
          leftIcon={<MapPin className="w-4 h-4 text-sky-600 dark:text-cyan-400" />}
        >
          Talk to a Local Advisor
        </Button>
      </Link>
    </div>

    <p className="mt-8 text-center text-[11px] text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
      *Indicative only. Amounts, turnover and vintage requirements, and rates are set by the
      individual lender and remain subject to their credit assessment, documentation and prevailing
      policy. Figures shown are starting points, not offers.
    </p>
  </section>
);
