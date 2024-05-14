'use client';
import Link from 'next/link';
import { roboto } from '../fonts/font';
import { motion } from 'framer-motion';

export default function Header
() {
  return (
    <motion.div initial={{x: -100, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{type: 'spring', duration: 0.4, stiffness: 120, damping: 20 }} className={`${roboto.className} w-full h-[32rem]  flex flex-col justify-center items-start p-16 gap-3 lg:gap-1`} >
        <h1  className=" mb-7  md:mb-2 sm:text-sm w-64 md:w-96 lg:w-[85%] text-4xl font-bold tracking-tight leading-none text-gray-900  md:text-5xl lg:text-5xl dark:text-white ">Welcome to <span className='font-extrabold text-5xl bg-gradient-to-bl from-teal-800 via-green-600 to-green-400 bg-clip-text text-transparent'>Pawfect Pals</span>: <br /> Your Ultimate Destination for Canine Companionship</h1>
        <p className=" mb-7 lg:mb-0 lg:mt-10 lg:w-[57%] md:mb-6 w-56 text-xs  md:text-lg font-normal text-gray-500 lg:text-xl md:w-60  h-2/5 dark:text-gray-400">At Pawfect Pals, we understand the unique bond between humans and dogs. Whether you&#39;re looking for a <span className='font-extrabold text-white'>loyal guardian</span>, a <span className='font-bold text-white'>playful companion</span>, or a <span className='font-bold text-white'>devoted friend</span>, we&#39;re here to help you find the perfect canine companion to enrich your life.</p>
        <div className='flex items-start w-32 '>
        <Link href='/Puppies' className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 lg:text-2xl focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm md:text-md px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-amber-600 dark:focus:ring-gray-800">Puppies!</Link>
        </div>
    </motion.div>
  )
}
