import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { heroImages } from '../data/heroImages';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { PageHero } from '../components/layout/PageHero';
import { 
  Cpu, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Code, 
  Server, 
  Building2,
  Terminal,
  Calculator
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
  const fintechServices = [
    {
      title: 'Lending API Orchestration',
      subtitle: 'Straight-Through Underwriting',
      desc: 'Connect your business or retail portal directly to 50+ banking APIs. Automate applicant ingestion, credit scoring, and sanction generation.',
      icon: <Cpu className="w-6 h-6 text-sky-600 dark:text-cyan-400" />
    },
    {
      title: 'Insurance Integration Engine',
      subtitle: 'Instant Quote & Policy Issuance',
      desc: 'Seamlessly embed health, motor, life, and marine insurance checkout flows into e-commerce, logistics, and HR payroll applications.',
      icon: <ShieldCheck className="w-6 h-6 text-sky-600 dark:text-sky-400" />
    },
    {
      title: 'Decentralized Distributor CRM',
      subtitle: 'Pan-India Operations Portal',
      desc: 'Enterprise software suite for 1,500+ distributors with commission calculations, lead allocation, document digitization, and case tracking.',
      icon: <Layers className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
    },
    {
      title: 'Bureau Analytics & Risk Modeling',
      subtitle: 'Neural Credit Scoring',
      desc: 'Deep learning models that assess non-traditional credit signals, GST returns, and banking cash flows for self-employed and MSME borrowers.',
      icon: <Server className="w-6 h-6 text-amber-600 dark:text-amber-400" />
    },
    {
      title: 'White-Label Neo-Banking Suite',
      subtitle: 'Turnkey Digital Finance',
      desc: 'Complete branded front-end and back-end stack enabling corporate brands and financial institutions to launch co-branded credit products.',
      icon: <Building2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
    },
    {
      title: 'Automated NACH & Mandate Engine',
      subtitle: 'Recurring Repayment Clearing',
      desc: 'High-speed e-Mandate registration, NPCI integration, and automated recurring debit clearing with sub-percent failure rates.',
      icon: <Zap className="w-6 h-6 text-sky-600 dark:text-cyan-400" />
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#070D1B] text-slate-800 dark:text-[#E6F1FF] min-h-screen transition-colors duration-300 pb-20">
      {/* Standardized Page Hero with Stunning Picture */}
      <PageHero
        badge="ENTERPRISE FINTECH INFRASTRUCTURE"
        badgeVariant="blue"
        title="Financial Services Platform"
        highlight="Architected for Modern Enterprise"
        description="Robust, secure, and scalable financial APIs and platform modules powering credit origination, insurance distribution, and distributor operations across India."
        breadcrumbs={[{ label: 'Services' }]}
        image={{
          src: heroImages.services.src,
          alt: heroImages.services.alt,
          overlayTag: heroImages.services.tag,
          floatingBadge: {
            title: heroImages.services.floatingTitle,
            subtitle: heroImages.services.floatingSubtitle
          }
        }}
        stats={[
          { label: 'API Processing Speed', value: '42ms Latency', subtext: 'Sub-second underwriting', icon: <Zap className="w-4 h-4" /> },
          { label: 'Integrated Institutions', value: '50+ Banking APIs', subtext: 'Seamless credit conduits', icon: <Cpu className="w-4 h-4" /> },
          { label: 'Uptime SLA', value: '99.99% Availability', subtext: 'Multi-region redundancy', icon: <Server className="w-4 h-4" /> },
          { label: 'Security Standard', value: 'Mutual TLS / OAuth2', subtext: 'Bank-grade protocol', icon: <ShieldCheck className="w-4 h-4" /> }
        ]}
        primaryAction={{
          label: 'Request API Sandbox',
          href: '/contact'
        }}
        secondaryAction={{
          label: 'Financial Calculators',
          href: '/calculator',
          icon: <Calculator className="w-4 h-4 text-sky-600 dark:text-cyan-400" />
        }}
      />

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-6 relative z-20 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {fintechServices.map((service, idx) => (
            <GlassCard key={idx} hoverEffect glow="cyan" className="p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-[#06111F] border border-slate-200 dark:border-cyan-400/30 flex items-center justify-center mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">{service.title}</h3>
                <div className="text-xs text-sky-600 dark:text-cyan-300 font-mono font-semibold mt-1">{service.subtitle}</div>
                <p className="text-xs text-slate-600 dark:text-[#A9BDD1] mt-3 leading-relaxed">{service.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                <Link to="/contact" className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-cyan-300 flex items-center gap-1">
                  <span>Inquire Enterprise Access</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Developer API Preview Terminal */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="rounded-3xl p-8 sm:p-12 bg-white dark:bg-[#081A2D]/90 border border-slate-200 dark:border-cyan-400/30 text-left shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-sky-600 dark:text-cyan-400" />
              <span className="font-mono text-xs text-slate-900 dark:text-white uppercase font-bold tracking-wider">
                ELOANSS High-Velocity API Endpoint
              </span>
            </div>
            <Badge variant="cyan">REST / JSON / 99.99% SLA</Badge>
          </div>

          <div className="rounded-2xl bg-slate-950 p-5 font-mono text-xs text-cyan-300 overflow-x-auto border border-slate-800 shadow-inner">
            <pre className="text-slate-400">// POST https://api.eloanss-platform.in/v2/underwrite/match</pre>
            <pre className="text-cyan-300 mt-2">
{`{
  "applicant_id": "EL-IND-908234",
  "facility_requested": "home_loan",
  "requested_amount_inr": 7500000,
  "cibil_score": 782,
  "employment_type": "salaried",
  "verified_monthly_income_inr": 185000,
  "district_code": "MH-MUM-BKC"
}`}
            </pre>
            <div className="my-3 border-t border-slate-800" />
            <pre className="text-emerald-400">
{`// 200 OK — Algorithmic Match Response (Latency: 42ms)
{
  "status": "PRE_APPROVED",
  "recommended_institution": "State Institutional Partner Syndicate",
  "indicative_apr": "8.40%",
  "max_sanction_inr": 8500000,
  "assigned_distributor_node": "MUM-BKC-MASTER-01"
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-sky-900 via-slate-900 to-cyan-950 text-white border border-cyan-400/40 space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            Partner With Our Technology Team
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Schedule a technical consultation to integrate ELOANSS lending and insurance APIs into your platform.
          </p>
          <div className="pt-2 flex justify-center">
            <Link to="/contact">
              <Button variant="glow" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Request API Credentials & Sandbox →
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
