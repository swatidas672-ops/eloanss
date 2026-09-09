import React, { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { Calculator, ArrowRight, CheckCircle2, DollarSign } from 'lucide-react';

interface EMICalculatorWidgetProps {
  onApply?: (loanType?: string) => void;
  className?: string;
}

export const EMICalculatorWidget: React.FC<EMICalculatorWidgetProps> = ({
  onApply,
  className = ''
}) => {
  const [loanAmount, setLoanAmount] = useState<number>(3500000); // 35 Lakhs
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5%
  const [tenureYears, setTenureYears] = useState<number>(20); // 20 years

  // EMI Formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
  const monthlyRate = interestRate / (12 * 100);
  const totalMonths = tenureYears * 12;
  
  const monthlyEMI = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const totalPayment = monthlyEMI * totalMonths;
  const totalInterest = totalPayment - loanAmount;
  const principalPercentage = Math.round((loanAmount / totalPayment) * 100);
  const interestPercentage = 100 - principalPercentage;

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className={`rounded-3xl bg-white dark:bg-[#081A2D]/95 border border-slate-200 dark:border-cyan-500/30 p-6 sm:p-8 backdrop-blur-2xl shadow-xl ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-500/10 dark:bg-cyan-500/20 text-sky-600 dark:text-cyan-400 flex items-center justify-center">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
              Smart Loan EMI & Repayment Simulator
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Calculate monthly outflow, interest impact, and amortization breakdown
            </p>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full bg-sky-50 dark:bg-[#0A1D34] border border-sky-500/20 dark:border-cyan-500/30 text-sky-700 dark:text-cyan-300 text-xs font-mono font-semibold">
          REAL-TIME ENGINE
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders Side */}
        <div className="lg:col-span-7 space-y-6">
          {/* Loan Amount Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Loan Amount Required
              </label>
              <span className="text-sm font-bold font-mono text-sky-600 dark:text-cyan-400">
                {formatINR(loanAmount)}
              </span>
            </div>
            <input
              type="range"
              min="100000"
              max="20000000"
              step="50000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-600 dark:accent-cyan-400"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>₹1 Lakh</span>
              <span>₹1 Crore</span>
              <span>₹2 Crores</span>
            </div>
          </div>

          {/* Interest Rate Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Annual Interest Rate (% p.a.)
              </label>
              <span className="text-sm font-bold font-mono text-sky-600 dark:text-cyan-400">
                {interestRate.toFixed(2)}%
              </span>
            </div>
            <input
              type="range"
              min="7.5"
              max="18.0"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-600 dark:accent-cyan-400"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>7.5% (Prime Home Loan)</span>
              <span>12.0%</span>
              <span>18.0% (Unsecured)</span>
            </div>
          </div>

          {/* Tenure Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Tenure Duration
              </label>
              <span className="text-sm font-bold font-mono text-sky-600 dark:text-cyan-400">
                {tenureYears} Years ({totalMonths} Months)
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-600 dark:accent-cyan-400"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>1 Year</span>
              <span>15 Years</span>
              <span>30 Years</span>
            </div>
          </div>
        </div>

        {/* Output Metrics Side */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-50 dark:bg-[#06111F] border border-slate-200 dark:border-slate-800 text-left space-y-5">
          <div>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono block">MONTHLY ESTIMATED EMI</span>
            <div className="text-3xl sm:text-4xl font-black text-sky-600 dark:text-cyan-300 font-display mt-1">
              {formatINR(monthlyEMI)}
            </div>
            <span className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-0.5 block">
              ★ Pre-approved instant sanction eligible
            </span>
          </div>

          {/* Visual Ratio Bar */}
          <div>
            <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 mb-1.5 font-medium">
              <span>Principal: {principalPercentage}%</span>
              <span>Interest: {interestPercentage}%</span>
            </div>
            <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden flex">
              <div
                style={{ width: `${principalPercentage}%` }}
                className="bg-sky-500 dark:bg-cyan-400 transition-all duration-300"
              />
              <div
                style={{ width: `${interestPercentage}%` }}
                className="bg-indigo-400 dark:bg-indigo-500 transition-all duration-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs pt-2 border-t border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-slate-500 dark:text-slate-400 block">Total Principal:</span>
              <span className="font-bold text-slate-900 dark:text-white font-mono">{formatINR(loanAmount)}</span>
            </div>
            <div>
              <span className="text-slate-500 dark:text-slate-400 block">Total Interest:</span>
              <span className="font-bold text-slate-900 dark:text-white font-mono">{formatINR(totalInterest)}</span>
            </div>
          </div>

          <Button
            variant="glow"
            size="md"
            className="w-full justify-center"
            onClick={() => onApply?.()}
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Apply for this Facility →
          </Button>
        </div>
      </div>
    </div>
  );
};
