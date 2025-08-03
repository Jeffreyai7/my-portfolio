import React from "react";
import TechStackProgress from "./TechStackProgress";
import SoftSkillsGrid from "./SoftSkillsGrid";

const MySkills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full ">
      <TechStackProgress />
      <SoftSkillsGrid />
    </div>
  );
};

export default MySkills;
