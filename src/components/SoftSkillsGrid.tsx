// SoftSkillsGrid.jsx

import SkillProgress from "@/components/SkillProgress";

const skills = [
  { name: "Communication", value: 85, color: "#4ade80" }, // green
  { name: "Teamwork", value: 70, color: "#60a5fa" }, // blue
  { name: "Problem Solving", value: 90, color: "#facc15" }, // yellow
  { name: "Adaptability", value: 75, color: "#f87171" }, // red
];

export default function SoftSkillsGrid() {
  return (
    <div className="w-[75%] mx-auto">
      <div className="grid grid-cols-2 mx-auto gap-10">
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
