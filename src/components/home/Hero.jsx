import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import FastMarquee from "react-fast-marquee";
import { logos } from "../../constants";

function Hero() {
  return (
    <>
    <section className="bg-[var(--primary)] text-[var(--text)] flex flex-col justify-center items-center text-center px-4 py-14 ">
      <h1 className="lg:text-6xl sm:text-4xl md:text-6xl font-bold text-white leading-snug md:leading-tight">
        <span className="block">Revolutionizing The Future</span>
        <span className="block pt-3 md:pt-4">With AI Technology</span>
      </h1>

      <h5 className="lg:text-md sm:text-lg md:text-xl md:font-semibold text-[var(--text-secondary)] mt-6 max-w-2xl">
        <span>
          Artificial Intelligence (AI) technology refers to the simulation of
        </span>
        <span className="pt-2 block">human intelligence in machines.</span>
      </h5>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-10">
        <Link to="/services">
          <button className="h-[50px] lg:text-sm sm:h-[55px] w-[170px] sm:w-[186px] flex justify-center items-center gap-3 sm:gap-4 text-base sm:text-lg bg-[#6D30FB] text-white rounded-full hover:bg-white hover:text-[#6D30FB]  transition-all duration-300 cursor-pointer">
            Get Started <FaArrowRightLong />
          </button>
        </Link>

        <Link to="/contact">
          <button className="h-[50px] lg:text-sm sm:h-[55px] w-[160px] sm:w-[180px] flex justify-center items-center gap-3 sm:gap-4 text-base sm:text-lg text-white rounded-full border-2 sm:border-2 border-white hover:bg-white hover:text-[#6D30FB] transition-all duration-300 cursor-pointer">
            Discover More <FaArrowRightLong />
          </button>
        </Link>
      </div>
      <img src="/home/hero.png" alt="" className="pt-26" />
    </section>
    <section className="w-full py-4 sm:py-6 bg-[var(--primary)] flex flex-col justify-center items-center overflow-hidden">
    
      <div className="w-full h-[1px] bg-[var(--border)] mb-4"></div>
      <FastMarquee speed={50} gradient={false} className="py-8">
        {logos.map((logo, index) => (
          <img
            key={index}
           src={`/homepage/${logo}`}
            alt={`logo-${index}`}
            className="mx-8 sm:mx-12 md:mx-16 w-24 sm:w-28 md:w-32"
          />
        ))}
      </FastMarquee>

      
      <div className="w-full h-[1px] bg-[var(--border)] mt-4"></div>
    </section>
      </>
  );
}

export default Hero;
