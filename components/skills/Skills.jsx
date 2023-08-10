"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Title_sections from '../Title_sections';
import Curve from '../Curve1';
const left = [
  {
    title : "HTML",
    pers: '100',
  },
  {
    title : "CSS",
    pers: '90',
  },
  {
    title : "JavaScript",
    pers: '70',
  },
  {
    title : "Tailwind CSS",
    pers: '90',
  }
  
]

const right = [
  {
    title : "React Js",
    pers: '60',
  },
  {
    title : "Next Js",
    pers: '70',
  },
  {
    title : "Framer Motion",
    pers: '60',
  }
  ,
  {
    title : "Gsap",
    pers: '30',
  }
]



const Skills = () => {
 
  const [dimension, setDimension] = useState({width: 0, height:0});

    useEffect( () => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
    }, [])

   

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: targetPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3}
        }
    }
  
  return (
    <div   className='relative w-full bg-[#292929] text-white h-auto xl:h-screen px-48 py-36 '>
     <Title_sections title ="Skills" color="#292929"/>

    <div className='w-full flex flex-col gap-10 justify-center items-center   xl:grid grid-cols-2 '>
    <div  className='flex flex-col justify-center items-center gap-10'>
{left.map((item,index) => {
  return <div 
  key={`/left_${index}`}
  className='flex  flex-col justify-center gap-4'>
  <div className='flex justify-between w-f'>
  <h2 className='px-2 text-lg font-semibold '>{item.title}</h2>
  <h3 className='font-semibold text-sm'>{item.pers + "%"}</h3>
  </div>
  <div className=' w-[400px] lg:w-[500px] bg-[#505050]  h-3  rounded-md relative'>
  <motion.div
  
  viewport={{ once: true }}
  
  whileInView={{ width: ['0%',item.pers+"%"],transition: {duration: 0.9,ease: [0.5, 1, 0.89, 1], delay: 0.05} }}
   className={`absolute top-0  w-0 h-3 bg-[#455CE9] z-10  rounded-md`}></motion.div>
  </div>
  
</div>
})}


</div>

<div  className='flex flex-col justify-center items-center gap-10'>
{right.map((item,index) => {
  return <div 
  key={`/right_${index}`}
  className='flex  flex-col justify-center gap-4'>
  <div className='flex justify-between w-f'>
  <h2 className='px-2 text-lg font-semibold '>{item.title}</h2>
  <h3 className='font-semibold text-sm'>{item.pers + "%"}</h3>
  </div>
  <div className=' w-[400px] lg:w-[500px] bg-[#505050]  h-3  rounded-md relative'>
  <motion.div
  
  viewport={{ once: true }}
  
  whileInView={{ width: ['0%',item.pers+"%"],transition: {duration: 0.9,ease: [0.5, 1, 0.89, 1], delay: 0.05} }}
   className={`absolute top-0  w-0 h-3 bg-[#455CE9] z-10  rounded-md`}></motion.div>
  </div>
  
</div>
})}


</div>









    </div>
    <Curve color="#292929"/>
    </div>
  )
}

export default Skills