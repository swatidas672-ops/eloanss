import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { loanProducts } from '../data/loans';
import { loanDetailHeroImages, heroImages } from '../data/heroImages';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { GlassCard } from '../components/ui/GlassCard';
import { PageHero } from '../components/layout/PageHero';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Zap, 
  FileText, 
  ShieldCheck, 
  Calculator,
  UserCheck,
  Percent,
  TrendingUp
} from 'lucide-react';

interface LoanDetailsProps {
  onOpenApply: (type: 'loan', slug?: string) => void;
}

export const LoanDetails: React.FC<LoanDetailsProps> = ({ onOpenApply }) => {
  const { loanSlug } = useParams<{ loanSlug: string }>();

  // Find product by slug
  const product = loanProducts.find((l) => l.slug === loanSlug) || loanProducts[0];

  const heroImg = loanDetailHeroImages[product.slug] || {
    src: heroImages.loans.src,
    alt: product.name,
    tag: 'LOWEST SPREAD',
    title: product.name,
    subtitle: product.tagline
  };

  // Interactive EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [tenureYears, setTenureYears] = useState(15);
  const interestRateNumeric = parseFloat(product.interestRate) || 9.5;

  // Monthly EMI Calculation: [P x R x (1+R)^N]/[(1+R)^N-1]
  const monthlyRate = interestRateNumeric / 12 / 100;
  const totalMonths = tenureYears * 12;
  const calculatedEmi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  ) || 0;
  const totalRepayment = calculatedEmi * totalMonths;
  const totalInterest = totalRepayment - loanAmount;

  return (
    <div className="bg-slate-50 dark:bg-[#070D1B] text-slate-800 dark:text-[#E6F1FF] min-h-screen transition-colors duration-300 pb-20">
      {/* Standardized Page Hero with Stunning Picture */}
      <PageHero
        badge={`${product.category.toUpperCase()} FINANCE FACILITY`}
        badgeVariant="blue"
        title={product.name}
        highlight={product.tagline}
        description={product.longDesc}
        breadcrumbs={[
          { label: 'Loans', href: '/loans' },
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
          { label: 'Benchmark Rate', value: product.interestRate, subtext: 'Annual interest spread', icon: <Percent className="w-4 h-4" /> },
          { label: 'Max Tenure', value: product.tenure, subtext: 'Flexible repayment', icon: <Clock className="w-4 h-4" /> },
          { label: 'Max Quantum', value: product.maxAmount, subtext: 'Credit limit capacity', icon: <TrendingUp className="w-4 h-4" /> },
          { label: 'Processing Speed', value: product.processingTime, subtext: 'Straight-through pipeline', icon: <Zap className="w-4 h-4" /> }
        ]}
        primaryAction={{
          label: `Apply for ${product.name}`,
          onClick: () => onOpenApply('loan', product.slug)
        }}
        secondaryAction={{
          label: 'EMI Calculator',
          href: '#calculator',
          icon: <Calculator className="w-4 h-4 text-sky-600 dark:text-cyan-400" />
        }}
      />

      {/* Quick Sanction Guarantee Box Banner */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-6 relative z-20 mb-12">
        <div className="p-6 rounded-2xl bg-white/95 dark:bg-[#081A2D]/90 border border-slate-200/90 dark:border-[#0EA5FF]/30 backdrop-blur-2xl shadow-lg grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white block">Soft Credit Check</span>
              <span className="text-slate-500 dark:text-[#A9BDD1]">Zero impact on CIBIL</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-500/15 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white block">50+ Bank Tie-ups</span>
              <span className="text-slate-500 dark:text-[#A9BDD1]">Best promotional spreads</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
              <UserCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white block">Local Verification</span>
              <span className="text-slate-500 dark:text-[#A9BDD1]">1,500+ verified nodes</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white block">Processing Fee</span>
              <span className="text-slate-500 dark:text-[#A9BDD1]">{product.processingFee}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview & Key Benefits */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {/* Key Benefits */}
          <GlassCard className="p-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-sky-600 dark:text-cyan-400" />
              <span>Key Product Benefits</span>
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-600 dark:text-slate-300">
              {product.keyBenefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-cyan-400 shrink-0 mt-1" />
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* Eligibility Criteria */}
          <GlassCard className="p-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-4 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              <span>Applicant Eligibility Criteria</span>
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-600 dark:text-slate-300">
              {product.eligibility.map((el, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-1" />
                  <span className="leading-relaxed">{el}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>

      {/* Required Documents & Application Process */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {/* Documents */}
          <GlassCard className="p-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>Mandatory Documentation</span>
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-600 dark:text-slate-300">
              {product.documents.map((doc, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                  <span className="leading-relaxed">{doc}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* Application Process */}
          <GlassCard className="p-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span>Disbursal Timeline & Steps</span>
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 font-mono text-xs flex items-center justify-center shrink-0 font-bold">1</span>
                <div>
                  <strong className="text-slate-900 dark:text-white block">Online Submission:</strong>
                  <span>Submit basic details and upload PDF income proof. Instant provisional sanction generated in 120 seconds.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 font-mono text-xs flex items-center justify-center shrink-0 font-bold">2</span>
                <div>
                  <strong className="text-slate-900 dark:text-white block">Verification by Local Distributor:</strong>
                  <span>Accredited distributor in your city conducts title verification, property appraisal, or business vintage check.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 font-mono text-xs flex items-center justify-center shrink-0 font-bold">3</span>
                <div>
                  <strong className="text-slate-900 dark:text-white block">Digital e-Sign & Direct Credit:</strong>
                  <span>Complete Aadhaar e-Sign. Partnering bank deposits funds directly to your verified operative bank account.</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Built-in EMI Calculator */}
      <section id="calculator" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 scroll-mt-32">
        <div className="rounded-3xl p-8 sm:p-12 bg-white dark:bg-[#081A2D]/90 border border-slate-200 dark:border-[#0EA5FF]/30 backdrop-blur-2xl shadow-xl text-left">
          <div className="flex items-center gap-2 mb-2 text-sky-600 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider font-bold">
            <Calculator className="w-4 h-4" />
            <span>INTERACTIVE FINANCIAL CALCULATOR</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display">
            Estimate Your Monthly EMI for {product.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-[#A9BDD1] mt-1 mb-8 max-w-2xl">
            Simulate tenure and principal to project monthly installments and total payable interest.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders */}
            <div className="lg:col-span-7 space-y-6">
              {/* Loan Amount Slider */}
              <div>
                <div className="flex justify-between items-center text-sm font-semibold mb-2">
                  <span className="text-slate-700 dark:text-slate-300">Loan Principal</span>
                  <span className="font-mono text-sky-600 dark:text-cyan-300 text-base font-bold">₹{loanAmount.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="100000"
                  max="50000000"
                  step="50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-sky-500 dark:accent-cyan-400 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 dark:text-slate-500 font-mono mt-1">
                  <span>₹1 Lakh</span>
                  <span>₹5 Crores</span>
                </div>
              </div>

              {/* Tenure Slider */}
              <div>
                <div className="flex justify-between items-center text-sm font-semibold mb-2">
                  <span className="text-slate-700 dark:text-slate-300">Loan Tenure</span>
                  <span className="font-mono text-sky-600 dark:text-cyan-300 text-base font-bold">{tenureYears} Years ({tenureYears * 12} Months)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full accent-sky-500 dark:accent-cyan-400 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 dark:text-slate-500 font-mono mt-1">
                  <span>1 Year</span>
                  <span>30 Years</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-100 dark:bg-[#06111F]/70 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between">
                <span>Indicative Annual Interest Benchmark:</span>
                <span className="font-mono text-slate-900 dark:text-white font-bold">{interestRateNumeric}% p.a.</span>
              </div>
            </div>

            {/* Result Box */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-[#06111F] border border-slate-200 dark:border-cyan-400/40 text-center space-y-4 shadow-sm">
              <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono font-semibold">
                Projected Monthly EMI
              </div>
              <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500 dark:from-cyan-300 dark:to-[#0EA5FF] font-display">
                ₹{calculatedEmi.toLocaleString('en-IN')}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">per month</div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <div className="text-slate-500">Total Interest</div>
                  <div className="font-mono text-slate-900 dark:text-white font-semibold mt-0.5">
                    ₹{totalInterest > 0 ? totalInterest.toLocaleString('en-IN') : 0}
                  </div>
                </div>
                <div>
                  <div className="text-slate-500">Total Payable</div>
                  <div className="font-mono text-sky-600 dark:text-cyan-300 font-semibold mt-0.5">
                    ₹{totalRepayment > 0 ? totalRepayment.toLocaleString('en-IN') : 0}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  variant="glow"
                  size="md"
                  className="w-full justify-center"
                  onClick={() => onOpenApply('loan', product.slug)}
                >
                  Apply with this Estimate →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Specific FAQs */}
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
            Start Your {product.name} Application
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Direct matching with verified local distributors in your city. Zero upfront documentation charges.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Button
              variant="glow"
              size="lg"
              onClick={() => onOpenApply('loan', product.slug)}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Apply Online Now →
            </Button>
            <Link to="/distributors">
              <Button variant="secondary" size="lg">
                Find Local Distributor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
