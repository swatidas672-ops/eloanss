import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export interface PageHeroStat {
  label: string;
  value: string;
  subtext?: string;
  icon?: React.ReactNode;
}

export interface PageHeroImage {
  /** Source for the hero's full-bleed backdrop. */
  src: string;
  alt: string;
  /** @deprecated No longer rendered - the framed showcase card was removed. */
  floatingBadge?: {
    title: string;
    subtitle: string;
    icon?: React.ReactNode;
  };
  /** @deprecated No longer rendered - the framed showcase card was removed. */
  overlayTag?: string;
}

export interface PageHeroProps {
  badge: string;
  badgeVariant?: 'cyan' | 'blue' | 'emerald' | 'purple' | 'amber';
  title: string;
  highlight: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
  stats?: PageHeroStat[];
  primaryAction?: {
    label: string;
    onClick?: () => void;
    href?: string;
    icon?: React.ReactNode;
  };
  secondaryAction?: {
    label: string;
    onClick?: () => void;
    href?: string;
    icon?: React.ReactNode;
  };
  glowColor?: 'cyan' | 'blue' | 'emerald' | 'purple';
  image?: PageHeroImage;
  /** Full-bleed hero backdrop. Falls back to the showcase image when omitted. */
  backgroundImage?: string;
  /** @deprecated Every hero is centred now. */
  layout?: 'split' | 'centered';
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  badgeVariant = 'cyan',
  title,
  highlight,
  description,
  breadcrumbs,
  stats,
  primaryAction,
  secondaryAction,
  glowColor = 'cyan',
  image,
  backgroundImage,
  children
}) => {
  const glowStyles = {
    cyan: 'from-cyan-500/15 via-sky-500/5 to-transparent',
    blue: 'from-sky-500/15 via-indigo-500/5 to-transparent',
    emerald: 'from-emerald-500/15 via-teal-500/5 to-transparent',
    purple: 'from-purple-500/15 via-indigo-500/5 to-transparent'
  };

  // Every page gets an atmospheric backdrop; by default it reuses that page's
  // own showcase image so each section stays visually on-theme.
  const backdropSrc = backgroundImage ?? image?.src;

  return (
    <section className="relative isolate pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      {/* Cinematic full-bleed hero backdrop */}
      {backdropSrc && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={backdropSrc}
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 opacity-[0.88] dark:opacity-[0.82]"
          />
          {/* Radial scrim: densest behind the centred text, easing off at the
              edges so the artwork still reads around it */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(248,250,252,0.74)_0%,rgba(248,250,252,0.48)_45%,rgba(248,250,252,0.18)_100%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(7,13,27,0.8)_0%,rgba(7,13,27,0.58)_45%,rgba(7,13,27,0.28)_100%)]" />
          {/* Vertical fade blends the backdrop into the page above and below */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50 dark:from-[#070D1B] dark:via-transparent dark:to-[#070D1B]" />
        </div>
      )}
      {/* Ambient background glows */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b ${glowStyles[glowColor]} blur-3xl pointer-events-none -z-10`} />
      <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-sky-400/10 dark:bg-cyan-500/10 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-28 right-10 w-96 h-96 rounded-full bg-blue-500/10 dark:bg-sky-500/10 blur-[120px] pointer-events-none -z-10" />

      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-25 pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb row */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
            <Link to="/" className="hover:text-sky-600 dark:hover:text-cyan-300 transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-sky-600 dark:hover:text-cyan-300 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Centred hero content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-4">
            <Badge variant={badgeVariant} dot={true}>
              {badge}
            </Badge>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display leading-[1.15]">
            {title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#06B6D4] dark:from-cyan-300 dark:via-[#0EA5FF] dark:to-[#38BDF8]">
              {highlight}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-[#94A3B8] leading-relaxed max-w-3xl mx-auto font-normal">
            {description}
          </p>

          {/* Primary / Secondary Action Buttons */}
          {(primaryAction || secondaryAction) && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {primaryAction && (
                primaryAction.href ? (
                  <Link to={primaryAction.href}>
                    <Button variant="glow" size="md" rightIcon={primaryAction.icon || <ArrowRight className="w-4 h-4" />}>
                      {primaryAction.label}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="glow"
                    size="md"
                    onClick={primaryAction.onClick}
                    rightIcon={primaryAction.icon || <ArrowRight className="w-4 h-4" />}
                  >
                    {primaryAction.label}
                  </Button>
                )
              )}

              {secondaryAction && (
                secondaryAction.href ? (
                  <Link to={secondaryAction.href}>
                    <Button variant="secondary" size="md" leftIcon={secondaryAction.icon}>
                      {secondaryAction.label}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={secondaryAction.onClick}
                    leftIcon={secondaryAction.icon}
                  >
                    {secondaryAction.label}
                  </Button>
                )
              )}
            </div>
          )}
        </div>

        {/* Key Metrics / Highlights Bar */}
        {stats && stats.length > 0 && (
          <div className="mt-12 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/75 dark:bg-[#0B1528]/60 border border-slate-200/90 dark:border-slate-800/80 shadow-xs backdrop-blur-md hover:border-sky-500 dark:hover:border-cyan-400/50 transition-colors"
              >
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <span>{stat.label}</span>
                  {stat.icon && <span className="text-sky-600 dark:text-cyan-400">{stat.icon}</span>}
                </div>
                <div className="mt-1.5 text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-display">
                  {stat.value}
                </div>
                {stat.subtext && (
                  <div className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400 truncate">
                    {stat.subtext}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Optional custom slot */}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
};
