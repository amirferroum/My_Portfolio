'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideUp } from './anim';
import { AnimatePresence } from "framer-motion";
const words = [ "مرحبا","Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo","مرحبا"]
import { useWindowSize } from "@uidotdev/usehooks";
export default function Index() {
    const [index, setIndex] = useState(0);
    

    const size = useWindowSize();
    const initialPath = `M0 0 L${size.width} 0 Q${size.width/2} 200 0 0`
    const targetPath = `M0 0 L${size.width} 0 Q${size.width/2} 0 0 0`
    
    useEffect( () => {
        if(index == words.length - 1) return;
        setTimeout( () => {
            setIndex(index + 1)
        }, index == 0 ? 1000 : 150)
    }, [index])

 
    const curve = {
        initial: {
            d: initialPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: targetPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.4}
        }
    }

    return (
       
            <motion.div variants={slideUp} initial="initial" exit="exit" className="h-[100vh] w-[100vw] flex justify-center items-center fixed z-50 bg-[#141516]">
            {size.width > 0 && 
            <>
                <motion.p className='flex text-white text-5xl items-center absolute z-1 ' variants={opacity} initial="initial" animate="enter"><span className='block w-3 h-3 bg-white rounded-md mr-3'></span>{words[index]}</motion.p>
               
                <svg className='absolute top-[100%] left-0 w-full h-[100% + 300px]'>
                    <motion.path className="fill-[#141516]" variants={curve} initial="initial" exit="exit"></motion.path>
                </svg>
               
            </>
            }
        </motion.div>
        
    )
}