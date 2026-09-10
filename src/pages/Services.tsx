import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { heroImages } from '../data/heroImages';
import { Button } from '../components/ui/Button';
import { PageHero } from '../components/layout/PageHero';
import { 
  Cpu,  
  ShieldCheck, 
  ArrowRight, 
  Zap,  
  Server, 
  Calculator
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceCategories } from '../components/features/ServiceCategories';

export const Services: React.FC = () => {

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

      {/* Service categories */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-6 relative z-20 mb-16">
        <ServiceCategories />
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
