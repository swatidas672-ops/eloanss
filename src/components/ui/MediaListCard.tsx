import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

/**
 * The card layout introduced on the Services page: a photo bleeding in from the
 * right behind a gradient scrim, a coloured icon tile, a short checklist and a
 * CTA. Shared so the loan, insurance, service and trade cards stay identical
 * rather than drifting apart.
 *
 * Pass `href` or `onClick` to make the whole card interactive. Pass `footer`
 * instead when the card needs more than one action, since a button or link
 * nested inside an anchor is invalid.
 */
export interface MediaListCardProps {
  icon: React.ReactNode;
  /** Tailwind gradient for the icon tile, e.g. "from-sky-500 to-blue-500". */
  accent: string;
  title: string;
  subtitle?: string;
  items: string[];
  /** Adds a muted "And more..." row under the list. */
  showMore?: boolean;
  image: { src: string; alt?: string };
  href?: string;
  onClick?: () => void;
  ctaLabel?: string;
  /** Replaces the single CTA when the card carries multiple actions. */
  footer?: React.ReactNode;
}

const SHELL =
  'group relative overflow-hidden rounded-2xl bg-white dark:bg-[#0A192B]/70 border border-slate-200/90 dark:border-[#64B4FF]/15 shadow-xs hover:border-sky-400/60 dark:hover:border-[#0EA5FF]/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col h-full text-left';

export const MediaListCard: React.FC<MediaListCardProps> = ({
  icon,
  accent,
  title,
  subtitle,
  items,
  showMore = false,
  image,
  href,
  onClick,
  ctaLabel,
  footer
}) => {
  const body = (
    <>
      <img
        src={image.src}
        alt={image.alt ?? ''}
        aria-hidden={image.alt ? undefined : 'true'}
        referrerPolicy="no-referrer"
        loading="lazy"
        className="pointer-events-none absolute right-0 top-0 h-full w-3/5 object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/20 dark:from-[#0A192B] dark:via-[#0A192B]/92 dark:to-[#0A192B]/25" />

      <div className="relative z-10 p-4 flex flex-col flex-1">
        <div
          className={`w-9 h-9 rounded-lg bg-gradient-to-tr ${accent} text-white flex items-center justify-center shadow-md mb-3`}
          aria-hidden="true"
        >
          {icon}
        </div>

        <h3 className="text-[15px] font-bold text-slate-900 dark:text-white font-display leading-snug">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-0.5 text-[11px] text-slate-600 dark:text-[#A9BDD1] leading-relaxed max-w-[14rem]">
            {subtitle}
          </p>
        )}

        <ul className="mt-3 space-y-1 flex-1">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-1.5 text-[12px] text-slate-700 dark:text-[#C7D6E5]"
            >
              <CheckCircle2
                className="w-3 h-3 text-sky-600 dark:text-cyan-400 shrink-0"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
          {showMore && (
            <li className="flex items-center gap-1.5 text-[12px] text-slate-400 dark:text-slate-500">
              <CheckCircle2 className="w-3 h-3 shrink-0" aria-hidden="true" />
              <span>And more...</span>
            </li>
          )}
        </ul>

        {footer ? (
          <div className="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-800/80">{footer}</div>
        ) : (
          ctaLabel && (
            <span className="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-800/80 inline-flex items-center gap-1.5 text-[12px] font-semibold text-sky-700 dark:text-cyan-300 group-hover:text-sky-900 dark:group-hover:text-white transition-colors">
              {ctaLabel}
              <ArrowRight
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                aria-hidden="true"
              />
            </span>
          )
        )}
      </div>
    </>
  );

  if (footer) return <div className={SHELL}>{body}</div>;

  if (href) {
    return (
      <Link to={href} aria-label={ctaLabel ? `${title} - ${ctaLabel}` : title} className={`${SHELL} cursor-pointer`}>
        {body}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button type="button" onClick={onClick} aria-label={ctaLabel ? `${title} - ${ctaLabel}` : title} className={`${SHELL} w-full cursor-pointer`}>
        {body}
      </button>
    );
  }

  return <div className={SHELL}>{body}</div>;
};
