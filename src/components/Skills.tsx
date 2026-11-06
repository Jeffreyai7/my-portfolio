import { Box, Database, LayoutGrid, Rocket, Workflow } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { skillGroups } from "@/lib/constant";
import { cn } from "@/lib/utils";

const icons = { layout: LayoutGrid, workflow: Workflow, database: Database, box: Box, rocket: Rocket };
const spans = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-24 md:py-36">
      <div className="container-x">
        <SectionHeader
          index="04"
          label="Capabilities"
          title={
            <>
              A toolkit built for <em className="text-accent">shipping</em>
            </>
          }
          intro="Front-end depth, with enough backend and Web3 range to own a feature from the database call to the last pixel."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((g, i) => {
            const Icon = icons[g.icon];
            const primary = i === 0;
            return (
              <Reveal
                key={g.title}
                delay={(i % 3) * 0.06}
                className={cn(
                  "card-surface group relative overflow-hidden p-7 transition-colors duration-500 hover:border-foreground/20",
                  spans[i],
                  primary && "sm:col-span-2"
                )}
              >
                {primary && (
                  <div
                    aria-hidden
                    className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
                  />
                )}
                <div className="relative flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-background text-accent">
                    <Icon size={20} strokeWidth={1.6} />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(g.items.length).padStart(2, "0")} tools
                  </span>
                </div>
                <h3 className={cn("relative mt-8 font-medium tracking-tight", primary ? "text-3xl" : "text-xl")}>
                  {g.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{g.blurb}</p>
                <ul className="relative mt-6 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className={cn(
                        "rounded-full border border-border px-3 py-1.5 text-[13px] transition-colors",
                        primary ? "bg-background text-foreground/90" : "text-muted-foreground"
                      )}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
