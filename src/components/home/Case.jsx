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
      {/* Animated Marquee Section */}
      <section className='relative overflow-hidden bg-[var(--primary)] py-24 sm:py-32 lg:py-40'>
        {/* First Marquee */}
        <div className='absolute -rotate-3 left-0 top-[30%] w-full'>
          <FastMarquee className='bg-[var(--button)] py-4 sm:py-5 lg:py-6' speed={50} direction='left' delay={0} gradient={false} play={true}>
            {topics.map((items, index) => (
              <div key={index} className='px-8 sm:px-12 lg:px-18 text-xl sm:text-2xl lg:text-3xl flex gap-3 sm:gap-4'>
                <span>•</span>{items}
              </div>
            ))}
          </FastMarquee>
        </div>

        {/* Second Marquee */}
        <div className='absolute rotate-3 left-0 top-[50%] w-full'>
          <FastMarquee className='bg-[var(--secondary)] py-5 sm:py-6 lg:py-8' speed={50} direction='left' delay={0} gradient={false} play={true}>
            {topics.map((items, index) => (
              <div key={index} className='px-8 sm:px-12 lg:px-18 text-xl sm:text-2xl lg:text-3xl flex gap-3 sm:gap-4'>
                <span>•</span> {items}
              </div>
            ))}
          </FastMarquee>
        </div>
      </section>

      {/* Case Study Projects Section */}
      <section className='bg-[var(--primary)] text-[var(--text)] pt-12 sm:pt-16 lg:pt-20'>
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto px-4 gap-4 lg:gap-0 mb-8 sm:mb-10 lg:mb-12">
          
          {/* Case Study Label */}
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-xl sm:text-2xl font-bold">•</span>
            <h3 className="text-xl sm:text-2xl font-medium">Case Study</h3>
          </div>

          {/* Divider - hidden on mobile */}
          <div className="hidden lg:block flex-1 h-[1px] bg-gray-600 mx-6"></div>

          {/* Heading */}
          <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
            <span className="block">Our Projects & </span>
            <span className="block">Case Studies</span>
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 lg:gap-8 cursor-pointer pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-5 lg:px-6 max-w-7xl mx-auto">
          {projectCards.map((items, index) => (
            <div
              key={index}
              className="flex flex-col text-left py-6 sm:py-8 lg:py-12 group relative"
            >
              {/* Project Image with Hover Effect */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl w-full flex justify-center">
                <img
                  src={items.img}
                  alt={items.title}
                  className="rounded-2xl sm:rounded-3xl transition-all duration-300 group-hover:blur-xs w-full object-cover"
                />

                {/* Hover Overlay with Arrow */}
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Link to={`/projects/${items.slug}`}>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-white/40 backdrop-blur-md flex justify-center items-center transition-all duration-300 hover:bg-[#6D30FB]">
                      <GoArrowUpRight size={24} className="sm:text-[26px] lg:text-[28px] text-white" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Project Info */}
              <div className="flex flex-col justify-start items-start mt-5 sm:mt-6 lg:mt-8 ml-2 sm:ml-3 lg:ml-4">
                {/* Type Badge */}
                <div className="flex justify-center items-center w-36 sm:w-40 lg:w-44 h-8 sm:h-9 lg:h-10 gap-2 border border-gray-400 text-gray-400 rounded-full">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-400"></div>
                  <h4 className="text-xs sm:text-sm lg:text-base">{items.type}</h4>
                </div>

                {/* Project Title */}
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold pt-3 sm:pt-3.5 lg:pt-4">
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