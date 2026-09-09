import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { loanProducts } from '../../data/loans';
import { insuranceProducts } from '../../data/insurance';
import { sampleDistributors } from '../../data/distributors';
import { Search, ArrowRight, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApply: (type: 'loan' | 'insurance', slug: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onOpenApply
}) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const filteredLoans = query
    ? loanProducts.filter(
        (l) =>
          l.name.toLowerCase().includes(query.toLowerCase()) ||
          l.shortDesc.toLowerCase().includes(query.toLowerCase()) ||
          l.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const filteredInsurance = query
    ? insuranceProducts.filter(
        (i) =>
          i.name.toLowerCase().includes(query.toLowerCase()) ||
          i.shortDesc.toLowerCase().includes(query.toLowerCase()) ||
          i.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const filteredDistributors = query
    ? sampleDistributors.filter(
        (d) =>
          d.name.toLowerCase().includes(query.toLowerCase()) ||
          d.city.toLowerCase().includes(query.toLowerCase()) ||
          d.state.toLowerCase().includes(query.toLowerCase()) ||
          d.agencyName.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelect = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Universal Financial Search"
      subtitle="Search across all loans, insurance policies, and distributor nodes"
      maxWidth="xl"
    >
      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-600 dark:text-cyan-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type 'Home Loan', 'Health', 'Mumbai', 'Business'..."
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-[#06111F] border border-slate-300 dark:border-[#0EA5FF]/30 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500 dark:focus:border-cyan-400 text-sm shadow-inner"
          />
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto space-y-4 pr-1">
          {query.trim() === '' ? (
            <div className="py-6 text-center text-xs text-slate-500 dark:text-slate-400">
              <p>Quick Suggestions:</p>
              <div className="mt-2 flex flex-wrap justify-center gap-2">
                {['Home Loan', 'Business Loan', 'Health Insurance', 'Bandra BKC', 'Gold Loan'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setQuery(item)}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#0A192B] text-sky-700 dark:text-cyan-300 border border-slate-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-cyan-500 transition-all text-xs cursor-pointer font-medium"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Loans matched */}
              {filteredLoans.length > 0 && (
                <div>
                  <div className="text-[11px] font-mono text-sky-600 dark:text-cyan-400 uppercase tracking-wider mb-2 font-semibold">
                    Loan Products ({filteredLoans.length})
                  </div>
                  <div className="space-y-1.5">
                    {filteredLoans.map((loan) => (
                      <div
                        key={loan.id}
                        onClick={() => handleSelect(`/loans/${loan.slug}`)}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-[#06111F]/80 border border-slate-200 dark:border-slate-800 hover:border-sky-400/40 dark:hover:border-cyan-400/40 hover:bg-slate-100 dark:hover:bg-[#0D2138] cursor-pointer flex items-center justify-between transition-all"
                      >
                        <div>
                          <div className="text-sm font-semibold text-slate-900 dark:text-white">{loan.name}</div>
                          <div className="text-xs text-slate-500 dark:text-[#A9BDD1] mt-0.5">{loan.interestRate} • {loan.maxAmount}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-sky-600 dark:text-cyan-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Insurance matched */}
              {filteredInsurance.length > 0 && (
                <div>
                  <div className="text-[11px] font-mono text-sky-600 dark:text-cyan-400 uppercase tracking-wider mb-2 font-semibold">
                    Insurance Solutions ({filteredInsurance.length})
                  </div>
                  <div className="space-y-1.5">
                    {filteredInsurance.map((ins) => (
                      <div
                        key={ins.id}
                        onClick={() => handleSelect(`/insurance/${ins.slug}`)}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-[#06111F]/80 border border-slate-200 dark:border-slate-800 hover:border-sky-400/40 dark:hover:border-cyan-400/40 hover:bg-slate-100 dark:hover:bg-[#0D2138] cursor-pointer flex items-center justify-between transition-all"
                      >
                        <div>
                          <div className="text-sm font-semibold text-slate-900 dark:text-white">{ins.name}</div>
                          <div className="text-xs text-slate-500 dark:text-[#A9BDD1] mt-0.5">{ins.coverageUpTo} • {ins.startingPremium}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-sky-600 dark:text-cyan-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Distributors matched */}
              {filteredDistributors.length > 0 && (
                <div>
                  <div className="text-[11px] font-mono text-sky-600 dark:text-cyan-400 uppercase tracking-wider mb-2 font-semibold">
                    Distributors ({filteredDistributors.length})
                  </div>
                  <div className="space-y-1.5">
                    {filteredDistributors.map((dist) => (
                      <div
                        key={dist.id}
                        onClick={() => handleSelect('/distributors')}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-[#06111F]/80 border border-slate-200 dark:border-slate-800 hover:border-sky-400/40 dark:hover:border-cyan-400/40 hover:bg-slate-100 dark:hover:bg-[#0D2138] cursor-pointer flex items-center justify-between transition-all"
                      >
                        <div>
                          <div className="text-sm font-semibold text-slate-900 dark:text-white">{dist.agencyName}</div>
                          <div className="text-xs text-slate-500 dark:text-[#A9BDD1] mt-0.5 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-sky-600 dark:text-sky-400" />
                            <span>{dist.city}, {dist.state}</span>
                          </div>
                        </div>
                        <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">★ {dist.rating}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {filteredLoans.length === 0 && filteredInsurance.length === 0 && filteredDistributors.length === 0 && (
                <div className="py-8 text-center text-sm text-slate-500 dark:text-slate-400">
                  No direct results found for "{query}". Try searching for another loan type or city.
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Modal>
  );
};
