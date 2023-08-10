'use client'
import { useState } from "react";
import Project from "./Project";
import Modal from "./Modal";
import Test from "../Test";
import Title_sections from "../Title_sections";
import { motion } from "framer-motion";
const Gallery = () => {
  const projects = [
    {
      title: "Aymen Portfolio",
      src: "c2montreal.png",
      color: "#000000",
      sidetext:"Design & Devlopment"
    },

    {
      title: "Office Studio",

      src: "officestudio.png",

      color: "#8C8C8C",
      sidetext:"Devlopment"
    },

    {
      title: "Locomotive",

      src: "locomotive.png",

      color: "#EFE8D3",
      sidetext:"Design & Devlopment"
    },

    {
      title: "Silencio",

      src: "silencio.png",

      color: "#706D63",
      sidetext:"Design & Devlopment"
    },
    
  ];

const [modal, setmodal] = useState({active: false,index: 0});

  return <div className="relative w-full px-16 lg:px-48 py-36">
    <Title_sections title ="Projects" color ='white' />
    <span className="p-8 text-sm text-gray-500">Some Work</span>
    <div >
    {projects.map((project,index)=> {
        return <Project key={`/modal_${index}`}  color={project.color} index={index} src ={project.src} title={project.title} sidetext= {project.sidetext}  setModal={setmodal}/>
    })} 
    </div >

    

   
    <div className="w-full flex justify-center p-4">
  
      <div className="group relative overflow-hidden z-1 px-8 sm:px-16 py-4 sm:py-6 rounded-full text-lg sm:text-xl cursor-pointer border mt-9">
<h1 className="z-10 group-hover:text-white delay-200">More Work</h1>

<div


className="absolute w-full h-full top-[100%]   left-[-100%] rounded-full group-hover:top-0 group-hover:left-0  duration-500 ease-in-out bg-[#455CE9] -z-10">

</div>
      </div>
      
    </div>
  
   
    
    <Modal modal = {modal} projects ={projects}/>
   
    
 
   
   
  </div>;
};

export default Gallery;
