import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Learning = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Self-study courses and projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/111.png"
          title="The Python course studied on YouTube."
          description="Website link:https://youtu.be/_uQrJ0TkZlc?si=yGN6H0WLr4t0ydDv"
        />
        <ProjectCard
          src="/222.png"
          title="The personal website building project studied on YouTube."
          description="Website link:https://youtu.be/0siQoaXMmzk?si=NVMKm6OfEzU4P9tT"
        />
        <ProjectCard
          src="/333.png"
          title="中国大学MOOC的微机原理课程"
          description="Website link:https://www.icourse163.org/course/JLU-1002056024"
        />
      </div>
    </div>
  );
};

export default Learning;
