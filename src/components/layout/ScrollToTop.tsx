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
    let timer: number;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      if (attempts++ < 10) {
        timer = window.setTimeout(tryScroll, 100);
      }
    };

    timer = window.setTimeout(tryScroll, 60);
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};
