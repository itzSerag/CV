"use client";
import { useEffect, useRef } from "react";

/**
 * ScrollReveal — wraps children and adds a fade-slide-up animation
 * when the element enters the viewport using IntersectionObserver.
 *
 * Props:
 *   delay    {string} — CSS animation-delay, e.g. "0.1s"
 *   className {string} — extra classes to pass to the wrapper div
 */
export default function ScrollReveal({ children, delay = "0s", className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationDelay = delay;
          el.classList.add("reveal-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal-hidden ${className}`}>
      {children}
    </div>
  );
}
