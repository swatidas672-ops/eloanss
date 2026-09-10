import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  FileText,
  Receipt,
  CreditCard,
  Banknote,
  TrendingUp,
  ArrowLeftRight,
  ArrowRight,
  CheckCircle2,
  Clock,
  Building2,
  Percent,
  MapPin
} from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { GlassCard } from '../components/ui/GlassCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import {
  tradeFacilities,
  tradeBankingImages,
  tradeAudience,
  type TradeIcon
} from '../data/tradeBanking';

interface TradeBankingProps {
  onOpenApply: (type: 'loan' | 'insurance', slug?: string) => void;
}

const iconFor = (key: TradeIcon) => {
  const cls = 'w-6 h-6';
  switch (key) {
    case 'guarantee':
      return <ShieldCheck className={cls} />;
    case 'letter':
      return <FileText className={cls} />;
    case 'gst':
      return <Receipt className={cls} />;
    case 'pos':
      return <CreditCard className={cls} />;
    case 'capital':
      return <Banknote className={cls} />;
    case 'enhance':
      return <TrendingUp className={cls} />;
    default:
      return <ArrowLeftRight className={cls} />;
  }
};

export const TradeBanking: React.FC<TradeBankingProps> = ({ onOpenApply }) => (
  <div className="bg-slate-50 dark:bg-[#070D1B] text-slate-800 dark:text-[#E6F1FF] min-h-screen transition-colors duration-300 pb-20">
    <PageHero
      badge="TRADE & BANKING FACILITIES"
      badgeVariant="cyan"
      title="Instruments That Keep"
      highlight="Trade Moving"
      description="Guarantees, letters of credit and turnover-assessed limits arranged across our banking panel, for businesses whose cash is tied up in stock, receivables or contract obligations."
      breadcrumbs={[{ label: 'Trade & Banking' }]}
      image={{
        src: tradeBankingImages.hero.src,
        alt: tradeBankingImages.hero.alt
      }}
      stats={[
        { label: 'Facility Types', value: '7 Products', subtext: 'Fund and non-fund based', icon: <Building2 className="w-4 h-4" /> },
        { label: 'Assessment Basis', value: 'GST & POS', subtext: 'Turnover-led underwriting', icon: <Receipt className="w-4 h-4" /> },
        { label: 'Typical Sanction', value: '7-15 Days', subtext: 'Once documents are complete', icon: <Clock className="w-4 h-4" /> },
        { label: 'Takeover Pricing', value: 'From 9.0%', subtext: 'Subject to lender policy', icon: <Percent className="w-4 h-4" /> }
      ]}
      primaryAction={{
        label: 'Discuss a Facility',
        onClick: () => onOpenApply('loan', 'od-loan')
      }}
      secondaryAction={{
        label: 'Explore Business Loans',
        href: '/loans'
      }}
    />

    {/* Facilities */}
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
      <SectionHeading
        badge="WHAT WE ARRANGE"
        title="Seven Facilities"
        highlight="Across Our Banking Panel"
        description="Fund-based and non-fund-based limits. Select any facility to start an application with it pre-selected."
        align="center"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tradeFacilities.map((facility) => (
          <GlassCard key={facility.id} hoverEffect glow="cyan" className="group overflow-hidden flex flex-col h-full">
            {/* Photo banner with the icon badge straddling its lower edge */}
            <div className="relative">
              <img
                src={facility.image.src}
                alt={facility.image.alt}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-40 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500 to-cyan-400 text-white flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-[#0A192B]">
                {iconFor(facility.icon)}
              </div>
            </div>

            <div className="p-6 pt-10 flex flex-col flex-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display leading-snug">
              {facility.name}
            </h3>

            <p className="mt-2.5 text-sm text-slate-600 dark:text-[#A9BDD1] leading-relaxed flex-1">
              {facility.description}
            </p>

            <button
              type="button"
              onClick={() => onOpenApply('loan', facility.slug)}
              className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800/80 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 dark:text-cyan-300 hover:text-sky-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Enquire about {facility.name.replace(/\s*\(.*\)/, '')}
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </button>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>

    {/* Who it suits */}
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 border-t border-slate-200 dark:border-slate-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 dark:border-cyan-400/25 shadow-xl group">
            <img
              src={tradeBankingImages.workingCapital.src}
              alt={tradeBankingImages.workingCapital.alt}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-64 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4">
              <Badge variant="cyan">WORKING CAPITAL</Badge>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-display leading-tight">
            Built For Businesses Whose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#06B6D4] dark:from-[#0EA5FF] dark:via-[#22D3EE] dark:to-[#38BDF8]">
              Cash Is Already Working
            </span>
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-[#A9BDD1] leading-relaxed">
            These facilities exist because profitable businesses still run short of liquidity when
            capital sits in stock, receivables or contract obligations.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tradeAudience.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white/80 dark:bg-[#0B1528]/60 border border-slate-200/90 dark:border-slate-800/80 shadow-xs backdrop-blur-md"
              >
                <CheckCircle2
                  className="w-4 h-4 text-sky-600 dark:text-cyan-400 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-[13px] font-medium text-slate-800 dark:text-[#E6F1FF] leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Takeover band */}
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 border-t border-slate-200 dark:border-slate-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-display leading-tight">
            Already Running a Limit?{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#06B6D4] dark:from-[#0EA5FF] dark:via-[#22D3EE] dark:to-[#38BDF8]">
              It May Be Priced Wrong
            </span>
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-[#A9BDD1] leading-relaxed max-w-2xl">
            Facilities sanctioned years ago often carry rates and limits that no longer reflect your
            turnover or credit standing. We compare your existing terms across the panel and handle
            the takeover paperwork if a better structure is available.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button
              variant="glow"
              size="lg"
              onClick={() => onOpenApply('loan', 'business-loan')}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Review My Existing Facility
            </Button>
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
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 dark:border-cyan-400/25 shadow-xl group">
            <img
              src={tradeBankingImages.takeover.src}
              alt={tradeBankingImages.takeover.alt}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-64 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4">
              <Badge variant="cyan">TAKEOVER & BT</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>

    <p className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
      Facility availability, limits, margins and pricing are set by the issuing bank and remain
      subject to its credit policy, security cover and documentation. Sanction timelines are
      indicative. ELOANSS facilitates these applications and does not itself issue guarantees or
      letters of credit.
    </p>
  </div>
);
