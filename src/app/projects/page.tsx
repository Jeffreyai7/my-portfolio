import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import { projects } from "@/lib/constant";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Client platforms, product builds and Web3 work by Jeffrey Irukeh — built with React, Next.js and TypeScript.",
};

export default function ProjectsPage() {
  return (
    <main className="pb-24 pt-36 md:pb-36 md:pt-44">
      <div className="container-x">
        <Link
          href="/"
          className="group mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
          Back home
        </Link>
        <p className="eyebrow mb-5 flex items-center gap-3">
          <span className="text-accent">{String(projects.length).padStart(2, "0")}</span>
          <span className="h-px w-8 bg-border" aria-hidden />
          Projects
        </p>
        <h1 className="max-w-4xl font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] tracking-[-0.02em] text-balance">
          Everything I&rsquo;ve <em className="text-accent">shipped</em>, in one place.
        </h1>
        <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
          Client platforms, product work, Web3 builds and the experiments that
          sharpened the craft along the way.
        </p>

        <ProjectsExplorer />
      </div>
    </main>
  );
}
