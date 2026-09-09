import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { heroImages } from '../data/heroImages';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { PageHero } from '../components/layout/PageHero';
import { 
  Building2, 
  FileText, 
  ShieldCheck, 
  Download, 
  ArrowRight, 
  Scale,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Shareholders: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const financialReports = [
    { title: 'Annual Financial Report FY 2034-35', date: 'June 2035', size: '3.4 MB', type: 'Audited PDF' },
    { title: 'Q3 Financial Performance Brief & Disclosures', date: 'March 2035', size: '1.8 MB', type: 'Quarterly PDF' },
    { title: 'Corporate Governance & Board Charter Manual', date: 'January 2035', size: '2.1 MB', type: 'Statutory PDF' },
    { title: 'ESG Sustainability & Fair Lending Audit', date: 'November 2034', size: '4.2 MB', type: 'Annual Audit' }
  ];

  const handleDownload = (title: string) => {
    setDownloadSuccess(title);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 4000);
  };

  return (
    <div className="bg-slate-50 dark:bg-[#070D1B] text-slate-800 dark:text-[#E6F1FF] min-h-screen transition-colors duration-300 pb-20">
      {/* Standardized Page Hero with Stunning Picture */}
      <PageHero
        badge="INVESTOR RELATIONS & GOVERNANCE"
        badgeVariant="blue"
        title="Corporate Governance"
        highlight="Shareholder Relations"
        description="Committed to the highest standards of financial integrity, regulatory compliance, statutory reporting, and fiduciary shareholder value creation."
        breadcrumbs={[{ label: 'Shareholders' }]}
        image={{
          src: heroImages.shareholders.src,
          alt: heroImages.shareholders.alt,
          overlayTag: heroImages.shareholders.tag,
          floatingBadge: {
            title: heroImages.shareholders.floatingTitle,
            subtitle: heroImages.shareholders.floatingSubtitle
          }
        }}
        stats={[
          { label: 'Leverage Profile', value: 'Zero Net Debt', subtext: 'Pristine liquidity reserves', icon: <Scale className="w-4 h-4" /> },
          { label: 'Board Independence', value: '60% Independent', subtext: 'Audit & Risk committees', icon: <Building2 className="w-4 h-4" /> },
          { label: 'Statutory Alignment', value: '100% MCA Aligned', subtext: 'Full corporate disclosure', icon: <ShieldCheck className="w-4 h-4" /> },
          { label: 'Earnings Regularity', value: 'Quarterly Audits', subtext: 'Transparent filings', icon: <TrendingUp className="w-4 h-4" /> }
        ]}
        primaryAction={{
          label: 'Download Annual Report',
          onClick: () => handleDownload('Annual Financial Report FY 2034-35')
        }}
        secondaryAction={{
          label: 'Investor Relations Contact',
          href: '#contact-desk'
        }}
      />

      {/* Download Alert Notice */}
      {downloadSuccess && (
        <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto -mt-4 mb-8">
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>Digital filing document <strong>{downloadSuccess}</strong> prepared and dispatched.</span>
          </div>
        </div>
      )}

      {/* Highlights */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-6 relative z-20 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <GlassCard className="p-6">
            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono font-semibold">FINANCIAL RATIO</div>
            <div className="text-3xl font-black text-slate-900 dark:text-white font-display mt-2">Zero Net Debt</div>
            <p className="text-xs text-slate-600 dark:text-[#A9BDD1] mt-1">Robust balance sheet with pristine liquidity reserve ratio.</p>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono font-semibold">GOVERNANCE INDEX</div>
            <div className="text-3xl font-black text-sky-600 dark:text-cyan-300 font-display mt-2">Independent Board</div>
            <p className="text-xs text-slate-600 dark:text-[#A9BDD1] mt-1">60% Independent Directors on Audit and Risk Committees.</p>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono font-semibold">REGULATORY COMPLIANCE</div>
            <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 font-display mt-2">100% Aligned</div>
            <p className="text-xs text-slate-600 dark:text-[#A9BDD1] mt-1">Full adherence to Ministry of Corporate Affairs guidelines.</p>
          </GlassCard>
        </div>
      </section>

      {/* Disclosures & PDF Reports */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <SectionHeading
          badge="STATUTORY DISCLOSURES"
          title="Financial Filings & Reports"
          highlight="Audited Institutional Records"
          description="Download recent quarterly filings, annual balance sheets, and governance charters."
        />

        <div className="space-y-3 max-w-4xl mx-auto">
          {financialReports.map((report, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-[#06111F]/80 border border-slate-200 dark:border-slate-800 hover:border-sky-500 dark:hover:border-cyan-400/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all text-left shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 dark:bg-cyan-500/20 text-sky-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{report.title}</h4>
                  <div className="text-xs text-slate-500 dark:text-[#A9BDD1] mt-0.5">
                    Published: {report.date} • {report.size} • <span className="font-mono text-sky-600 dark:text-cyan-400 font-semibold">{report.type}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleDownload(report.title)}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-[#0A192B] border border-slate-200 dark:border-cyan-500/30 text-sky-700 dark:text-cyan-300 hover:bg-sky-100 dark:hover:bg-cyan-500/20 text-xs font-semibold flex items-center gap-2 transition-all shrink-0 justify-center cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Report</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Shareholder Contact Info */}
      <section id="contact-desk" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-28">
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#081A2D]/80 border border-slate-200 dark:border-slate-700 text-left shadow-lg">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-2">
            Investor Relations & Registrar Contact
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-[#A9BDD1] max-w-2xl mb-6">
            For share transfers, dividend queries, and institutional investor relations inquiries, please contact our Secretarial & Compliance Desk.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-slate-600 dark:text-slate-300">
            <div>
              <div className="font-bold text-slate-900 dark:text-white">Company Secretary & Compliance Officer:</div>
              <div className="mt-1 text-slate-500 dark:text-slate-400">Ms. Ananya Deshmukh, FCS</div>
              <div className="mt-0.5 text-sky-600 dark:text-cyan-300 font-mono font-semibold">investors@eloanss-platform.in</div>
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white">Registered Corporate Office:</div>
              <div className="mt-1 text-slate-500 dark:text-slate-400">#8-3-903/F/7&amp;10, Ratna Complex, Flat No: 404, Opp. R.S. Brothers, Y R Guda, Ameerpet, Hyderabad &ndash; 500038.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
