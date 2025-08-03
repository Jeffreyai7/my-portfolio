"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

type Stack = {
  name: string;
  icon: string;
  percent: number;
  color: string; // Tailwind class
};

const techStacks: Stack[] = [
  {
    name: "React",
    icon: "simple-icons:react",
    percent: 90,
    color: "bg-sky-500",
  },
  {
    name: "Next.js",
    icon: "simple-icons:nextdotjs",
    percent: 85,
    color: "bg-neutral-800",
  },
  {
    name: "Saas",
    icon: "simple-icons:sass",
    percent: 90,
    color: "bg-blue-500",
  },
  {
    name: "Tailwind CSS",
    icon: "simple-icons:tailwindcss",
    percent: 95,
    color: "bg-cyan-500",
  },
  {
    name: "TypeScript",
    icon: "simple-icons:typescript",
    percent: 85,
    color: "bg-blue-700",
  },
  {
    name: "Git",
    icon: "simple-icons:git",
    percent: 80,
    color: "bg-green-600",
  },
  {
    name: "Nestjs",
    icon: "simple-icons:nestjs",
    percent: 70,
    color: "bg-orange-500",
  },
];

export default function TechStackProgress() {
  return (
    <div className="w-full p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Tech Stack</h2>
      <div className="space-y-5">
        {techStacks.map((stack) => (
          <div key={stack.name}>
            <div className="flex items-center justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              <div className="flex items-center gap-2">
                <Icon
                  icon={stack.icon}
                  width="20"
                  height="20"
                  className="text-gray-800 dark:text-gray-100"
                />
                <span>{stack.name}</span>
              </div>
              <span>{stack.percent}%</span>
            </div>

            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${stack.percent}%` }}
                transition={{ duration: 1 }}
                className={`h-4 rounded-full ${stack.color}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
