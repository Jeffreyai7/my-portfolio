"use client";
import { projects } from "@/lib/constant";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  const previewProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="grid grid-cols-[180px_1fr] gap-16 py-16 border-b border-border">
      <span className="text-[11px] text-muted-foreground tracking-[0.12em] uppercase font-mono pt-1">
        Projects
      </span>
      <div>
        {previewProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="group grid grid-cols-[1fr_auto] gap-5 items-start py-6 border-b border-border first:border-t first:border-border"
          >
            <div>
              <p className="text-[11px] text-muted-foreground font-mono mb-2">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3
                className="text-xl font-light text-foreground group-hover:text-[var(--accent)] transition-colors mb-2"
                style={{ fontFamily: "var(--ff-display)" }}
              >
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground font-mono leading-relaxed mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] border border-border text-muted-foreground px-2 py-0.5 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 items-end pt-7">
              {project.location === "github" ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-muted-foreground font-mono hover:text-[var(--accent)] transition-colors"
                >
                  Github ↗
                </a>
              ) : (
                <span className="text-[11px] text-muted-foreground font-mono">Private</span>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-muted-foreground font-mono hover:text-[var(--accent)] transition-colors"
                >
                  Live ↗
                </a>
              )}
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