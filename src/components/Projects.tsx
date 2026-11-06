import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";
import { projects } from "@/lib/constant";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="border-t border-border py-24 md:py-36">
      <div className="container-x">
        <SectionHeader
          index="03"
          label="Selected work"
          title={
            <>
              Products I&rsquo;ve <em className="text-accent">built</em>
            </>
          }
          intro="A mix of client platforms, product work and focused builds — each one shipped, live and used."
          aside={
            <Link href="/projects" className="btn-ghost group">
              All projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          }
        />

        <div className="grid gap-x-10 gap-y-20 md:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.1} className={i % 2 ? "md:mt-24" : ""}>
              <ProjectCard project={p} priority={i < 2} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-28">
          <h3 className="eyebrow mb-6">Also built</h3>
          <ul className="border-t border-border">
            {rest.map((p) => {
              const href = p.demo ?? p.github;
              const Row = (
                <div className="grid grid-cols-[1fr_auto] items-center gap-4 py-6 md:grid-cols-[1.2fr_1.6fr_1fr_auto] md:gap-8">
                  <span className="text-lg font-medium tracking-tight transition-colors group-hover:text-accent">
                    {p.title}
                  </span>
                  <span className="hidden text-sm text-muted-foreground md:block">{p.tagline}</span>
                  <span className="hidden font-mono text-xs text-muted-foreground md:block">{p.category}</span>
                  {href ? (
                    <ArrowUpRight
                      size={18}
                      className="text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  ) : (
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      Private
                    </span>
                  )}
                </div>
              );
              return (
                <li key={p.slug} className="group border-b border-border">
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
                      {Row}
                    </a>
                  ) : (
                    Row
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
