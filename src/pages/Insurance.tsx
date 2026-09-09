import React, { useState } from 'react';
import { insuranceProducts } from '../data/insurance';
import { heroImages } from '../data/heroImages';
import { InsuranceCard } from '../components/features/InsuranceCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { PageHero } from '../components/layout/PageHero';
import { 
  ShieldCheck, 
  HeartHandshake, 
  ArrowRight, 
  FileCheck,
  Zap,
  Building2,
  Clock,
  Calculator
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface InsurancePageProps {
  onOpenApply: (type: 'insurance', slug?: string) => void;
}

export const Insurance: React.FC<InsurancePageProps> = ({ onOpenApply }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const filteredInsurance = selectedCategory === 'all'
    ? insuranceProducts
    : insuranceProducts.filter((i) => i.category === selectedCategory);

  const insuranceFaqs = [
    {
      question: 'What is Claim Settlement Ratio (CSR) and why does it matter?',
      answer: 'CSR represents the percentage of claims paid out by an insurer against claims received within a financial year. ELOANSS exclusively partners with IRDAI-registered insurers boasting an audited CSR above 98.5%, ensuring your family or enterprise is safeguarded when emergencies strike.'
    },
    {
      question: 'Can I port my existing health policy to ELOANSS insurers without losing waiting period credits?',
      answer: 'Yes, as per IRDAI portability regulations, you can seamlessly migrate your individual or family floater policy to our partner insurers while preserving accumulated pre-existing disease (PED) waiting period credits.'
    },
    {
      question: 'How fast is cashless claim authorization handled?',
      answer: 'Cashless claims at our network of 10,000+ accredited hospitals and 5,000+ auto network garages are authorized electronically within 45 to 60 minutes of digital intimation.'
    },
    {
      question: 'Do commercial cargo and marine insurance policies cover international transit?',
      answer: 'Yes! Our marine and cargo policies provide comprehensive Institute Cargo Clauses (A, B, and C) covering domestic surface road transit, air cargo, and cross-border container maritime routes.'
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#070D1B] text-slate-800 dark:text-[#E6F1FF] min-h-screen transition-colors duration-300 pb-20">
      {/* Standardized Page Hero with Stunning Picture */}
      <PageHero
        badge="IRDAI ALIGNED UNDERWRITING FACILITATION"
        badgeVariant="cyan"
        title="Intelligent Protection Systems"
        highlight="Safeguarding Life, Health & Assets"
        description="Explore 8 dedicated insurance categories. Cashless hospitalizations across 10,000+ network facilities and rapid digital claim settlements."
        breadcrumbs={[{ label: 'Insurance' }]}
        image={{
          src: heroImages.insurance.src,
          alt: heroImages.insurance.alt,
          overlayTag: heroImages.insurance.tag,
          floatingBadge: {
            title: heroImages.insurance.floatingTitle,
            subtitle: heroImages.insurance.floatingSubtitle
          }
        }}
        stats={[
          { label: 'Claim Settlement', value: '99.2% CSR', subtext: 'Audited annual ratio', icon: <ShieldCheck className="w-4 h-4" /> },
          { label: 'Cashless Network', value: '10,000+ Hospitals', subtext: 'Pan-India coverage', icon: <Building2 className="w-4 h-4" /> },
          { label: 'Approval Speed', value: '< 45 Mins', subtext: 'Electronic intimation', icon: <Clock className="w-4 h-4" /> },
          { label: 'Maximum Shield', value: 'Up to ₹5 Cr', subtext: 'Restoration benefit', icon: <Zap className="w-4 h-4" /> }
        ]}
        primaryAction={{
          label: 'Get Instant Quote',
          onClick: () => onOpenApply('insurance')
        }}
        secondaryAction={{
          label: 'Estimate Coverage Need',
          href: '/calculator',
          icon: <Calculator className="w-4 h-4 text-cyan-500" />
        }}
      />

      {/* Category Pills */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-6 relative z-20">
        <div className="flex flex-wrap justify-center gap-2 p-2 rounded-2xl bg-white/95 dark:bg-[#081A2D]/90 border border-slate-200/90 dark:border-[#0EA5FF]/30 backdrop-blur-2xl shadow-lg max-w-2xl mx-auto">
          {[
            { id: 'all', label: 'All Insurance (8)' },
            { id: 'life', label: 'Life & Term' },
            { id: 'health', label: 'Health & Medical' },
            { id: 'motor', label: 'Auto & Commercial' },
            { id: 'commercial', label: 'Cargo & Marine' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md'
                  : 'text-slate-600 dark:text-[#A9BDD1] hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Insurance Products Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredInsurance.map((product) => (
            <InsuranceCard
              key={product.id}
              product={product}
              onApply={() => onOpenApply('insurance', product.slug)}
            />
          ))}
        </div>
      </section>

      {/* Cashless Claim Guarantee Matrix */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 border-t border-slate-200 dark:border-slate-800/80">
        <SectionHeading
          badge="INSTANT SETTLEMENT PIPELINE"
          title="24/7 Dedicated Claim Support"
          highlight="When You Need Us Most"
          description="A digitized straight-through claim mechanism designed for zero physical friction."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <GlassCard className="p-6">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white font-display mb-2">45-Minute Cashless Intimation</h4>
            <p className="text-xs text-slate-600 dark:text-[#A9BDD1] leading-relaxed">
              Show your ELOANSS digital health card at 10,000+ partnered hospitals across India for immediate cashless bed admission and surgical approval.
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-4">
              <FileCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white font-display mb-2">Zero-Paperwork Reimbursement</h4>
            <p className="text-xs text-slate-600 dark:text-[#A9BDD1] leading-relaxed">
              Snap photos of medical discharge summaries, bills, and diagnostics via our app. Reimbursement funds settle directly into your account in under 72 hours.
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white font-display mb-2">Personal Claim Concierge</h4>
            <p className="text-xs text-slate-600 dark:text-[#A9BDD1] leading-relaxed">
              In critical claim situations, your local ELOANSS distributor will physically visit hospital admission desks or surveyor inspections to advocate on your behalf.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-16">
        <SectionHeading
          badge="CLARITY"
          title="Insurance Frequently Asked Questions"
          highlight="Clear & Transparent Terms"
        />

        <div className="space-y-3">
          {insuranceFaqs.map((faq, idx) => {
            const isExpanded = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-white dark:bg-[#06111F]/80 border border-slate-200 dark:border-slate-800/80 overflow-hidden transition-all text-left shadow-xs"
              >
                <button
                  onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left text-sm font-bold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span className="text-sky-600 dark:text-cyan-400 text-lg font-mono ml-4">{isExpanded ? '−' : '+'}</span>
                </button>
                {isExpanded && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-[#A9BDD1] leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-sky-900 via-slate-900 to-cyan-950 text-white border border-cyan-400/40 text-center space-y-4 shadow-xl">
          <Badge variant="cyan">GET REAL-TIME QUOTE</Badge>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            Safeguard What Matters Most Today
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Compare premiums across top Indian underwriters and receive instant coverage confirmation.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Button
              variant="glow"
              size="lg"
              onClick={() => onOpenApply('insurance')}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Get Instant Insurance Quote →
            </Button>
            <Link to="/calculator">
              <Button variant="secondary" size="lg" leftIcon={<Calculator className="w-4 h-4 text-cyan-400" />}>
                Coverage Calculators
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
