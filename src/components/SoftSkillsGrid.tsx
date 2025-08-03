// SoftSkillsGrid.jsx

import SkillProgress from "@/components/SkillProgress";

const skills = [
  { name: "Communication", value: 90, color: "#4ade80" }, // green
  { name: "Teamwork", value: 90, color: "#60a5fa" }, // blue
  { name: "Problem Solving", value: 85, color: "#facc15" }, // yellow
  { name: "Adaptability", value: 80, color: "#f87171" }, // red
];

export default function SoftSkillsGrid() {
  return (
    <div className="md:w-full w-[75%] p-6 mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Soft Skills</h2>
      <div className="grid grid-cols-2 mx-auto md:gap-10 gap-20">
        {skills.map((s) => (
          <SkillProgress
            key={s.name}
            skill={s.name}
            value={s.value}
            color={s.color}
          />
        ))}
      </div>
    </div>
  );
}
