import React from "react";
import { CiSquareCheck } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { aboutPoints,icons } from "../../constants";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

function AboutUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  
  return (
    <>
    <section className="bg-[var(--primary)]  flex flex-col justify-center items-center gap-10 py-12">
      <div className="flex justify-center items-center gap-10">
      <div className="flex gap-6 justify-center items-center">
        <img
          src="/home/about-1.png"
          alt=""
          className="w-420 ml-6 h-124 mt-20"
        />
      </div>
      <div className="flex flex-col max-w-4xl">
        <div className="flex items-center gap-4 mb-6 ml-6">
          <span className="text-[var(--text)] text-3xl">•</span>
          <h3 className="text-[var(--text)] text-lg font-medium">About Us</h3>
        </div>

        <h1 className="font-bold text-[var(--white)] text-4xl md:text-5xl mb-6 leading-tight ml-6">
          <span className="block">Empower Your Business With</span>
          <span className="block">Real-Time Intelligence</span>
        </h1>

        <p className="text-[var(--text-secondary)] text-base md:text-lg mb-8 leading-relaxed ml-6">
          Artificial Intelligence (AI) technology refers to the simulation of
          human intelligence in machines that are programmed to think, learn,
          and make decisions. AI technology leverages data, algorithms, and
          computing power to automate tasks.
        </p>

        <div className="flex flex-col gap-4">
          {aboutPoints.map((item, index) => (
            <div key={index} className="flex items-start gap-3 group ml-5">
              <CiSquareCheck className="text-[color:var(--button)] rounded-2xl text-2xl mt-1 " />

              <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
        <Link to="/contact">
          <button className="h-[50px] lg:mt-10 lg:ml-10 lg:text-sm  sm:h-[55px] w-[160px] sm:w-[180px] flex justify-center items-center gap-3 sm:gap-4 text-base sm:text-lg text-white rounded-full border-2 sm:border-2 border-white hover:bg-white hover:text-[#6D30FB] transition-all duration-300 cursor-pointer">
            Discover More <FaArrowRightLong />
          </button>
        </Link>
      </div>
      </div>
      <div
        ref={ref}
        className="flex justify-center items-center gap-8 pt-34 flex-wrap pb-20"
      >
        {icons.map((item, index) => (
          <div
            className="w-56 h-56 border border-gray-400 rounded-full flex flex-col justify-center items-center text-center"
            key={index}
          >
            <h3 className="font-semibold text-4xl text-[var(--text)] flex items-center">
              {inView && <CountUp end={item.number} duration={2.5} />}
              <span>{item.suffix}</span>
            </h3>
            <p className="text-gray-400 text-lg pt-4">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
    
      </>
  );
}

export default AboutUs;
