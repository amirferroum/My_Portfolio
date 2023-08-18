import React, { useRef } from 'react'
import Image from 'next/image'
import Main from '@/public/assets/pexels.jpg'
import {BsArrowDownRight} from "react-icons/bs"





const main = () => {

  return (
   <div className='w-full h-screen'>
     <div className="relative w-full h-screen bg-fixed bg-landing bg-cover object-cover z-1 ">
     <div class="relative top-[60%]  sm:top-[50%] flex overflow-x-hidden">
  <div class="py-12 animate-wiggle whitespace-nowrap">
    <span class="text-6xl sm:text-9xl sm:text-[200px]  text-white font-semibold text-w mx-4">Amir-ferroum--Frelance--Amir-ferroum--Developer--Amir-ferroum--Amir-ferroum--</span>
   
  </div>

  
</div>
<div className=' top-[28%] left-[10%] sm:flex flex-col absolute  sm:top-[30%] sm:left-[60%] w-fit text-white font-semibold text-2xl sm:text-4xl'>
    <BsArrowDownRight className='mb-8'/>
    <h1>Frelance</h1>
    <h1>& Devoleper</h1>
</div>

       </div>
        </div>
  )
}

export default main