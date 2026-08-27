import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop
 * ─────────────
 * On every route change:
 *  - Scrolls to the top of the page.
 *  - If the URL has a hash (e.g., /#menu), scrolls to that section instead.
 *
 * This is essential because React Router doesn't reset scroll position
 * between navigations by default.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout lets the DOM paint before we scroll
      const id = hash.replace('#', '');
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}
