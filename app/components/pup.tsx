import { sql } from '@vercel/postgres';
import Image from 'next/image';
import Mirco from '../../public/mirco.png';
import Card from './card';

import {alegreya} from '../fonts/font'



//Mock data
import {dogData} from '../data/data';
import Link from 'next/link';


type data = {
    name: string,
    price: string,
    imgUrl: string,
    weight: string,
    gender: string,
    color: string,
    momsWeight: string,
    dadsWeight: string,
    birthday: string,
    age: string
}


export default async function Pup() {


    const { rows } = await sql`SELECT * FROM jrsdogs`;

    console.log(rows)

  return (
    <div className='flex flex-col justify-center items-center bg-slate-200 p-9'>
        <h2 className={`${alegreya.className} text-4xl underline underline-offset-8 decoration-2 mb-14 p-4`}>Browser our puppies</h2>
        <div className='w-screen h-content  text-2xl flex flex-col justify-start md:flex-row md:flex-wrap md:justify-center items-center gap-5'>
            {dogData.map((row) => {
               return (
                <Link key={row.name} href={{pathname: `/${row.id}`, query: {
                  name: row.name,
                  price: row.price,
                  imgUrl: row.imgUrl,
                  weight: row.weight,
                  gender: row.gender,
                  color: row.color,
                  momsWeight: row.momWeight,
                  dadsWeight: row.dadWeight,
                  birthday: row.birthday,
                  age: row.age
                }}}><Card name={row.name} gender={row.gender} price={row.price} key={row.name} age={row.age} /></Link>
               )
            })}
        </div>
    </div>
  )
}
