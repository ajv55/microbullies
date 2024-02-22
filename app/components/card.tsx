'use client';

import { motion ,useScroll } from "framer-motion";
import { useRef } from 'react';
import { dogData } from "../data/data";
import Image from "next/image";
import Mirco from '../../public/mirco.png';
import {roboto} from '../fonts/font';


type CardProps = {
    name: string, 
    key: string,
    gender: string,
    price: number

}

export default function Card({name, key, gender, price}: CardProps) {

    const ref = useRef(null);


  return (
        <motion.div ref={ref} key={key}  initial={{scale: 0.5, opacity: 0.6}} viewport={{once: true}} whileInView={{scale: 1, opacity: 1}} className={`${roboto.className} border bg-slate-500 flex flex-col justify-start items-center mt-4 w-80 h-content rounded-md p-4 gap-3`}>
            <Image className="rounded-md" src={Mirco} alt='pup' width={320} height={150} ></Image>
            <div className="w-full p-2 gap-3 flex flex-col justify-start items-center">
                <h1 className="tracking-tighter text-gray-200 text-4xl dark:text-gray-400">{name}</h1>
                <h5 className="tracking-tighter text-gray-200  text-lg md:text-lg dark:text-gray-400 ">{gender}</h5>
                <h2 className="tracking-tighter text-gray-200 text-2xl md:text-lg dark:text-gray-400 ">${price}</h2>
            </div>
        </motion.div>
  )
}
