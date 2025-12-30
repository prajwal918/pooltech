import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in' | 'fade';
  delay?: number;
  duration?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const getAnimationStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      transitionDelay: `${delay}ms`,
    };

    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return { ...baseStyles, opacity: 0, transform: 'translateY(40px)' };
        case 'fade-left':
          return { ...baseStyles, opacity: 0, transform: 'translateX(-40px)' };
        case 'fade-right':
          return { ...baseStyles, opacity: 0, transform: 'translateX(40px)' };
        case 'zoom-in':
          return { ...baseStyles, opacity: 0, transform: 'scale(0.9)' };
        case 'fade':
        default:
          return { ...baseStyles, opacity: 0 };
      }
    }

    return { ...baseStyles, opacity: 1, transform: 'translateY(0) translateX(0) scale(1)' };
  };

  return (
    <div ref={ref} style={getAnimationStyles()} className={cn(className)}>
      {children}
    </div>
  );
};

export default ScrollReveal;
