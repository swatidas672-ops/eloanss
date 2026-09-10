import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUpRight, 
  Globe, 
  Lock, 
  CheckCircle2,
  Calculator
} from 'lucide-react';
import { footerLoanLinks, footerInsuranceLinks, footerQuickLinks } from '../../data/navigation';
import eloanssLogoLight from '../../assets/brand/eloanss-logo-light.png';
import eloanssLogoDark from '../../assets/brand/eloanss-logo-dark.png';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-100 dark:bg-[#050A14] border-t border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-[#A9BDD1] pt-16 pb-12 overflow-hidden transition-colors duration-300">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#0284C7]/40 dark:via-[#0EA5FF]/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#0EA5FF]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex group" aria-label="ELOANSS home">
<>
              {/* The artwork is dark ink on white, so a transparent light
                  version plus a lightened dark version is used instead of
                  sitting the original on a white plaque. */}
              <img
                src={eloanssLogoLight}
                alt="ELOANSS - We Are Provide All Types of Loans"
                className="h-10 w-auto object-contain dark:hidden"
              />
              <img
                src={eloanssLogoDark}
                alt=""
                aria-hidden="true"
                className="hidden dark:block h-10 w-auto object-contain"
              />
            </>
            </Link>

            <p className="text-sm text-slate-600 dark:text-[#A9BDD1] leading-relaxed max-w-sm">
              Next-generation financial services platform connecting individuals and enterprises with loans, insurance, investment advisory, verified local distributors, and global market ecosystems.
            </p>

            <div className="flex items-center gap-4 pt-2 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400" />
                <span>256-bit Vault Security</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Verified Partner Network</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Platform & Tools
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerQuickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-sky-600 dark:hover:text-cyan-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Loan Solutions */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Loan Products
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerLoanLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-sky-600 dark:hover:text-cyan-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Insurance Solutions */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Insurance & Protection
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerInsuranceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-sky-600 dark:hover:text-cyan-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Corporate Hubs & Direct Channels */}
        <div className="py-8 border-b border-slate-200 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-sky-600 dark:text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-white block mb-0.5">Office</span>
              <span>#8-3-903/F/7&amp;10, Ratna Complex, Flat No: 404, Opp. R.S. Brothers, Y R Guda, Ameerpet, Hyderabad &ndash; 500038.</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-white block mb-0.5">Encrypted Direct Inquiries</span>
              <span className="text-sky-700 dark:text-cyan-300 font-medium">support@eloanss-platform.in</span>
              <span className="block text-slate-500">investors@eloanss-platform.in</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-white block mb-0.5">Phone</span>
              <a href="tel:+919030814455" className="text-slate-900 dark:text-white font-mono font-bold hover:text-sky-700 dark:hover:text-cyan-300 transition-colors">
                9030814455
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-8 p-4 rounded-2xl bg-white dark:bg-[#06111F]/70 border border-slate-200 dark:border-slate-800/60 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed space-y-2 shadow-xs">
          <p>
            <strong className="text-slate-700 dark:text-slate-300">Statutory Regulatory Notice:</strong> ELOANSS is an advanced financial technology and digital marketplace platform. Loans, credit lines, insurance policies, and investment instruments showcased on this website are originated, underwritten, and disbursed exclusively by partner banks, Reserve Bank of India (RBI) regulated Non-Banking Financial Companies (NBFCs), and Insurance Regulatory and Development Authority of India (IRDAI) licensed insurers.
          </p>
          <p>
            Final interest rates, processing fees, loan-to-value (LTV) limits, and approval terms are subject to lender risk policies, applicant credit score verification, and documentation. Demonstration statistics and calculators are indicative. Investment decisions involve market risks; information provided is for educational and guidance purposes.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center sm:text-left">
            <p>&copy; 2035 ELOANSS Technologies Limited. All rights reserved. Finance Beyond Today.</p>
            <p className="mt-1">
              Made by{' '}
              <a
                href="https://ayaaninnovations.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-700 dark:text-cyan-300 font-semibold hover:text-sky-900 dark:hover:text-white hover:underline transition-colors"
              >
                Ayaan Innovation
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">Security Architecture</Link>
            <Link to="/shareholders" className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">Governance</Link>
            <Link to="/contact" className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">Grievance Redressal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
