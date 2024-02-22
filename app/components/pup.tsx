import { sql } from '@vercel/postgres';
import Image from 'next/image';
import Mirco from '../../public/mirco.png';
import Card from './card';

import {alegreya} from '../fonts/font'



//Mock data
import {dogData} from '../data/data';


type data = {
    name: string
}


export default async function Pup() {


    const { rows } = await sql`SELECT * FROM jrsdogs`;

    console.log(rows)

  return (
    <div className='flex flex-col justify-center items-center bg-slate-200 mb-7'>
        <h2 className={`${alegreya.className} text-4xl underline underline-offset-8 decoration-2 mb-14 p-4`}>Browser our puppies</h2>
        <div className='w-screen h-content  text-2xl flex flex-col justify-start md:flex-row md:flex-wrap md:justify-center items-center gap-5'>
            {dogData.map((row) => {
               return <Card name={row.name} gender={row.gender} price={row.price} key={row.name} />
            })}
        </div>
    </div>
  )
}
