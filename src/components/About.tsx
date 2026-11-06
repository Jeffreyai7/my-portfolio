import Reveal from "./Reveal";
import { stats } from "@/lib/constant";

const principles = [
  { title: "Accessible by default", body: "Semantic markup, keyboard paths and contrast are part of the build, not a later ticket." },
  { title: "Performance is a feature", body: "Lean bundles, smart data fetching and UI that responds before you notice the wait." },
  { title: "Clear code, clear docs", body: "Components and state models the next engineer can pick up on day one." },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow mb-5 flex items-center gap-3">
            <span className="text-accent">01</span>
            <span className="h-px w-8 bg-border" aria-hidden />
            About
          </p>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <h2 className="font-display text-[clamp(2.2rem,4.6vw,3.75rem)] leading-[1.05] tracking-[-0.01em] text-balance">
              I care about the space between a{" "}
              <em className="text-accent">design file</em> and a product people{" "}
              <em className="text-accent">trust.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="space-y-5 text-[16px] leading-[1.75] text-muted-foreground text-pretty">
            <p>
              My route into engineering wasn&rsquo;t a straight line. I studied
              Biochemistry at the University of Benin, then found my way into tech
              through IT support — fixing systems and teaching people to use them.
              That habit of thinking about the person on the other side of the
              screen still shapes everything I build.
            </p>
            <p>
              Today I work across the front end and enough of the stack behind it:{" "}
              <span className="text-foreground">React, Next.js and TypeScript</span> up
              front, <span className="text-foreground">Node, Express and SQL</span>{" "}
              behind, and <span className="text-foreground">ethers.js and RPC nodes</span>{" "}
              when a product touches the chain. I&rsquo;ve also coordinated multi-project
              delivery, so I know what it takes to get from brief to production — not
              just from ticket to pull request.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="bg-background p-7 md:p-8">
              <p className="font-display text-6xl leading-none tracking-tight">{s.value}</p>
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="card-surface p-7">
              <p className="font-mono text-xs text-accent">0{i + 1}</p>
              <h3 className="mt-4 text-lg font-medium tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
