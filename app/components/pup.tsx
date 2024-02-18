import { sql } from '@vercel/postgres';
import Image from 'next/image';
import Mirco from '../../public/mirco.png';


type data = {
    name: string
}


export default async function Pup() {

    const { rows } = await sql`SELECT * FROM dogs`;


    console.log(rows)

  return (
    <div>
        <div className='w-screen h-content border border-red-400 text-2xl flex flex-col justify-start md:flex-row items-center gap-5'>
            {rows.map((row) => {

                return (
                        <div key={row.name}  className='border bg-slate-200 mt-4 w-3/5 h-80'>
                            <Image src={Mirco} alt='pup' width={200} height={200} ></Image>
                        </div>
                )
            })}
        </div>
    </div>
  )
}
