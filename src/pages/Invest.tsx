import React, { useState } from 'react';
import { GlassCard } from '../components/ui/GlassCard';
import { heroImages } from '../data/heroImages';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { PageHero } from '../components/layout/PageHero';
import { 
  TrendingUp, 
  PieChart, 
  Briefcase, 
  Lock, 
  Layers, 
  Calculator,
  ShieldCheck,
  Percent
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Invest: React.FC = () => {
  const [initialCapital, setInitialCapital] = useState(1000000);
  const [horizonYears, setHorizonYears] = useState(5);
  const [riskProfile, setRiskProfile] = useState<'conservative' | 'balanced' | 'aggressive'>('balanced');

  const returnsRate = riskProfile === 'conservative' ? 0.095 : riskProfile === 'balanced' ? 0.135 : 0.175;
  const futureValue = Math.round(initialCapital * Math.pow(1 + returnsRate, horizonYears));
  const wealthGained = futureValue - initialCapital;

  return (
    <div className="bg-slate-50 dark:bg-[#070D1B] text-slate-800 dark:text-[#E6F1FF] min-h-screen transition-colors duration-300 pb-20">
      {/* Standardized Page Hero with Stunning Picture */}
      <PageHero
        badge="INSTITUTIONAL WEALTH ARCHITECTURE"
        badgeVariant="blue"
        title="Wealth Beyond Today"
        highlight="Intelligent Investment Strategies"
        description="From curated private equity syndicates and sovereign bond baskets to high-yield corporate debt instruments, grow and preserve generational wealth with institutional precision."
        breadcrumbs={[{ label: 'Invest' }]}
        image={{
          src: heroImages.invest.src,
          alt: heroImages.invest.alt,
          overlayTag: heroImages.invest.tag,
          floatingBadge: {
            title: heroImages.invest.floatingTitle,
            subtitle: heroImages.invest.floatingSubtitle
          }
        }}
        stats={[
          { label: 'Target Yield Corridor', value: '9.5% - 17.5%', subtext: 'Annualized strategy rate', icon: <Percent className="w-4 h-4" /> },
          { label: 'Mandate Type', value: 'Syndicated Credit', subtext: 'Curated corporate debt', icon: <Briefcase className="w-4 h-4" /> },
          { label: 'Minimum Allocation', value: '₹2.5 Lakhs', subtext: 'Institutional access tier', icon: <TrendingUp className="w-4 h-4" /> },
          { label: 'Compliance Framework', value: 'SEBI / RBI Aligned', subtext: 'Regulated custodians', icon: <ShieldCheck className="w-4 h-4" /> }
        ]}
        primaryAction={{
          label: 'Schedule Consultation',
          href: '/contact'
        }}
        secondaryAction={{
          label: 'Financial Calculators',
          href: '/calculator',
          icon: <Calculator className="w-4 h-4 text-sky-600 dark:text-cyan-400" />
        }}
      />

      {/* 4 Pillars of ELOANSS Investment */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-6 relative z-20 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {[
            {
              title: 'Private Portfolios',
              subtitle: 'Tailored Asset Allocation',
              desc: 'Custom structured equity, sovereign fixed income, and real estate debt for family offices and HNIs.',
              icon: <PieChart className="w-6 h-6 text-sky-600 dark:text-cyan-400" />
            },
            {
              title: 'Corporate Debt Syndicates',
              subtitle: '8.5% - 12.0% Targeted Yields',
              desc: 'Asset-backed structured credit in vetted mid-market Indian enterprises with collateral coverage.',
              icon: <Briefcase className="w-6 h-6 text-cyan-600 dark:text-sky-400" />
            },
            {
              title: 'Alternative Assets',
              subtitle: 'Venture & Growth Capital',
              desc: 'Direct co-investment opportunities in high-growth Indian fintech, logistics, and renewable energy startups.',
              icon: <Layers className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            },
            {
              title: 'Succession & Trust Advisory',
              subtitle: 'Generational Continuity',
              desc: 'Fiduciary structuring, multi-jurisdiction family trusts, and wealth preservation frameworks.',
              icon: <Lock className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            }
          ].map((pillar, i) => (
            <GlassCard key={i} hoverEffect glow="cyan" className="p-6">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-[#06111F] border border-slate-200 dark:border-cyan-400/30 flex items-center justify-center mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">{pillar.title}</h3>
              <p className="text-xs text-sky-600 dark:text-cyan-300 font-mono font-semibold mt-0.5">{pillar.subtitle}</p>
              <p className="text-xs text-slate-600 dark:text-[#A9BDD1] mt-3 leading-relaxed">{pillar.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Interactive Wealth Projection Simulator */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="rounded-3xl p-8 sm:p-12 bg-white dark:bg-[#081A2D]/90 border border-slate-200 dark:border-[#0EA5FF]/30 backdrop-blur-2xl shadow-xl text-left">
          <Badge variant="cyan">INTERACTIVE WEALTH MODELER</Badge>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display mt-2 mb-2">
            Simulate Your Investment Trajectory
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-[#A9BDD1] mb-8 max-w-xl">
            Model compound growth projections across diversified conservative, balanced, and growth mandates.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              {/* Capital Slider */}
              <div>
                <div className="flex justify-between items-center text-sm font-semibold mb-2">
                  <span className="text-slate-700 dark:text-slate-300">Initial Allocation Capital</span>
                  <span className="font-mono text-sky-600 dark:text-cyan-300 text-base font-bold">₹{initialCapital.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="250000"
                  max="50000000"
                  step="250000"
                  value={initialCapital}
                  onChange={(e) => setInitialCapital(Number(e.target.value))}
                  className="w-full accent-sky-500 dark:accent-cyan-400 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 dark:text-slate-500 font-mono mt-1">
                  <span>₹2.5 Lakhs</span>
                  <span>₹5 Crores</span>
                </div>
              </div>

              {/* Horizon Slider */}
              <div>
                <div className="flex justify-between items-center text-sm font-semibold mb-2">
                  <span className="text-slate-700 dark:text-slate-300">Investment Horizon</span>
                  <span className="font-mono text-sky-600 dark:text-cyan-300 text-base font-bold">{horizonYears} Years</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={horizonYears}
                  onChange={(e) => setHorizonYears(Number(e.target.value))}
                  className="w-full accent-sky-500 dark:accent-cyan-400 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 dark:text-slate-500 font-mono mt-1">
                  <span>1 Year</span>
                  <span>20 Years</span>
                </div>
              </div>

              {/* Risk Profile Selection */}
              <div>
                <label className="text-xs text-slate-700 dark:text-slate-300 font-medium block mb-2">Target Strategy Profile</label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setRiskProfile('conservative')}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      riskProfile === 'conservative'
                        ? 'bg-sky-50 dark:bg-cyan-500/20 border-sky-500 dark:border-cyan-400 text-sky-950 dark:text-white font-bold shadow-xs'
                        : 'bg-slate-50 dark:bg-[#06111F] border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <div>Conservative</div>
                    <div className="text-[10px] text-sky-600 dark:text-cyan-400 font-mono font-semibold mt-0.5">~9.5% p.a.</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRiskProfile('balanced')}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      riskProfile === 'balanced'
                        ? 'bg-sky-50 dark:bg-cyan-500/20 border-sky-500 dark:border-cyan-400 text-sky-950 dark:text-white font-bold shadow-xs'
                        : 'bg-slate-50 dark:bg-[#06111F] border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <div>Balanced</div>
                    <div className="text-[10px] text-sky-600 dark:text-cyan-400 font-mono font-semibold mt-0.5">~13.5% p.a.</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRiskProfile('aggressive')}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      riskProfile === 'aggressive'
                        ? 'bg-sky-50 dark:bg-cyan-500/20 border-sky-500 dark:border-cyan-400 text-sky-950 dark:text-white font-bold shadow-xs'
                        : 'bg-slate-50 dark:bg-[#06111F] border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <div>Growth Alpha</div>
                    <div className="text-[10px] text-sky-600 dark:text-cyan-400 font-mono font-semibold mt-0.5">~17.5% p.a.</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Projection Card */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-[#06111F] border border-slate-200 dark:border-cyan-400/40 text-center space-y-4 shadow-sm">
              <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono font-semibold">
                Projected Portfolio Value
              </div>
              <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500 dark:from-cyan-300 dark:to-[#0EA5FF] font-display">
                ₹{futureValue.toLocaleString('en-IN')}
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <div className="text-slate-500">Initial Principal</div>
                  <div className="font-mono text-slate-900 dark:text-white font-semibold mt-0.5">
                    ₹{initialCapital.toLocaleString('en-IN')}
                  </div>
                </div>
                <div>
                  <div className="text-slate-500">Projected Gains</div>
                  <div className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                    +₹{wealthGained.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link to="/contact">
                  <Button variant="glow" size="md" className="w-full justify-center">
                    Schedule Wealth Consultation →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Governance */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8">
        <div className="p-6 rounded-2xl bg-white dark:bg-[#06111F]/70 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 leading-relaxed text-left">
          <p>
            <strong className="text-slate-700 dark:text-slate-300">Fiduciary & Regulatory Disclaimer:</strong> Investment products and advisory facilities are subject to market risks, including the possible loss of principal amount invested. Projections displayed on this simulator are purely mathematical simulations based on hypothetical annual compounding rates and do not guarantee future returns. Registered investment advisors and SEBI-compliant intermediaries underwrite specific portfolio mandates.
          </p>
        </div>
      </section>
    </div>
  );
};
