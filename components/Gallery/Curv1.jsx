import React from "react";
import { motion } from "framer-motion";

const Curve = () => {
  const initialPath = `M100 0 L100 ${window.innerWidth} Q-100 ${
    window.innerWidth / 2
  } 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerWidth / 2
  } 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },

    enter: {
      d: targetPath,

      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },

    exit: {
      d: initialPath,

      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className="absolute top-[110%] left-0 w-[100%] bg-black h-[100px] fill-[#292929] stroke-none">
      <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
    </svg>
  );
};

export default Curve;
