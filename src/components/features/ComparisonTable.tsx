import React, { useState } from 'react';
import { loanProducts } from '../../data/loans';
import { ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ComparisonTableProps {
  onApply?: (productSlug: string) => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onApply }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filtered = selectedCategory === 'all'
    ? loanProducts.slice(0, 8)
    : loanProducts.filter((l) => l.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-4 scrollbar-none">
        {[
          { id: 'all', label: 'All Primary Loans' },
          { id: 'property', label: 'Property & Home' },
          { id: 'business', label: 'Business & Commercial' },
          { id: 'auto', label: 'Automotive & Fleet' },
          { id: 'personal', label: 'Personal & Immediate' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === tab.id
                ? 'bg-sky-600 dark:bg-gradient-to-r dark:from-[#0EA5FF] dark:to-[#168BFF] text-white shadow-md'
                : 'bg-white dark:bg-[#0A192B]/70 text-slate-600 dark:text-[#A9BDD1] hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Responsive Matrix Table Container */}
      <div className="rounded-2xl border border-slate-200 dark:border-[#0EA5FF]/20 bg-white/95 dark:bg-[#06111F]/80 backdrop-blur-xl overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700 dark:text-[#E6F1FF]">
            <thead className="bg-slate-100 dark:bg-[#081A2D] text-slate-800 dark:text-white uppercase text-[11px] font-mono border-b border-slate-200 dark:border-slate-700/80">
              <tr>
                <th className="p-4 sm:p-5">Product</th>
                <th className="p-4 sm:p-5">Interest Rate</th>
                <th className="p-4 sm:p-5">Processing Fee</th>
                <th className="p-4 sm:p-5">Max Tenure</th>
                <th className="p-4 sm:p-5">Eligibility Highlight</th>
                <th className="p-4 sm:p-5">Processing Time</th>
                <th className="p-4 sm:p-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800/60">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-[#0D2138]/60 transition-colors">
                  <td className="p-4 sm:p-5">
                    <Link
                      to={`/loans/${item.slug}`}
                      className="font-bold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-cyan-300 font-display flex items-center gap-1.5"
                    >
                      {item.name}
                    </Link>
                    <span className="text-[10px] text-sky-600 dark:text-sky-400 block mt-0.5 font-medium">{item.tagline}</span>
                  </td>
                  <td className="p-4 sm:p-5 font-mono text-sky-600 dark:text-cyan-300 font-semibold whitespace-nowrap">
                    {item.interestRate}
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600 dark:text-slate-300 whitespace-nowrap">
                    {item.processingFee}
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600 dark:text-slate-300 whitespace-nowrap">
                    {item.tenure}
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600 dark:text-slate-300 max-w-xs">
                    <span className="line-clamp-2">{item.eligibility[0]}</span>
                  </td>
                  <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-medium whitespace-nowrap">
                    {item.processingTime}
                  </td>
                  <td className="p-4 sm:p-5 text-right whitespace-nowrap">
                    <button
                      onClick={() => onApply?.(item.slug)}
                      className="px-3.5 py-1.5 rounded-lg bg-sky-600 dark:bg-gradient-to-r dark:from-[#0EA5FF] dark:to-[#168BFF] text-white font-semibold text-xs hover:bg-sky-700 dark:hover:from-[#38BDF8] dark:hover:to-[#0EA5FF] transition-all shadow-xs cursor-pointer"
                    >
                      Apply Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mandatory Transparency Note */}
        <div className="p-4 bg-slate-50 dark:bg-[#081A2D]/70 border-t border-slate-200 dark:border-slate-800 flex items-start gap-2.5 text-xs text-slate-600 dark:text-[#A9BDD1]">
          <ShieldAlert className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-900 dark:text-white">Underwriting Disclaimer:</strong> Final rates and terms depend on lender underwriting policies, applicant profile, verifiable income, CIBIL score, and institutional approval. Displayed values represent current institutional benchmark ranges.
          </p>
        </div>
      </div>
    </div>
  );
};
