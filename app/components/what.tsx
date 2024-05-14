import React from 'react'

import { roboto} from '../fonts/font';
import { PiDogThin } from "react-icons/pi";

export default function What() {
  return (
    <div className='w-full h-content flex flex-col justify-start gap-10 items-center'>
        <h1 className='text-8xl font-bold tracking-wider mt-12 text-center'>Understanding Dog <span className=' bg-gradient-to-br from-orange-900 via-orange-600 to-orange-300 bg-clip-text text-transparent'>Breeds</span></h1>

        <div className=' w-[85%] h-[18rem] mt-12  p-2 flex flex-col gap-10 justify-center items-center'>
            <h4 className='text-5xl font-bold tracking-wide  underline underline-offset-8'>Introduction</h4>
            <p className='text-2xl w-[87%] font-light  tracking-wide text-center'>Dogs come in a remarkable array of <span className='font-bold'>shapes</span>, sizes, and <span className='font-bold'>temperaments</span>, each breed uniquely adapted to fulfill specific roles and companionship needs. <span className='font-bold'>Understanding</span> the characteristics and traits of different dog breeds can help prospective owners choose a companion that aligns with their <span className='font-bold'>lifestyle</span>, <span className='font-bold'>preferences</span>, and <span className='font-bold'>requirements</span>. Here, we delve into the general information across various dog breeds to provide insights into their origins, temperaments, <span className='font-bold'>exercise needs</span>, grooming requirements, and <span className='font-bold'>more</span>.</p>
        </div>

        <div className=' w-[85%] h-[18rem]  p-2 flex flex-col gap-10 justify-center items-center'>
            <h4 className='text-5xl font-bold tracking-wide underline underline-offset-8'>Origins</h4>
            <p className='text-2xl w-[87%] font-light tracking-wide text-center'>Every dog breed has a <span className='font-bold'>rich history</span>, often tracing back centuries or even millennia. From the <span className='font-bold'>ancient guardians</span> of Egypt to the agile herding dogs of the Scottish Highlands, the origins of each breed reflect the <span className='font-bold'>specific tasks</span> and <span className='font-bold'>environments</span> for which they were developed.</p>
        </div>

        <div className=' w-full h-[18rem]  p-2 flex flex-col gap-10 justify-center items-center'>
            <h4 className='text-5xl font-bold tracking-wide  underline underline-offset-8'>Temperament</h4>
            <p className='text-2xl w-[87%] font-light tracking-wide text-center'>Temperament <span className='font-bold'>varies</span> widely among dog breeds, influenced <span className='font-bold'>by genetics</span>, breeding <span className='font-bold'>history</span>, and individual <span className='font-bold'>upbringing</span>. While some breeds are known for their gentle and <span className='font-bold'>affectionate nature</span>, others may exhibit traits such as independence, <span className='font-bold'>intelligence</span>, or protective instincts. Understanding a breed&#39;s typical temperament can help owners anticipate and address <span className='font-bold'>behavioral traits</span> effectively.</p>
        </div>

        <div className=' w-full h-[18rem]  p-2 flex flex-col gap-10 justify-center items-center'>
            <h4 className='text-5xl font-bold tracking-wide underline  underline-offset-8'>Exercise Needs</h4>
            <p className='text-2xl w-[87%] font-light tracking-wide text-center'>Different dog breeds have varying <span className='font-bold'>exercise requirements</span> based on their energy <span className='font-bold'>levels</span>, <span className='font-bold'>size</span>, and <span className='font-bold'>activity history</span>. Breeds bred for work or sporting purposes, such as Retrievers and Border Collies, may require ample daily exercise to <span className='font-bold'>stay mentally</span> and <span className='font-bold'>physically stimulated</span>. On the other hand, <span className='font-bold'>toy breeds</span> and <span className='font-bold'>brachycephalic breeds</span> may have lower exercise needs but still benefit from regular activity to <span className='font-bold'>maintain health</span> and <span className='font-bold'>well-being</span>.</p>
        </div>

        <div className=' w-full h-[18rem]  p-2 flex flex-col gap-10 justify-center items-center'>
            <h4 className='text-5xl font-bold tracking-wide  underline underline-offset-8'>Grooming Requirements</h4>
            <p className='text-2xl w-[87%] font-light tracking-wide text-center'><span className='font-bold'>Grooming needs</span> vary greatly among dog breeds, ranging from <span className='font-bold'>minimal maintenance</span> to regular grooming sessions. <span className='font-bold'>Long-haired breeds</span> like the Afghan Hound and the Poodle may require <span className='font-bold'>frequent brushing</span> and professional grooming to prevent matting and maintain coat health. <span className='font-bold'>Short-haired breeds</span>, while generally <span className='font-bold'>lower maintenance</span>, may still benefit from occasional grooming to remove loose hair and debris.</p>
        </div>

        <div className=' w-full h-[18rem]  p-2 flex flex-col gap-10 justify-center items-center'>
            <h4 className='text-5xl font-bold tracking-wide underline  underline-offset-8'>Health Considerations</h4>
            <p className='text-2xl w-[87%] font-light tracking-wide text-center'><span className='font-bold'>Each dog breed</span> has its own set of potential health concerns and considerations, influenced <span className='font-bold'>by genetics</span>, <span className='font-bold'>conformation</span>, and <span className='font-bold'>breeding practices</span>. Responsible breeders prioritize health testing and screening to <span className='font-bold'>minimize </span> the risk of hereditary diseases and <span className='font-bold'>promote overall</span> well-being. Prospective owners should <span className='font-bold'>research breed-specific</span> health issues and consult with reputable breeders to make informed decisions about their chosen breed&#39;s health.</p>
        </div>

    </div>
  )
}
