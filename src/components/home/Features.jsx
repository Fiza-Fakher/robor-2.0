import React from "react";
import { featureCards } from "../../constants";

function Features() {
    
  return (
    <section className="bg-[var(--primary)] text-white py-12">
      <div className="flex items-center justify-center w-full max-w-7xl mx-auto px-4">
        
        
        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="text-2xl font-bold">•</span>
          <h3 className="text-2xl font-medium">Features</h3>
        </div>

        <div className="flex-1 h-[1px] bg-gray-600 mx-6"></div>


        <h1 className="text-center lg:text-4xl sm:text-2xl md:text-3xl font-semibold leading-snug">
          <span className="block">AI Technology – Your Gateway</span>
          <span className="block">To The Future</span>
        </h1>
      </div>
      <div className="flex justify-center items-center gap-6 py-10">
        {featureCards.map((items,index)=>(
            <div key={index} className="h-128 w-106 bg-[var(--cards-bg)] rounded-xl flex flex-col justify-center items-center">
                <img src={items.img} alt=""  className="transition-transform duration-300 hover:scale-105 cursor-pointer" />
                <h2 className="text-[var(--text)] font-semibold text-2xl text-center pt-12 w-60">{items.title}</h2>
                <h5 className="text-[var(--text-secondary)] pt-6 text-center">{items.des}</h5>
            </div>
        ))}
      </div>
     <h1 className="text-[var(--text)] text-center font-semibold text-4xl mt-4 leading-snug">
  <span className="flex justify-center items-center gap-2 pt-4">
    At Robor Al Technology Business, We Are Dedicated To Democratizing
  </span>

  <span className="flex justify-center items-center gap-2 pt-4">
    Artificial Intelligence.
    <img
      src="/home/cta-img.png"
      alt=""
      className="w-10 h-10 rounded-full inline-block"
    />
    Our Mission Is To Provide Cutting-Edge
  </span>

  <span className="flex justify-center items-center gap-2 pt-4">
    Al Solutions That Empower Businesses To Thrive In
    <img
      src="/home/cta-img2.png"
      alt=""
      className="w-10 h-10 rounded-full inline-block"
    />
    The Digital
  </span>

  <span className="block pt-4">Age</span>
</h1>

    </section>
  );
}

export default Features;
