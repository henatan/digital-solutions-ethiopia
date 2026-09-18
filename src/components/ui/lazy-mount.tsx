"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Defers mounting of expensive children (e.g. chart libraries) until the
 * element scrolls near the viewport. This keeps heavy JS (like recharts)
 * out of the critical path on first load, which matters a lot on mobile
 * devices with slower CPUs and networks.
 */
export function LazyMount({
  children,
  fallback = null,
  rootMargin = "200px",
  minHeight,
}: {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  minHeight?: number | string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);

    // Safety net: some mobile browsers can fail to ever report an
    // intersection (e.g. odd viewport/zoom states). Never leave content
    // permanently stuck behind a skeleton — force it visible after a
    // short delay no matter what.
    const timeout = setTimeout(() => setVisible(true), 3000);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [visible, rootMargin]);

  return (
    <div ref={ref} style={!visible && minHeight ? { minHeight } : undefined}>
      {visible ? children : fallback}
    </div>
  );
}
