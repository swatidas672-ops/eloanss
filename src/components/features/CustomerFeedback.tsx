import React from 'react';
import { Star, Quote, MapPin, ThumbsUp, Users, Building2, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { SectionHeading } from '../ui/SectionHeading';
import { testimonials, feedbackStats, whyChooseUs, type Testimonial } from '../../data/testimonials';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        aria-hidden="true"
        className={`w-3.5 h-3.5 ${
          star <= rating
            ? 'text-amber-400 fill-amber-400'
            : 'text-slate-300 dark:text-slate-700 fill-slate-300 dark:fill-slate-700'
        }`}
      />
    ))}
  </div>
);

const FeedbackCard: React.FC<{ item: Testimonial }> = ({ item }) => (
  <GlassCard hoverEffect glow="cyan" className="p-6 flex flex-col h-full">
    <div className="flex items-start justify-between gap-3">
      <StarRating rating={item.rating} />
      <Quote className="w-6 h-6 text-sky-500/25 dark:text-cyan-400/25 shrink-0" aria-hidden="true" />
    </div>

    <blockquote className="mt-4 text-sm text-slate-700 dark:text-[#C7D6E5] leading-relaxed flex-1">
      {item.quote}
    </blockquote>

    <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-500 to-cyan-400 text-white flex items-center justify-center shrink-0 font-display font-bold text-sm shadow-md">
        {item.name.charAt(0)}
      </div>
      <div className="min-w-0">
        <div className="text-sm font-bold text-slate-900 dark:text-white font-display truncate">
          {item.name}
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
          <MapPin className="w-3 h-3 shrink-0" aria-hidden="true" />
          <span className="truncate">
            {item.city}
            {item.role ? ` · ${item.role}` : ''}
          </span>
        </div>
      </div>
      <span className="ml-auto shrink-0 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-sky-500/10 text-sky-700 dark:text-cyan-300 border border-sky-500/25">
        {item.product}
      </span>
    </div>
  </GlassCard>
);

export const CustomerFeedback: React.FC = () => {
  const summary = [
    {
      label: 'Average Rating',
      value: `${feedbackStats.averageRating} / 5`,
      icon: <Star className="w-4 h-4 fill-current" />
    },
    {
      label: 'Verified Reviews',
      value: feedbackStats.totalReviews,
      icon: <Users className="w-4 h-4" />
    },
    {
      label: 'Would Recommend',
      value: feedbackStats.wouldRecommend,
      icon: <ThumbsUp className="w-4 h-4" />
    },
    {
      label: 'Cities Served',
      value: feedbackStats.citiesServed,
      icon: <Building2 className="w-4 h-4" />
    }
  ];

  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="WHAT OUR CUSTOMERS SAY"
        title="Trusted by Borrowers"
        highlight="Across India"
        description="Real outcomes from people who used ELOANSS to finance a home, grow a business, or protect a family."
        align="center"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
        {summary.map((stat) => (
          <div
            key={stat.label}
            className="p-4 rounded-xl bg-white/75 dark:bg-[#0B1528]/60 border border-slate-200/90 dark:border-slate-800/80 shadow-xs backdrop-blur-md text-left"
          >
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
              <span>{stat.label}</span>
              <span className="text-amber-500 dark:text-amber-400">{stat.icon}</span>
            </div>
            <div className="mt-1.5 text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-display">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <FeedbackCard key={item.id} item={item} />
        ))}
      </div>

      {/* Why choose us */}
      <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800/80">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            Why Choose Us
          </div>
          <h3 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
            What you get working with us
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {whyChooseUs.map((point) => (
            <div
              key={point.label}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/75 dark:bg-[#0B1528]/60 border border-slate-200/90 dark:border-slate-800/80 shadow-xs backdrop-blur-md hover:border-sky-500/50 dark:hover:border-cyan-400/40 transition-colors"
            >
              <CheckCircle2
                className="w-5 h-5 text-sky-600 dark:text-cyan-400 shrink-0"
                aria-hidden="true"
              />
              <span className="text-sm font-semibold text-slate-800 dark:text-[#E6F1FF]">
                {point.label}
                {point.qualified && (
                  <span className="text-sky-600 dark:text-cyan-400" aria-hidden="true">
                    *
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-[11px] text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
        Names and locations are published with customer consent. Individual outcomes depend on
        lender criteria and personal credit profile. *Pricing and turnaround times are indicative,
        vary by lender and applicant profile, and are not guaranteed.
      </p>
    </section>
  );
};
