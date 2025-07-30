// SkillProgress.jsx
"use client";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SkillProgressProps {
  skill: string;
  value: number;
  color: string;
}

export default function SkillProgress({
  skill,
  value,
  color,
}: SkillProgressProps) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [progress, setProgress] = useState(0);

  // Animate the progress value
  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => setProgress(value), 300);
      return () => clearTimeout(timeout);
    }
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="w-24 h-24 lg:w-36 lg:h-36 text-center "
    >
      <CircularProgressbar
        value={progress}
        text={`${progress}%`}
        styles={buildStyles({
          pathColor: color,
          textColor: "currentColor",
          trailColor: "#e5e7eb", // light gray for light mode
        })}
      />
      <p className="mt-2 text-sm font-semibold text-gray-800 dark:text-gray-100">
        {skill}
      </p>
    </motion.div>
  );
}
