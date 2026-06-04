"use client";
import { projects } from "@/lib/constant";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      id="projects"
      className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-16 py-12 md:py-16 border-b border-border"
    >
      <span className="text-[11px] text-muted-foreground tracking-[0.12em] uppercase font-mono">
        Projects
      </span>

      <div>
        {projects.slice(0, 4).map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            viewport={{ once: true }}
            className="group grid grid-cols-1 sm:grid-cols-[1fr_160px] gap-4 items-start py-8 border-b border-border first:border-t first:border-border"
          >
            {/* Left: text content */}
            <div className="order-2 sm:order-1">
              <p className="text-[11px] text-muted-foreground font-mono mb-2">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="font-display font-light text-xl text-foreground group-hover:text-accent transition-colors duration-200 mb-2">
                {project.title}
              </h3>

              <p className="text-xs text-muted-foreground font-mono leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] border border-border text-muted-foreground font-mono px-2 py-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-5">
                {project.location === "github" ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-muted-foreground font-mono hover:text-accent transition-colors"
                  >
                    Github ↗
                  </a>
                ) : (
                  <span className="text-[11px] text-muted-foreground font-mono italic">
                    Private
                  </span>
                )}
                {project.demo && (
                 <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-muted-foreground font-mono hover:text-accent transition-colors"
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </div>

            {/* Right: project thumbnail */}
            <div className="order-1 sm:order-2 w-full sm:w-[160px] shrink-0">
              <div className="relative w-full aspect-video sm:aspect-[4/3] overflow-hidden border border-border bg-card">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 640px) 100vw, 160px"
                />
              </div>
            </div>
          </motion.div>
        ))}

        <div className="pt-8">
          <Link
            href="/projects"
            className="text-xs font-mono text-muted-foreground border border-border px-5 py-2.5 hover:border-foreground hover:text-foreground transition-colors"
          >
            All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}