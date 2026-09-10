import React, { useState } from 'react';
import { loanProducts } from '../data/loans';
import { heroImages } from '../data/heroImages';
import { ProductCard } from '../components/features/ProductCard';
import { ComparisonTable } from '../components/features/ComparisonTable';
import { SpecializedFunding } from '../components/features/SpecializedFunding';
import { EMICalculatorWidget } from '../components/features/EMICalculatorWidget';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { PageHero } from '../components/layout/PageHero';
import { 
  Search, 
  SlidersHorizontal, 
  CheckCircle2, 
  FileText, 
  ArrowRight, 
  UserCheck, 
  Percent,
  Clock, 
  Zap,
  Building2,
  Calculator,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface LoansPageProps {
  onOpenApply: (type: 'loan', slug?: string) => void;
}

export const Loans: React.FC<LoansPageProps> = ({ onOpenApply }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Filter logic
  const filteredLoans = loanProducts.filter((loan) => {
    const matchesSearch =
      loan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loan.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loan.tagline.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'all' || loan.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  const generalFaqs = [
    {
      question: 'How are interest rates determined for ELOANSS loan products?',
      answer: 'Rates are dynamically calculated through our algorithmic multi-lender engine based on your CIBIL score, verifiable monthly income, existing debt-to-income (DTI) ratio, asset collateral (if secured loan), and specific partnering bank benchmark spreads.'
    },
    {
      question: 'Can I apply for multiple loans simultaneously?',
      answer: 'Yes! Our digital platform allows unified profile evaluation. However, to protect your credit score from excessive hard inquiries, our system soft-matches your application before submitting to the highest-probability institutional partner.'
    },
    {
      question: 'What is the standard disbursement timeline across products?',
      answer: 'Unsecured personal loans and gold loans typically disburse within 2 to 6 hours. Secured vehicle and business loans take 24 to 48 hours. Comprehensive home loans and project finance facilities require 3 to 7 working days due to statutory legal title checks.'
    },
    {
      question: 'Are there any hidden service or brokerage charges?',
      answer: 'Zero. ELOANSS does not levy any brokerage or hidden advisory fees on borrowers. All processing fees are transparently charged by the partnering lender and clearly itemized on your digital sanction letter.'
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#070D1B] text-slate-800 dark:text-[#E6F1FF] min-h-screen transition-colors duration-300 pb-20">
      {/* Standardized Page Hero with Stunning Picture */}
      <PageHero
        badge="FULL SPECTRUM DEBT FINANCING"
        badgeVariant="blue"
        title="Comprehensive Loan Solutions"
        highlight="For Every Financial Milestone"
        description="Explore 13 institutional-grade loan products covering residential real estate, commercial working capital, heavy freight fleets, and immediate personal liquidity."
        breadcrumbs={[{ label: 'Loans' }]}
        image={{
          src: heroImages.loans.src,
          alt: heroImages.loans.alt,
          overlayTag: heroImages.loans.tag,
          floatingBadge: {
            title: heroImages.loans.floatingTitle,
            subtitle: heroImages.loans.floatingSubtitle
          }
        }}
        stats={[
          { label: 'Benchmark Interest', value: 'From 8.40%', subtext: 'Sovereign spread parity', icon: <Percent className="w-4 h-4" /> },
          { label: 'Speed to Sanction', value: '2 - 48 Hrs', subtext: 'Direct digital approval', icon: <Clock className="w-4 h-4" /> },
          { label: 'Partner Institutions', value: '50+ Lenders', subtext: 'PSUs, Privates & NBFCs', icon: <Building2 className="w-4 h-4" /> },
          { label: 'Maximum Ticket', value: 'Up to ₹50 Cr', subtext: 'Syndicated capital lines', icon: <Zap className="w-4 h-4" /> }
        ]}
        primaryAction={{
          label: 'Apply for Loan',
          onClick: () => onOpenApply('loan')
        }}
        secondaryAction={{
          label: 'Calculate EMI First',
          href: '#emi-calculator',
          icon: <Calculator className="w-4 h-4 text-sky-600 dark:text-cyan-400" />
        }}
      />

      {/* Search & Filter Toolbar */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-6 relative z-20">
        <div className="max-w-4xl mx-auto p-4 rounded-2xl bg-white/95 dark:bg-[#081A2D]/90 border border-slate-200/90 dark:border-[#0EA5FF]/30 backdrop-blur-2xl shadow-lg dark:shadow-xl">
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            {/* Search Input */}
            <div className="relative w-full flex-grow">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-600 dark:text-cyan-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by loan type, purpose, e.g. 'Home', 'Business', 'Plot'..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-50 dark:bg-[#06111F] border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500 dark:focus:border-cyan-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Select */}
            <div className="w-full sm:w-56 shrink-0">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full rounded-xl bg-slate-50 dark:bg-[#06111F] border border-slate-300 dark:border-slate-700 px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 dark:focus:border-cyan-400 cursor-pointer"
              >
                <option value="all">All Categories (13)</option>
                <option value="property">Property & Housing</option>
                <option value="business">Business & Enterprise</option>
                <option value="auto">Automotive & Transport</option>
                <option value="personal">Personal & Cash</option>
                <option value="specialized">Specialized & Projects</option>
              </select>
            </div>

            {/* Clear button if filtered */}
            {(searchQuery || selectedCategory !== 'all') && (
              <button
                onClick={clearFilters}
                className="text-xs font-semibold text-sky-600 dark:text-cyan-400 hover:text-sky-700 dark:hover:text-cyan-300 whitespace-nowrap px-3 py-2 cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Loan Products Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="text-xs font-mono font-bold text-sky-700 dark:text-cyan-400 uppercase tracking-wider">
            Showing {filteredLoans.length} Loan Facilities
          </div>
        </div>

        {filteredLoans.length === 0 ? (
          <div className="text-center py-16 rounded-2xl bg-white dark:bg-[#06111F]/60 border border-slate-200 dark:border-slate-800">
            <SlidersHorizontal className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">No loan products matched your criteria</h3>
            <p className="text-xs text-slate-500 dark:text-[#A9BDD1] mt-1 mb-4">Try clearing or adjusting your search parameters</p>
            <Button variant="outline" size="sm" onClick={clearFilters}>
              Clear All Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredLoans.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onApply={() => onOpenApply('loan', product.slug)}
              />
            ))}
          </div>
        )}
      </section>

      {/* Specialised sector, agriculture and property-backed programmes */}
      <SpecializedFunding onOpenApply={onOpenApply} />

      {/* Comparison System */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <SectionHeading
          badge="DATA MATRIX"
          title="Interactive Loan Comparison"
          highlight="Side-by-Side Analysis"
          description="Compare interest rate corridors, maximum tenure, and processing turnaround across our portfolio."
        />
        <ComparisonTable onApply={(slug) => onOpenApply('loan', slug)} />

        {/* Interactive EMI Calculator Widget */}
        <div id="emi-calculator" className="mt-14 scroll-mt-28">
          <EMICalculatorWidget onApply={() => onOpenApply('loan')} />
        </div>
      </section>

      {/* Standard Eligibility & Required Documents Matrix */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 border-t border-slate-200 dark:border-slate-800/80">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Eligibility Checklist */}
          <GlassCard className="p-8 text-left">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-400/30">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">General Eligibility Criteria</h3>
                <p className="text-xs text-slate-500 dark:text-[#A9BDD1]">Minimum standard thresholds for fast-track sanction</p>
              </div>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Age Bracket:</strong>
                  <span>21 to 65 years at the time of loan maturity.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Employment Stability:</strong>
                  <span>Salaried applicants: Minimum 1 year total experience (6 months with current employer). Self-employed: Minimum 2 years continuous business track record.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Credit Score (CIBIL):</strong>
                  <span>650+ for baseline eligibility; 720+ unlocks lowest promotional interest brackets.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Debt-to-Income (DTI) Ratio:</strong>
                  <span>Total monthly outgoing EMIs should ideally not exceed 50-60% of net monthly income.</span>
                </div>
              </li>
            </ul>
          </GlassCard>

          {/* Required Documents Checklist */}
          <GlassCard className="p-8 text-left">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center border border-sky-400/30">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">Required Digital Documents</h3>
                <p className="text-xs text-slate-500 dark:text-[#A9BDD1]">100% paperless upload via camera or e-locker</p>
              </div>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Identity & Address Proof:</strong>
                  <span>Aadhaar Card (OTP e-KYC linked), PAN Card, Passport, or Voter ID.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Income Proof (Salaried):</strong>
                  <span>Latest 3 months salary slips, Form 16, and 6 months bank statements with salary credit.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Income Proof (Self-Employed):</strong>
                  <span>Last 2-3 years audited ITR with computation, Profit & Loss statement, Balance Sheet, and 12 months current account statements.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Asset Documents (For Secured Facilities):</strong>
                  <span>Sale deed, title chain deeds, approved building plans, or vehicle registration certificates.</span>
                </div>
              </li>
            </ul>
          </GlassCard>
        </div>
      </section>

      {/* Application Process: 4-step Timeline */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 text-center">
        <SectionHeading
          badge="SEAMLESS DISBURSAL"
          title="The 4-Step Digital Process"
          highlight="From Application to Sanction"
          description="How our platform executes loan processing with speed and institutional precision."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {[
            {
              step: '01',
              title: 'Digital Application',
              desc: 'Select your loan type, input basic KYC, and upload PDF income statements.'
            },
            {
              step: '02',
              title: 'Algorithmic Sanction',
              desc: 'Our engine queries 50+ bank matrices to issue an instant provisional sanction letter.'
            },
            {
              step: '03',
              title: 'Distributor Verification',
              desc: 'A verified local distributor in your city conducts document verification and legal checks.'
            },
            {
              step: '04',
              title: 'Direct Disbursal',
              desc: 'Sign loan agreement digitally via Aadhaar e-Sign and receive direct credit to your bank account.'
            }
          ].map((item, idx) => (
            <GlassCard key={idx} className="p-6 relative">
              <div className="text-2xl font-black font-mono text-sky-600 dark:text-cyan-400 mb-3">{item.step}</div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white font-display mb-2">{item.title}</h4>
              <p className="text-xs text-slate-600 dark:text-[#A9BDD1] leading-relaxed">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-16">
        <SectionHeading
          badge="CLARITY & ASSISTANCE"
          title="Frequently Asked Questions"
          highlight="About ELOANSS Loans"
        />

        <div className="space-y-3">
          {generalFaqs.map((faq, idx) => {
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

      {/* Apply CTA Banner */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-sky-900 via-slate-900 to-cyan-950 text-white border border-cyan-400/40 text-center space-y-4 shadow-xl">
          <Badge variant="cyan">FAST-TRACK CREDIT LINE</Badge>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            Ready to Accelerate Your Financing?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Get instant pre-approval across 50+ banking institutions with zero documentation charges.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Button
              variant="glow"
              size="lg"
              onClick={() => onOpenApply('loan')}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Start Online Application Now →
            </Button>
            <Link to="/calculator">
              <Button variant="secondary" size="lg" leftIcon={<Calculator className="w-4 h-4 text-cyan-400" />}>
                Calculate EMI Matrix
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
