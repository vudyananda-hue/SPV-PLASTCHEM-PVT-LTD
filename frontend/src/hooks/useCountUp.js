import { useState, useEffect } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

export function useCountUp(end, duration = 2000, start = 0) {
  const [count, setCount] = useState(start);
  const [ref, isVisible] = useIntersectionObserver();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      let startTime = null;
      
      const endValue = typeof end === 'string' ? parseFloat(end.replace(/[^0-9.]/g, '')) : end;
      if (isNaN(endValue)) {
        setCount(end); 
        return;
      }

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * (endValue - start) + start);
        
        const suffix = typeof end === 'string' ? end.replace(/[0-9.]/g, '') : '';
        setCount(currentCount + suffix);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(end); 
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [isVisible, hasAnimated, start, end, duration]);

  return [ref, count];
}
