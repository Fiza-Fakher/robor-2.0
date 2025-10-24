import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Consult() {
  return (
    <>
      <section
        className="bg-[var(--primary)] bg-cover bg-center bg-no-repeat relative py-28 px-8 flex flex-col items-center justify-center text-center border border-[var(--secondary)] rounded-2xl"
        style={{ backgroundImage: "url('/home/consult.png')" }}>
            
        <div className="flex items-center justify-center gap-4 mb-6 ml-6">
          <span className="text-[var(--text-secondary)] text-3xl">•</span>
          <h3 className="text-[var(--text-secondary)] text-2xl font-medium">
            AI Consulting
          </h3>
        </div>
        <h3 className="flex flex-col text-[var(--text)] text-4xl text-center">
          <span>Get 40% off your first month of Artificial Intelligent</span>{" "}
          <span>support — Please Consulting Us</span>
        </h3>
        <Link to="/contact">
          <button className="h-[50px] lg:text-sm sm:h-[55px] w-[160px] sm:w-[180px] flex justify-center items-center gap-3 sm:gap-4 text-base lg:mt-6 sm:text-lg text-white rounded-full border-2 sm:border-2 border-white hover:bg-white hover:text-[#6D30FB] transition-all duration-300 cursor-pointer">
            Discover More <FaArrowRightLong />
          </button>
        </Link>
      </section>
    </>
  );
}

export default Consult;
