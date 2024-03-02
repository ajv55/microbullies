import React from 'react'
import styles from '../syles.module.css';

import Insta from '../../public/intsaLogo.svg'
import Link from 'next/link';
import Image from 'next/image';
import { LiaCopyrightSolid } from "react-icons/lia";



export default function Footer() {
  return (
    <div className='w-full h-[17rem] sm:h-[20rem] md:h-[24rem] bg-slate-700 relative flex flex-col justify-end items-center gap-7 '>
        <div className={styles.shape}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles.shapeFill}></path>
            </svg>
        </div>
        <Link href='/'><Image src={Insta} alt='insta' width={40} height={40}></Image></Link>
        <p className='flex justify-center items-center text-sm gap-1 text-white mb-10'>Copyright <LiaCopyrightSolid size={20} /> 2024 Microbullies. All rights reserved.</p>
    </div>
  )
}
