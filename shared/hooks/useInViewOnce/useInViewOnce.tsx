"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type InViewOptions = IntersectionObserverInit & { once?: boolean };

export function useInViewOnce({
  root = null,
  rootMargin = "0px 0px -12% 0px",
  threshold = 0.2,
  once = true,
}: InViewOptions = {}) {
  const nodeRef = useRef<Element | null>(null);
  const [inView, setInView] = useState(false);

  const setRef = useCallback((node: Element | null) => {
    nodeRef.current = node;
  }, []);

  useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;

    if (once && inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setInView(false);
        }
      },
      { root, rootMargin, threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, once, root, rootMargin, threshold]);

  return { ref: setRef, inView };
}
