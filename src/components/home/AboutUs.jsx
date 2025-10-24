import React from "react";
import { CiSquareCheck } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { aboutPoints, icons } from "../../constants";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

function AboutUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <>
      <section className="bg-[var(--primary)] flex flex-col justify-center items-center gap-6 sm:gap-8 lg:gap-10 py-8 sm:py-10 lg:py-12 px-4">
        {/* Main Content - Image and Text */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-10 w-full max-w-7xl">
          
          {/* Image Section */}
          <div className="flex gap-6 justify-center items-center w-full lg:w-auto">
            <img
              src="/home/about-1.png"
              alt="About us illustration"
              className="w-full max-w-sm sm:max-w-md lg:w-420 lg:ml-6 h-auto lg:h-124 lg:mt-20 rounded-lg"
            />
          </div>

          {/* Text Content Section */}
          <div className="flex flex-col max-w-full lg:max-w-4xl w-full">
            {/* About Us Label */}
            <div className="flex items-center gap-4 mb-4 sm:mb-5 lg:mb-6 lg:ml-6">
              <span className="text-[var(--text)] text-2xl sm:text-3xl">•</span>
              <h3 className="text-[var(--text)] text-base sm:text-lg font-medium">About Us</h3>
            </div>

            {/* Main Heading */}
            <h1 className="font-bold text-[var(--white)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-5 lg:mb-6 leading-tight lg:ml-6">
              <span className="block">Empower Your Business With</span>
              <span className="block">Real-Time Intelligence</span>
            </h1>

            {/* Description */}
            <p className="text-[var(--text-secondary)] text-sm sm:text-base lg:text-lg mb-6 sm:mb-7 lg:mb-8 leading-relaxed lg:ml-6">
              Artificial Intelligence (AI) technology refers to the simulation of
              human intelligence in machines that are programmed to think, learn,
              and make decisions. AI technology leverages data, algorithms, and
              computing power to automate tasks.
            </p>

            {/* Points List */}
            <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
              {aboutPoints.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group lg:ml-5">
                  <CiSquareCheck className="text-[color:var(--button)] rounded-2xl text-xl sm:text-2xl mt-1 flex-shrink-0" />
                  <p className="text-[var(--text-secondary)] text-sm sm:text-base lg:text-lg leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="h-[50px] sm:h-[55px] w-full sm:w-[180px] lg:mt-10 lg:ml-10 flex justify-center items-center gap-3 sm:gap-4 text-base sm:text-lg text-white rounded-full border-2 border-white hover:bg-white hover:text-[#6D30FB] transition-all duration-300 cursor-pointer">
                Discover More <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>

        {/* Stats Section - Circular Counters */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:flex justify-center items-center gap-6 sm:gap-7 lg:gap-8 pt-8 sm:pt-12 lg:pt-34 pb-12 sm:pb-16 lg:pb-20 w-full max-w-7xl"
        >
          {icons.map((item, index) => (
            <div
              className="w-48 h-48 sm:w-52 sm:h-52 lg:w-56 lg:h-56 border border-gray-400 rounded-full flex flex-col justify-center items-center text-center mx-auto"
              key={index}
            >
              <h3 className="font-semibold text-3xl sm:text-4xl text-[var(--text)] flex items-center">
                {inView && <CountUp end={item.number} duration={2.5} />}
                <span>{item.suffix}</span>
              </h3>
              <p className="text-gray-400 text-base sm:text-lg pt-3 sm:pt-4 px-4">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default AboutUs;