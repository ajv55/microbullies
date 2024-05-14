'use client';

import { motion ,useScroll, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from 'react';
import { dogData } from "../data/data";
import Image from "next/image";
import Mirco from '../../public/mirco.png';
import {roboto} from '../fonts/font';
import Link from "next/link";
import { IoIosMale } from "react-icons/io";
import { IoIosFemale } from "react-icons/io";


type CardProps = {
    name: string, 
    key: string,
    gender: string,
    price: number,
    age: string,
    index: number

}

export default function Card({name, key, gender, price, age, index}: CardProps) {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView){
           mainControls.start('visible')
        }
    }, [isInView, mainControls])

  return (
        <motion.div ref={ref} key={key} variants={{hidden: {opacity: 0, scale: 0, y: 75}, visible: {opacity: 1, scale: 1, y: 0}}} initial='hidden' animate={mainControls} transition={{duration:0.45, type: 'spring', delay: 0.25 * index}}  className={`${roboto.className} border bg-slate-400 flex flex-col justify-start items-center mt-4 w-[19rem] h-[26rem] rounded-md p-4 gap-3 shadow-lg`}>
            <Image className="rounded-md" src={Mirco} alt='pup' width={320} height={150} ></Image>
            <div className="w-full p-2 gap-3 flex justify-evenly items-center">
                <div className="flex justify-start items-center gap-3">
                    {gender === 'Male' && <IoIosMale size={20} color="blue" />}
                    {gender === 'Female' && <IoIosFemale size={20} color="pink" />}
                    <h1 className="tracking-tighter  text-2xl dark:text-black">{name}</h1>
                </div>
                <div className="border px-2 py-1 flex justify-center items-center bg-slate-200 rounded-2xl shadow-md">
                    <h5 className="text-sm">{age}</h5>
                </div>
            </div>
            <div className=" w-full h-[8rem] flex justify-between items-end p-2">
                <h3 className="text-xl">${price}.00</h3>
                <div className="w-28 flex justify-center items-center bg-green-400 rounded-3xl">
                    <h6 className="text-lg text-black shadow-2xl">Available</h6>
                </div>
            </div>
        </motion.div>
  )
}
