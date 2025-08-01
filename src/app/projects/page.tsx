"use client";
import { projects } from "@/lib/constant";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, bounce: 0.2, duration: 0.8 },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-8 text-foreground"
        >
          Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-card text-card-foreground border border-border rounded-2xl shadow-md p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl mb-4 w-full h-48 object-cover border border-border"
              />

              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="text-muted-foreground mt-2">
                {project.description}
              </p>

              <div className="flex flex-wrap mt-4 gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-muted text-muted-foreground text-sm px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-4 items-center text-sm font-medium">
                {project.location === "github" ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Code
                  </a>
                ) : (
                  <span className="text-muted-foreground italic">Private</span>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
