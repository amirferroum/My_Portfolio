import React from "react";
import { motion } from "framer-motion";
import { useWindowSize } from "@uidotdev/usehooks";


const Curve = ({color}) => {

  const size = useWindowSize();



  const init = `M0 0 L${size.width} 0 Q${size.width/2} 0 0 0`
  const targ = `M0 0 L${size.width} 0 Q${size.width/2} 200 0 0`
  const curve = {
    initial: {
      d: init,
    },

    enter: {
      d: targ,

      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },

  };

  return (
    <svg className="absolute top-[100%]  left-0 h-[100px] w-[100%]   stroke-none"
    style={{fill:color }}>
      <motion.path variants={curve} initial="initial" animate="enter" ></motion.path>
    </svg>
  );
};

export default Curve;
