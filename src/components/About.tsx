const About = () => (
  <section className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-16 py-12 md:py-16 border-b border-border">
    <span className="text-[11px] text-muted-foreground tracking-[0.12em] uppercase font-mono">
      About
    </span>
    <div>
      <h2 className="font-display font-light text-3xl text-foreground leading-[1.15] mb-5">
        Precision-driven
        <br />
        <em className="italic text-accent">frontend craft</em>
      </h2>
      <p className="text-sm text-muted-foreground leading-[1.9] max-w-[580px] font-mono">
        I&apos;m a frontend developer with a passion for building fast,
        accessible, and meticulously crafted web applications. My stack centers
        on React and Next.js, with a strong grip on TypeScript and modern CSS.
      </p>
      <p className="text-sm text-muted-foreground leading-[1.9] max-w-[580px] font-mono mt-3">
        I care deeply about the details — the kind that users feel without
        noticing. If it ships, it should be right.
      </p>
    </div>
  </section>
);

export default About;