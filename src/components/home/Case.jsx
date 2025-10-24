import React from 'react'
import { projectCards } from '../../constants'
import { Link } from 'react-router-dom'
import { GoArrowUpRight } from 'react-icons/go'
import FastMarquee from "react-fast-marquee"

function Case() {
  const topics = [
  "AI ALGORITHMS",
  "DEEP LEARNING",
  "CUSTOMER SERVICE",
  "HEALTHCARE",
  "AI ALGORITHMS",
  "DEEP LEARNING",
];

  return (
    <>
    <section className='relative overflow-hidden bg-[var(--primary)] py-40'>
      <div className='absolute -rotate-3 left-0 top-[30%]'>
      <FastMarquee className='bg-[var(--button)] py-6 ' speed={50} direction='left' delay={0} gradient={false} play={true}>
        {topics.map((items,index)=>(
          <div key={index} className='px-18 text-3xl flex gap-4'><span>•</span>{items}</div>
        ))}
      </FastMarquee></div>
      <div className='absolute rotate-3 left-0 top-[50%]'>
      <FastMarquee className='bg-[var(--secondary)] py-8' speed={50} direction='left' delay={0} gradient={false} play={true}>
        {topics.map((items,index)=>(
          <div key={index} className='px-18 text-3xl gap-4'><span>•</span> {items}</div>
        ))}
      </FastMarquee></div>
    </section>
    <section className='bg-[var(--primary)] text-[var(--text)] pt-20'>
         <div className="flex items-center justify-center w-full max-w-7xl mx-auto px-4">        
     <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="text-2xl font-bold">•</span>
          <h3 className="text-2xl font-medium">Case Study</h3>
        </div>
        <div className="flex-1 h-[1px] bg-gray-600 mx-6"></div>
        <h1 className="text-center lg:text-4xl sm:text-2xl md:text-3xl font-semibold leading-snug">
          <span className="block">Our Projects & </span>
          <span className="block">Case Studies</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 cursor-pointer pb-20 px-6">
  {projectCards.map((items, index) => (
    <div
      key={index}
      className="flex flex-col text-left py-12 group relative"
    >
      <div className="relative overflow-hidden rounded-3xl w-full flex justify-center">
        <img
          src={items.img}
          alt=""
          className="rounded-3xl transition-all duration-300 group-hover:blur-xs w-full object-cover"
        />

        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Link to={`/projects/${items.slug}`}>
            <div className="w-16 h-16 rounded-full bg-white/40 backdrop-blur-md flex justify-center items-center transition-all duration-300 hover:bg-[#6D30FB]">
              <GoArrowUpRight size={28} className="text-white" />
            </div>
          </Link>
        </div>
      </div>

     
      <div className="flex flex-col justify-start items-start mt-8 ml-4">
        <div className="flex justify-center items-center w-44 h-10 gap-2 border border-gray-400 text-gray-400 rounded-full">
          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          <h4 className="text-sm sm:text-base">{items.type}</h4>
        </div>

        <h2 className="text-2xl font-bold pt-4 sm:text-xl xs:text-lg">
          {items.title}
        </h2>
      </div>
    </div>
  ))}
</div>

    </section>
    </>
  )
}

export default Case