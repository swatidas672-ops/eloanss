import React, { useState, useEffect } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { loanProducts } from '../../data/loans';
import { insuranceProducts } from '../../data/insurance';
import { CheckCircle2, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: 'loan' | 'insurance';
  defaultProduct?: string;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({
  isOpen,
  onClose,
  defaultType = 'loan',
  defaultProduct
}) => {
  const [appType, setAppType] = useState<'loan' | 'insurance'>(defaultType);
  const [selectedProduct, setSelectedProduct] = useState(defaultProduct || (defaultType === 'loan' ? 'home-loan' : 'health-insurance'));
  const [amount, setAmount] = useState('2500000');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [employmentType, setEmploymentType] = useState('salaried');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // The modal stays mounted for the app's lifetime, so the useState initialisers
  // above only ever run once. Without this, every launch showed the first-ever
  // product regardless of which one the caller asked for.
  useEffect(() => {
    if (!isOpen) return;
    setAppType(defaultType);
    setSelectedProduct(
      defaultProduct || (defaultType === 'loan' ? 'home-loan' : 'health-insurance')
    );
  }, [isOpen, defaultType, defaultProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setReferenceId(`EL-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title={isSuccess ? "Application Submitted" : "Digital Application Portal"}
      subtitle={isSuccess ? "Your request has been routed to our intelligent credit network" : "Fast-track your application with 100% encrypted digital processing"}
      maxWidth="lg"
    >
      {isSuccess ? (
        <div className="text-center py-6">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30 shadow-md">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 font-display">Instant Sanction Initiated</h4>
          <p className="text-sm text-slate-600 dark:text-[#A9BDD1] mb-6 max-w-md mx-auto">
            Thank you, <span className="text-slate-900 dark:text-white font-medium">{fullName || 'Valued Client'}</span>. Your application reference code is:
          </p>
          <div className="inline-block px-5 py-3 rounded-xl bg-slate-100 dark:bg-[#06111F] border border-sky-400/40 text-sky-600 dark:text-cyan-300 font-mono text-lg font-bold tracking-wider mb-6 shadow-inner">
            {referenceId}
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0A192B]/70 border border-slate-200 dark:border-slate-700/50 text-left text-xs text-slate-600 dark:text-[#A9BDD1] space-y-2 mb-6">
            <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-medium">
              <Zap className="w-4 h-4 shrink-0" />
              <span>Next Immediate Steps</span>
            </div>
            <p>1. Our AI system has matched your profile with a verified local distributor in your city.</p>
            <p>2. A dedicated relationship executive will contact you on <span className="text-slate-900 dark:text-white font-semibold">{phone || '+91 •••••'}</span> within 15 minutes to verify documents.</p>
            <p>3. Track live application milestones directly in your secure SMS portal.</p>
          </div>
          <Button variant="primary" onClick={handleReset} className="w-full">
            Done & Return to Site
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Type Selector */}
          <div className="grid grid-cols-2 p-1 rounded-xl bg-slate-100 dark:bg-[#06111F] border border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => {
                setAppType('loan');
                setSelectedProduct('home-loan');
              }}
              className={`py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                appType === 'loan'
                  ? 'bg-sky-600 dark:bg-gradient-to-r dark:from-[#0EA5FF] dark:to-[#168BFF] text-white shadow-md'
                  : 'text-slate-600 dark:text-[#A9BDD1] hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Loan Facility
            </button>
            <button
              type="button"
              onClick={() => {
                setAppType('insurance');
                setSelectedProduct('health-insurance');
              }}
              className={`py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                appType === 'insurance'
                  ? 'bg-sky-600 dark:bg-gradient-to-r dark:from-[#0EA5FF] dark:to-[#168BFF] text-white shadow-md'
                  : 'text-slate-600 dark:text-[#A9BDD1] hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Insurance Protection
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Select
              label={appType === 'loan' ? "Choose Loan Product" : "Choose Insurance Product"}
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
              options={
                appType === 'loan'
                  ? loanProducts.map((l) => ({ value: l.slug, label: l.name }))
                  : insuranceProducts.map((i) => ({ value: i.slug, label: i.name }))
              }
            />

            <Input
              label={appType === 'loan' ? "Desired Loan Amount (₹)" : "Desired Sum Insured (₹)"}
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g. 2500000"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Full Legal Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              required
            />

            <Input
              label="Mobile Number (OTP Verified)"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              required
            />

            <Input
              label="City / Location"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="e.g. Mumbai, Bengaluru"
              required
            />
          </div>

          <Select
            label="Employment Status"
            value={employmentType}
            onChange={(e) => setEmploymentType(e.target.value)}
            options={[
              { value: 'salaried', label: 'Salaried Professional (MNC / Corporate / Govt)' },
              { value: 'self-employed-business', label: 'Self Employed - Business / Enterprise' },
              { value: 'self-employed-professional', label: 'Self Employed - Doctor / CA / Consultant' },
              { value: 'transport-fleet', label: 'Commercial Fleet / Transport Operator' }
            ]}
          />

          <div className="pt-2 flex items-center justify-between text-xs text-slate-500 dark:text-[#A9BDD1]">
            <div className="flex items-center gap-1.5 text-sky-600 dark:text-cyan-400">
              <ShieldCheck className="w-4 h-4" />
              <span>256-bit AES Vault Encryption</span>
            </div>
            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
              <span>No Impact on Credit Score</span>
            </div>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="glow"
              size="lg"
              className="w-full"
              isLoading={isSubmitting}
            >
              Submit Application & Match Distributor →
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
