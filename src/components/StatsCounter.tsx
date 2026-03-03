import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

interface StatsCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string; // Added for styling flexibility in parent components
}

const StatsCounter = ({ 
  end, 
  duration = 2.5, // Thoda slow kiya for premium feel 
  suffix = '', 
  prefix = '',
  className = ''
}: StatsCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  
  // margin: "-50px" ensures animation starts when user actually sees it, not before.
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // 🚀 OPTIMIZATION: useMotionValue prevents React from re-rendering 60 times per second
  const count = useMotionValue(0);
  
  // Automatically round the number and add commas for large numbers (e.g., 1,000)
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    if (isInView) {
      // Premium easing curve (fast start, smooth slow end)
      const controls = animate(count, end, {
        duration: duration,
        ease: [0.25, 0.46, 0.45, 0.94], 
      });

      return () => controls.stop();
    }
  }, [count, end, duration, isInView]);

  return (
    <span ref={ref} className={`inline-flex items-center ${className}`}>
      {prefix && <span className="mr-0.5">{prefix}</span>}
      
      {/* Motion component directly renders the motion value efficiently */}
      <motion.span>{rounded}</motion.span>
      
      {suffix && <span className="ml-0.5">{suffix}</span>}
    </span>
  );
};

export default StatsCounter;