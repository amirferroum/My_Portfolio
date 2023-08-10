

import React from 'react'
import Title_sections from '../Title_sections'
import { delay, motion } from "framer-motion";




const Contact = () => {








  return (<div className='relative w-full px-16 lg:px-38 xl:px-48 py-36'>
<Title_sections title ="Contact" color="white"/>


<div className="flex flex-col lg:grid grid-cols-2 gap-16">
        <motion.div
        initial={{x:-100}}
        viewport={{once:'true'}}
        whileInView={{opacity: [0,1],x: [400,0]}}
        transition= { {duration: 1, ease: [0.32, 0, 0.67, 0],delay:0.2} }
        >
            <form action="" className='flex flex-col gap-8 justify-center items-center p-8 ' >
                <div className='w-full flex justify-between items-center'>
                <label className='text-lg font-bold' > Full Name : </label>
                <input type="text" className='bg-[#f0f0f3] outline-none rounded-full w-[50%]  font-semibold p-4' placeholder='Name'/>
            
                </div>
                <div className='w-full flex justify-between items-center'>
                <label className='text-lg font-bold' > Phone Number : </label>
                <input type="number" className='bg-[#f0f0f3] rounded-full w-[50%] outline-none  font-semibold p-4' placeholder='Phone Number'/>
            
                </div>
                <div className='w-full flex justify-between items-center'>
                <label className='text-lg font-bold' > Email : </label>
                <input type="email" className='bg-[#f0f0f3] rounded-full w-[50%] outline-none font-semibold p-4' placeholder='Email'/>
            
                </div>
                <div className='w-full flex justify-between items-center'>
                <label className='text-lg font-bold' > Write here : </label>
                <textarea name="" id="" cols="30" rows="10" placeholder='. . . . . .' className='bg-[#f0f0f3] outline-none rounded-lg w-[50%]  font-semibold p-4'></textarea>
            
                </div>
                <motion.button
                whileTap={{ scale: 0.9 }}
                type='' className='p-4 font-semibold hover:bg-[#292929] duration-500 bg-[#455CE9] w-[30%] rounded-full text-white mt-14'> Send</motion.button>
                </form>
        </motion.div>



        <motion.div
         initial={{x:-100}}
        
         whileInView={{opacity: [0,1],x: [-400,0]}}
         viewport={{once:'true'}}
         transition= { {duration: 1, ease: [0.32, 0, 0.67, 0],delay:0.2} }
        className='group z-0  overflow-hidden relative w-full h-full min-h-[400px]  text-white bg-[#292929] p-8 rounded-lg flex flex-col justify-center gap-y-14  items-center'>
         <h1 className='z-10 text-4xl font-semibold mb-12'>Get In Touch </h1>
         
         <div className='z-10 flex gap-10 sm:gap-16 font-semibold'>
         <h2>Insta</h2>
         <h2>Insta</h2>
         <h2>Insta</h2>
         <h2>Insta</h2>
         </div>
         <h1 className='z-10 text-2xl font-semibold'>Phone Number :</h1>
         <p className='z-10 text-xl font-semibold'>+213699826733</p>
         <div


className="absolute w-full h-full top-[100%]     left-[-100%] rounded-md group-hover:top-0   group-hover:left-0  duration-500 ease-in-out bg-[#455CE9] -z-10">

</div>
        </motion.div>
    </div>
    
  </div>
    
  )
}

export default Contact