"use client";

import Image from "next/image";
import Gallery from "@/components/Gallery/Gallery";
import Header from "@/components/Header/Header";
import { useEffect, useState } from "react";
import Main from "@/components/landing/Main";
import AnimatePresens from "@/components/AnimatePresense";
import Preloader from "@/components/Preloader/Preloader";
import { AnimatePresence, motion } from "framer-motion";
import Skills from "@/components/skills/Skills";
import Test from "@/components/Test";
import Aymen from "@/components/Aymen";
import Contact from "@/components/Contact"
import SlidingImages from '../components/SlidingImages';
import Description from "@/components/Description"
const slideUp = {
  initial: {
      top: "+100vh"
      
  },
  exit: {
      top: 0,
      transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 2.7}
  }
}


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    (async () => {
   
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2500);
    })();
   
  }, []);

  return (
    <div 
    
    className="relative flex flex-col h-screen ">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

     
      <Header />
      <Main />
      <Gallery />
      <Description />
            <SlidingImages />

      <Contact />
     
       
    </div>
  );
}
