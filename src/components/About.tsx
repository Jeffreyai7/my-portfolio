const About = () => (
  <section className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-16 py-12 md:py-16 border-b border-border">
    <span className="text-[11px] text-muted-foreground tracking-[0.12em] uppercase font-mono">
      About
    </span>
    <div>
      <h2 className="font-display font-light text-3xl text-foreground leading-[1.15] mb-5">
        Full-stack
        <br />
        <em className="italic text-accent">product craft</em>
      </h2>
      <p className="text-sm text-muted-foreground leading-[1.9] max-w-[580px] font-mono">
        I&apos;m a full stack developer building experiences from the interface
        to the systems behind it. My work blends React, Next.js, TypeScript,
        NestJS, and Express with practical product thinking to ship digital
        experiences that feel polished and work reliably.
      </p>
      <p className="text-sm text-muted-foreground leading-[1.9] max-w-[580px] font-mono mt-3">
        I also work with AI-driven tools and workflows, using modern AI systems
        to accelerate product thinking, workflows, and intelligent user
        experiences.
      </p>
    </div>
  </section>
);

export default About;
