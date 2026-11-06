"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Loader2, Send } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "@/lib/constant";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl border border-border bg-background/60 px-4 py-3.5 text-[15px] text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-accent/60 focus:outline-none focus:ring-4 focus:ring-accent/10";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(profile.formspree, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative isolate overflow-hidden border-t border-border py-24 md:py-36">
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -z-10 h-[420px] w-[900px] -translate-x-1/2 translate-y-1/2 rounded-full bg-accent/10 blur-[140px]"
      />
      <div className="container-x grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow mb-5 flex items-center gap-3">
            <span className="text-accent">06</span>
            <span className="h-px w-8 bg-border" aria-hidden />
            Contact
          </p>
          <h2 className="font-display text-[clamp(2.8rem,6.5vw,5.5rem)] leading-[0.95] tracking-[-0.02em] text-balance">
            Let&rsquo;s build something <em className="text-accent">worth using.</em>
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-muted-foreground">
            Hiring for a front-end or Web3 role, or need a product built properly?
            Tell me what you&rsquo;re working on.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary text-[15px]">
              {profile.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="btn-ghost !px-4"
              aria-label="Copy email address"
            >
              {copied ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
              <span className="text-sm">{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>

          <ul className="mt-12 border-t border-border">
            {profile.socials.map((s) => (
              <li key={s.label} className="border-b border-border">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-4"
                >
                  <span className="text-[15px]">{s.label}</span>
                  <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors group-hover:text-accent">
                    {s.handle}
                    <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="card-surface relative space-y-5 bg-card/80 p-6 backdrop-blur sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-muted-foreground">Name</label>
                <input id="name" name="name" required autoComplete="name" placeholder="Ada Lovelace" className={field} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-muted-foreground">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="ada@company.com" className={field} />
              </div>
            </div>
            <div>
              <label htmlFor="topic" className="mb-2 block text-sm text-muted-foreground">
                I&rsquo;m reaching out about
              </label>
              <select id="topic" name="topic" className={field} defaultValue="Full-time role">
                <option>Full-time role</option>
                <option>Freelance / contract project</option>
                <option>Web3 / DApp build</option>
                <option>Just saying hello</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-muted-foreground">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="A little about the project, team or role…"
                className={`${field} resize-none`}
              />
            </div>
            {/* Honeypot field for Formspree spam filtering */}
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

            <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-70">
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Send message <Send size={15} />
                </>
              )}
            </button>

            <div aria-live="polite" className="min-h-[1.25rem] text-center text-sm">
              <AnimatePresence mode="wait">
                {status === "sent" && (
                  <motion.p key="ok" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-accent">
                    Thanks — your message is in. I&rsquo;ll get back to you soon.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p key="err" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-destructive">
                    Something went wrong. Please email me directly instead.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
