'use client';
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FifthMotion() {
    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start end', 'end end']
    });

    const opacity: any = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const scale: any = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  return (
    <motion.div ref={ref} style={{opacity, scale}}  transition={{duration: 0.9, type: 'spring', delay: 1}} className=' w-[75%] rounded-2xl h-[20rem] shadow-lg shadow-zinc-900 p-2 flex flex-col gap-10 justify-center items-center'>
        <h4 className='text-5xl font-bold tracking-wide  underline underline-offset-8'>Grooming Requirements</h4>
        <p className='text-2xl w-[87%] font-light tracking-wide text-center'><span className='font-bold'>Grooming needs</span> vary greatly among dog breeds, ranging from <span className='font-bold'>minimal maintenance</span> to regular grooming sessions. <span className='font-bold'>Long-haired breeds</span> like the Afghan Hound and the Poodle may require <span className='font-bold'>frequent brushing</span> and professional grooming to prevent matting and maintain coat health. <span className='font-bold'>Short-haired breeds</span>, while generally <span className='font-bold'>lower maintenance</span>, may still benefit from occasional grooming to remove loose hair and debris.</p>
    </motion.div>
  )
}
