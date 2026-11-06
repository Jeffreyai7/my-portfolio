import Link from "next/link";
import { ArrowUp } from "lucide-react";
import LocalTime from "./LocalTime";
import { navLinks, profile } from "@/lib/constant";

export const Footer = () => (
  <footer className="border-t border-border pt-16">
    <div className="container-x">
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl">
            Jeffrey <em className="text-accent">Irukeh</em>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Front-end engineer building fast, accessible products for the web and Web3.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.id}>
                <Link href={l.href} className="text-muted-foreground transition-colors hover:text-foreground">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="eyebrow mb-4">Elsewhere</p>
          <ul className="space-y-2.5 text-sm">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${profile.email}`} className="text-muted-foreground transition-colors hover:text-foreground">
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-border py-6 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {profile.fullName}. Designed &amp; built in Lagos.
        </p>
        <div className="flex items-center gap-6">
          <span>
            Local time · <LocalTime className="tabular-nums text-foreground" />
          </span>
          <a href="#main" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
            Back to top <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);
