import React from 'react';
import { PageHero } from '../components/layout/PageHero';
import { heroImages } from '../data/heroImages';
import { EligibilityChecker } from '../components/features/EligibilityChecker';
import { EligibilityIndicators } from '../components/features/EligibilityIndicators';
import { BadgeCheck, ShieldCheck, Zap, Percent, Gauge } from 'lucide-react';

interface EligibilityPageProps {
  onOpenApply: (type: 'loan' | 'insurance', slug?: string) => void;
}

export const EligibilityPage: React.FC<EligibilityPageProps> = ({ onOpenApply }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070D1B] text-slate-800 dark:text-[#E6F1FF] transition-colors duration-300 pb-24">
      <PageHero
        badge="INSTANT ELIGIBILITY CHECK"
        badgeVariant="cyan"
        title="Check Your Loan"
        highlight="Eligibility in Seconds"
        description="Enter a few details to see how much you could borrow, your indicative EMI and rate, and exactly which criteria you meet — before you ever submit an application. No credit enquiry, nothing leaves your browser."
        breadcrumbs={[{ label: 'Eligibility Check' }]}
        image={{
          src: heroImages.loans.src,
          alt: heroImages.loans.alt
        }}
        stats={[
          { label: 'Soft Check', value: 'Zero Impact', subtext: 'No hit to your credit score', icon: <ShieldCheck className="w-4 h-4" /> },
          { label: 'Result Speed', value: 'Instant', subtext: 'Live, on-device estimate', icon: <Zap className="w-4 h-4" /> },
          { label: 'Loan Types', value: '5 Products', subtext: 'Home, LAP, Personal, Business, Car', icon: <BadgeCheck className="w-4 h-4" /> },
          { label: 'Based On', value: 'FOIR Model', subtext: 'The same ratio lenders use', icon: <Percent className="w-4 h-4" /> }
        ]}
        primaryAction={{
          label: 'Check Credit Score',
          href: '/calculator',
          icon: <Gauge className="w-4 h-4" />
        }}
        secondaryAction={{
          label: 'Explore Loan Types',
          href: '/loans'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <EligibilityChecker onOpenApply={onOpenApply} />

        {/* Reference: the indicative thresholds we underwrite against. */}
        <div className="mt-16">
          <EligibilityIndicators onOpenApply={onOpenApply} />
        </div>
      </div>
    </div>
  );
};
