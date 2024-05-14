'use client';
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SixthMotion() {
    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start end', 'end end']
    });

    const opacity: any = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const scale: any = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  return (
    <motion.div ref={ref} style={{opacity, scale}}  transition={{duration: 1, type: 'spring', delay: 1.25}} className=' w-[75%] rounded-2xl h-[20rem] shadow-lg shadow-zinc-900 p-2 flex flex-col gap-10 justify-center items-center'>
        <h4 className='text-5xl font-bold tracking-wide underline  underline-offset-8'>Health Considerations</h4>
        <p className='text-2xl w-[87%] font-light tracking-wide text-center'><span className='font-bold'>Each dog breed</span> has its own set of potential health concerns and considerations, influenced <span className='font-bold'>by genetics</span>, <span className='font-bold'>conformation</span>, and <span className='font-bold'>breeding practices</span>. Responsible breeders prioritize health testing and screening to <span className='font-bold'>minimize </span> the risk of hereditary diseases and <span className='font-bold'>promote overall</span> well-being. Prospective owners should <span className='font-bold'>research breed-specific</span> health issues and consult with reputable breeders to make informed decisions about their chosen breed&#39;s health.</p>
    </motion.div>
  )
}
