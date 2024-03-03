'use client'

import React from 'react'



//components 
import HeroPup from '../components/pupIdComponents/heroPup'

 import { useSearchParams } from 'next/navigation'
import Image from 'next/image'

export default function Page() {

  const searchParams = useSearchParams()
 
  const name = searchParams.get('name');
  const price = searchParams.get('price');
  const imgUrl = searchParams.get('imgUrl');
  const age = searchParams.get('age');
  const gender = searchParams.get('gender');
  const momsWeight = searchParams.get('momsWeight');
  const dadsWeight = searchParams.get('dadsWeight');
  const birthday = searchParams.get('birthday');
  const weight = searchParams.get('weight')
  console.log(age)

  return (
    <div className='border border-green-400 w-full h-content flex flex-col'>
        <HeroPup name={name as string}/>
        <div className='border border-blue-500 mt-3 h-[80rem] flex flex-col justify-start items-center'>
          <Image src={imgUrl as string} alt={name as string} width={400} height={400}></Image>
          <h1 className=' border-b-[1px] border-black flex flex-col justify-center items-center gap-3 w-[24rem] mt-4 text-xl  text-zinc-400'>Name <span className='text-4xl mb-3 text-black'>{name}</span></h1>
          <h1 className=' border-b-[1px] border-black flex flex-col justify-center items-center gap-3 w-[24rem] mt-4 text-xl  text-zinc-400'>Age <span className='text-4xl mb-3 text-black'>{age}</span></h1>
          <h1 className=' border-b-[1px] border-black flex flex-col justify-center items-center gap-3 w-[24rem] mt-4 text-xl  text-zinc-400'>Weight <span className='text-4xl mb-3 text-black'>{weight}</span></h1>
          <h1 className=' border-b-[1px] border-black flex flex-col justify-center items-center gap-3 w-[24rem] mt-4 text-xl  text-zinc-400'>Birthday <span className='text-4xl mb-3 text-black'>{birthday}</span></h1>
          <h1 className=' border-b-[1px] border-black flex flex-col justify-center items-center gap-3 w-[24rem] mt-4 text-xl  text-zinc-400'>Gender <span className='text-4xl mb-3 text-black'>{gender}</span></h1>
          <h1 className=' border-b-[1px] border-black flex flex-col justify-center items-center gap-3 w-[24rem] mt-4 text-xl  text-zinc-400'>Mom&#39;s Weight <span className='text-4xl mb-3 text-black'>{momsWeight}</span></h1>
          <h1 className=' border-b-[1px] border-black flex flex-col justify-center items-center gap-3 w-[24rem] mt-4 text-xl  text-zinc-400'>Dad&#39;s Weight <span className='text-4xl mb-3 text-black'>{dadsWeight}</span></h1>
        </div>
    </div>
  )
}
