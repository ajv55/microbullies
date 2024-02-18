import React from 'react'
import {sql} from '@vercel/postgres'
import Image from 'next/image';
import Micro from '../../public/mirco.png';

export default async function Pups() {

    const { rows } = await sql`SELECT * FROM dogs`;
    console.log(rows)

  return (
    <div>
        {rows.map((row) => {
            return (
                <div key={row.name}>
                    <Image src={Micro} alt='pup' width={200} height={200}></Image>
                    <h1>{row.name}</h1>
                </div>
            )
        })}
    </div>
  )
}
