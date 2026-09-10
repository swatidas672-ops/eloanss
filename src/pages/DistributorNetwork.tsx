import React, { useState } from 'react';
import { sampleDistributors, locationHierarchy } from '../data/distributors';
import { heroImages } from '../data/heroImages';
import { IndiaNetworkVisual } from '../components/features/IndiaNetworkVisual';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { PageHero } from '../components/layout/PageHero';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Search, 
  UserCheck, 
  Star, 
  CheckCircle2, 
  ArrowRight,
  Users,
  Building2,
  Globe2,
  Award
} from 'lucide-react';

export const DistributorNetwork: React.FC = () => {
  const [selectedState, setSelectedState] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Become a distributor form state
  const [partnerName, setPartnerName] = useState('');
  const [partnerPhone, setPartnerPhone] = useState('');
  const [partnerCity, setPartnerCity] = useState('');
  const [partnerExperience, setPartnerExperience] = useState('3-5 years');
  const [isSubmittingPartner, setIsSubmittingPartner] = useState(false);
  const [partnerSuccess, setPartnerSuccess] = useState(false);

  // Filter distributors
  const filteredDistributors = sampleDistributors.filter((d) => {
    const matchesState = selectedState === 'all' || d.state === selectedState;
    const matchesSearch =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.agencyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.partnerCode.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesState && matchesSearch;
  });

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingPartner(true);
    setTimeout(() => {
      setIsSubmittingPartner(false);
      setPartnerSuccess(true);
    }, 1000);
  };

  return (
    <div className="bg-slate-50 dark:bg-[#070D1B] text-slate-800 dark:text-[#E6F1FF] min-h-screen transition-colors duration-300 pb-20">
      {/* Standardized Page Hero with Stunning Picture */}
      <PageHero
        badge="PAN-INDIA VERIFIED FINANCIAL FOOTPRINT"
        badgeVariant="blue"
        title="Pan-India Distributor Network"
        highlight="Trusted In-Person Financial Guidance"
        description="Connecting over 500+ Indian cities with 1,500+ accredited local financial advisors, DSA partners, and corporate distributors for zero-brokerage doorstep assistance."
        breadcrumbs={[{ label: 'Distributor Network' }]}
        image={{
          src: heroImages.distributors.src,
          alt: heroImages.distributors.alt,
          overlayTag: heroImages.distributors.tag,
          floatingBadge: {
            title: heroImages.distributors.floatingTitle,
            subtitle: heroImages.distributors.floatingSubtitle
          }
        }}
        stats={[
          { label: 'Accredited Advisors', value: '1,500+ Nodes', subtext: 'Verified & certified', icon: <Users className="w-4 h-4" /> },
          { label: 'City Coverage', value: '500+ Towns', subtext: 'Tier 1, Tier 2 & Tier 3', icon: <Building2 className="w-4 h-4" /> },
          { label: 'Geographic Reach', value: '28 States & UTs', subtext: 'Pan-India physical footprint', icon: <Globe2 className="w-4 h-4" /> },
          { label: 'Client Brokerage', value: '₹0 Zero Fee', subtext: 'Zero cost to borrowers', icon: <Award className="w-4 h-4" /> }
        ]}
        primaryAction={{
          label: 'Become a Partner',
          href: '/distributors#join'
        }}
        secondaryAction={{
          label: 'View National Map',
          href: '/distributors#interactive-map'
        }}
      />

      {/* Network Visual Section */}
      <section id="interactive-map" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-6 relative z-20 mb-16 scroll-mt-28">
        <IndiaNetworkVisual />
      </section>

      {/* Search & Directory */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="p-6 rounded-2xl bg-white/95 dark:bg-[#081A2D]/90 border border-slate-200/90 dark:border-[#0EA5FF]/30 backdrop-blur-xl shadow-lg mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="sm:col-span-8 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-600 dark:text-cyan-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by advisor name, agency, city (e.g. 'Mumbai', 'Bandra', 'Sharma')..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#06111F] border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500 dark:focus:border-cyan-400"
              />
            </div>

            {/* State Filter */}
            <div className="sm:col-span-4">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full rounded-xl bg-slate-50 dark:bg-[#06111F] border border-slate-300 dark:border-slate-700 px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 dark:focus:border-cyan-400 cursor-pointer"
              >
                <option value="all">All States & Territories (28)</option>
                {locationHierarchy.map((s) => (
                  <option key={s.state} value={s.state}>
                    {s.state}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Distributor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDistributors.map((dist) => (
            <GlassCard
              key={dist.id}
              hoverEffect
              glow="cyan"
              className="p-6 text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <Badge variant="cyan" dot={false}>
                      {dist.partnerCode}
                    </Badge>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mt-2">
                      {dist.agencyName}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-[#A9BDD1] flex items-center gap-1 mt-0.5">
                      <UserCheck className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                      <span>{dist.name}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-1 bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                    <Star className="w-3 h-3 fill-emerald-500 text-emerald-500" />
                    <span>{dist.rating}</span>
                  </div>
                </div>

                <div className="space-y-2 py-3 border-y border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span>{dist.area}, {dist.city}, {dist.state}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="font-mono text-slate-800 dark:text-slate-200 font-semibold">{dist.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                    <span className="text-slate-600 dark:text-slate-300">{dist.email}</span>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-1">
                  {dist.services.map((serviceName, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-100 dark:bg-[#0D2138] text-sky-700 dark:text-cyan-300 text-[10px] font-mono border border-slate-200 dark:border-cyan-500/20 font-medium"
                    >
                      {serviceName}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  {dist.completedCases}+ Successful Cases
                </span>
                <a
                  href={`tel:${dist.phone}`}
                  className="px-3 py-1.5 rounded-lg bg-sky-500/10 dark:bg-cyan-500/20 text-sky-700 dark:text-cyan-300 text-xs font-semibold hover:bg-sky-500/20 dark:hover:bg-cyan-500/30 border border-sky-400/30 dark:border-cyan-400/30 transition-all flex items-center gap-1"
                >
                  <span>Direct Call</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* BECOME A DISTRIBUTOR SECTION (Target anchor #join) */}
      <section id="join" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 scroll-mt-32">
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 dark:from-[#0A192B] dark:via-[#06111F] dark:to-[#020817] text-white border border-sky-400/40 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Info */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <Badge variant="cyan">ACCREDITED PARTNER PROGRAM</Badge>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-display leading-tight">
                Empower Your Financial Consultancy
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Join India's premier decentralized financial network. Access 50+ institutional bank codes, offer 13 loan products and 8 insurance tiers, and track commissions with sub-second transparency.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Highest slab payout structures in the Indian market</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Dedicated corporate relationship manager (RM) support</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>White-labeled client tracking portal and mobile CRM</span>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#081A2D]/90 border border-slate-700 backdrop-blur-xl shadow-xl text-left">
                {partnerSuccess ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white font-display">Onboarding Application Logged!</h4>
                    <p className="text-xs text-[#A9BDD1] max-w-sm mx-auto">
                      Our distributor onboarding desk will review your credentials and contact you within 4 business hours to issue your Partner Code.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setPartnerSuccess(false);
                        setPartnerName('');
                        setPartnerPhone('');
                        setPartnerCity('');
                      }}
                    >
                      Submit Another Application
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handlePartnerSubmit} className="space-y-4">
                    <h3 className="text-lg font-bold text-white font-display">
                      Register as Accredited Partner
                    </h3>

                    <div>
                      <label className="text-xs text-slate-300 font-medium block mb-1">Full Legal Name / Agency</label>
                      <input
                        type="text"
                        required
                        value={partnerName}
                        onChange={(e) => setPartnerName(e.target.value)}
                        placeholder="e.g. Apex Wealth Solutions"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#06111F] border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-slate-300 font-medium block mb-1">Mobile Contact</label>
                        <input
                          type="tel"
                          required
                          value={partnerPhone}
                          onChange={(e) => setPartnerPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#06111F] border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-slate-300 font-medium block mb-1">Base City & District</label>
                        <input
                          type="text"
                          required
                          value={partnerCity}
                          onChange={(e) => setPartnerCity(e.target.value)}
                          placeholder="e.g. Pune, Maharashtra"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#06111F] border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-slate-300 font-medium block mb-1">Financial Industry Experience</label>
                      <select
                        value={partnerExperience}
                        onChange={(e) => setPartnerExperience(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#06111F] border border-slate-700 text-xs text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="1-3 years">1 - 3 Years (Emerging Financial DSA)</option>
                        <option value="3-5 years">3 - 5 Years (Established Practice)</option>
                        <option value="5-10 years">5 - 10 Years (Senior Corporate Advisor)</option>
                        <option value="10+ years">10+ Years (Institutional Brokerage House)</option>
                      </select>
                    </div>

                    <Button
                      type="submit"
                      variant="glow"
                      size="md"
                      className="w-full justify-center mt-2"
                      isLoading={isSubmittingPartner}
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Submit Partner Registration →
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
