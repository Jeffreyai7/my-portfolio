import React from "react";
import TechStackProgress from "./TechStackProgress";
import SoftSkillsGrid from "./SoftSkillsGrid";

const MySkills = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:justify-between w-full h-full ">
      <TechStackProgress />
      <SoftSkillsGrid />
    </div>
  );
};

export default MySkills;
