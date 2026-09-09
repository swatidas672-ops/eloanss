import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { heroImages } from '../data/heroImages';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { PageHero } from '../components/layout/PageHero';
import { 
  Globe2, 
  ShieldCheck, 
  ArrowRight, 
  Building2, 
  Anchor, 
  CheckCircle2,
  DollarSign,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const GlobalBusiness: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-[#070D1B] text-slate-800 dark:text-[#E6F1FF] min-h-screen transition-colors duration-300 pb-20">
      {/* Standardized Page Hero with Stunning Picture */}
      <PageHero
        badge="CROSS-BORDER FINANCIAL SYNDICATION"
        badgeVariant="blue"
        title="Borderless Capital"
        highlight="Global Enterprise Financing"
        description="Empowering Indian conglomerates, export-import enterprises, and multinational entities with cross-border trade facilities, international credit lines, and multi-currency capital."
        breadcrumbs={[{ label: 'Global Business' }]}
        image={{
          src: heroImages.global.src,
          alt: heroImages.global.alt,
          overlayTag: heroImages.global.tag,
          floatingBadge: {
            title: heroImages.global.floatingTitle,
            subtitle: heroImages.global.floatingSubtitle
          }
        }}
        stats={[
          { label: 'Trade Corridors', value: '40+ Gateways', subtext: 'Global banking lines', icon: <Globe2 className="w-4 h-4" /> },
          { label: 'Supported FX', value: 'USD, EUR, AED, GBP', subtext: 'Multi-currency facilities', icon: <DollarSign className="w-4 h-4" /> },
          { label: 'Key Nodes', value: 'DIFC & GIFT City', subtext: 'Offshore sovereign SEZs', icon: <Building2 className="w-4 h-4" /> },
          { label: 'Financing Model', value: 'Syndicated Debt', subtext: 'SOFR-linked spreads', icon: <Briefcase className="w-4 h-4" /> }
        ]}
        primaryAction={{
          label: 'Connect With Global Desk',
          href: '/contact'
        }}
        secondaryAction={{
          label: 'Explore Commercial Loans',
          href: '/loans'
        }}
      />

      {/* Global Solutions Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-6 relative z-20 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <GlassCard hoverEffect glow="cyan" className="p-8">
            <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-[#06111F] border border-slate-200 dark:border-cyan-400/30 flex items-center justify-center mb-5">
              <Anchor className="w-6 h-6 text-sky-600 dark:text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">Export-Import Trade Credit</h3>
            <p className="text-xs text-slate-600 dark:text-[#A9BDD1] mt-3 leading-relaxed">
              Pre-shipment and post-shipment export credit, international Letters of Credit (LCs), and bank guarantees across 40+ global trade hubs.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400" />
                <span>USD, EUR, GBP, and AED denominated facilities</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400" />
                <span>Competitive SOFR/EURIBOR linked spreads</span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard hoverEffect glow="blue" className="p-8">
            <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-[#06111F] border border-slate-200 dark:border-sky-400/30 flex items-center justify-center mb-5">
              <Building2 className="w-6 h-6 text-sky-600 dark:text-sky-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">Foreign Subsidiary Structuring</h3>
            <p className="text-xs text-slate-600 dark:text-[#A9BDD1] mt-3 leading-relaxed">
              Assisting Indian companies establishing operating hubs in Dubai (DIFC), Singapore, London, and Delaware with overseas debt financing.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>Tax-efficient cross-border holding architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>Global institutional partner underwriting</span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard hoverEffect glow="cyan" className="p-8">
            <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-[#06111F] border border-slate-200 dark:border-emerald-400/30 flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">FX Risk & Hedging Solutions</h3>
            <p className="text-xs text-slate-600 dark:text-[#A9BDD1] mt-3 leading-relaxed">
              Dynamic currency forwards, options, and structured interest rate swaps mitigating currency volatility on international supply chain obligations.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Automated algorithmic limit monitoring</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>FEMA & RBI compliance integration</span>
              </li>
            </ul>
          </GlassCard>
        </div>
      </section>

      {/* Global Trade Corridors */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
        <SectionHeading
          badge="INTERNATIONAL FOOTPRINT"
          title="Active Trade & Capital Corridors"
          highlight="Connecting India to Key Financial Centers"
          description="Facilitating cross-border debt syndication between India and premier global gateways."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          {[
            { city: 'Dubai, UAE', hub: 'DIFC Gateway Hub', tag: 'GCC & MENA Trade' },
            { city: 'Singapore', hub: 'Marina Bay Axis', tag: 'ASEAN & APAC Gateway' },
            { city: 'London, UK', hub: 'Canary Wharf Node', tag: 'Eurozone Capital Markets' },
            { city: 'GIFT City, India', hub: 'IFSC Sovereign SEZ', tag: 'Domestic Offshore Hub' }
          ].map((c, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white dark:bg-[#06111F]/90 border border-slate-200 dark:border-slate-800 hover:border-sky-500 dark:hover:border-cyan-400/40 transition-all shadow-xs">
              <div className="text-sm font-bold text-slate-900 dark:text-white font-display">{c.city}</div>
              <div className="text-xs text-sky-600 dark:text-cyan-300 font-mono font-semibold mt-0.5">{c.hub}</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">{c.tag}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Inquiries CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-sky-900 via-slate-900 to-cyan-950 text-white border border-cyan-400/40 text-center space-y-4 shadow-xl">
          <Badge variant="cyan">GLOBAL TRADE DESK</Badge>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            Expand Your Enterprise Across Borders
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Speak directly with our International Syndication Desk to structure overseas debt and trade credit.
          </p>
          <div className="pt-2">
            <Link to="/contact">
              <Button variant="glow" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Connect With Global Advisory Team →
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
