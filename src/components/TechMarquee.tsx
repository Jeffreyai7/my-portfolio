"use client";
import { Icon } from "@iconify/react";
import { marqueeTech } from "@/lib/constant";

const row = [...marqueeTech, ...marqueeTech];

export default function TechMarquee() {
  return (
    <section aria-label="Technologies I work with" className="group border-y border-border py-7">
      <div className="mask-fade-x overflow-hidden">
        <ul className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {row.map(({ name, icon }, i) => (
            <li
              key={i}
              aria-hidden={i >= marqueeTech.length}
              className="flex shrink-0 items-center gap-3 px-8 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon icon={icon} width={20} height={20} />
              <span className="whitespace-nowrap text-[15px]">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
