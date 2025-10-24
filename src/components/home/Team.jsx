import React from 'react'
import { homeTeam,homeTeam2 } from '../../constants';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { FaArrowRightLong } from 'react-icons/fa6';

function Team() {
    
    
  return (
    <>
    <section className='bg-[var(--primary)] py-30'>
         <div className="flex items-center justify-center w-full max-w-7xl mx-auto px-4">
        
        
        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="text-2xl font-bold">•</span>
          <h3 className="text-2xl font-medium">AI Expert Team</h3>
        </div>
        <div className="flex-1 h-[1px] bg-gray-600 mx-6"></div>
        <h1 className="text-center lg:text-4xl sm:text-2xl md:text-3xl font-semibold leading-snug">
          <span className="block">Our Professionals AI</span>
          <span className="block">Expert Team.</span>
        </h1>
      </div>
      <div className='flex justify-between items-center ml-6 mr-6 py-8'>
        <h2 className='text-lg flex flex-col text-[var(--text-secondary)] w-120'>Artificial Intelligence (AI) technology refers to the simulation of human intelligence in machines that are programmed to think, learn, and make decisions. AI technology leverages data, algorithms, and computing power to automate tasks, optimize processes, and provide insights that improve business performance and enhance user experiences.
<span className='mt-6'>
AI is transforming industries by enabling machines to perform tasks that previously required human intervention</span></h2>
      <div className='flex gap-6'>
        {homeTeam.map((items,index)=>(
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg">
        
            <img
              src={items.img}
              alt={items.name}
              className="w-full h-[300px] sm:h-[350px] object-cover bg-gray-300 transition-transform duration-500 group-hover:scale-105"
            />

            
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 z-0 transition-all duration-500"></div>

            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <a href="https://facebook.com" className="p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                <FaFacebookF size={16} />
              </a>
              <a href="https://x.com/" className="p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                <FaTwitter size={16} />
              </a>
              <a href="http://instagram.com" className="p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                <FaInstagram size={16} />
              </a>
              <a href="http://whatsappweb.com" className="p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                <FaWhatsapp size={16} />
              </a>
            </div>

            
            <div className="absolute bottom-4 left-0 w-full text-center text-white z-10">
              <h3 className="text-lg sm:text-xl font-semibold">{items.name}</h3>
            </div>
          </div>
        ))}
      </div>
      
      </div>
      <div className='flex gap-6 justify-around items-center'>
        {homeTeam2.map((items,index)=>(
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg">
        
            <img
              src={items.img}
              alt={items.name}
              className="lg:w-76 h-[300px] sm:h-[350px] object-cover bg-gray-300 transition-transform duration-500 group-hover:scale-105"
            />

            
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 z-0 transition-all duration-500"></div>

            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <a href="https://facebook.com" className="p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                <FaFacebookF size={16} />
              </a>
              <a href="https://x.com/" className="p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                <FaTwitter size={16} />
              </a>
              <a href="http://instagram.com" className="p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                <FaInstagram size={16} />
              </a>
              <a href="http://whatsappweb.com" className="p-3 bg-white rounded-full text-black hover:bg-[#6D30FB] hover:text-white transition">
                <FaWhatsapp size={16} />
              </a>
            </div>

            
            <div className="absolute bottom-4 left-0 w-full text-center text-white z-10">
              <h3 className="text-lg sm:text-xl font-semibold">{items.name}</h3>
            </div>
          </div>
        ))}
        <div className="w-64 h-64 rounded-full border-2 border-[var(--secondary)] flex items-center justify-center gap-4 text-[var(--text)] cursor-pointer hover:bg-[var(--button)]  hover:text-[var(--text)] transition-all duration-300">
  <span className="text-lg font-medium">View All Members</span>
  <FaArrowRightLong className="text-2xl" />
</div>

      </div>

    </section>
    </>
  )
}

export default Team