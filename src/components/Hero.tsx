"use client";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import Profilepic from "@/assets/profile.png";
import LocalTime from "./LocalTime";
import { profile } from "@/lib/constant";

const ease = [0.22, 1, 0.36, 1] as const;

const headline: { text: string; accent?: boolean }[] = [
  { text: "Interfaces" },
  { text: "that" },
  { text: "feel", accent: true },
  { text: "effortless,", accent: true },
  { text: "engineered" },
  { text: "to" },
  { text: "last." },
];

export default function Hero() {
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mx}px ${my}px, hsl(var(--accent) / 0.07), transparent 70%)`;

  return (
    <section
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
      className="relative isolate overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40"
    >
      {/* Backdrop */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid mask-fade-b" />
      <div
        aria-hidden
        className="absolute -right-40 -top-40 -z-10 h-[560px] w-[560px] rounded-full bg-accent/10 blur-[140px]"
      />
      <motion.div aria-hidden style={{ background: spotlight }} className="absolute inset-0 -z-10 hidden md:block" />

      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-white/[0.03] py-1.5 pl-2 pr-4 text-[13px] text-muted-foreground"
            >
              <span className="relative flex h-2 w-2 ml-1">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to new roles &amp; freelance projects
            </motion.div>

            <h1 className="font-display text-[clamp(3rem,7.4vw,6.4rem)] leading-[0.95] tracking-[-0.02em] text-balance">
              {headline.map((w, i) => (
                <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.1 + i * 0.06, ease }}
                    className={`inline-block ${w.accent ? "italic text-accent" : ""}`}
                  >
                    {w.text}
                    {i < headline.length - 1 && " "}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease }}
              className="mt-8 max-w-[540px] text-[17px] leading-relaxed text-muted-foreground text-pretty"
            >
              I&rsquo;m <span className="text-foreground">Jeffrey Irukeh</span>, a front-end
              engineer turning product ideas into fast, accessible React &amp; Next.js
              applications — and wiring them to REST APIs, real-time data and smart
              contracts. Currently building Web3 infrastructure tooling at{" "}
              <span className="text-foreground">Falpine</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a href="#work" className="btn-primary group">
                See selected work
                <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
              </a>
              <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn-ghost group">
                Download résumé
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease }}
            className="relative mx-auto w-full max-w-[400px] lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-border bg-card">
              <Image
                src={Profilepic}
                alt="Portrait of Jeffrey Irukeh"
                fill
                priority
                placeholder="blur"
                sizes="(max-width: 1024px) 400px, 460px"
                className="object-cover object-[50%_30%] grayscale-[35%] transition-all duration-700 hover:grayscale-0 hover:scale-[1.02]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                <div className="rounded-2xl border border-white/10 bg-background/60 px-4 py-3 backdrop-blur-md">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Currently
                  </p>
                  <p className="mt-1 text-sm">Frontend Web3 Dev @ Falpine</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-background/60 px-3 py-3 backdrop-blur-md">
                  <LocalTime className="font-mono text-sm tabular-nums" />
                </div>
              </div>
            </div>
            <div
              aria-hidden
              className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-[28px] border border-accent/30"
            />
          </motion.div>
        </div>

        {/* Meta strip */}
        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-20 grid grid-cols-2 gap-y-6 border-t border-border pt-6 text-sm md:grid-cols-4"
        >
          {[
            { k: "Based in", v: <span className="inline-flex items-center gap-1.5"><MapPin size={13} className="text-accent" />Lagos, Nigeria</span> },
            { k: "Focus", v: "React · Next.js · Web3" },
            { k: "Working", v: "Remote, worldwide" },
            { k: "Timezone", v: "WAT · UTC+1" },
          ].map(({ k, v }) => (
            <div key={k}>
              <dt className="eyebrow mb-1.5">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
