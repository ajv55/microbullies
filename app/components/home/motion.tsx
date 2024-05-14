'use client';
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Motion() {

    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start end', 'end end']
    });

    const opacity: any = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const scale: any = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <motion.div ref={ref}   style={{opacity, scale}} transition={{duration: 1.45, type: 'spring', ease: 'easeInOut',  delay: 0.45}} className=' w-[75%] rounded-2xl h-[20rem] mt-12 shadow-lg shadow-zinc-900  p-3 flex flex-col gap-10 justify-center items-center'>
            <h4 className='text-5xl font-bold tracking-wide  underline underline-offset-8'>Introduction</h4>
            <p className='text-2xl w-[87%] font-light  tracking-wide text-center'>Dogs come in a remarkable array of <span className='font-bold'>shapes</span>, sizes, and <span className='font-bold'>temperaments</span>, each breed uniquely adapted to fulfill specific roles and companionship needs. <span className='font-bold'>Understanding</span> the characteristics and traits of different dog breeds can help prospective owners choose a companion that aligns with their <span className='font-bold'>lifestyle</span>, <span className='font-bold'>preferences</span>, and <span className='font-bold'>requirements</span>. Here, we delve into the general information across various dog breeds to provide insights into their origins, temperaments, <span className='font-bold'>exercise needs</span>, grooming requirements, and <span className='font-bold'>more</span>.</p>
   </motion.div>
  )
}
