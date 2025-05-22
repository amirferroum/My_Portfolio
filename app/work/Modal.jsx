"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";



const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },

  open: {
    scale: 1,
    
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    scale: 0,
   
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const Modal = ({ modal, projects }) => {
  const { active, index } = modal;
  const container = useRef(null);
  
  useEffect(() => {
    let xMoveContainer = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });

    let yMoveContainer = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
   
    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      xMoveContainer(clientX   );
      yMoveContainer(clientY );
    
    });
  }),[];

  return (
    <>
    <motion.div
      ref={container}
      variants={scaleAnimation}
      initial={"initial"}
      animate={active ? "open" : "closed"}
      
      className="absolute pointer-events-none h-[200px]   w-[250px] overflow-hidden"
    >
      <div
      style={{top: index * -100 + "%"}}
        className={`absolute h-full w-full ease-sp duration-700`}
      >
        {projects.map((project, index) => {
          const { src, color } = project;

          return (
            <div
              key={`/modal_${index}`}
              style={{backgroundColor: color}}
              className={`bg-[${color}] relative h-full flex justify-center items-center `}
            >
              <Image
                className="h-auto"
                src={`/assets/${src}`}
                width={200}
                height={0}
                alt="image"
              />
            
            </div>
          );
        })}
   
         
      </div>

    </motion.div>

    </>
  );
};

export default Modal;
