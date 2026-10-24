import { useEffect, useRef } from 'react';

/**
 * Hook that adds a scroll-triggered fade-in reveal animation using IntersectionObserver.
 * Returns a ref to attach to the container element.
 *
 * @param {Object} options
 * @param {number} options.threshold - Visibility ratio to trigger (0-1). Default 0.15.
 * @param {string} options.rootMargin - Observer root margin. Default '0px 0px -60px 0px'.
 * @param {boolean} options.once - Animate only once. Default true.
 */
export default function useScrollReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -60px 0px',
  once = true
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Start hidden
    el.style.opacity = '0';
    el.style.transform = 'translateY(32px)';
    el.style.transition = 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          if (once) observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}
