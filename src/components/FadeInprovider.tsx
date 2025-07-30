"use client";

import { motion } from "framer-motion";

interface fadeProps {
  children: React.ReactNode;
  delay?: number;
}

export const FadeSection = ({ children, delay = 0 }: fadeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
