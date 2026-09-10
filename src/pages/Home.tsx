import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  MapPin, 
  Building2, 
  Cpu, 
  Globe2, 
  Zap, 
  Users, 
  Layers, 
  Compass,
  Calculator,
  Gauge,
  BadgeCheck
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { GlassCard } from '../components/ui/GlassCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SmartFinancialFinder } from '../components/features/SmartFinancialFinder';
import { ProductCard } from '../components/features/ProductCard';
import { InsuranceCard } from '../components/features/InsuranceCard';
import { IndiaNetworkVisual } from '../components/features/IndiaNetworkVisual';
import { VideoModal } from '../components/features/VideoModal';
import { LiveMarketTicker } from '../components/features/LiveMarketTicker';
import { EMICalculatorWidget } from '../components/features/EMICalculatorWidget';
import { LendingPartners } from '../components/features/LendingPartners';
import { WhyChooseUs } from '../components/features/WhyChooseUs';
import { CustomerFeedback } from '../components/features/CustomerFeedback';
import { loanProducts } from '../data/loans';
import { insuranceProducts } from '../data/insurance';
import homeHeroBackground from '../assets/images/home_hero_background.jpg';

interface HomeProps {
  onOpenApply: (type?: 'loan' | 'insurance', slug?: string) => void;
  onOpenPartnerModal?: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenApply, onOpenPartnerModal }) => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Trust features
  const trustFeatures = [
    {
      title: 'Trusted Partners',
      desc: '50+ Tier-1 Banks & Regulated NBFCs',
      icon: <Building2 className="w-5 h-5 text-sky-600 dark:text-cyan-400" />
    },
    {
      title: 'Pan India Network',
      desc: '500+ Cities & 1,500+ Verified Nodes',
      icon: <MapPin className="w-5 h-5 text-sky-600 dark:text-sky-400" />
    },
    {
      title: '100% Digital Processing',
      desc: 'Paperless e-KYC & Fast Sanction',
      icon: <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
    },
    {
      title: 'AI-Powered Guidance',
      desc: 'Algorithmic Risk & Rate Matching',
      icon: <Cpu className="w-5 h-5 text-amber-600 dark:text-amber-400" />
    }
  ];

  // Why Choose ELOANSS

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#070D1B] text-slate-800 dark:text-[#E6F1FF] overflow-hidden transition-colors duration-300">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-gradient-to-b from-sky-500/10 via-cyan-500/5 to-transparent dark:from-sky-500/15 dark:via-indigo-500/5 dark:to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-400/10 dark:bg-cyan-500/10 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      {/* Institutional Live Market Telemetry Bar */}
      <div className="pt-20">
        <LiveMarketTicker />
      </div>

      {/* ========================================================================= */}
      {/* 2. CINEMATIC HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative isolate pt-10 pb-20 lg:pt-14 lg:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Cinematic hero backdrop (full-bleed, breaks out of the max-w container) */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen z-0 overflow-hidden pointer-events-none">
          <img
            src={homeHeroBackground}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center opacity-[0.88] dark:opacity-100"
          />
          {/* Horizontal scrim keeps the headline readable over the artwork */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/70 to-slate-50/5 dark:from-[#070D1B] dark:via-[#070D1B]/85 dark:to-[#070D1B]/30" />
          {/* Vertical fade blends the backdrop into the page below */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50 dark:from-[#070D1B] dark:via-transparent dark:to-[#070D1B]" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-[#0A192B]/80 border border-sky-400/30 text-sky-700 dark:text-cyan-300 text-xs font-mono tracking-wider backdrop-blur-md shadow-xs">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span>AI POWERED • TRUSTED • FUTURE READY</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display leading-[1.08]">
              A Smarter <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#06B6D4] dark:from-white dark:via-cyan-200 dark:to-[#0EA5FF]">
                Financial Future
              </span> <br />
              for Every You.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-[#A9BDD1] leading-relaxed max-w-xl font-normal">
              Loans. Insurance. Investments. Global Opportunities. Powered by intelligent neural matching technology and trusted local financial guidance.
            </p>

            {/* Hero Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link to="/loans">
                <Button variant="glow" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Explore Our Services
                </Button>
              </Link>

              <Button
                id="hero-watch-demo-btn"
                variant="secondary"
                size="lg"
                onClick={() => setVideoModalOpen(true)}
                leftIcon={<Play className="w-4 h-4 text-sky-600 dark:text-cyan-400 fill-sky-600 dark:fill-cyan-400" />}
              >
                Watch How It Works
              </Button>

              <Link to="/calculator">
                <Button variant="secondary" size="lg" leftIcon={<Calculator className="w-4 h-4 text-sky-600 dark:text-cyan-400" />}>
                  EMI Calculators
                </Button>
              </Link>

              <Link to="/calculator#eligibility">
                <Button variant="secondary" size="lg" leftIcon={<BadgeCheck className="w-4 h-4 text-sky-600 dark:text-cyan-400" />}>
                  Check Eligibility
                </Button>
              </Link>
            </div>

            {/* Quick Live Telemetry Indicator */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Instant Sanction Engine Active</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                <span>IRDAI & RBI Aligned Facilitation</span>
              </div>
            </div>
          </div>

          {/* Right: SMART FINANCIAL FINDER (Floating interactive hero interface) */}
          <div className="lg:col-span-5">
            <SmartFinancialFinder onOpenApply={onOpenApply} />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. HERO TRUST FEATURES */}
        {/* ========================================================================= */}
        <div className="relative z-10 mt-16 sm:mt-24 pt-12 border-t border-slate-200 dark:border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {trustFeatures.map((feat, idx) => (
              <GlassCard
                key={idx}
                hoverEffect
                glow="cyan"
                className="p-5 text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#06111F] border border-sky-400/30 dark:border-cyan-500/30 flex items-center justify-center mb-3 shadow-inner">
                  {feat.icon}
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-display">
                  {feat.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-[#A9BDD1] mt-1">
                  {feat.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. LOAN PRODUCTS SECTION (All 13 products + Special Solution Card) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <SectionHeading
              align="left"
              badge="FINANCIAL SOLUTIONS"
              title="Our Loan Products"
              highlight="Engineered for Every Milestone"
              description="From commercial ventures and property acquisition to logistics fleet funding, discover sovereign interest rates with zero hidden barriers."
              className="mb-0"
            />
          </div>
          <Link to="/loans">
            <Button variant="outline" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
              View All 13 Loans
            </Button>
          </Link>
        </div>

        {/* 13 Loan Product Grid + Special Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {loanProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onApply={() => onOpenApply('loan', product.slug)}
            />
          ))}

          {/* SPECIAL CARD: Need a Customized Solution? */}
          <div className="relative rounded-2xl overflow-hidden p-8 flex flex-col justify-between bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 dark:from-[#0A192B] dark:via-[#0D2138] dark:to-[#168BFF]/40 border-2 border-dashed border-sky-400/50 shadow-lg text-left group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 flex items-center justify-center shadow-lg">
                <Compass className="w-6 h-6" />
              </div>
              <Badge variant="cyan">BESPOKE ARCHITECTURE</Badge>
              <h3 className="text-2xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                Need a Customized Solution?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Have a complex multi-asset syndicate, large project loan requirement, or non-standard credit profile? Our senior financial engineers and underwriting specialists will architect a custom capital structure.
              </p>
            </div>

            <div className="pt-8">
              <Link to="/contact">
                <Button variant="glow" size="md" className="w-full justify-center" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Talk to an Expert →
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Live Interactive Loan Calculator Simulation */}
        <div className="mt-16">
          <EMICalculatorWidget onOpenApply={onOpenApply} />
        </div>

        {/* Entry point to the full credit score checker */}
        <div className="mt-10">
          <GlassCard hoverEffect={false} className="p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-500 to-cyan-400 text-white flex items-center justify-center shrink-0 shadow-md">
                <Gauge className="w-7 h-7" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
                  Know your credit score before you apply
                </h3>
                <p className="mt-1.5 text-sm sm:text-base text-slate-600 dark:text-[#A9BDD1] leading-relaxed">
                  Answer five quick questions to see where you land on the 300-900 scale, which
                  habit is costing you the most points, and what to fix first. Runs entirely in your
                  browser with no impact on your real score.
                </p>
              </div>
              <Link to="/calculator" className="shrink-0">
                <Button variant="glow" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Check My Score
                </Button>
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. INSURANCE SOLUTIONS SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative bg-slate-100/90 dark:bg-[#06111F]/50 rounded-3xl border border-slate-200 dark:border-slate-800/60 my-12 backdrop-blur-md">
        <SectionHeading
          badge="INTELLIGENT PROTECTION"
          title="Our Insurance Solutions"
          highlight="Protect What Matters. Today and Beyond."
          description="Comprehensive risk mitigation for families, personal assets, and commercial enterprises with high verified claim settlement ratios."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insuranceProducts.map((ins) => (
            <InsuranceCard
              key={ins.id}
              product={ins}
              onApply={() => onOpenApply('insurance', ins.slug)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/insurance">
            <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Explore Complete Insurance Matrix & Calculators →
            </Button>
          </Link>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FIND LOCAL DISTRIBUTOR & INDIA NETWORK */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6 text-left">
            <Badge variant="blue">LOCALIZED FINANCIAL ACCESS</Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white font-display leading-tight">
              Connect with Verified Distributors in Your City
            </h2>
            <p className="text-base text-slate-600 dark:text-[#A9BDD1] leading-relaxed">
              We bridge advanced algorithmic technology with trusted human expertise. Over 1,500+ accredited local financial advisors operate across all 28 states and Union Territories to provide in-person guidance and seamless documentation.
            </p>

            <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>Doorstep physical verification & document pickup</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>Multi-language assistance (Hindi, Marathi, Tamil, Telugu, Gujarati, etc.)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>Zero service brokerage charges to borrowers</span>
              </li>
            </ul>

            <div className="pt-2 flex gap-4">
              <Link to="/distributors">
                <Button variant="glow" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Find Local Distributor →
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <IndiaNetworkVisual />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. BECOME A DISTRIBUTOR (Major Cinematic Promo Section) */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 bg-gradient-to-br from-[#0B1528] via-[#0D2138] to-[#040914] text-white border border-sky-400/40 shadow-xl text-left">
          {/* Background digital grid & ambient lighting */}
          <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PARTNER ECOSYSTEM</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display leading-tight">
              Become an ELOANSS Distributor. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-[#0EA5FF]">
                Partner With Us and Grow Together.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Expand your financial advisory practice. Access 50+ institutional bank tie-ups, earn industry-leading payout structures, and leverage our state-of-the-art digital CRM to process client applications effortlessly.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4">
              {[
                { title: 'Expand Your Business', desc: 'Higher ticket sizes' },
                { title: 'Multi-Product Access', desc: '13 Loans + 8 Insurance' },
                { title: 'Marketing & Leads', desc: 'Real-time client allocation' },
                { title: 'Next-Gen CRM', desc: 'Sub-second tracking app' }
              ].map((b, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-[#081A2D]/80 border border-slate-700/70">
                  <div className="text-xs font-bold text-white">{b.title}</div>
                  <div className="text-[11px] text-cyan-300 mt-0.5">{b.desc}</div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link to="/distributors#join">
                <Button variant="glow" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Join Now as Distributor →
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="lg">
                  Schedule Corporate Onboarding
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. WHY CHOOSE ELOANSS */}
      {/* ========================================================================= */}
      <WhyChooseUs />

      {/* ========================================================================= */}
      {/* 10. STATISTICS */}
      {/* ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-2xl bg-white dark:bg-[#06111F]/90 border border-slate-200 dark:border-[#0EA5FF]/30 p-8 sm:p-12 backdrop-blur-2xl shadow-sm dark:shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-800">
            <div className="p-4">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500 dark:from-cyan-400 dark:to-[#0EA5FF] font-display">
                1M+
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white mt-2">Happy Customers</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Assisted across India</div>
            </div>

            <div className="p-4 pt-8 lg:pt-4">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500 dark:from-cyan-400 dark:to-[#0EA5FF] font-display">
                500+
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white mt-2">City Coverage</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Tier 1, 2 & 3 Hubs</div>
            </div>

            <div className="p-4 pt-8 lg:pt-4">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500 dark:from-cyan-400 dark:to-[#0EA5FF] font-display">
                50+
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white mt-2">Financial Partners</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Banks & Licensed NBFCs</div>
            </div>

            <div className="p-4 pt-8 lg:pt-4">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500 dark:from-cyan-400 dark:to-[#0EA5FF] font-display">
                99.9%
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white mt-2">Digital Processing</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Straight-through pipeline</div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 font-mono">
            *Demonstration performance indicators reflecting target network capacity and simulated distributor aggregations.
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. OUR LENDING PARTNERS */}
      {/* ========================================================================= */}
      <LendingPartners onOpenApply={onOpenApply} />

      {/* ========================================================================= */}
      {/* 12. CUSTOMER FEEDBACK */}
      {/* ========================================================================= */}
      <CustomerFeedback />

      {/* ========================================================================= */}
      {/* 13. FUTURE VISION */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-16 bg-gradient-to-t from-slate-900 via-sky-950 to-slate-900 dark:from-[#020817] dark:via-[#081A2D] dark:to-[#0A192B] border border-cyan-400/30 text-center text-white shadow-xl">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <Badge variant="cyan">HORIZON 2035-2050</Badge>
            <h2 className="text-3xl sm:text-6xl font-black text-white font-display">
              Building a Smarter Tomorrow
            </h2>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed">
              ELOANSS is building a connected, intelligent financial ecosystem where capital flows seamlessly, loans are processed in seconds, and personalized advisory is universally accessible.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link to="/about">
                <Button variant="glow" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Explore Our Vision →
                </Button>
              </Link>
              <Link to="/global-business">
                <Button variant="secondary" size="lg">
                  Global Market Strategy
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Video Modal */}
      <VideoModal isOpen={videoModalOpen} onClose={() => setVideoModalOpen(false)} />
    </div>
  );
};
