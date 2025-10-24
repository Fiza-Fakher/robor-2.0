import React from 'react'
import { footerSections,socials } from '../constants';

function Footer() {
  return (
    <>
      <section className="flex flex-col justify-center items-center bg-[var(--primary)] py-24 px-10 text-[var(--text)]">
        <h1 className="uppercase text-9xl font-bold text-[var(--secondary)] mb-16">
          Let’s Talk
        </h1>

        
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          <div>
            <h3 className="uppercase text-[var(--text-secondary)] font-semibold tracking-wide mb-3 border-b border-gray-700 pb-1 w-fit">
              Location
            </h3>
            <p className=" font-semibold text-[var(--text-secondary)]">
              56 Moo 9 Ladlumkaew-Pathumthani Rd.,<br />
              Pathum Thani 12140, Thailand
            </p>
          </div>

          
          <div className='ml-32'>
            <h3 className="uppercase text-[var(--text-secondary)] font-semibold  mb-3 border-b border-gray-700 pb-1 w-fit">
              Phone Call
            </h3>
            <p className="text-lg font-semibold text-[var(--text-secondary)]">+6624073460</p>
          </div>

          
          <div className='ml-20'>
            <h3 className="uppercase text-[var(--text-secondary)] font-semibold tracking-wide mb-3 border-b border-gray-700 pb-1 w-fit">
              Email Address
            </h3>
            <p className="text-lg font-semibold text-[var(--text-secondary)]">help24/7.info@robor.com</p>
            <p className="text-lg font-semibold text-[var(--text-secondary)]">info@robor.com</p>
          </div>
        </div>
        <div className='w-full h-[1px] bg-[var(--text-secondary)] mt-20'></div>
      </section>
<footer className="bg-black text-white py-2 pb-8 lg:justify-center md:px-16 lg:px-24 bg-[var(--primary)]">
  <div className="flex flex-col lg:flex-row lg:justify-around">
    {/* ===== Left: Newsletter Section ===== */}
    <div className="lg:w-1/3 mb-8 lg:mb-0 ">
      <h2 className="text-2xl font-semibold mb-3">Subscribe to Newsletter</h2>
      <p className="text-gray-400 mb-6 max-w-md">
        Get Monthly insights from founders around the globe. No spam – promise.
      </p>

      <form className="flex bg-[var(--secondary)] rounded-full overflow-hidden max-w-md h-14">
        <input
          type="email"
          placeholder="Enter your Email"
          className="flex-1 px-5 py-3 bg-transparent text-white outline-none placeholder-gray-500"
          required
        />
        <button
          type="submit"
          className="bg-[var(--button)] hover:bg-purple-700 px-6 py-3 font-medium rounded-full transition-all"
        >
          Subscribe
        </button>
      </form>
    </div>

    {/* ===== Middle: Footer Links ===== */}
    <div className="flex justify-between gap-8 lg:gap-12 flex-1 lg:justify-end">
      {footerSections.map((section, index) => (
        <div key={index}>
          <h3 className="text-lg font-semibold mb-3 relative after:block after:w-10 after:h-[2px] after:bg-purple-600 after:mt-1">
            {section.title}
          </h3>
          <ul className="space-y-2 text-gray-400">
            {section.links.map((link, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:text-white transition whitespace-nowrap"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* ===== Right: Social Section ===== */}
      <div>
        <h3 className="text-lg font-semibold mb-3 relative after:block after:w-10 after:h-[2px] after:bg-purple-600 after:mt-1">
          Get In Touch
        </h3>
        <p className="text-gray-400 mb-4">We suggest connecting apps</p>
        <div className="flex gap-3">
          {socials.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#111] hover:bg-purple-600 transition"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>

  <div className="border-t w-full border-gray-800 mt-12 text-[var(--text)] ">
    <div className="flex flex-col md:flex-row justify-between items-center pt-2 gap-4">
      <p className=" text-sm flex items-center gap-2">
        <span className="text-lg">©</span> Copyright 2025
        <span className="text-[var(--button)] font-medium">Robor</span>. All Rights Reserved.
      </p>

      <div className="flex gap-6 text-sm">
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
</footer>

    </>
  )
}

export default Footer
