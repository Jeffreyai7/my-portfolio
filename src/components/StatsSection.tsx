"use client";
import { Icon } from "@iconify/react";

const techIcons = [
  { name: "React",       icon: "simple-icons:react" },
  { name: "Next.js",     icon: "simple-icons:nextdotjs" },
  { name: "TypeScript",  icon: "simple-icons:typescript" },
  { name: "Tailwind",    icon: "simple-icons:tailwindcss" },
  { name: "Sass",        icon: "simple-icons:sass" },
  { name: "NestJS",      icon: "simple-icons:nestjs" },
  { name: "Git",         icon: "simple-icons:git" },
  { name: "Figma",       icon: "simple-icons:figma" },
];

// Duplicate for seamless infinite scroll
const icons = [...techIcons, ...techIcons];

const StatsSection = () => (
  <section className="border-b border-border overflow-hidden py-6 group">
    <div className="flex gap-0 animate-[marquee_22s_linear_infinite] group-hover:[animation-play-state:paused] w-max">
      {icons.map(({ name, icon }, i) => (
        <div
          key={i}
          className="flex items-center gap-3 px-8 border-r border-border shrink-0"
        >
          <Icon
            icon={icon}
            width={18}
            height={18}
            className="text-muted-foreground"
          />
          <span className="text-[11px] text-muted-foreground uppercase tracking-[0.1em] font-mono whitespace-nowrap">
            {name}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default StatsSection;