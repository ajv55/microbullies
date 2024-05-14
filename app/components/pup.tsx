
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


   

    console.log(dogData)

  return (
    <div className='flex w-full flex-col justify-center items-center p-9'>
        <h2 className={`${alegreya.className} text-8xl underline underline-offset-8 decoration-2 mb-14 p-4`}>Our <span className=' bg-gradient-to-bl from-orange-900 via-orange-600 to-orange-300 bg-clip-text text-transparent'>puppies</span></h2>
        <div className='w-full h-content  text-2xl flex flex-col justify-start md:flex-row md:flex-wrap md:justify-center items-center gap-5'>
            {dogData.map((row, i: number) => {
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
                }}}><Card index={i} name={row.name} gender={row.gender} price={row.price} key={row.name} age={row.age} /></Link>
               )
            })}
        </div>
    </div>
  )
}
