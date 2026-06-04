"use client";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const techStacks = [
  { name: "React",        icon: "simple-icons:react" },
  { name: "Next.js",      icon: "simple-icons:nextdotjs" },
  { name: "TypeScript",   icon: "simple-icons:typescript" },
  { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
  { name: "Sass",         icon: "simple-icons:sass" },
  { name: "NestJS",       icon: "simple-icons:nestjs" },
  { name: "Git",          icon: "simple-icons:git" },
  { name: "Figma",        icon: "simple-icons:figma" },
];

export default function TechStackProgress() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-16 py-12 md:py-16 border-b border-border">
      <span className="text-[11px] text-muted-foreground tracking-[0.12em] uppercase font-mono">
        Skills
      </span>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-border">
        {techStacks.map((stack, index) => (
          <motion.div
            key={stack.name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-background hover:bg-card p-5 md:p-6 flex flex-col gap-4 group transition-colors duration-200"
          >
            <Icon
              icon={stack.icon}
              width={22}
              height={22}
              className="text-muted-foreground group-hover:text-accent transition-colors duration-200"
            />
            <span className="text-[11px] text-muted-foreground group-hover:text-foreground font-mono tracking-[0.06em] uppercase transition-colors duration-200">
              {stack.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}