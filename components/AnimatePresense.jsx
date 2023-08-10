import React from "react";
import { AnimatePresence } from "framer-motion";
const AnimatePresense = ({ children }) => {
  return (
    <div>
      <AnimatePresence initial={false} >{children} </AnimatePresence>
    </div>
  );
};

export default AnimatePresense;
