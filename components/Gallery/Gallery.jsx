'use client'
import { useState } from "react";
import Project from "./Project";
import Modal from "./Modal";
import Title_sections from "../Title_sections";
import Magnetic from "@/common/Magnetic";
import projects from "@/data/projects";

const Gallery = () => {
  const [modal, setmodal] = useState({ active: false, index: 0 });

  // Only take first 4 projects
  const displayedProjects = projects.slice(0, 4);

  return (
    <div className="relative w-full px-16 lg:px-48 py-36">
      <Title_sections title="Projects" color="white" />
      <span className="p-8 text-sm text-gray-500">Some Work</span>
      <div>
        {displayedProjects.map((project, index) => (
          <Project
            key={`/modal_${index}`}
            color={project.color}
            index={index}
            // Pass only first pic src to Project
            src={Array.isArray(project.images) ? project.images[0] : project.images}
            title={project.title}
            sidetext={project.sidetext}
            setModal={setmodal}
          />
        ))}
      </div>

      <Magnetic>
        <div className="w-full flex justify-center p-4">
          <div className="group relative overflow-hidden z-1 px-8 sm:px-16 py-4 sm:py-6 rounded-full text-lg sm:text-xl cursor-pointer border mt-9">
            <h1 className="z-10 group-hover:text-white delay-200">More Work</h1>
            <div className="absolute w-full h-full top-[100%] left-[-100%] rounded-full group-hover:top-0 group-hover:left-0 duration-500 ease-in-out bg-[#455CE9] -z-10"></div>
          </div>
        </div>
      </Magnetic>

      {/* Pass projects to modal, but inside Modal you should ensure it only shows first picture */}
      <Modal modal={modal} projects={displayedProjects} />
    </div>
  );
};

export default Gallery;
