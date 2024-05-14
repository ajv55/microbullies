
import {alegreya} from '../fonts/font'
import style from '../syles.module.css';
import Temp from './temp'

export default function Ready() {
  return (
    <div className='w-full relative bg-slate-800 h-[88rem] flex flex-col md:flex-row lg:flex-wrap gap-16 justify-center items-center p-5 mb-1' >
        <div className={style.custom}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={style.fill}></path>
            </svg>
        </div>
        <div className={style.shape}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={style.shapeFill}></path>
            </svg>
        </div>
        <h2 className={`${alegreya.className} lg:mt-64 lg:w-full lg:text-white lg:text-center lg:text-7xl text-4xl p-2`} >Ready to Bring Home Your New Puppy?</h2>
        <div className=' md:w-2/5 lg:w-[36%] lg:h-[20rem] w-content h-72 relative bg-slate-200 shadow-xl flex flex-col justify-center items-center rounded-lg p-6 gap-4'>
            <div className='rounded-full w-16 h-16 lg:w-20 lg:h-20 bg-opacity-65 shadow-lg bg-teal-300 flex justify-center items-center'>
                <span className='text-2xl lg:text-3xl'>1</span>
            </div>
            <h3 className='text-xl font-bold lg:text-3xl'>Browse Available Puppies</h3>
            <p className='text-sm lg:text-lg lg:text-center font-light'>Explore our selection of available micro pitbull puppies on our website.</p>
        </div>
        <div className=' md:w-2/5 lg:w-[36%] lg:h-[20rem] w-content h-content relative bg-slate-200 shadow-xl flex flex-col justify-center items-center rounded-lg p-9 gap-4'>
            <div className='rounded-full w-16 h-16 lg:w-20 lg:h-20  bg-opacity-65 shadow-xl bg-teal-300 flex justify-center items-center'>
                <span className='text-2xl lg:text-3xl'>2</span>
            </div>
            <h3 className='text-xl font-bold lg:text-3xl'>Contact Us</h3>
            <p className='text-sm lg:text-lg lg:text-center font-light'>Once you&#39;ve found a puppy that captures your heart, contact us to express your interest and inquire about availability.</p>
        </div>
        <div className='md:w-2/5 lg:mb-80 lg:w-[36%] lg:h-[23rem] w-content h-content relative bg-slate-200 shadow-xl flex flex-col justify-center items-center rounded-lg p-9 gap-4'>
            <div className='rounded-full w-16 h-16 lg:w-20 lg:h-20  bg-opacity-65 bg-teal-300  shadow-2xl flex justify-center items-center'>
                <span className='text-2xl lg:text-3xl'>3</span>
            </div>
            <h3 className='text-xl font-bold lg:text-3xl'>Reserve Your Puppy</h3>
            <p className='text-smx font-light lg:text-lg lg:text-center'>If you&#39;re ready to proceed, you can reserve your puppy by placing a deposit.</p>
            <p className='text-smx font-light lg:text-lg lg:text-center'>Deposits secure your chosen puppy and ensure they won&#39;t be adopted by someone else while you make final arrangements.</p>
        </div>
    </div>
  )
}
