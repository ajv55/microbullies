'use client';
import { useRef } from "react";
import { motion,  useScroll, useTransform } from "framer-motion";

export default function SecondMotion() {
    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start end', 'end end']
    });

    const opacity: any = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const scale: any = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div ref={ref}   style={{opacity, scale}}  transition={{duration: 0.6, type: 'spring', delay: 1}} className=' w-[75%] rounded-2xl h-[20rem] shadow-lg shadow-zinc-900  p-2 flex flex-col gap-10 justify-center items-center'>
      <h4 className='text-5xl font-bold tracking-wide underline underline-offset-8'>Origins</h4>
      <p className='text-2xl w-[87%] font-light tracking-wide text-center'>Every dog breed has a <span className='font-bold'>rich history</span>, often tracing back centuries or even millennia. From the <span className='font-bold'>ancient guardians</span> of Egypt to the agile herding dogs of the Scottish Highlands, the origins of each breed reflect the <span className='font-bold'>specific tasks</span> and <span className='font-bold'>environments</span> for which they were developed.</p>
   </motion.div>
  )
}
