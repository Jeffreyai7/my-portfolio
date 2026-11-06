import Reveal from "./Reveal";
import { experience, profile } from "@/lib/constant";
import { ArrowUpRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border py-24 md:py-36">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.7fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className="eyebrow mb-5 flex items-center gap-3">
              <span className="text-accent">02</span>
              <span className="h-px w-8 bg-border" aria-hidden />
              Experience
            </p>
            <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] leading-[1] tracking-[-0.01em]">
              Where I&rsquo;ve <em className="text-accent">shipped</em>
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              From IT support to Web3 infrastructure — each role added a layer to
              how I think about products.
            </p>
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-8 group"
            >
              Full résumé
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <ol className="relative">
          <span aria-hidden className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-accent/60 via-border to-transparent" />
          {experience.map((job, i) => (
            <li key={job.company} className="relative pb-14 pl-10 last:pb-0">
              <Reveal delay={i * 0.05}>
                <span
                  aria-hidden
                  className={`absolute left-0 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full border ${
                    job.current ? "border-accent bg-accent/20" : "border-border bg-background"
                  }`}
                >
                  <span className={`h-[5px] w-[5px] rounded-full ${job.current ? "bg-accent" : "bg-muted-foreground"}`} />
                </span>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
                  <span>{job.period}</span>
                  <span aria-hidden>·</span>
                  <span>{job.location}</span>
                  {job.current && (
                    <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] uppercase tracking-wider text-accent">
                      Now
                    </span>
                  )}
                </div>

                <h3 className="mt-3 text-2xl font-medium tracking-tight">
                  {job.role}
                  <span className="text-muted-foreground"> — {job.company}</span>
                </h3>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-foreground/80">{job.summary}</p>

                <ul className="mt-5 space-y-2.5">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                      <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-accent/70" />
                      {h}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
                  {job.stack.map((t) => (
                    <li key={t} className="chip">{t}</li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
