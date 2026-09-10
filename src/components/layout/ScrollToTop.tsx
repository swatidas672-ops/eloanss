import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scroll behaviour on navigation.
 *
 * A plain route change goes to the top. A URL carrying a hash scrolls to that
 * element instead - React Router does not do this itself, and for a hash on the
 * page you are already on it performs no scroll at all, which left in-page
 * anchor buttons looking dead. The target is often below lazy-loaded content,
 * so the lookup is retried briefly before giving up.
 */
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = hash.slice(1);
    let attempts = 0;
    const timers: number[] = [];

    // Instant rather than smooth: these targets sit thousands of pixels down,
    // and lazy-loaded imagery shifting the layout mid-animation cancels a
    // smooth scroll partway, leaving the page somewhere arbitrary.
    const jump = (el: HTMLElement) => el.scrollIntoView({ behavior: 'auto', block: 'start' });

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        jump(el);
        // Re-run once the images above have loaded and pushed the target to its
        // final offset, otherwise we land short.
        timers.push(window.setTimeout(() => {
          const again = document.getElementById(id);
          if (again) jump(again);
        }, 400));
        return;
      }
      if (attempts++ < 10) {
        timers.push(window.setTimeout(tryScroll, 100));
      }
    };

    timers.push(window.setTimeout(tryScroll, 60));
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [pathname, hash]);

  return null;
};
