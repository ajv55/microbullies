'use client';

import Motion from './home/motion';
import SecondMotion from './home/secondMotion';
import ThirdMotion from './home/thirdMotion';
import FourthMotion from './home/fourthMotion';
import FifthMotion from './home/fifthMotion';
import SixthMotion from './home/sixthMotion';

export default function What() {

    



  return (
    <div  className='w-full h-content flex flex-col justify-start gap-10 items-center'>
        <h1 className='text-7xl font-bold tracking-wider mt-12 text-center'>Understanding Dog <span className=' bg-gradient-to-br from-orange-900 via-orange-600 to-orange-300 bg-clip-text text-transparent'>Breeds</span></h1>

        <Motion />

        <SecondMotion />

        <ThirdMotion />

        <FourthMotion />

        <FifthMotion />

        <SixthMotion />

    </div>
  )
}
