import React from 'react'
import { footerSections, socials } from '../constants';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      
      <section className="flex flex-col justify-center items-center bg-[var(--primary)] py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-10 text-[var(--text)]">
        <h1 className="uppercase text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-[var(--secondary)] mb-8 md:mb-12 lg:mb-16 text-center">
          Let's Talk
        </h1>

        {/* Contact Info Grid */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {/* Location */}
          <div>
            <h3 className="uppercase text-[var(--text-secondary)] font-semibold tracking-wide mb-3 border-b border-gray-700 pb-1 w-fit text-sm md:text-base">
              Location
            </h3>
            <p className="text-sm md:text-base font-semibold text-[var(--text-secondary)] leading-relaxed">
              56 Moo 9 Ladlumkaew-Pathumthani Rd.,<br />
              Pathum Thani 12140, Thailand
            </p>
          </div>

          {/* Phone */}
          <div>
            <h3 className="uppercase text-[var(--text-secondary)] font-semibold tracking-wide mb-3 border-b border-gray-700 pb-1 w-fit text-sm md:text-base">
              Phone Call
            </h3>
            <p className="text-base md:text-lg font-semibold text-[var(--text-secondary)]">+6624073460</p>
          </div>

          {/* Email */}
          <div>
            <h3 className="uppercase text-[var(--text-secondary)] font-semibold tracking-wide mb-3 border-b border-gray-700 pb-1 w-fit text-sm md:text-base">
              Email Address
            </h3>
            <p className="text-base md:text-lg font-semibold text-[var(--text-secondary)] break-all">help24/7.info@robor.com</p>
            <p className="text-base md:text-lg font-semibold text-[var(--text-secondary)]">info@robor.com</p>
          </div>
        </div>
        
        <div className='w-full h-[1px] bg-[var(--text-secondary)] mt-12 md:mt-16 lg:mt-20'></div>
      </section>

      
      <footer className="bg-black text-white py-8 md:py-10 lg:py-12 px-4 md:px-8 lg:px-16 xl:px-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-16">
            
      
            <div className="lg:w-1/3">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">Subscribe to Newsletter</h2>
              <p className="text-gray-400 mb-6 text-sm md:text-base max-w-md">
                Get Monthly insights from founders around the globe. No spam – promise.
              </p>

              <form className="flex bg-[var(--secondary)] rounded-full overflow-hidden max-w-md h-12 md:h-14">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="flex-1 px-4 md:px-5 py-3 bg-transparent text-white outline-none placeholder-gray-500 text-sm md:text-base"
                  required
                />
                <button
                  type="submit"
                  className="bg-[var(--button)] hover:bg-purple-700 px-4 md:px-6 py-3 font-medium rounded-full transition-all text-sm md:text-base whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>

      
           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12 flex-1">
  {footerSections.map((section, index) => (
    <div key={index}>
      <h3 className="text-base md:text-lg font-semibold mb-3 relative after:block after:w-10 after:h-[2px] after:bg-purple-600 after:mt-1">
        {section.title}
      </h3>
      <ul className="space-y-2 text-gray-400 text-sm md:text-base">
        {section.links.map((link, i) => (
          <li key={i}>
            <Link
              to={link.link}
              className="hover:text-white transition"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ))}

  {/* Social Section */}
  <div>
    <h3 className="text-base md:text-lg font-semibold mb-3 relative after:block after:w-10 after:h-[2px] after:bg-purple-600 after:mt-1">
      Get In Touch
    </h3>
    <p className="text-gray-400 mb-4 text-sm md:text-base">
      We suggest connecting apps
    </p>
    <div className="flex gap-3 flex-wrap">
      {socials.map((item, i) => (
        <a
          key={i}
          href={item.href}
          className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#111] hover:bg-purple-600 transition"
        >
          {item.icon}
        </a>
      ))}
    </div>
  </div>
</div>
          </div>

          {/* Bottom Copyright Section */}
          <div className="border-t border-gray-800 mt-8 md:mt-10 lg:mt-12 pt-6 text-[var(--text)]">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs md:text-sm flex items-center gap-2 text-center md:text-left">
                <span className="text-lg">©</span> Copyright 2025
                <span className="text-[var(--button)] font-medium">Robor</span>. All Rights Reserved.
              </p>

              <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-xs md:text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Terms of services
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Disclaimer
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer