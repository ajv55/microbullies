'use client';

import Link from "next/link";
import { Fragment, MouseEventHandler, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { GoX } from "react-icons/go";


type HamburgerProps = {
  onClick?: MouseEventHandler,
  isOpen?: boolean
}



export default function Nav(prop: HamburgerProps) {

  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = (e: any) => {
    e.preventDefault();
    setIsOpen(!isOpen);

  }



  return (
    <div className="flex justify-between w-full absolute bg-transparent">
    <div className="flex justify-between w-full p-4">
      <h1 className="text-3xl text-zinc-200  flex justify-center items-center">Junior&#39;s Logo</h1>
      <CiMenuFries size={30} className="md:hidden" color="white" onClick={handleMenu}/>
    </div>
    {isOpen && <div className=" w-screen h-screen fixed bg-black-600 z-10 backdrop-blur-md flex flex-col gap-9 items-end">
         <div className="flex justify-center items-end p-2">
          <GoX size={43} color="white" onClick={handleMenu}/>
         </div>
         <nav className='flex flex-col justify-center items-center w-screen h-screen gap-24 '>
            <Link onClick={() => setIsOpen(!isOpen)} href='/' className="text-white text-3xl" >Home</Link>
            <Link onClick={() => setIsOpen(!isOpen)} href='/Puppies' className="text-white text-3xl" >Puppies</Link>
            <Link onClick={() => setIsOpen(!isOpen)} href='/Contact' className="text-white text-3xl" >Contact Us</Link>
         </nav>
    </div>}
    <nav className="text-2xl text-white md:flex md:visible justify-evenly items-center border border-blue-500 w-full h-16 hidden">
        <Link href='/'>Home</Link>
        <Link href='/Puppies'>Our Puppies</Link>
        <Link href='/Contact'>Contact Us</Link>
    </nav>
    </div>
  )
}
