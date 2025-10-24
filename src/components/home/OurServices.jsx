import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { servicePoints } from "../../constants";

function OurServices() {
  return (
    <>
      <section className="bg-[var(--cards-bg)] text-[var(--text-secondary)] py-8 sm:py-10 lg:py-14 flex justify-center items-center flex-col px-4">
        
        {/* Header Section */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 lg:mb-6 lg:ml-6">
          <span className="text-[var(--text-secondary)] text-2xl sm:text-3xl">•</span>
          <h3 className="text-[var(--text-secondary)] text-lg sm:text-xl lg:text-2xl font-medium">
            Our Services
          </h3>
        </div>

        {/* Main Heading */}
        <h1 className="text-lg sm:text-xl lg:text-2xl text-center font-semibold flex flex-col px-4 max-w-4xl">
          <span>AI Technology Services Aim To Provide Intelligent</span>
          <span>Solutions.</span>
        </h1>

        {/* Services List */}
        <div className="w-full pt-6 sm:pt-8 lg:pt-10 max-w-7xl">
          {servicePoints.map((items, index) => (
            <div
              key={index}
              className="w-full group hover:bg-[var(--primary)] cursor-pointer hover:text-[var(--text)]"
            >
              <div className="bg-[var(--text-secondary)] w-full h-[1px]"></div>
              
              <div className="flex items-center justify-between">
                {/* Text Content */}
                <div className="h-auto sm:h-40 lg:h-44 py-6 sm:py-8 lg:pt-10 px-4 sm:px-8 lg:pl-20 flex-1">
                  <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl lg:pt-2">
                    {items.title}
                  </h2>
                  <h5 className="text-sm sm:text-base lg:text-lg pt-2 sm:pt-3 lg:pt-4 pr-4 sm:pr-8">
                    {items.des}
                  </h5>
                </div>

                {/* Arrow Icon */}
                <div className="rounded-xl border border-[var(--text-secondary)] w-10 h-8 sm:w-12 sm:h-9 lg:w-14 lg:h-10 flex items-center justify-center mr-4 sm:mr-6 lg:mr-10 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 flex-shrink-0">
                  <FaArrowRightLong size={20} className="sm:text-[22px] lg:text-[24px] text-[var(--text)]" />
                </div>
              </div>
              
              <div className="bg-[var(--text-secondary)] w-full h-[1px]"></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default OurServices;