import React, { useState } from 'react';
import { PageHero } from '../components/layout/PageHero';
import { heroImages } from '../data/heroImages';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { CreditScoreChecker } from '../components/features/CreditScoreChecker';
import { EligibilityIndicators } from '../components/features/EligibilityIndicators';
import { 
  Calculator as CalcIcon, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  RotateCcw, 
  Zap, 
  PieChart, 
  Percent,
  DollarSign,
  Calendar,
  Building2,
  CheckCircle2,
  Gauge
} from 'lucide-react';

interface CalculatorProps {
  onOpenApply: (type: 'loan' | 'insurance', slug?: string) => void;
}

export const CalculatorPage: React.FC<CalculatorProps> = ({ onOpenApply }) => {
  const [activeTab, setActiveTab] = useState<'emi' | 'sip' | 'insurance' | 'credit'>('emi');

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState<number>(3500000);
  const [interestRate, setInterestRate] = useState<number>(8.65);
  const [tenureYears, setTenureYears] = useState<number>(20);

  // EMI Calculation: [P x R x (1+R)^N]/[(1+R)^N-1]
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const monthlyEmi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  ) || 0;
  const totalRepayment = monthlyEmi * totalMonths;
  const totalInterest = Math.max(0, totalRepayment - loanAmount);
  const interestPercentage = totalRepayment > 0 ? Math.round((totalInterest / totalRepayment) * 100) : 0;
  const principalPercentage = 100 - interestPercentage;

  // SIP Calculator State
  const [sipMonthly, setSipMonthly] = useState<number>(15000);
  const [sipReturnRate, setSipReturnRate] = useState<number>(13.5);
  const [sipYears, setSipYears] = useState<number>(10);

  // SIP Future Value formula: P × ({[1 + i]^n - 1} / i) × (1 + i)
  const sipMonthlyRate = sipReturnRate / 12 / 100;
  const sipTotalMonths = sipYears * 12;
  const sipFutureValue = Math.round(
    sipMonthly *
      ((Math.pow(1 + sipMonthlyRate, sipTotalMonths) - 1) / sipMonthlyRate) *
      (1 + sipMonthlyRate)
  ) || 0;
  const sipInvestedAmount = sipMonthly * sipTotalMonths;
  const sipEstimatedGain = Math.max(0, sipFutureValue - sipInvestedAmount);

  // Insurance Coverage Estimator State
  const [annualIncome, setAnnualIncome] = useState<number>(1200000);
  const [currentLiabilities, setCurrentLiabilities] = useState<number>(2500000);
  const [dependents, setDependents] = useState<number>(3);

  // Standard underwriting formula: (Annual Income * 15) + Liabilities
  const recommendedTermCover = (annualIncome * 15) + currentLiabilities;
  const recommendedHealthCover = dependents <= 2 ? 1000000 : 2500000;

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070D1B] text-slate-800 dark:text-[#E6F1FF] transition-colors duration-300 pb-24">
      {/* Universal Page Hero with Stunning Picture */}
      <PageHero
        badge="PRECISION FINANCIAL COMPUTING"
        badgeVariant="cyan"
        title="Smart Financial"
        highlight="Calculators & Forecasting"
        description="Model your borrowing capacity, estimate exact monthly loan EMIs, plan systemic wealth compounding, and calculate family insurance coverage with institutional algorithms."
        breadcrumbs={[{ label: 'Calculators & Tools' }]}
        image={{
          src: heroImages.calculator.src,
          alt: heroImages.calculator.alt,
          overlayTag: heroImages.calculator.tag,
          floatingBadge: {
            title: heroImages.calculator.floatingTitle,
            subtitle: heroImages.calculator.floatingSubtitle
          }
        }}
        stats={[
          { label: 'Real-Time Precision', value: '100% Exact', subtext: 'Based on RBI formula', icon: <Percent className="w-4 h-4" /> },
          { label: 'Multi-Lender Spreads', value: '8.40% - 14.5%', subtext: 'Live benchmark rate', icon: <TrendingUp className="w-4 h-4" /> },
          { label: 'Tenure Horizon', value: 'Up to 30 Yrs', subtext: 'Flexible amortization', icon: <Calendar className="w-4 h-4" /> },
          { label: 'Instant Eligibility', value: 'Zero Impact', subtext: 'No soft inquiry cost', icon: <Zap className="w-4 h-4" /> }
        ]}
        primaryAction={{
          label: 'Apply for Calculated Loan',
          onClick: () => onOpenApply('loan')
        }}
        secondaryAction={{
          label: 'Explore Loan Types',
          href: '/loans'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-1 p-1.5 rounded-2xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-slate-800 shadow-sm">
            <button
              onClick={() => setActiveTab('emi')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'emi'
                  ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <CalcIcon className="w-4 h-4" />
              <span>Loan EMI Calculator</span>
            </button>
            <button
              onClick={() => setActiveTab('sip')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'sip'
                  ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Wealth & SIP Growth</span>
            </button>
            <button
              onClick={() => setActiveTab('insurance')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'insurance'
                  ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Coverage Need Estimator</span>
            </button>
            <button
              onClick={() => setActiveTab('credit')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'credit'
                  ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Gauge className="w-4 h-4" />
              <span>Credit Score Checker</span>
            </button>
          </div>
        </div>

        {/* TAB 4: CREDIT SCORE CHECKER */}
        {activeTab === 'credit' && <CreditScoreChecker onOpenApply={onOpenApply} />}

        {/* TAB 1: LOAN EMI CALCULATOR */}
        {activeTab === 'emi' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controls */}
            <GlassCard className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                    Loan Repayment Parameters
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Adjust principal, benchmark interest rate, and duration
                  </p>
                </div>
                <button
                  onClick={() => {
                    setLoanAmount(3500000);
                    setInterestRate(8.65);
                    setTenureYears(20);
                  }}
                  className="p-2 text-slate-400 hover:text-cyan-500 transition-colors"
                  title="Reset to defaults"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Slider 1: Amount */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-slate-600 dark:text-slate-300">Loan Principal</span>
                  <span className="text-base sm:text-lg font-mono font-bold text-sky-600 dark:text-cyan-400">
                    {formatINR(loanAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min={100000}
                  max={50000000}
                  step={50000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>₹1 Lakh</span>
                  <span>₹2.5 Cr</span>
                  <span>₹5.0 Cr</span>
                </div>
              </div>

              {/* Slider 2: Interest Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-slate-600 dark:text-slate-300">Annual Interest Rate</span>
                  <span className="text-base sm:text-lg font-mono font-bold text-sky-600 dark:text-cyan-400">
                    {interestRate.toFixed(2)}% p.a.
                  </span>
                </div>
                <input
                  type="range"
                  min={6.5}
                  max={22.0}
                  step={0.05}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>6.5% (Subsidized)</span>
                  <span>8.65% (Avg Home)</span>
                  <span>22.0% (Unsecured)</span>
                </div>
              </div>

              {/* Slider 3: Tenure */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-slate-600 dark:text-slate-300">Tenure (Years)</span>
                  <span className="text-base sm:text-lg font-mono font-bold text-sky-600 dark:text-cyan-400">
                    {tenureYears} Years ({totalMonths} Months)
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>1 Year</span>
                  <span>15 Years</span>
                  <span>30 Years</span>
                </div>
              </div>

              {/* Preset quick loan chips */}
              <div className="pt-2">
                <span className="text-xs text-slate-500 font-medium block mb-2">
                  Popular Benchmark Scenarios:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Home Loan (₹40L @ 8.4%)', p: 4000000, r: 8.4, t: 20 },
                    { label: 'Business Loan (₹20L @ 11.5%)', p: 2000000, r: 11.5, t: 5 },
                    { label: 'Personal Loan (₹5L @ 10.99%)', p: 500000, r: 10.99, t: 3 },
                    { label: 'Mortgage LAP (₹1 Cr @ 9.25%)', p: 10000000, r: 9.25, t: 15 }
                  ].map((preset, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setLoanAmount(preset.p);
                        setInterestRate(preset.r);
                        setTenureYears(preset.t);
                      }}
                      className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors border border-slate-200 dark:border-slate-700"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>
            </GlassCard>

            {/* Visual Breakdown & Results */}
            <GlassCard className="lg:col-span-5 p-6 sm:p-8 space-y-6">
              <div className="text-center pb-4 border-b border-slate-200 dark:border-slate-800">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400">
                  Calculated Monthly Outflow
                </span>
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500 dark:from-cyan-300 dark:to-sky-400 font-display mt-1">
                  {formatINR(monthlyEmi)}
                  <span className="text-xs text-slate-500 font-normal ml-1">/mo</span>
                </div>
              </div>

              {/* Progress bar ratio */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-cyan-600 dark:text-cyan-400">Principal: {principalPercentage}%</span>
                  <span className="text-sky-600 dark:text-sky-400">Interest: {interestPercentage}%</span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex">
                  <div style={{ width: `${principalPercentage}%` }} className="bg-cyan-500 h-full" />
                  <div style={{ width: `${interestPercentage}%` }} className="bg-sky-500 h-full" />
                </div>
              </div>

              {/* Detailed Financial Stats */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-slate-200/70 dark:border-slate-800/70">
                  <span className="text-slate-500 dark:text-slate-400">Requested Principal</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">{formatINR(loanAmount)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200/70 dark:border-slate-800/70">
                  <span className="text-slate-500 dark:text-slate-400">Total Interest Payable</span>
                  <span className="font-mono font-bold text-cyan-600 dark:text-cyan-400">{formatINR(totalInterest)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200/70 dark:border-slate-800/70">
                  <span className="text-slate-500 dark:text-slate-400">Total Amount Payable</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">{formatINR(totalRepayment)}</span>
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-4 space-y-3">
                <Button
                  variant="glow"
                  className="w-full justify-center"
                  onClick={() => onOpenApply('loan')}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Apply with Calculated EMI
                </Button>
                <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
                  *Indicative EMI. Subject to partner bank credit policies and CIBIL score.
                </p>
              </div>
            </GlassCard>
          </div>
        )}

        {/* TAB 2: SIP & WEALTH GROWTH */}
        {activeTab === 'sip' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <GlassCard className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                    Systematic Investment Plan (SIP)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Forecast compounding returns on monthly mutual fund or portfolio contributions
                  </p>
                </div>
              </div>

              {/* Monthly contribution */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-slate-600 dark:text-slate-300">Monthly Contribution</span>
                  <span className="text-base sm:text-lg font-mono font-bold text-sky-600 dark:text-cyan-400">
                    {formatINR(sipMonthly)}
                  </span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={250000}
                  step={1000}
                  value={sipMonthly}
                  onChange={(e) => setSipMonthly(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>₹1,000</span>
                  <span>₹50,000</span>
                  <span>₹2.5 Lakhs</span>
                </div>
              </div>

              {/* Return Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-slate-600 dark:text-slate-300">Expected Annual Return Rate</span>
                  <span className="text-base sm:text-lg font-mono font-bold text-sky-600 dark:text-cyan-400">
                    {sipReturnRate.toFixed(1)}% p.a.
                  </span>
                </div>
                <input
                  type="range"
                  min={8}
                  max={24}
                  step={0.5}
                  value={sipReturnRate}
                  onChange={(e) => setSipReturnRate(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>8% (Conservative)</span>
                  <span>13.5% (Balanced Hybrid)</span>
                  <span>24% (Aggressive Small Cap)</span>
                </div>
              </div>

              {/* Horizon */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-slate-600 dark:text-slate-300">Time Horizon</span>
                  <span className="text-base sm:text-lg font-mono font-bold text-sky-600 dark:text-cyan-400">
                    {sipYears} Years
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={sipYears}
                  onChange={(e) => setSipYears(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>1 Year</span>
                  <span>15 Years</span>
                  <span>30 Years</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="lg:col-span-5 p-6 sm:p-8 space-y-6">
              <div className="text-center pb-4 border-b border-slate-200 dark:border-slate-800">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400">
                  Estimated Maturity Corpus
                </span>
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-500 dark:from-emerald-400 dark:to-cyan-300 font-display mt-1">
                  {formatINR(sipFutureValue)}
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-slate-200/70 dark:border-slate-800/70">
                  <span className="text-slate-500 dark:text-slate-400">Total Invested Capital</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">{formatINR(sipInvestedAmount)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200/70 dark:border-slate-800/70">
                  <span className="text-slate-500 dark:text-slate-400">Estimated Wealth Gain</span>
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">+{formatINR(sipEstimatedGain)}</span>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <Button
                  variant="glow"
                  className="w-full justify-center"
                  onClick={() => onOpenApply('insurance')}
                >
                  Consult Investment Advisory
                </Button>
              </div>
            </GlassCard>
          </div>
        )}

        {/* TAB 3: INSURANCE COVERAGE NEED */}
        {activeTab === 'insurance' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <GlassCard className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                Protection Needs Analysis
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Scientifically calculate adequate life term cover and family health insurance shields.
              </p>

              <div className="space-y-2">
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-slate-600 dark:text-slate-300">Annual Family Income</span>
                  <span className="font-mono font-bold text-sky-600 dark:text-cyan-400">{formatINR(annualIncome)}</span>
                </div>
                <input
                  type="range"
                  min={300000}
                  max={10000000}
                  step={100000}
                  value={annualIncome}
                  onChange={(e) => setAnnualIncome(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-slate-600 dark:text-slate-300">Current Outstanding Liabilities (Loans/LAP)</span>
                  <span className="font-mono font-bold text-sky-600 dark:text-cyan-400">{formatINR(currentLiabilities)}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={20000000}
                  step={200000}
                  value={currentLiabilities}
                  onChange={(e) => setCurrentLiabilities(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-slate-600 dark:text-slate-300">Number of Dependent Family Members</span>
                  <span className="font-mono font-bold text-sky-600 dark:text-cyan-400">{dependents} Members</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={8}
                  step={1}
                  value={dependents}
                  onChange={(e) => setDependents(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
                />
              </div>
            </GlassCard>

            <GlassCard className="lg:col-span-5 p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                Recommended Underwriting Cover
              </h3>

              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                <span className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold block">
                  RECOMMENDED TERM LIFE COVER
                </span>
                <span className="text-2xl font-black font-display text-slate-900 dark:text-white mt-1 block">
                  {formatINR(recommendedTermCover)}
                </span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  15x annual income + outstanding debts to secure family lifestyle in perpetuity.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold block">
                  RECOMMENDED HEALTH / FLOATER COVER
                </span>
                <span className="text-2xl font-black font-display text-slate-900 dark:text-white mt-1 block">
                  {formatINR(recommendedHealthCover)}
                </span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Comprehensive restoration cover across 10,000+ cashless network hospitals.
                </p>
              </div>

              <Button
                variant="glow"
                className="w-full justify-center"
                onClick={() => onOpenApply('insurance')}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Compare Matching Insurance Policies
              </Button>
            </GlassCard>
          </div>
        )}

        <EligibilityIndicators onOpenApply={onOpenApply} />
      </div>
    </div>
  );
};
