'use client';
import { useRef } from "react";
import { motion,  useScroll, useTransform } from "framer-motion";

export default function ThirdMotion() {

    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start end', 'end end']
    });

    const opacity: any = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const scale: any = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div  ref={ref} style={{opacity, scale}} transition={{duration: 0.7, type: 'spring', delay: 0.75}} className=' w-[75%] rounded-2xl h-[20rem] shadow-lg shadow-zinc-900  p-2 flex flex-col gap-10 justify-center items-center'>
      <h4 className='text-5xl font-bold tracking-wide  underline underline-offset-8'>Temperament</h4>
      <p className='text-2xl w-[87%] font-light tracking-wide text-center'>Temperament <span className='font-bold'>varies</span> widely among dog breeds, influenced <span className='font-bold'>by genetics</span>, breeding <span className='font-bold'>history</span>, and individual <span className='font-bold'>upbringing</span>. While some breeds are known for their gentle and <span className='font-bold'>affectionate nature</span>, others may exhibit traits such as independence, <span className='font-bold'>intelligence</span>, or protective instincts. Understanding a breed&#39;s typical temperament can help owners anticipate and address <span className='font-bold'>behavioral traits</span> effectively.</p>
    </motion.div>
  )
}
