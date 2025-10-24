import React from 'react'
import { homeTeam, homeTeam2 } from '../../constants';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { FaArrowRightLong } from 'react-icons/fa6';

function Team() {
  return (
    <>
      <section className='bg-[var(--primary)] py-16 md:py-20 lg:py-30 px-4'>
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 mb-8">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-xl md:text-2xl font-bold">•</span>
              <h3 className="text-xl md:text-2xl font-medium">AI Expert Team</h3>
            </div>
            
            <div className="hidden md:block flex-1 h-[1px] bg-gray-600 mx-6"></div>
            
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
              <span className="block">Our Professionals AI</span>
              <span className="block">Expert Team.</span>
            </h1>
          </div>

          {/* Description and First Team Row */}
          <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 py-8'>
            
            {/* Description */}
            <div className='w-full lg:w-1/3'>
              <p className='text-base md:text-lg text-[var(--text-secondary)] leading-relaxed'>
                Artificial Intelligence (AI) technology refers to the simulation of human intelligence in machines that are programmed to think, learn, and make decisions. AI technology leverages data, algorithms, and computing power to automate tasks, optimize processes, and provide insights that improve business performance and enhance user experiences.
                <span className='block mt-6'>
                  AI is transforming industries by enabling machines to perform tasks that previously required human intervention
                </span>
              </p>
            </div>

            {/* First Team Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-2/3'>
              {homeTeam.map((items, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={items.img}
                    alt={items.name}
                    className="w-full h-[280px] sm:h-[320px] md:h-[350px] object-cover bg-gray-300 transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 z-0 transition-all duration-500"></div>

                  {/* Social Icons */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-3 md:gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                    <a href="https://facebook.com" className="p-2 md:p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                      <FaFacebookF size={14} className="md:w-4 md:h-4" />
                    </a>
                    <a href="https://x.com/" className="p-2 md:p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                      <FaTwitter size={14} className="md:w-4 md:h-4" />
                    </a>
                    <a href="http://instagram.com" className="p-2 md:p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                      <FaInstagram size={14} className="md:w-4 md:h-4" />
                    </a>
                    <a href="http://whatsappweb.com" className="p-2 md:p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                      <FaWhatsapp size={14} className="md:w-4 md:h-4" />
                    </a>
                  </div>

                  {/* Name */}
                  <div className="absolute bottom-4 left-0 w-full text-center text-white z-10">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold">{items.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Team Row with View All Button */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
            {homeTeam2.map((items, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={items.img}
                  alt={items.name}
                  className="w-full h-[280px] sm:h-[320px] md:h-[350px] object-cover bg-gray-300 transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 z-0 transition-all duration-500"></div>

                {/* Social Icons */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-3 md:gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                  <a href="https://facebook.com" className="p-2 md:p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                    <FaFacebookF size={14} className="md:w-4 md:h-4" />
                  </a>
                  <a href="https://x.com/" className="p-2 md:p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                    <FaTwitter size={14} className="md:w-4 md:h-4" />
                  </a>
                  <a href="http://instagram.com" className="p-2 md:p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                    <FaInstagram size={14} className="md:w-4 md:h-4" />
                  </a>
                  <a href="http://whatsappweb.com" className="p-2 md:p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                    <FaWhatsapp size={14} className="md:w-4 md:h-4" />
                  </a>
                </div>

                {/* Name */}
                <div className="absolute bottom-4 left-0 w-full text-center text-white z-10">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold">{items.name}</h3>
                </div>
              </div>
            ))}

            {/* View All Members Button */}
            <div className="w-full h-[280px] sm:h-[320px] md:h-[350px] rounded-2xl lg:rounded-full border-2 border-[var(--secondary)] flex flex-col lg:flex-row items-center justify-center gap-3 md:gap-4 text-[var(--text)] cursor-pointer hover:bg-[var(--button)] hover:text-[var(--text)] transition-all duration-300 p-6">
              <span className="text-base md:text-lg font-medium text-center">View All Members</span>
              <FaArrowRightLong className="text-xl md:text-2xl" />
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Team