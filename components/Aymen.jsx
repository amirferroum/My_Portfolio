import React from 'react'
import { useInView,motion,useAnimate,usePresence,stagger } from "framer-motion";
const Aymen = () => {
  const text = "Aymen";

  const usingArrayFrom = Array.from(text)
  console.log(usingArrayFrom);
    const colormain = '#552583';
  return (
    <div className="fixed w-[100vw] h-[100vh] top-0 left-0 bg-black z-50 flex justify-center items-center ">
<div 

className="">
<motion.div 

animate={{color:"transparent"}}
transition = { {duration: 0.4, ease: [0.76, 0, 0.24, 1], delay: 3.1}}

className="relative overflow-hidden text-[#552583] font-bold text-6xl w-[352px] h-[130px]  flex justify-center items-center">

  
<motion.span
  initial={{rotate:220, translateY:-32}}
  animate={{rotate:0,translateY:0,margin:5}}
  transition = { {duration: 0.4, ease: [0.76, 0, 0.24, 1], delay: 0.4}}
  className="m-4">A</motion.span>
  <motion.span
  initial={{rotate:150, translateY:32}}
  animate={{rotate:0,translateY:0,margin:5}}
  transition = { {duration: 0.4, ease: [0.76, 0, 0.24, 1], delay: 0.8}}
  className="m-4">Y</motion.span>
  <motion.span
  initial={{rotate:190, translateY:-32}}
  animate={{rotate:0,translateY:0,margin:5}}
  transition = { {duration: 0.4, ease: [0.76, 0, 0.24, 1], delay: 1.2}}
  className="m-4">M</motion.span>
  <motion.span
  initial={{rotate:150, translateY:32}}
  animate={{rotate:0,translateY:0,margin:5}}
  transition = { {duration: 0.4, ease: [0.76, 0, 0.24, 1], delay: 1.6}}
  className="m-4">E</motion.span>
  <motion.span
  initial={{rotate:220, translateY:-32}}
  animate={{rotate:0,translateY:0,margin:5}}
  transition = { {duration: 0.4, ease: [0.76, 0, 0.24, 1], delay: 2}}
  className="m-4">N</motion.span>


<motion.div
  initial={{translateX:1000}}
  animate={{translateX:[1000,0,-1000]}}
  
  transition = { {duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 2.4}}
  className="absolute w-full h-full bg-[#fada5e] flex justify-center items-center z-50">



  </motion.div>

  <motion.div
initial={{color:"transparent"}}
animate={{color:colormain}}

 
className="absolute overflow-hidden duration-1000 delay-[3.1s] text-[#552583] font-bold text-6xl w-[352px] h-[130px]  flex justify-center items-center z-40 ">

Welcome
</motion.div>


</motion.div>






</div>

</div> 
  )
}

export default Aymen