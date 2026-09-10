import React, { useState } from 'react';
import { loanProducts } from '../../data/loans';
import { insuranceProducts } from '../../data/insurance';
import { sampleDistributors } from '../../data/distributors';
import { allStateNames, districtsOf, citiesOf } from '../../data/indiaLocations';
import { Button } from '../ui/Button';
import { Select } from '../ui/Select';
import { Badge } from '../ui/Badge';
import { 
  Search, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';
import { Distributor } from '../../types';

interface SmartFinancialFinderProps {
  onOpenApply?: (type: 'loan' | 'insurance', productSlug: string) => void;
  className?: string;
}

export const SmartFinancialFinder: React.FC<SmartFinancialFinderProps> = ({
  onOpenApply,
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState<'loans' | 'insurance' | 'invest'>('loans');
  
  // Form State
  const [loanType, setLoanType] = useState('home-loan');
  const [insuranceType, setInsuranceType] = useState('health-insurance');
  const [investGoal, setInvestGoal] = useState('wealth-creation');
  
  const [selectedState, setSelectedState] = useState('Maharashtra');
  const [selectedDistrict, setSelectedDistrict] = useState(districtsOf('Maharashtra')[0]);
  const [selectedCity, setSelectedCity] = useState(citiesOf('Maharashtra', districtsOf('Maharashtra')[0])[0]);
  
  // Results & Loading
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [matchedDistributor, setMatchedDistributor] = useState<Distributor | null>(null);

  // Cascading location logic
  const currentDistricts = districtsOf(selectedState);
  const currentCities = citiesOf(selectedState, selectedDistrict);

  const handleStateChange = (stateName: string) => {
    setSelectedState(stateName);
    const districts = districtsOf(stateName);
    const firstDistrict = districts[0] ?? '';
    setSelectedDistrict(firstDistrict);
    setSelectedCity(citiesOf(stateName, firstDistrict)[0] ?? '');
  };

  const handleDistrictChange = (districtName: string) => {
    setSelectedDistrict(districtName);
    setSelectedCity(citiesOf(selectedState, districtName)[0] ?? '');
  };

  const handleFind = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setHasSearched(false);

    setTimeout(() => {
      const found = sampleDistributors.find((d) => d.state === selectedState) || sampleDistributors[0];
      setMatchedDistributor(found);
      setIsLoading(false);
      setHasSearched(true);
    }, 800);
  };

  return (
    <div
      id="smart-financial-finder"
      className={`rounded-2xl bg-white/95 dark:bg-[#081A2D]/90 border border-slate-200/90 dark:border-[#0EA5FF]/30 p-5 sm:p-7 shadow-xl dark:shadow-[0_20px_50px_rgba(2,8,23,0.8)] backdrop-blur-2xl relative overflow-hidden text-slate-800 dark:text-white transition-colors duration-300 ${className}`}
    >
      {/* Top electric glow streak */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">Find Your Best Option</h3>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-[#A9BDD1] mt-0.5">
            Real-time algorithmic matching across top lenders & local partners
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-3 p-1 rounded-xl bg-slate-100 dark:bg-[#020817]/80 border border-slate-200 dark:border-slate-800 mb-5">
        <button
          type="button"
          onClick={() => {
            setActiveTab('loans');
            setHasSearched(false);
          }}
          className={`py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
            activeTab === 'loans'
              ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md'
              : 'text-slate-600 dark:text-[#A9BDD1] hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Loans
        </button>
        <button
          type="button"
          onClick={() => {
            setActiveTab('insurance');
            setHasSearched(false);
          }}
          className={`py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
            activeTab === 'insurance'
              ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md'
              : 'text-slate-600 dark:text-[#A9BDD1] hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Insurance
        </button>
        <button
          type="button"
          onClick={() => {
            setActiveTab('invest');
            setHasSearched(false);
          }}
          className={`py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
            activeTab === 'invest'
              ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md'
              : 'text-slate-600 dark:text-[#A9BDD1] hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Invest
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleFind} className="space-y-3.5">
        {activeTab === 'loans' && (
          <Select
            label="Select Loan Type"
            value={loanType}
            onChange={(e) => setLoanType(e.target.value)}
            options={loanProducts.map((l) => ({ value: l.slug, label: `${l.name} (${l.interestRate})` }))}
          />
        )}

        {activeTab === 'insurance' && (
          <Select
            label="Select Insurance Solution"
            value={insuranceType}
            onChange={(e) => setInsuranceType(e.target.value)}
            options={insuranceProducts.map((i) => ({ value: i.slug, label: `${i.name} (${i.startingPremium})` }))}
          />
        )}

        {activeTab === 'invest' && (
          <Select
            label="Investment & Advisory Focus"
            value={investGoal}
            onChange={(e) => setInvestGoal(e.target.value)}
            options={[
              { value: 'wealth-creation', label: 'Wealth Building & Private Portfolio Management' },
              { value: 'business-capital', label: 'Business Expansion & Private Equity Syndicate' },
              { value: 'long-term-planning', label: 'Long-Term Retirement & Succession Planning' },
              { value: 'advisory', label: 'Family Office & Institutional Advisory' }
            ]}
          />
        )}

        {/* Location Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <Select
            label="State"
            value={selectedState}
            onChange={(e) => handleStateChange(e.target.value)}
            options={allStateNames.map((name) => ({ value: name, label: name }))}
          />

          <Select
            label="District"
            value={selectedDistrict}
            onChange={(e) => handleDistrictChange(e.target.value)}
            options={currentDistricts.map((d) => ({ value: d, label: d }))}
          />

          <Select
            label="City / Hub"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            options={currentCities.map((c) => ({ value: c, label: c }))}
          />
        </div>

        <Button
          type="submit"
          variant="glow"
          className="w-full mt-2"
          isLoading={isLoading}
          rightIcon={<ArrowRight className="w-4 h-4" />}
        >
          Find Best Option →
        </Button>
      </form>

      {/* Results State */}
      {hasSearched && matchedDistributor && (
        <div className="mt-5 pt-4 border-t border-slate-200 dark:border-[#0EA5FF]/25">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-cyan-400" />
              <span className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                1 Verified Match Found
              </span>
            </div>
            <Badge variant="cyan">99.8% Match Score</Badge>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#06111F]/90 border border-slate-200 dark:border-slate-700/80 hover:border-cyan-400/40 transition-all">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display">{matchedDistributor.agencyName}</h4>
                  <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                </div>
                <p className="text-xs text-slate-600 dark:text-[#A9BDD1] mt-0.5">
                  Lead Advisor: <span className="text-slate-800 dark:text-slate-200 font-medium">{matchedDistributor.name}</span> • Code: <span className="font-mono text-cyan-600 dark:text-cyan-300 font-bold">{matchedDistributor.partnerCode}</span>
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-sky-600 dark:text-sky-400" />
                  <span>{selectedCity}, {selectedDistrict}, {selectedState}</span>
                </p>
              </div>

              <div className="text-right">
                <span className="inline-block px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                  ★ {matchedDistributor.rating}
                </span>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">{matchedDistributor.completedCases}+ cases</p>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="text-[11px] text-slate-600 dark:text-[#A9BDD1]">
                Languages: <span className="text-slate-800 dark:text-slate-300">{matchedDistributor.languages.join(', ')}</span>
              </div>
              <Button
                variant="primary"
                size="sm"
                onClick={() => onOpenApply?.(activeTab === 'insurance' ? 'insurance' : 'loan', activeTab === 'insurance' ? insuranceType : loanType)}
              >
                Connect With Distributor
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Subtext */}
      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-[#A9BDD1]">
        <ShieldCheck className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
        <span>Connect with our verified distributors across 500+ Indian cities.</span>
      </div>
    </div>
  );
};
