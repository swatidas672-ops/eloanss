import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { insuranceProducts } from '../data/insurance';
import { insuranceDetailHeroImages, heroImages } from '../data/heroImages';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';
import { PageHero } from '../components/layout/PageHero';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Calculator,
  Percent,
  TrendingUp,
  FileCheck
} from 'lucide-react';

interface InsuranceDetailsProps {
  onOpenApply: (type: 'insurance', slug?: string) => void;
}

export const InsuranceDetails: React.FC<InsuranceDetailsProps> = ({ onOpenApply }) => {
  const { insuranceSlug } = useParams<{ insuranceSlug: string }>();

  // Find product by slug
  const product = insuranceProducts.find((i) => i.slug === insuranceSlug) || insuranceProducts[0];

  const heroImg = insuranceDetailHeroImages[product.slug] || {
    src: heroImages.insurance.src,
    alt: product.name,
    tag: 'IRDAI REGULATED',
    title: product.name,
    subtitle: product.tagline
  };

  return (
    <div className="bg-slate-50 dark:bg-[#070D1B] text-slate-800 dark:text-[#E6F1FF] min-h-screen transition-colors duration-300 pb-20">
      {/* Standardized Page Hero with Stunning Picture */}
      <PageHero
        badge={`${product.category.toUpperCase()} UNDERWRITING`}
        badgeVariant="cyan"
        title={product.name}
        highlight={product.tagline}
        description={product.longDesc}
        breadcrumbs={[
          { label: 'Insurance', href: '/insurance' },
          { label: product.name }
        ]}
        image={{
          src: heroImg.src,
          alt: heroImg.alt,
          overlayTag: heroImg.tag,
          floatingBadge: {
            title: heroImg.title,
            subtitle: heroImg.subtitle
          }
        }}
        stats={[
          { label: 'Sum Insured', value: product.coverageUpTo, subtext: 'Maximum coverage shield', icon: <ShieldCheck className="w-4 h-4" /> },
          { label: 'Starting Premium', value: product.startingPremium, subtext: 'Annual premium rate', icon: <Percent className="w-4 h-4" /> },
          { label: 'Claim Ratio (CSR)', value: product.claimSettlementRatio, subtext: 'Audited settlement rate', icon: <TrendingUp className="w-4 h-4" /> },
          { label: 'Issuance Speed', value: '5 Minutes', subtext: 'Digital instant policy', icon: <Zap className="w-4 h-4" /> }
        ]}
        primaryAction={{
          label: `Get Quote for ${product.name}`,
          onClick: () => onOpenApply('insurance', product.slug)
        }}
        secondaryAction={{
          label: 'Coverage Need Estimator',
          href: '/calculator',
          icon: <Calculator className="w-4 h-4 text-cyan-500" />
        }}
      />

      {/* Assurance Matrix Banner */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-6 relative z-20 mb-12">
        <div className="p-6 rounded-2xl bg-white/95 dark:bg-[#081A2D]/90 border border-slate-200/90 dark:border-[#0EA5FF]/30 backdrop-blur-2xl shadow-lg grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white block">Instant Digital Issuance</span>
              <span className="text-slate-500 dark:text-[#A9BDD1]">Policy in 5 minutes</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white block">Cashless Network</span>
              <span className="text-slate-500 dark:text-[#A9BDD1]">10,000+ facilities</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-500/15 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
              <FileCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white block">Tax Deductions</span>
              <span className="text-slate-500 dark:text-[#A9BDD1]">Section 80D / 80C</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white block">24/7 Claim Concierge</span>
              <span className="text-slate-500 dark:text-[#A9BDD1]">Distributor assistance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Inclusions & Highlights */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          <GlassCard className="p-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-sky-600 dark:text-cyan-400" />
              <span>Recommended Profile & Eligibility</span>
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-600 dark:text-slate-300">
              {product.suitableFor.map((hl, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-cyan-400 shrink-0 mt-1" />
                  <span className="leading-relaxed">{hl}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              <span>Key Advantages</span>
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-600 dark:text-slate-300">
              {product.keyBenefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-1" />
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>

      {/* FAQs */}
      {product.faqs && product.faqs.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-16 text-left">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-6">
            Frequently Asked Questions about {product.name}
          </h3>
          <div className="space-y-3">
            {product.faqs.map((f, i) => (
              <div key={i} className="p-5 rounded-xl bg-white dark:bg-[#06111F]/80 border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="text-sm font-bold text-slate-900 dark:text-white mb-2">{f.question}</div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-[#A9BDD1] leading-relaxed">{f.answer}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-sky-900 via-slate-900 to-cyan-950 text-white border border-cyan-400/40 space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            Secure Your {product.name} Policy
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Instant policy generation with verified underwriters. Zero physical paper required.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Button
              variant="glow"
              size="lg"
              onClick={() => onOpenApply('insurance', product.slug)}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Get Custom Quote Now →
            </Button>
            <Link to="/calculator">
              <Button variant="secondary" size="lg">
                Calculate Protection Gap
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
