'use client';

import { alegreya } from '../fonts/font'
import { motion,  useScroll, useAnimation, useInView  } from 'framer-motion';
import { IoRibbon } from "react-icons/io5";
import { GiHealthNormal } from "react-icons/gi";
import { FaHandHoldingHeart } from "react-icons/fa";
import {  useEffect, useRef } from 'react';

export default function Why() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();

   useEffect(() => {
    if(isInView) {
        console.log('this is fring off')
        mainControls.start('visible')
    }
   }, [isInView, mainControls])

   
      

  return (
    <div  ref={ref}  className="w-full h-content mt-64 flex gap-3 flex-col justify-center items-center mb-64">
        <h1 className={`${alegreya.className} text-7xl text-white font-medium tracking-wide p-7`}>Why Choose Pawfect Pals?</h1>
        <div  className=" w-full h-content flex  md:flex-wrap justify-evenly mt-3 gap-7">
                <motion.div  variants={{ hidden: {opacity: 0, y: 50}, visible: {opacity: 1, y: 0} }}  initial='hidden' animate={mainControls} transition={{ delay: 0.4 }} className='flex w-[29%] h-[29rem] bg-gradient-to-bl from-slate-500 via-teal-800 rounded-2xl to-slate-500 flex-col justify-center  items-center p-2 gap-4'>
                    <IoRibbon size={110} color='white' />
                    <h3 className="text-3xl text-white">Quality Breeding Standards</h3>
                    <p className="text-lg text-center text-white ">We adhere to strict breeding standards, ensuring that our puppies come from healthy and well-cared-for parents.</p>
                </motion.div>

            <motion.div variants={{ hidden: {opacity: 0, y: 50}, visible: {opacity: 1, y: 0} }}  initial='hidden' animate={mainControls} transition={{ delay: 0.6 }} className="flex w-[29%] h-[29rem] bg-gradient-to-bl  from-slate-500 via-amber-800 rounded-2xl to-slate-500 flex-col justify-center  items-center p-2">
                <div className='flex flex-col justify-center items-center gap-4 p-3'>
                    <GiHealthNormal size={100} color='white' />
                    <h3 className="text-3xl text-white">Health Guarantee</h3>
                </div>
                <p className="text-lg  text-center text-white ">Each puppy receives a thorough veterinary examination and is up-to-date on vaccinations and deworming before going to their new homes.</p>
            </motion.div>
          
                <motion.div variants={{ hidden: {opacity: 0, y: 50}, visible: {opacity: 1, y: 0} }}  initial='hidden' animate={mainControls} transition={{ delay: 0.8 }} className='flex w-[29%] h-[29rem] bg-gradient-to-bl from-slate-500 via-sky-800 rounded-2xl to-slate-500 flex-col justify-center items-center gap-4'>
                    <FaHandHoldingHeart size={100} color='white' />
                    <h3 className="text-3xl text-white">Lifetime Support</h3>
                    <p className=" text-lg  text-center text-white">Our commitment to you doesn&#39;t end when you take your puppy home. We provide ongoing support and guidance to help you raise a happy and healthy companion.</p>
                </motion.div>
        </div>
    </div>
  )
}
