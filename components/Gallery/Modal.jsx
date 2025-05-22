"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
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
    const el = container.current;
    if (!el) return;

    const halfWidth = 125; // Half of 250px
    const halfHeight = 100; // Half of 200px

    const xMoveContainer = gsap.quickTo(el, "left", {
      duration: 0.4,
      ease: "power3.out",
    });

    const yMoveContainer = gsap.quickTo(el, "top", {
      duration: 0.4,
      ease: "power3.out",
    });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      xMoveContainer(clientX - halfWidth);
      yMoveContainer(clientY - halfHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={container}
      variants={scaleAnimation}
      initial="initial"
      animate={active ? "open" : "closed"}
      className="absolute pointer-events-none h-[200px] w-[250px] overflow-hidden"
    >
      <div
        style={{ top: index * -100 + "%" }}
        className="absolute h-full w-full transition-all duration-700"
      >
        {projects.map((project, idx) => {
          const { images, color } = project;
          return (
            <div
              key={`modal_${idx}`}
              style={{ backgroundColor: color }}
              className="relative h-full w-full flex justify-center items-center"
            >
              <Image
                src={`/assets/${images[0]}`}
                width={200}
                height={0}
                className="h-auto"
                alt={`project-${idx}`}
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Modal;
