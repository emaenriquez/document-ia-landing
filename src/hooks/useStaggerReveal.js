import { useEffect, useRef, useState } from 'react';

/**
 * Hook for staggered reveal of child items in a grid/list.
 * Returns [containerRef, visibleCount].
 * Children should check index < visibleCount to apply their reveal class.
 *
 * @param {number} total - Total number of children.
 * @param {Object} options
 * @param {number} options.staggerMs - Delay between each child. Default 100.
 * @param {number} options.threshold - IntersectionObserver threshold. Default 0.1.
 */
export default function useStaggerReveal(total, { staggerMs = 100, threshold = 0.1 } = {}) {
  const ref = useRef(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger children one by one
          for (let i = 0; i < total; i++) {
            setTimeout(() => setVisibleCount(i + 1), i * staggerMs);
          }
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [total, staggerMs, threshold]);

  return [ref, visibleCount];
}
