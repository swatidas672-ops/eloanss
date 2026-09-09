import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { heroImages } from '../data/heroImages';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { PageHero } from '../components/layout/PageHero';
import { 
  ShieldCheck, 
  Cpu, 
  Lock, 
  Building2, 
  ArrowRight, 
  Users,
  Compass,
  Globe2,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-[#070D1B] text-slate-800 dark:text-[#E6F1FF] min-h-screen transition-colors duration-300 pb-20">
      {/* Standardized Page Hero with Stunning Picture */}
      <PageHero
        badge="OUR ESSENCE & PURPOSE"
        badgeVariant="blue"
        title="Finance Beyond Today"
        highlight="Engineered for Generations"
        description="ELOANSS was founded with a singular mission: to eliminate structural inefficiencies in lending and insurance by combining advanced neural matching algorithms with accredited local human advisors."
        breadcrumbs={[{ label: 'About Us' }]}
        image={{
          src: heroImages.about.src,
          alt: heroImages.about.alt,
          overlayTag: heroImages.about.tag,
          floatingBadge: {
            title: heroImages.about.floatingTitle,
            subtitle: heroImages.about.floatingSubtitle
          }
        }}
        stats={[
          { label: 'Active Hubs', value: '500+ Cities', subtext: 'Pan-India footprint', icon: <Globe2 className="w-4 h-4" /> },
          { label: 'Partner Institutions', value: '50+ Banks', subtext: 'PSUs, Privates & NBFCs', icon: <Building2 className="w-4 h-4" /> },
          { label: 'Process Pipeline', value: '100% Digital', subtext: 'Paperless e-KYC', icon: <Zap className="w-4 h-4" /> },
          { label: 'Data Encryption', value: '256-bit AES', subtext: 'Hardware Security Modules', icon: <Lock className="w-4 h-4" /> }
        ]}
        primaryAction={{
          label: 'Explore Our Services',
          href: '/loans'
        }}
        secondaryAction={{
          label: 'Contact Corporate Office',
          href: '/contact'
        }}
      />

      {/* Vision 2035 & Mission Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-6 relative z-20 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <GlassCard className="p-8 sm:p-10">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-5 border border-cyan-400/30">
              <Compass className="w-6 h-6" />
            </div>
            <Badge variant="cyan">THE MISSION</Badge>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display mt-2 mb-3">
              Democratizing Sovereign-Grade Capital
            </h3>
            <p className="text-sm text-slate-600 dark:text-[#A9BDD1] leading-relaxed">
              Every individual, family, and ambitious enterprise in India deserves fair, fast, and transparent access to debt capital and institutional risk protection. We dismantle the cumbersome bureaucracy of traditional banking through straight-through digital automation.
            </p>
          </GlassCard>

          <GlassCard className="p-8 sm:p-10">
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-5 border border-sky-400/30">
              <Cpu className="w-6 h-6" />
            </div>
            <Badge variant="blue">THE 2035 HORIZON</Badge>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display mt-2 mb-3">
              Neural Financial Infrastructure
            </h3>
            <p className="text-sm text-slate-600 dark:text-[#A9BDD1] leading-relaxed">
              By 2035, financial transactions will be instantaneous, automated, and hyper-personalized. We are building the foundational credit routing highway that links individuals, businesses, and institutional balance sheets across the globe.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
        <SectionHeading
          badge="OUR PILLARS"
          title="The Values That Guide ELOANSS"
          highlight="Unyielding Standards"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {[
            {
              title: 'Radical Transparency',
              desc: 'No concealed loan fees, no misleading APR spreads, and zero hidden distributor brokerage.',
              icon: <ShieldCheck className="w-6 h-6 text-sky-600 dark:text-cyan-400" />
            },
            {
              title: 'Technological Mastery',
              desc: 'Continuous innovation in straight-through e-KYC pipelines, neural matching, and risk telemetry.',
              icon: <Cpu className="w-6 h-6 text-cyan-600 dark:text-sky-400" />
            },
            {
              title: 'Human Empathy',
              desc: 'Complementing high-velocity software with certified local human advisors who understand your community.',
              icon: <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            },
            {
              title: 'Institutional Safety',
              desc: 'Strict bank-grade vault encryption, regulatory compliance with RBI and IRDAI standards.',
              icon: <Lock className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            }
          ].map((v, i) => (
            <GlassCard key={i} hoverEffect glow="cyan" className="p-6">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#06111F] border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-4">
                {v.icon}
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white font-display mb-2">{v.title}</h4>
              <p className="text-xs text-slate-600 dark:text-[#A9BDD1] leading-relaxed">{v.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Security Architecture */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="rounded-3xl p-8 sm:p-12 bg-white dark:bg-[#081A2D]/90 border border-slate-200 dark:border-cyan-400/30 text-left shadow-lg">
          <Badge variant="cyan">CYBER VAULT ARCHITECTURE</Badge>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display mt-2 mb-4">
            Bank-Grade Cryptographic Protection
          </h3>
          <p className="text-sm text-slate-600 dark:text-[#A9BDD1] max-w-2xl mb-8">
            Your personal identifiable information, biometric hash logs, and bank statements are stored in hardware security modules (HSM) with 256-bit AES military encryption.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-600 dark:text-slate-300">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#06111F]/80 border border-slate-200 dark:border-slate-800">
              <div className="font-bold text-slate-900 dark:text-white text-sm mb-1">ISO 27001 Certified</div>
              <p className="text-slate-500 dark:text-slate-400">Audited information security management processes across all cloud servers.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#06111F]/80 border border-slate-200 dark:border-slate-800">
              <div className="font-bold text-slate-900 dark:text-white text-sm mb-1">Zero Third-Party Data Selling</div>
              <p className="text-slate-500 dark:text-slate-400">Your credit profile is strictly processed for the specific loan or policy requested.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#06111F]/80 border border-slate-200 dark:border-slate-800">
              <div className="font-bold text-slate-900 dark:text-white text-sm mb-1">Aadhaar e-Sign Compliant</div>
              <p className="text-slate-500 dark:text-slate-400">Legally recognized digital contract execution under the Information Technology Act.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join or Contact */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-sky-900 via-slate-900 to-cyan-950 text-white border border-cyan-400/40 space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            Shape the Future of Finance With Us
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Discover how ELOANSS is re-imagining capital access for millions across India.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link to="/loans">
              <Button variant="glow" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Explore Loan Solutions
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Contact Corporate Office
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
