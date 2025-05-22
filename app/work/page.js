'use client';

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header/Header";
import projects from "@/data/projects";
import Project from "./Project";
import Modal from "./Modal";
import Image from "next/image";
import Rounded from "../../common/RoundedButton";

export default function Page() {
  const router = useRouter();
  const container = useRef(null);

  // Add modal state here
  const [modal, setModal] = useState({ active: false, index: 0 });

  const handleProjectClick = (index) => {
    router.push(`/work/${index}`);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header textColor="text-black" />

      <div className="relative w-full px-16 lg:px-48 py-36 flex-grow">
        <div className="w-full flex justify-start font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl p-4">
          Creating next level
        </div>
        <div className="w-full flex justify-start font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl p-4 pb-16">
          digital products
        </div>

        <span className="p-8 pb-4 text-sm text-gray-500">Some Work</span>
        <div>
          {projects.map((project, index) => (
            <div
              key={`/modal_${index}`}
              onClick={() => handleProjectClick(index)}
              className="cursor-pointer"
            >
              <Project
                color={project.color}
                index={index}
                src={project.images[0]}
                title={project.title}
                sidetext={project.sidetext}
                setModal={setModal}  // Pass setModal here if Project uses it
              />
            </div>
          ))}
        </div>

        {/* Pass modal state and projects */}
        <Modal modal={modal} projects={projects} />
      </div>

      {/* Contact Footer */}
         {/* Contact Footer */}
      <footer
        ref={container}
        className="bg-[#141516] text-white px-16 lg:px-48 py-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-10">
            <div className="flex items-center gap-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden">
                <Image
                  src="/assets/profile_pic.jpg"
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold">Let's work</h2>
                <h2 className="text-4xl font-bold">together</h2>
              </div>
            </div>

            <div>
              <Rounded backgroundColor={"#334BD3"}>
                <p className="cursor-pointer">Get in touch</p>
              </Rounded>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between mt-10 gap-6 text-white">
            <Rounded>
              <p>amirferroum@gmail.com</p>
            </Rounded>
            <Rounded>
              <p>+213 699 82 67 33</p>
            </Rounded>
          </div>

          <div className="mt-10 flex justify-between text-sm opacity-80">
            <div>
              <h3 className="uppercase font-semibold">Version</h3>
              <p>2024 © Edition</p>
            </div>
            <div>
              <h3 className="uppercase font-semibold mb-2">Socials</h3>
              <p className="cursor-pointer hover:underline">Instagram</p>
              <p className="cursor-pointer hover:underline">Dribbble</p>
              <p className="cursor-pointer hover:underline">Linkedin</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
