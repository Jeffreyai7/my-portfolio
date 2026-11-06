"use client";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Lock } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/constant";
import { cn } from "@/lib/utils";

const filters = ["All", "React", "Next.js", "Zustand", "Web3", "WordPress"] as const;
type Filter = (typeof filters)[number];

const matches = (stack: string[], category: string, f: Filter) => {
  if (f === "All") return true;
  if (f === "Web3") return category.includes("Web3") || stack.includes("ethers.js");
  return stack.includes(f);
};

export default function ProjectsExplorer() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(
    () => projects.filter((p) => matches(p.techStack, p.category, filter)),
    [filter]
  );
  const withImages = visible.filter((p) => p.image);
  const textOnly = visible.filter((p) => !p.image);

  return (
    <>
      <div role="tablist" aria-label="Filter projects" className="mt-14 flex flex-wrap gap-2 border-b border-border pb-8">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              "relative rounded-full border px-4 py-2 text-sm transition-colors",
              filter === f
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-14 grid gap-x-10 gap-y-20 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {withImages.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={p} priority={i < 2} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {textOnly.length > 0 && (
        <div className="mt-24 grid gap-6 md:grid-cols-2">
          {textOnly.map((p) => (
            <article key={p.slug} className="card-surface p-8">
              <div className="flex items-center justify-between">
                <p className="eyebrow">{p.category}</p>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                  <Lock size={12} /> Private
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-medium tracking-tight">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{p.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.techStack.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}

      {visible.length === 0 && (
        <p className="mt-14 text-muted-foreground">Nothing under this filter yet.</p>
      )}
    </>
  );
}
