import React from 'react';
import { Link } from 'react-router-dom';
import {
  Banknote,
  ShieldCheck,
  Briefcase,
  Car,
  Home,
  Coins,
  Globe2,
  Ship,
  Handshake,
  CheckCircle2,
  ArrowRight,
  Headphones,
  Phone
} from 'lucide-react';
import { Button } from '../ui/Button';
import { serviceCategories, type ServiceIcon } from '../../data/serviceCategories';

const iconFor = (key: ServiceIcon) => {
  const cls = 'w-5 h-5';
  switch (key) {
    case 'insurance':
      return <ShieldCheck className={cls} />;
    case 'business':
      return <Briefcase className={cls} />;
    case 'vehicle':
      return <Car className={cls} />;
    case 'property':
      return <Home className={cls} />;
    case 'gold':
      return <Coins className={cls} />;
    case 'global':
      return <Globe2 className={cls} />;
    case 'trade':
      return <Ship className={cls} />;
    case 'partner':
      return <Handshake className={cls} />;
    default:
      return <Banknote className={cls} />;
  }
};

export const ServiceCategories: React.FC = () => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-left">
      {serviceCategories.map((cat) => (
        // The whole card is the link, so the entire surface is clickable rather
        // than just the small CTA line at the bottom.
        <Link
          key={cat.id}
          to={cat.cta.href}
          aria-label={`${cat.title} - ${cat.cta.label}`}
          className="group relative overflow-hidden rounded-2xl bg-white dark:bg-[#0A192B]/70 border border-slate-200/90 dark:border-[#64B4FF]/15 shadow-xs hover:border-sky-400/60 dark:hover:border-[#0EA5FF]/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer"
        >
          {/* Photo sits on the right and is faded out behind the copy, so the
              card reads as illustrated rather than as an image with a caption. */}
          <img
            src={cat.image.src}
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            loading="lazy"
            className="pointer-events-none absolute right-0 top-0 h-full w-3/5 object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/20 dark:from-[#0A192B] dark:via-[#0A192B]/92 dark:to-[#0A192B]/25" />

          <div className="relative z-10 p-4 flex flex-col flex-1">
            <div
              className={`w-9 h-9 rounded-lg bg-gradient-to-tr ${cat.accent} text-white flex items-center justify-center shadow-md mb-3`}
              aria-hidden="true"
            >
              {iconFor(cat.icon)}
            </div>

            <h3 className="text-[15px] font-bold text-slate-900 dark:text-white font-display leading-snug">
              {cat.title}
            </h3>
            <p className="mt-0.5 text-[11px] text-slate-600 dark:text-[#A9BDD1] leading-relaxed max-w-[14rem]">
              {cat.subtitle}
            </p>

            <ul className="mt-3 space-y-1 flex-1">
              {cat.items.map((item) => (
                <li key={item} className="flex items-center gap-1.5 text-[12px] text-slate-700 dark:text-[#C7D6E5]">
                  <CheckCircle2
                    className="w-3 h-3 text-sky-600 dark:text-cyan-400 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
              <li className="flex items-center gap-1.5 text-[12px] text-slate-400 dark:text-slate-500">
                <CheckCircle2 className="w-3 h-3 shrink-0" aria-hidden="true" />
                <span>And more...</span>
              </li>
            </ul>

            <span className="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-800/80 inline-flex items-center gap-1.5 text-[12px] font-semibold text-sky-700 dark:text-cyan-300 group-hover:text-sky-900 dark:group-hover:text-white transition-colors">
              {cat.cta.label}
              <ArrowRight
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                aria-hidden="true"
              />
            </span>
          </div>
        </Link>
      ))}
    </div>

    {/* Help bar */}
    <div className="mt-8 rounded-2xl bg-white dark:bg-[#0A192B]/70 border border-slate-200/90 dark:border-[#64B4FF]/15 shadow-xs p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center gap-5 text-left">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500 to-cyan-400 text-white flex items-center justify-center shrink-0 shadow-md">
        <Headphones className="w-6 h-6" aria-hidden="true" />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-display">
          Need Help Choosing the Right Service?
        </h3>
        <p className="mt-0.5 text-[13px] text-slate-600 dark:text-[#A9BDD1] leading-relaxed">
          Our experts are here to guide you to the right financial solution.
        </p>
      </div>

      <a
        href="tel:+919030814455"
        className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white font-mono hover:text-sky-700 dark:hover:text-cyan-300 transition-colors shrink-0"
      >
        <Phone className="w-4 h-4 text-sky-600 dark:text-cyan-400" aria-hidden="true" />
        9030814455
      </a>

      <Link to="/contact" className="shrink-0">
        <Button variant="glow" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
          Talk to Our Expert
        </Button>
      </Link>
    </div>
  </>
);
