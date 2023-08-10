"use client"
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { scale, slide } from "./anim";
import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from 'next/navigation';
export default function Index({ data, setSelectedIndicator,selected }) {
  const { title, href, index } = data;
  const pathname = usePathname();
  const [targ, settarg] = useState(false)
  return (
 
    <motion.div
    onMouseEnter={() => {setSelectedIndicator(href)}}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={`relative flex items-center text-4xl py-3 pr-16`}
    >
       {selected === href && <motion.div
        variants={scale}
        initial="initial"
        animate={selected == href ? "open" : "closed"}
          className='w-3 h-3 bg-white rounded-md absolute left-[-30px]'>
        </motion.div>}  
        
      <Link className="text-white" href={href}>
        {title}
      </Link>

     
    </motion.div>
    
  );
}
