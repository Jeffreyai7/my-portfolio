"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { navLinks, profile } from "@/lib/constant";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view (home page only)
  useEffect(() => {
    if (pathname !== "/") {
      setActive(pathname.startsWith("/projects") ? "work" : null);
      return;
    }
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-accent"
      />
      <header className="fixed inset-x-0 top-0 z-50 pt-4">
        <div className="container-x">
          <div
            className={cn(
              "flex items-center justify-between rounded-full border px-3 py-2 pl-5 transition-all duration-500",
              scrolled || open
                ? "border-border bg-background/70 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl"
                : "border-transparent bg-transparent"
            )}
          >
            <Link
              href="/"
              className="group flex items-center gap-2.5"
              aria-label="Jeffrey Irukeh — home"
              onClick={() => setOpen(false)}
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-accent font-display text-[15px] italic text-accent-foreground transition-transform duration-500 group-hover:rotate-[360deg]">
                j
              </span>
              <span className="text-sm font-medium tracking-tight">
                {profile.name}
              </span>
            </Link>

            <nav aria-label="Primary" className="hidden md:block">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => {
                  const isActive = active === link.id;
                  return (
                    <li key={link.id}>
                      <Link
                        href={link.href}
                        className={cn(
                          "relative rounded-full px-3.5 py-1.5 text-[13px] transition-colors",
                          isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 -z-10 rounded-full bg-white/[0.07]"
                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                          />
                        )}
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary hidden !px-4 !py-2 text-[13px] sm:inline-flex"
              >
                Résumé <ArrowUpRight size={14} />
              </a>
              <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="relative grid h-9 w-9 place-items-center rounded-full border border-border md:hidden"
              >
                <span
                  className={cn(
                    "absolute h-px w-4 bg-foreground transition-transform duration-300",
                    open ? "rotate-45" : "-translate-y-[3px]"
                  )}
                />
                <span
                  className={cn(
                    "absolute h-px w-4 bg-foreground transition-transform duration-300",
                    open ? "-rotate-45" : "translate-y-[3px]"
                  )}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <nav aria-label="Mobile" className="container-x flex h-full flex-col justify-between pb-10 pt-28">
              <ul className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i + 0.05, ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 border-b border-border py-4 font-display text-4xl"
                    >
                      <span className="font-mono text-xs text-accent">0{i + 1}</span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="space-y-4">
                <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                  View résumé <ArrowUpRight size={16} />
                </a>
                <p className="text-center font-mono text-xs text-muted-foreground">{profile.email}</p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
