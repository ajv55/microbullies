import Link from 'next/link';
import { roboto } from '../fonts/font';

export default function Header
() {
  return (
    <div className={`${roboto.className} w-4/6 h-4/5 flex flex-col justify-center items-start p-16 gap-3 lg:gap-3`} >
        <h1 className=" mb-7 md:mb-2 sm:text-sm w-64 md:w-96 text-4xl font-bold tracking-tight leading-none text-gray-900  md:text-5xl lg:text-5xl dark:text-white ">Tiny But Mighty: <br /> Exotic Micro Puppies Await!</h1>
        <p className=" mb-7 md:mb-6 w-56 flex justify-center items-center text-xs md:text-lg font-normal text-gray-500 lg:text-lg md:w-60  h-2/5 dark:text-gray-400">Find your perfect companion among our adorable micro Pitbull puppies. Loyal, loving, and full of personality, they&#39;re ready to bring joy to your home.</p>
        <div className='flex items-start w-32 '>
        <Link href='/Puppies' className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm md:text-md px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Puppies!</Link>
        </div>
    </div>
  )
}
