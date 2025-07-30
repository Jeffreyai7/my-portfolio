// components/Projects.tsx
"use client";
import { projects } from "@/lib/constant";
import { motion } from "framer-motion";

import type { Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800 dark:text-white"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.4 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {project.description}
              </p>
              <div className="flex flex-wrap mt-4 gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
