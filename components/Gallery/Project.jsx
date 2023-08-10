import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import autoprefixer from "autoprefixer";


const Project = ({ kes, index, title, setModal,sidetext,src,color }) => {
  return (
    <div  >
      <div 
        className="hidden   sm:flex group justify-between items-center p-8 border-t   duration-200 ease-linear"
        onMouseEnter={() => {
          setModal({ active: true, index: index });
        }}
        onMouseLeave={() => {
            setModal({ active: false, index: index });
          }}
      >
        <h2 className="text-4xl font-semibold group-hover:translate-x-[10px] group-hover:opacity-40 duration-200 ease-linear">
          {title}
        </h2>
        <p className="text-xs group-hover:translate-x-[-10px] group-hover:opacity-40 duration-200 ease-linear">
          {sidetext}
        </p>
      </div>

      <div className=" sm:hidden flex flex-col gap-4  border-t py-4 min-w-[400px]">
      
        <div style={{backgroundColor: color}} className="border-b p-4 flex justify-center items-center ">
        <Image
                className="h-auto w-full min-w-[400px]"
                src={`/assets/${src}`}
                width={600}
                height={0}
                alt="image"
              />
        </div>
     <div className="flex justify-between items-center py-4">
     <h2 className="text-2xl font-semibold w-full ">
          {title}
        </h2>
        <p className="text-xs ">
          {sidetext}
        </p>
     </div>
        
        
        
    

      </div>
    </div>
  );
};

export default Project;
