import React from 'react'
import { useInView,motion } from "framer-motion";
const title_sections = ({title,color}) => {
  return (
    <div className=" w-full flex justify-center pb-36">
    <div className='relative'>
    <h1 className="text-5xl sm:text-6xl font-semibold">{title}</h1>
  <motion.div
viewport={{ once: true }}

whileInView={{ width: ['100%',"0%"],transition: {duration: 0.9,ease: [0.25, 1, 0.5, 1], delay: 0.2} }}
  style={{backgroundColor: color}}
   className='absolute top-0 w-full h-[120%]  rounded-sm'></motion.div>
    </div>
 
</div>
  )
}

export default title_sections