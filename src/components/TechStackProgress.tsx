"use client";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const techStacks = [
  { name: "React", icon: "simple-icons:react", percent: 90 },
  { name: "Next.js", icon: "simple-icons:nextdotjs", percent: 85 },
  { name: "TypeScript", icon: "simple-icons:typescript", percent: 85 },
  { name: "Tailwind CSS", icon: "simple-icons:tailwindcss", percent: 95 },
  { name: "Sass", icon: "simple-icons:sass", percent: 90 },
  { name: "NestJS", icon: "simple-icons:nestjs", percent: 70 },
  { name: "Git", icon: "simple-icons:git", percent: 80 },
];

export default function TechStackProgress() {
  return (
    <section className="grid grid-cols-[180px_1fr] gap-16 py-16 border-b border-border">
      <span className="text-[11px] text-muted-foreground tracking-[0.12em] uppercase font-mono pt-1">
        Skills
      </span>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-border">
        {techStacks.map((stack) => (
          <motion.div
            key={stack.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-background hover:bg-card p-5 flex flex-col gap-3 group transition-colors"
          >
            <div className="flex items-center justify-between">
              <Icon
                icon={stack.icon}
                width={18}
                height={18}
                className="text-muted-foreground group-hover:text-foreground transition-colors"
              />
              <span className="text-[10px] text-muted-foreground font-mono">
                {stack.percent}%
              </span>
            </div>
            <span className="text-xs text-foreground font-mono font-medium">
              {stack.name}
            </span>
            <div className="h-px bg-border w-full">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${stack.percent}%` }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
                className="h-px bg-[var(--accent)]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}