import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BadgeCheck,
  ShieldCheck,
  Info,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  MapPin,
  IndianRupee,
  Wallet
} from 'lucide-react';
import { Button } from '../ui/Button';
import { GlassCard } from '../ui/GlassCard';
import { Select } from '../ui/Select';
import { Input } from '../ui/Input';
import {
  assessEligibility,
  defaultEligibilityInput,
  loanTypeOptions,
  employmentOptions,
  creditBandOptions,
  loanConfig,
  type EligibilityInput,
  type LoanType,
  type Employment,
  type CreditBand,
  type Verdict,
  type CheckStatus
} from '../../data/eligibility';

interface EligibilityCheckerProps {
  onOpenApply?: (type: 'loan' | 'insurance', slug?: string) => void;
}

const formatINR = (val: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(Math.max(0, Math.round(val)));

/** Compact ₹ display: 45,00,000 -> ₹45.0 L, 1,20,00,000 -> ₹1.2 Cr. */
const formatCompactINR = (val: number): string => {
  const v = Math.max(0, Math.round(val));
  if (v >= 10000000) return `₹${(v / 10000000).toFixed(2).replace(/\.00$/, '')} Cr`;
  if (v >= 100000) return `₹${(v / 100000).toFixed(1).replace(/\.0$/, '')} L`;
  return formatINR(v);
};

const verdictTheme: Record<
  Verdict,
  { tone: string; ring: string; bar: string; icon: React.ReactNode; label: string }
> = {
  eligible: {
    tone: 'text-emerald-600 dark:text-emerald-400',
    ring: 'border-emerald-500/40',
    bar: '#10B981',
    icon: <CheckCircle2 className="w-6 h-6" />,
    label: 'Eligible'
  },
  review: {
    tone: 'text-amber-600 dark:text-amber-400',
    ring: 'border-amber-500/40',
    bar: '#F59E0B',
    icon: <AlertTriangle className="w-6 h-6" />,
    label: 'Conditional'
  },
  ineligible: {
    tone: 'text-rose-600 dark:text-rose-400',
    ring: 'border-rose-500/40',
    bar: '#F43F5E',
    icon: <XCircle className="w-6 h-6" />,
    label: 'Not yet'
  }
};

const checkIcon: Record<CheckStatus, React.ReactNode> = {
  pass: <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />,
  warn: <AlertTriangle className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />,
  fail: <XCircle className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
};

export const EligibilityChecker: React.FC<EligibilityCheckerProps> = ({ onOpenApply }) => {
  const [input, setInput] = useState<EligibilityInput>(defaultEligibilityInput);

  const result = useMemo(() => assessEligibility(input), [input]);
  const theme = verdictTheme[result.verdict];

  const set = <K extends keyof EligibilityInput>(key: K, value: EligibilityInput[K]) =>
    setInput((prev) => ({ ...prev, [key]: value }));

  const activeConfig = loanConfig[input.loanType];
  const coveragePct = Math.round(result.coverage * 100);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
      {/* ---------------- Inputs ---------------- */}
      <GlassCard hoverEffect={false} className="lg:col-span-7 p-6 sm:p-8">
        <div className="flex items-start gap-3 mb-6">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-500 to-cyan-400 text-white flex items-center justify-center shrink-0 shadow-md">
            <BadgeCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
              Eligibility Checker
            </h3>
            <p className="text-sm text-slate-600 dark:text-[#A9BDD1]">
              Enter a few details to see how much you could borrow and whether you qualify.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Select
              label="Loan type"
              value={input.loanType}
              onChange={(e) => set('loanType', e.target.value as LoanType)}
              options={loanTypeOptions}
            />
            <Select
              label="Employment"
              value={input.employment}
              onChange={(e) => set('employment', e.target.value as Employment)}
              options={employmentOptions}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input
              label={input.employment === 'salaried' ? 'Monthly income' : 'Monthly business income'}
              type="number"
              min={0}
              step={5000}
              leftIcon={<IndianRupee className="w-4 h-4" />}
              value={input.monthlyIncome}
              onChange={(e) => set('monthlyIncome', Number(e.target.value))}
            />
            <Input
              label="Current total EMIs"
              type="number"
              min={0}
              step={1000}
              leftIcon={<Wallet className="w-4 h-4" />}
              value={input.existingEmi}
              onChange={(e) => set('existingEmi', Number(e.target.value))}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input
              label="Your age"
              type="number"
              min={18}
              max={75}
              value={input.age}
              onChange={(e) => set('age', Number(e.target.value))}
            />
            <Select
              label="Credit profile"
              value={input.creditBand}
              onChange={(e) => set('creditBand', e.target.value as CreditBand)}
              options={creditBandOptions}
            />
          </div>

          <Input
            label="Loan amount you want"
            type="number"
            min={0}
            step={100000}
            leftIcon={<IndianRupee className="w-4 h-4" />}
            value={input.requestedAmount}
            onChange={(e) => set('requestedAmount', Number(e.target.value))}
          />

          <div>
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="eligibility-tenure"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-[#A9BDD1]"
              >
                Repayment tenure
              </label>
              <span className="text-sm font-bold text-sky-600 dark:text-cyan-300 font-display">
                {input.tenureYears} {input.tenureYears === 1 ? 'year' : 'years'}
              </span>
            </div>
            <input
              id="eligibility-tenure"
              type="range"
              min={1}
              max={activeConfig.maxTenureYears}
              step={1}
              value={Math.min(input.tenureYears, activeConfig.maxTenureYears)}
              onChange={(e) => set('tenureYears', Number(e.target.value))}
              className="w-full accent-sky-500 dark:accent-cyan-400 cursor-pointer"
            />
            <p className="mt-1.5 text-[11px] text-slate-500 dark:text-slate-400">
              {activeConfig.label} allows up to {activeConfig.maxTenureYears} years. Longer tenures
              lower the EMI and raise the amount you qualify for.
            </p>
          </div>

          <div className="flex items-center justify-end pt-1">
            <button
              type="button"
              onClick={() => setInput(defaultEligibilityInput)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-100/80 dark:bg-[#06111F]/60 border border-slate-200 dark:border-slate-800">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
            Nothing you enter here leaves your browser. This tool runs entirely on your device, makes
            no enquiry against your credit file, and does not create an application.
          </p>
        </div>
      </GlassCard>

      {/* ---------------- Result ---------------- */}
      <div className="lg:col-span-5 space-y-6">
        <GlassCard hoverEffect={false} className={`p-6 sm:p-8 ${theme.ring}`}>
          <div className="flex items-center gap-3">
            <div className={theme.tone}>{theme.icon}</div>
            <div>
              <div className={`text-xl font-black font-display leading-tight ${theme.tone}`}>
                {result.headline}
              </div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {theme.label} · {activeConfig.label}
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm text-slate-600 dark:text-[#A9BDD1] leading-relaxed">
            {result.summary}
          </p>

          {/* Headline numbers */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-slate-100/80 dark:bg-[#06111F]/60 border border-slate-200 dark:border-slate-800 p-4">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Indicative max
              </div>
              <div className="mt-1 text-xl font-black text-slate-900 dark:text-white font-display">
                {formatCompactINR(result.maxAmount)}
              </div>
            </div>
            <div className="rounded-xl bg-slate-100/80 dark:bg-[#06111F]/60 border border-slate-200 dark:border-slate-800 p-4">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Est. EMI
              </div>
              <div className="mt-1 text-xl font-black text-slate-900 dark:text-white font-display">
                {result.requestedEmi > 0 ? formatINR(result.requestedEmi) : '—'}
              </div>
            </div>
            <div className="rounded-xl bg-slate-100/80 dark:bg-[#06111F]/60 border border-slate-200 dark:border-slate-800 p-4">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Indicative rate
              </div>
              <div className="mt-1 text-xl font-black text-slate-900 dark:text-white font-display">
                {result.rate.toFixed(2)}%
              </div>
            </div>
            <div className="rounded-xl bg-slate-100/80 dark:bg-[#06111F]/60 border border-slate-200 dark:border-slate-800 p-4">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Monthly headroom
              </div>
              <div className="mt-1 text-xl font-black text-slate-900 dark:text-white font-display">
                {formatINR(result.repaymentCapacity)}
              </div>
            </div>
          </div>

          {/* Coverage of the requested amount */}
          {result.requestedAmount > 0 && (
            <div className="mt-5">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-slate-700 dark:text-slate-200">
                  Covers your {formatCompactINR(result.requestedAmount)} request
                </span>
                <span className="text-slate-500 dark:text-slate-400 font-mono">{coveragePct}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${coveragePct}%`, backgroundColor: theme.bar }}
                />
              </div>
            </div>
          )}

          {/* Underwriting checklist */}
          <div className="mt-6 space-y-3">
            {result.checks.map((c) => (
              <div key={c.key} className="flex items-start gap-2.5">
                {checkIcon[c.status]}
                <div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                    {c.label}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                    {c.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
          <Button
            variant="glow"
            className="w-full justify-center"
            disabled={result.verdict === 'ineligible'}
            onClick={() => onOpenApply?.('loan', activeConfig.slug)}
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            {result.verdict === 'ineligible'
              ? 'Adjust your inputs to apply'
              : `Apply for ${activeConfig.label}`}
          </Button>
          <Link to="/distributors" className="w-full">
            <Button
              variant="secondary"
              className="w-full justify-center"
              leftIcon={<MapPin className="w-4 h-4 text-sky-600 dark:text-cyan-400" />}
            >
              Talk to a Local Advisor
            </Button>
          </Link>
        </div>

        <div className="flex items-start gap-2.5 px-1">
          <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
          <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
            Indicative estimate only, based on a standard FOIR assessment. Final eligibility, amount
            and rate are set by the lender after verifying income, documents and your bureau report.
          </p>
        </div>
      </div>
    </div>
  );
};
