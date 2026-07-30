import Image from "next/image";
import Profilepic from "@/assets/profile.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-10 items-end py-20 border-b border-border">
      <div>
        <p className="text-[11px] tracking-[0.12em] uppercase text-accent mb-4 font-mono">
          Frontend Developer — Lagos, NG
        </p>

        <h1
          className="font-display font-light text-[clamp(3rem,8vw,5.5rem)] leading-[0.95] text-foreground mb-6"
        >
          Jeffrey
          <br />
          <em className="italic text-accent not-italic">Irukeh</em>
        </h1>

        <p className="text-sm text-muted-foreground leading-[1.8] max-w-[380px] mb-8 font-mono">
          Building precise, performant web experiences with React and Next.js.
          Focused on the intersection of clean code and thoughtful UI.
        </p>

        <div className="flex items-center gap-4">
          <Link
            href="https://drive.google.com/file/d/1T__rllYelOgiHvjXtohJDf_XreRL0ZXW/view"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground font-mono text-xs font-medium px-5 py-2.5 hover:opacity-80 transition-opacity"
          >
            View CV ↗
          </Link>
          <Link
            href="#projects"
            className="border border-border text-muted-foreground font-mono text-xs px-4 py-2.5 hover:border-foreground hover:text-foreground transition-colors"
          >
            See Projects
          </Link>
        </div>
      </div>

      <div className="relative self-end hidden md:block">
        <div className="w-[260px] h-[320px] overflow-hidden border border-border bg-card relative">
          <Image
            src={Profilepic}
            alt="Jeffrey Irukeh"
            fill
            className="object-cover grayscale"
            sizes="260px"
            priority
          />
        </div>
        {/* <span className="absolute -bottom-3.5 -right-3.5 bg-accent text-accent-foreground font-mono text-[11px] font-medium px-3 py-1.5 tracking-wide">
          3 YRS EXP
        </span> */}
      </div>
    </section>
  );
};

export default Hero;