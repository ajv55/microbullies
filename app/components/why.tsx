import { alegreya } from '../fonts/font'

import { IoRibbon } from "react-icons/io5";
import { GiHealthNormal } from "react-icons/gi";
import { FaHandHoldingHeart } from "react-icons/fa";

export default function Why() {
  return (
    <div className="w-full h-content flex flex-col justify-center items-center mb-24">
        <h1 className={`${alegreya.className} text-4xl p-7`}>Why Choose Micro Pitbull Puppies?</h1>
        <div className=" w-full h-content flex flex-col md:flex-wrap justify-evenly mt-3 gap-7">
            <div className="">
                <div className='flex flex-col justify-center items-center gap-4'>
                    <IoRibbon size={80} />
                    <h3 className="text-xl">Quality Breeding Standards</h3>
                    <p className="text-xs w-64 ">We adhere to strict breeding standards, ensuring that our puppies come from healthy and well-cared-for parents.</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center p-10">
                <div className='flex flex-col justify-center items-center gap-4 p-3'>
                    <GiHealthNormal size={80} />
                    <h3 className="text-xl">Health Guarantee</h3>
                </div>
                <p className="text-xs w-60">Each puppy receives a thorough veterinary examination and is up-to-date on vaccinations and deworming before going to their new homes.</p>
            </div>
            <div className="">
                <div className='flex flex-col justify-center items-center gap-4'>
                    <FaHandHoldingHeart size={80} />
                    <h3 className="text-xl">Lifetime Support</h3>
                    <p className=" text-xs w-60">Our commitment to you doesn&#39;t end when you take your puppy home. We provide ongoing support and guidance to help you raise a happy and healthy companion.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
