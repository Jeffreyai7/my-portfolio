// components/Counter.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type CounterProps = {
  from?: number;
  to: number;
  duration?: number; // seconds
  suffix?: string;
};

const Counter = ({ from = 0, to, duration = 2, suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(from);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only fire once
    threshold: 0.3, // 30% in view
  });

  useEffect(() => {
    if (!inView) return;

    let start = from;
    let startTime: number | null = null;
    const end = to;
    const totalDuration = duration * 1000;

    function animateCount(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / totalDuration, 1);
      const current = Math.floor(start + (end - start) * progress);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    }

    requestAnimationFrame(animateCount);

    // No cleanup needed as the animation is short-lived and only runs once
  }, [inView, from, to, duration]);

  return (
    <motion.span ref={ref} className="text-3xl font-bold text-accent">
      {count}
      {suffix}
    </motion.span>
  );
};

export default Counter;
