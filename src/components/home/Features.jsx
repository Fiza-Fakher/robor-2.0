import React from "react";
import { featureCards } from "../../constants";

function Features() {
    
  return (
    <section className="bg-[var(--primary)] text-white py-8 sm:py-10 lg:py-12">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto px-4 gap-4 lg:gap-0">
        
        {/* Features Label */}
        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="text-xl sm:text-2xl font-bold">•</span>
          <h3 className="text-xl sm:text-2xl font-medium">Features</h3>
        </div>

        {/* Divider Line - hidden on mobile */}
        <div className="hidden lg:block flex-1 h-[1px] bg-gray-600 mx-6"></div>

        {/* Main Heading */}
        <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
          <span className="block">AI Technology – Your Gateway</span>
          <span className="block">To The Future</span>
        </h1>
      </div>

      {/* Feature Cards - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-center lg:items-center gap-4 sm:gap-5 lg:gap-6 py-8 sm:py-9 lg:py-10 px-4 max-w-7xl mx-auto">
        {featureCards.map((items, index) => (
          <div 
            key={index} 
            className="h-auto lg:h-128 w-full lg:w-106 bg-[var(--cards-bg)] rounded-xl flex flex-col justify-center items-center p-6 sm:p-8 lg:p-10"
          >
            <img 
              src={items.img} 
              alt={items.title}  
              className="transition-transform duration-300 hover:scale-105 cursor-pointer w-20 h-20 sm:w-24 sm:h-24 lg:w-auto lg:h-auto" 
            />
            <h2 className="text-[var(--text)] font-semibold text-lg sm:text-xl lg:text-2xl text-center pt-6 sm:pt-8 lg:pt-12 max-w-xs lg:w-60">
              {items.title}
            </h2>
            <h5 className="text-[var(--text-secondary)] pt-3 sm:pt-4 lg:pt-6 text-center text-sm sm:text-base px-2">
              {items.des}
            </h5>
          </div>
        ))}
      </div>

      {/* Bottom CTA Text - Responsive */}
      <h1 className="text-[var(--text)] text-center font-semibold text-lg sm:text-2xl md:text-3xl lg:text-4xl mt-4 leading-relaxed sm:leading-snug px-4 max-w-6xl mx-auto">
        <span className="block sm:inline pt-2 sm:pt-4">
          At Robor Al Technology Business, We Are Dedicated To Democratizing
        </span>

        <span className="flex flex-wrap justify-center items-center gap-2 pt-2 sm:pt-4">
          <span>Artificial Intelligence.</span>
          <img
            src="/home/cta-img.png"
            alt=""
            className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full inline-block"
          />
          <span>Our Mission Is To Provide Cutting-Edge</span>
        </span>

        <span className="flex flex-wrap justify-center items-center gap-2 pt-2 sm:pt-4">
          <span>Al Solutions That Empower Businesses To Thrive In</span>
          <img
            src="/home/cta-img2.png"
            alt=""
            className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full inline-block"
          />
          <span>The Digital</span>
        </span>

        <span className="block pt-2 sm:pt-4">Age</span>
      </h1>
    </section>
  );
}

export default Features;