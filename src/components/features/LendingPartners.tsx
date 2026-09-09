import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Building2, MapPin, Zap, ArrowRight, BadgeCheck } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { lendingPartners, partnerStats, type LendingPartner } from '../../data/lendingPartners';
import { loanProducts } from '../../data/loans';

interface LendingPartnersProps {
  /** Opens the global application modal, pre-set to a product. */
  onOpenApply?: (type: 'loan' | 'insurance', slug?: string) => void;
}

/** Palette drawn from the existing design tokens so cards stay on-brand. */
const accentStyles: Record<LendingPartner['accent'], { tile: string; chip: string }> = {
  sky: {
    tile: 'from-sky-500 to-sky-400',
    chip: 'text-sky-700 dark:text-sky-300 border-sky-500/25 bg-sky-500/10 hover:bg-sky-500/20 hover:border-sky-500/50'
  },
  cyan: {
    tile: 'from-cyan-500 to-cyan-400',
    chip: 'text-cyan-700 dark:text-cyan-300 border-cyan-500/25 bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-500/50'
  },
  blue: {
    tile: 'from-blue-600 to-sky-500',
    chip: 'text-blue-700 dark:text-blue-300 border-blue-500/25 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-500/50'
  },
  indigo: {
    tile: 'from-indigo-600 to-indigo-400',
    chip: 'text-indigo-700 dark:text-indigo-300 border-indigo-500/25 bg-indigo-500/10 hover:bg-indigo-500/20 hover:border-indigo-500/50'
  },
  emerald: {
    tile: 'from-emerald-600 to-emerald-400',
    chip: 'text-emerald-700 dark:text-emerald-300 border-emerald-500/25 bg-emerald-500/10 hover:bg-emerald-500/20 hover:border-emerald-500/50'
  },
  amber: {
    tile: 'from-amber-500 to-orange-400',
    chip: 'text-amber-700 dark:text-amber-300 border-amber-500/25 bg-amber-500/10 hover:bg-amber-500/20 hover:border-amber-500/50'
  },
  purple: {
    tile: 'from-purple-600 to-fuchsia-500',
    chip: 'text-purple-700 dark:text-purple-300 border-purple-500/25 bg-purple-500/10 hover:bg-purple-500/20 hover:border-purple-500/50'
  },
  teal: {
    tile: 'from-teal-600 to-emerald-400',
    chip: 'text-teal-700 dark:text-teal-300 border-teal-500/25 bg-teal-500/10 hover:bg-teal-500/20 hover:border-teal-500/50'
  }
};

/** Resolve a partner's category slugs against the real loan catalogue. */
const resolveCategories = (slugs: string[]) =>
  slugs
    .map((slug) => loanProducts.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

/**
 * Shows the official logo when one is supplied. Falls back to the monogram if
 * no file is set, or if the file 404s - so a missing asset can never leave an
 * empty box on the card.
 */
const PartnerMark: React.FC<{ partner: LendingPartner; tile: string }> = ({ partner, tile }) => {
  const [failed, setFailed] = useState(false);

  if (partner.logo && !failed) {
    return (
      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 shadow-md overflow-hidden p-2">
        <img
          src={partner.logo}
          alt={partner.name + ' logo'}
          onError={() => setFailed(true)}
          className="w-8 h-8 object-contain"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${tile} text-white flex items-center justify-center shrink-0 shadow-md font-display font-black text-lg tracking-tight`}
      aria-hidden="true"
    >
      {partner.monogram}
    </div>
  );
};

const PartnerCard: React.FC<{
  partner: LendingPartner;
  onOpenApply?: LendingPartnersProps['onOpenApply'];
}> = ({ partner, onOpenApply }) => {
  const accent = accentStyles[partner.accent];
  const products = resolveCategories(partner.categories);
  const headline = products[0];

  return (
    <GlassCard hoverEffect glow="cyan" className="group p-6 flex flex-col h-full">
      <div className="flex items-start gap-4">
        <PartnerMark partner={partner} tile={accent.tile} />

        <div className="min-w-0 flex-1">
          <h3 className="text-base font-bold text-slate-900 dark:text-white font-display leading-snug">
            {partner.name}
          </h3>
          <div className="mt-1 flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <BadgeCheck className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400 shrink-0" aria-hidden="true" />
            <span>{partner.type}</span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-600 dark:text-[#A9BDD1] leading-relaxed flex-1">
        {partner.highlight}
      </p>

      {/* Each chip opens that product's real detail page */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {products.map((product) => (
          <Link
            key={product.slug}
            to={`/loans/${product.slug}`}
            aria-label={`${product.name} with ${partner.name}`}
            className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border transition-colors cursor-pointer ${accent.chip}`}
          >
            {product.name}
          </Link>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-end justify-between gap-3">
        <div className="min-w-0">
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
            Starting Rate
          </div>
          <div className="text-sm font-bold text-slate-900 dark:text-white font-display truncate">
            {partner.startingRate}
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {onOpenApply && headline && (
            <button
              type="button"
              onClick={() => onOpenApply('loan', headline.slug)}
              className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-sky-700 dark:hover:text-cyan-300 transition-colors cursor-pointer"
            >
              Apply
            </button>
          )}

          <Link
            to={headline ? `/loans/${headline.slug}` : '/loans'}
            aria-label={`Explore loan options with ${partner.name}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 dark:text-cyan-300 hover:text-sky-900 dark:hover:text-white transition-colors"
          >
            Explore
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </GlassCard>
  );
};

export const LendingPartners: React.FC<LendingPartnersProps> = ({ onOpenApply }) => {
  const trustMarkers = [
    { label: 'Lender Network', value: partnerStats.totalLenders, icon: <Building2 className="w-4 h-4" /> },
    { label: 'Compliance', value: partnerStats.regulator, icon: <ShieldCheck className="w-4 h-4" /> },
    { label: 'City Coverage', value: partnerStats.cities, icon: <MapPin className="w-4 h-4" /> },
    { label: 'Typical Sanction', value: partnerStats.sanctionSpeed, icon: <Zap className="w-4 h-4" /> }
  ];

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="OUR LENDING PARTNERS"
        title="Backed by India's"
        highlight="Leading Banks & NBFCs"
        description="We place every application with the institution most likely to approve it on the best terms, drawing on a panel of regulated banks and non-banking financial companies."
        align="center"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
        {trustMarkers.map((marker) => (
          <div
            key={marker.label}
            className="p-4 rounded-xl bg-white/75 dark:bg-[#0B1528]/60 border border-slate-200/90 dark:border-slate-800/80 shadow-xs backdrop-blur-md text-left"
          >
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
              <span>{marker.label}</span>
              <span className="text-sky-600 dark:text-cyan-400">{marker.icon}</span>
            </div>
            <div className="mt-1.5 text-lg sm:text-2xl font-black text-slate-900 dark:text-white font-display">
              {marker.value}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
        {lendingPartners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} onOpenApply={onOpenApply} />
        ))}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link to="/loans">
          <Button variant="glow" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Explore Loan Options
          </Button>
        </Link>
        <Link to="/distributors">
          <Button variant="secondary" size="lg" leftIcon={<MapPin className="w-4 h-4 text-sky-600 dark:text-cyan-400" />}>
            Talk to a Local Advisor
          </Button>
        </Link>
      </div>

      <p className="mt-8 text-center text-[11px] text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
        Lender names are shown for illustration of the categories we facilitate. All trademarks belong
        to their respective owners. Rates are indicative, set by the lender, and subject to their
        credit assessment.
      </p>
    </section>
  );
};
