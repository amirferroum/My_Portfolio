import { menuSlide } from "./anim";
import { motion } from "framer-motion";
import Links from "./Link";
import Link from "next/link";
import Curve from "./Curve";
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'




const MobileNav = ({navItems,top1}) => {

    const pathname = usePathname();


  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  
  return (
    
    <motion.div
   
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      
      className={`${top1 ? `hidden` : `fixed`} h-[100vh] bg-[#292929] w-[100%] sm:w-auto top-0 right-0 text-white z-[30]`}
    >
      <div  className="box-border h-full p-24 flex z-30 flex-col justify-between">
        <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className="flex flex-col text-sm gap-3 mt-20">
          <p className="t text-gray-500">Navigation</p>
          <div className="text-[#999999] border-t border-[#999999] uppercase text-sm pt-8">
          {navItems.map((item, index) => {
              return <Links key={`/links_${index}`}  data={{ ...item, index }} setSelectedIndicator={setSelectedIndicator} selected ={selectedIndicator}/>;
            })}
           
          </div>
          
        </div>
        <div className="text-sm ">
        <Link className="m-2" href='/'>AWWard</Link>
        <Link className="m-2" href='/'>AWWard</Link>
        <Link className="m-2" href='/'>AWWard</Link>
        <Link className="m-2" href='/'>AWWard</Link>
      </div>
      </div>


      <Curve/>
    </motion.div>
  );
};

export default MobileNav;
