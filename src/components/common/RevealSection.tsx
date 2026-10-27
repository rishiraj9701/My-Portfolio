import React, { useEffect, useRef, useState } from 'react';

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const RevealSection: React.FC<RevealSectionProps> = ({ 
  children, 
  className = '',
  delay = 0 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If IntersectionObserver is not supported, show immediately (graceful fallback)
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    // If user prefers reduced motion, show immediately without animation
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve once visible so animation triggers only ONCE and never replays on scroll
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: '550ms',
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      }}
      className={`transition-all will-change-transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default RevealSection;
