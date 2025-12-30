import React from 'react';
import { useCountUp } from '@/hooks/useCountUp';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface CountUpNumberProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
  suffixClassName?: string;
}

const CountUpNumber: React.FC<CountUpNumberProps> = ({
  value,
  suffix = '',
  duration = 2000,
  className = '',
  suffixClassName = '',
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
  const count = useCountUp({ end: value, duration, isVisible });

  return (
    <div ref={ref} className={className}>
      {count}
      {suffix && <span className={suffixClassName}>{suffix}</span>}
    </div>
  );
};

export default CountUpNumber;
