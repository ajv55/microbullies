import React from 'react'

export default function Temp() {
  return (
    <div className='border-2 border-pink-500 w-full h-screen flex flex-col gap-16 justify-center items-center'>
        <div className='border border-orange-400 w-4/5 h-2/5 relative bg-slate-200 flex flex-col justify-center items-center rounded-lg p-3 gap-4'>
            <div className='rounded-full w-16 h-16 bg-teal-300 absolute -top-7  left-24 flex justify-center items-center'>
                <span className='text-2xl'>1</span>
            </div>
            <h3 className='text-lg font-bold'>Browse Available Puppies</h3>
            <p className='text-smx font-light'>Explore our selection of available micro pitbull puppies on our website.</p>
        </div>
        <div className='border border-orange-400 w-4/5 h-2/5 relative bg-slate-200 flex flex-col justify-center items-center rounded-lg p-3 gap-4'>
            <div className='rounded-full w-16 h-16 bg-teal-300 absolute -top-7  left-24 flex justify-center items-center'>
                <span className='text-2xl'>2</span>
            </div>
            <h3 className='text-lg font-bold'>Contact Us</h3>
            <p className='text-smx font-light'>Once you&#39;ve found a puppy that captures your heart, contact us to express your interest and inquire about availability.</p>
        </div>
        <div className='border border-orange-400 w-4/5 h-2/5 relative bg-slate-200 flex flex-col justify-center items-center rounded-lg p-3 gap-4'>
            <div className='rounded-full w-16 h-16 bg-teal-300 absolute -top-7  left-24 flex justify-center items-center'>
                <span className='text-2xl'>3</span>
            </div>
            <h3 className='text-lg font-bold'>Reserve Your Puppy</h3>
            <p className='text-smx font-light'>If you&#39;re ready to proceed, you can reserve your puppy by placing a deposit.</p>
            <p className='text-smx font-light'>Deposits secure your chosen puppy and ensure they won&#39;t be adopted by someone else while you make final arrangements.</p>
        </div>
    </div>
  )
}
