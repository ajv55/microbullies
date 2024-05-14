'use client';
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FourthMotion() {

    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start end', 'end end']
    });

    const opacity: any = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const scale: any = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <motion.div ref={ref} style={{opacity, scale}}  transition={{duration: 0.8, type: 'spring', delay: 0.95}} className=' w-[75%] rounded-2xl h-[20rem] shadow-lg shadow-zinc-900 p-2 flex flex-col gap-10 justify-center items-center'>
        <h4 className='text-5xl font-bold tracking-wide underline  underline-offset-8'>Exercise Needs</h4>
        <p className='text-2xl w-[87%] font-light tracking-wide text-center'>Different dog breeds have varying <span className='font-bold'>exercise requirements</span> based on their energy <span className='font-bold'>levels</span>, <span className='font-bold'>size</span>, and <span className='font-bold'>activity history</span>. Breeds bred for work or sporting purposes, such as Retrievers and Border Collies, may require ample daily exercise to <span className='font-bold'>stay mentally</span> and <span className='font-bold'>physically stimulated</span>. On the other hand, <span className='font-bold'>toy breeds</span> and <span className='font-bold'>brachycephalic breeds</span> may have lower exercise needs but still benefit from regular activity to <span className='font-bold'>maintain health</span> and <span className='font-bold'>well-being</span>.</p>
    </motion.div>
  )
}
