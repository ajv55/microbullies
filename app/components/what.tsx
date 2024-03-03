import React from 'react'

import { roboto} from '../fonts/font';
import { PiDogThin } from "react-icons/pi";

export default function What() {
  return (
    <div className='mt-32 bg-stone-700 rounded-lg shadow-lg w-[21rem] h-content p-5 flex flex-col justify-start items-center mb-16'>
        <h1 className={`${roboto.className} text-3xl mb-6 text-white border-b-2 border-t-orange-100 pb-8`}>Understanding Micro Pitbulls</h1>
        <div className='flex flex-col justify-start items-start gap-4'>
            <h1 className='text-xl underline underline-offset-8 mb-6 text-white'>Size and Proportions :</h1>
            <div className='flex flex-col justify-center items-center gap-7'>
                <PiDogThin size={50} color='tan'/>
                <p className='text-sm tracking-normal text-gray-500 md:text-lg dark:text-gray-300'>Micro pitbulls are distinguished by their diminutive stature compared to standard American Pit Bull Terriers. While there is no precise definition of size, micro pitbulls typically weigh between 10 to 30 pounds and stand around 10 to 17 inches tall at the shoulder when fully grown.</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-7 mt-9 mb-5'>
                <PiDogThin size={50} color='tan'/>
                <p className='text-sm tracking-normal text-gray-500 md:text-lg dark:text-gray-300'>Despite their smaller size, micro pitbulls retain the muscular build, broad head, and distinct features of their larger counterparts.</p>
            </div>

            <div className='flex flex-col justify-start items-start gap-4 mt-8 border-t-2 border-t-orange-100'>
                <h1 className='text-xl underline underline-offset-8 mb-16 mt-16 text-white'>Temperament and Personality :</h1>
                <div className='flex flex-col justify-center items-center gap-7'>
                    <PiDogThin size={50} color='tan'/>
                    <p className='text-sm tracking-normal text-gray-500 md:text-lg dark:text-gray-300'>Micro pitbulls exhibit the same loyalty, affection, and devotion that pit bulls are renowned for. They form strong bonds with their families and thrive on companionship and interaction.</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-7 mt-9 mb-5'>
                    <PiDogThin size={50} color='tan'/>
                    <p className='text-sm tracking-normal text-gray-500 md:text-lg dark:text-gray-300'>Known for their friendly and sociable nature, micro pitbulls often make excellent family pets and are known to be gentle and loving towards children and other animals when properly socialized.</p>
            </div>

                <div className='flex flex-col justify-start items-startgap-4 mt-8 border-t-2 border-t-orange-100'>
                    <h1 className='text-xl underline underline-offset-8 mb-6 mt-12 text-white'>Health and Care :</h1>
                    <div className='flex flex-col justify-center items-center gap-7 mt-14'>
                        <PiDogThin size={50} color='tan'/>
                        <p className='text-sm tracking-normal text-gray-500 md:text-lg dark:text-gray-300'>Just like any other dog breed, micro pitbulls require regular veterinary check-ups, vaccinations, and preventive care to maintain their health and well-being.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-7 mt-9 mb-5'>
                        <PiDogThin size={50} color='tan'/>
                        <p className='text-sm tracking-normal text-gray-500 md:text-lg dark:text-gray-300'>Providing a balanced diet, regular exercise, and routine grooming are essential components of caring for a micro pitbull. Additionally, it&#39;s important to be aware of potential health issues common to the breed, such as hip dysplasia and skin allergies.</p>
                    </div>
                </div>

                <div className='flex flex-col justify-start items-startgap-4 mt-8 border-t-2 border-t-orange-100'>
                    <h1 className='text-xl underline underline-offset-8 mb-6 mt-12 text-white'> Training and Socialization :</h1>
                    <div className='flex flex-col justify-center items-center gap-7 mt-14'>
                        <PiDogThin size={50} color='tan'/>
                        <p className='text-sm tracking-normal text-gray-500 md:text-lg dark:text-gray-300'>Early training and socialization are paramount for micro pitbulls to develop into well-behaved and well-adjusted companions. Positive reinforcement-based training methods are highly effective, as micro pitbulls respond well to praise and rewards.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-7 mt-9 mb-5'>
                        <PiDogThin size={50} color='tan'/>
                        <p className='text-sm tracking-normal text-gray-500 md:text-lg dark:text-gray-300'>Exposing your micro pitbull to a variety of people, environments, and experiences from a young age helps to build their confidence and ensure they grow into confident and sociable dogs.</p>
                    </div>
                </div>

                <div className='flex flex-col justify-start items-startgap-4 mt-8 border-t-2 border-t-orange-100'>
                    <h1 className='text-xl underline underline-offset-8 mb-6 mt-12 text-white'>Lifespan and Longevity :</h1>
                    <div className='flex flex-col justify-center items-center gap-7 mt-14'>
                        <PiDogThin size={50} color='tan'/>
                        <p className='text-sm tracking-normal text-gray-500 md:text-lg dark:text-gray-300'>With proper care and attention, micro pitbulls can live long and healthy lives, typically averaging a lifespan of around 10 to 15 years.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-7 mt-9 mb-5'>
                        <PiDogThin size={50} color='tan'/>
                        <p className='text-sm tracking-normal text-gray-500 md:text-lg dark:text-gray-300'>Building a strong bond with your micro pitbull and providing them with a loving and nurturing environment is key to ensuring their longevity and quality of life.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
