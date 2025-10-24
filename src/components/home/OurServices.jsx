import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { servicePoints } from "../../constants";

function OurServices() {
 
  
  return (
    <>
      <section className="bg-[var(--cards-bg)] text-[var(--text-secondary)] py-14 flex justify-center items-center flex-col">
        <div className="flex items-center gap-4 mb-6 ml-6">
          <span className="text-[var(--text-secondary)] text-3xl">•</span>
          <h3 className="text-[var(--text-secondary)] text-2xl font-medium">
            Our Services
          </h3>
        </div>
        <h1 className="text-2xl text-center font-semibold flex flex-col">
          <span>AI Technology Services Aim To Provide Intelligent</span>{" "}
          <span>Solutions.</span>
        </h1>
        <div className="w-full pt-10">
          {servicePoints.map((items, index) => (
            <div
              key={index}
              className="w-full group hover:bg-[var(--primary)] cursor-pointer hover:text-[var(--text)]"
            >
              <div className="bg-[var(--text-secondary)] w-full h-[1px]"></div>
              <div className="flex items-center justify-between ">
                <div className="h-44 pt-10 pl-20">
                  <h2 className="font-bold text-3xl pt-2 ">{items.title}</h2>
                  <h5 className="text-lg pt-4">{items.des}</h5>
                </div>

                <div className="rounded-xl border border-[var(--text-secondary)] w-14 h-10 flex items-center justify-center mr-10 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <FaArrowRightLong size={24} className="text-[var(--text)]" />
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
