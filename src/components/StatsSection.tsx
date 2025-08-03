// components/StatsSection.tsx
import React from "react";
import Counter from "@/components/Counter";

const StatsSection = () => {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-10">
      <div>
        <Counter to={20} suffix="+" />
        <p className="text-sm">Projects Completed</p>
      </div>
      <div>
        <Counter to={8} suffix="+" />
        <p className=" text-sm">Technologies Used</p>
      </div>
      <div>
        <Counter to={3} suffix=" yrs" />
        <p className=" text-sm">Experience</p>
      </div>
      <div>
        <Counter to={600} suffix="+" />
        <p className=" text-sm">Code Commits</p>
      </div>
    </section>
  );
};

export default StatsSection;
