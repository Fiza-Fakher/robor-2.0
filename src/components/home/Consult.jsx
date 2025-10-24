import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Consult() {
  return (
    <>
      <section
        className="bg-[var(--primary)] bg-cover bg-center bg-no-repeat relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center border border-[var(--secondary)] rounded-xl sm:rounded-2xl mx-4 sm:mx-6 lg:mx-0"
        style={{ backgroundImage: "url('/home/consult.png')" }}
      >
        {/* AI Consulting Label */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-5 lg:mb-6 lg:ml-6">
          <span className="text-[var(--text-secondary)] text-2xl sm:text-3xl">•</span>
          <h3 className="text-[var(--text-secondary)] text-lg sm:text-xl lg:text-2xl font-medium">
            AI Consulting
          </h3>
        </div>

        {/* Main Heading */}
        <h3 className="flex flex-col text-[var(--text)] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center leading-relaxed sm:leading-normal px-2 sm:px-4 max-w-5xl">
          <span>Get 40% off your first month of Artificial Intelligent</span>
          <span>support — Please Consulting Us</span>
        </h3>

        {/* CTA Button */}
        <Link to="/contact" className="w-full sm:w-auto mt-6 sm:mt-7 lg:mt-6">
          <button className="h-[50px] sm:h-[55px] w-full sm:w-[180px] flex justify-center items-center gap-3 sm:gap-4 text-base sm:text-lg text-white rounded-full border-2 border-white hover:bg-white hover:text-[#6D30FB] transition-all duration-300 cursor-pointer">
            Discover More <FaArrowRightLong />
          </button>
        </Link>
      </section>
    </>
  );
}

export default Consult;