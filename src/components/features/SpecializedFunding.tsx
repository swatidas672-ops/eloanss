import React from 'react';
import {
  CheckCircle2,
  Sprout,
  Home,
  Building2,
  Factory,
  Trees,
  Landmark,
  ArrowRight
} from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import {
  fundingGroups,
  type FundingGroup,
  type FundingIcon,
  type FundingList
} from '../../data/specializedFunding';

interface SpecializedFundingProps {
  onOpenApply?: (type: 'loan' | 'insurance', slug?: string) => void;
}

const iconFor = (key: FundingIcon) => {
  const cls = 'w-4 h-4';
  switch (key) {
    case 'sprout':
      return <Sprout className={cls} />;
    case 'home':
      return <Home className={cls} />;
    case 'building':
      return <Building2 className={cls} />;
    case 'factory':
      return <Factory className={cls} />;
    case 'land':
      return <Trees className={cls} />;
    case 'rental':
      return <Landmark className={cls} />;
    default:
      return <CheckCircle2 className={cls} />;
  }
};

const ItemList: React.FC<{ list: FundingList }> = ({ list }) => (
  <div>
    {list.heading && (
      <h4 className="text-xs font-mono uppercase tracking-wider text-sky-700 dark:text-cyan-300 font-bold mb-3">
        {list.heading}
      </h4>
    )}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
      {list.items.map((item) => (
        <div
          key={item.label}
          className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 dark:bg-[#0B1528]/60 border border-slate-200/90 dark:border-slate-800/80 shadow-xs backdrop-blur-md hover:border-sky-400/50 dark:hover:border-cyan-400/40 transition-colors"
        >
          <span className="text-sky-600 dark:text-cyan-400 shrink-0 mt-0.5" aria-hidden="true">
            {iconFor(item.icon ?? list.icon)}
          </span>
          <span className="text-[13px] font-medium text-slate-800 dark:text-[#E6F1FF] leading-snug">
            {item.label}
            {item.qualified && (
              <span className="text-sky-600 dark:text-cyan-400" aria-hidden="true">
                *
              </span>
            )}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const Group: React.FC<{ group: FundingGroup; flip: boolean }> = ({ group, flip }) => (
  <div id={group.id} className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
    {/* Image column - order flips per group so the page alternates */}
    <div className={`lg:col-span-4 ${flip ? 'lg:order-2' : ''}`}>
      <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 dark:border-cyan-400/25 shadow-xl group lg:sticky lg:top-24">
        <img
          src={group.image.src}
          alt={group.image.alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-56 lg:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 right-4">
          <Badge variant="cyan">{group.badge}</Badge>
        </div>
      </div>
    </div>

    <div className={`lg:col-span-8 ${flip ? 'lg:order-1' : ''}`}>
      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-display leading-tight">
        {group.title}{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#06B6D4] dark:from-[#0EA5FF] dark:via-[#22D3EE] dark:to-[#38BDF8]">
          {group.highlight}
        </span>
      </h3>
      <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-[#A9BDD1] leading-relaxed max-w-2xl">
        {group.description}
      </p>

      <div className="mt-6 space-y-6">
        {group.lists.map((list, i) => (
          <ItemList key={list.heading ?? i} list={list} />
        ))}
      </div>
    </div>
  </div>
);

export const SpecializedFunding: React.FC<SpecializedFundingProps> = ({ onOpenApply }) => (
  <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 border-t border-slate-200 dark:border-slate-800/80">
    <div className="space-y-20 sm:space-y-24">
      {fundingGroups.map((group, idx) => (
        <Group key={group.id} group={group} flip={idx % 2 === 1} />
      ))}
    </div>

    <div className="mt-16 text-center">
      {onOpenApply && (
        <Button
          variant="glow"
          size="lg"
          onClick={() => onOpenApply('loan', 'business-loan')}
          rightIcon={<ArrowRight className="w-4 h-4" />}
        >
          Discuss My Business Profile
        </Button>
      )}
      <p className="mt-6 text-[11px] text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
        *Loan-to-value structures, eligible sectors and facility types vary by lender and are subject
        to their credit policy, property valuation and documentation. Listing a sector here indicates
        we facilitate funding for it, not that approval is assured.
      </p>
    </div>
  </section>
);
