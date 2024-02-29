
import {alegreya} from '../fonts/font'

import Temp from './temp'

export default function Ready() {
  return (
    <div className='w-full h-content flex flex-col md:flex-row gap-16 justify-center items-center mt-12 p-5 mb-1' >
        <h2 className={`${alegreya.className} text-4xl p-2`} >Ready to Bring Home Your New Puppy?</h2>
        <div className=' md:w-2/5 w-content h-72 relative bg-slate-200 shadow-xl flex flex-col justify-center items-center rounded-lg p-6 gap-4'>
            <div className='rounded-full w-16 h-16 bg-opacity-65 shadow-lg bg-teal-300 flex justify-center items-center'>
                <span className='text-2xl'>1</span>
            </div>
            <h3 className='text-xl font-bold'>Browse Available Puppies</h3>
            <p className='text-smx font-light'>Explore our selection of available micro pitbull puppies on our website.</p>
        </div>
        <div className=' md:w-2/5 w-content h-content relative bg-slate-200 shadow-xl flex flex-col justify-center items-center rounded-lg p-9 gap-4'>
            <div className='rounded-full w-16 h-16 bg-opacity-65 shadow-xl bg-teal-300 flex justify-center items-center'>
                <span className='text-2xl'>2</span>
            </div>
            <h3 className='text-xl font-bold'>Contact Us</h3>
            <p className='text-smx font-light'>Once you&#39;ve found a puppy that captures your heart, contact us to express your interest and inquire about availability.</p>
        </div>
        <div className='md:w-2/5 w-content h-content relative bg-slate-200 shadow-xl flex flex-col justify-center items-center rounded-lg p-9 gap-4'>
            <div className='rounded-full w-16 h-16 bg-opacity-65 bg-teal-300  shadow-2xl flex justify-center items-center'>
                <span className='text-2xl'>3</span>
            </div>
            <h3 className='text-xl font-bold'>Reserve Your Puppy</h3>
            <p className='text-smx font-light'>If you&#39;re ready to proceed, you can reserve your puppy by placing a deposit.</p>
            <p className='text-smx font-light'>Deposits secure your chosen puppy and ensure they won&#39;t be adopted by someone else while you make final arrangements.</p>
        </div>
    </div>
  )
}
