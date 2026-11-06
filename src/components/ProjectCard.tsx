import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/constant";
import { cn } from "@/lib/utils";

export default function ProjectCard({
  project,
  priority,
  className,
}: {
  project: Project;
  priority?: boolean;
  className?: string;
}) {
  const href = project.demo ?? project.github;

  return (
    <article className={cn("group relative flex flex-col", className)}>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-3 pb-0 transition-colors duration-500 group-hover:border-foreground/20 sm:p-5 sm:pb-0">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,hsl(var(--accent)/0.12),transparent)] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />
        {/* Browser chrome */}
        <div className="relative overflow-hidden rounded-t-xl border border-b-0 border-white/10 bg-background shadow-2xl">
          <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            {project.demo && (
              <span className="ml-3 truncate font-mono text-[10px] text-muted-foreground/70">
                {project.demo.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </span>
            )}
          </div>
          <div className="relative aspect-[16/9] overflow-hidden">
            {project.image && (
              <Image
                src={project.image}
                alt={`${project.title} — screenshot`}
                fill
                priority={priority}
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              />
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <p className="eyebrow">{project.category}</p>
          <h3 className="mt-2 text-2xl font-medium tracking-tight">
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="after:absolute after:inset-0 after:content-['']"
              >
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h3>
          <p className="mt-2 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>
        {href && (
          <span
            aria-hidden
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border transition-all duration-500 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground"
          >
            <ArrowUpRight size={18} />
          </span>
        )}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {project.techStack.map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
        {project.github && project.demo && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github size={14} /> Source
          </a>
        )}
      </div>
    </article>
  );
}
