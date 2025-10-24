import React from 'react'
import { FaUser, FaEnvelope, FaPhone, FaInfoCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

function Form() {
  return (
    <section className='flex justify-center items-center text-[var(--text)] bg-[var(--primary)] pb-16'>
      <div className='w-[90%] flex flex-col lg:flex-col items-center justify-center gap-6 mt-20 rounded-xl bg-[var(--secondary)]'>
        
        
        <img 
          src="/contact/contact.png" 
          alt="Contact" 
          className='rounded-xl  w-[98%] h-130 lg:mt-4' 
        />

        
        <div className="flex flex-col justify-center items-center py-16 px-4 w-full">
      <h1 className="text-5xl font-bold mb-10 text-center">Get In Touch!</h1>

      <form className="w-full max-w-5xl bg-[var(--secondary)] p-8 rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="flex items-center border rounded-full px-5 py-3 bg-[var(--secondary)] border-gray-300">
            <input required
              type="text"
              placeholder="Your name"
              className="flex-1 outline-none bg-[var(--secondary)] text-[var(--text)] placeholder-gray-500"
            />
            <FaUser className="text-[var(--text-secondary)] text-xl" />
          </div>

          
          <div className="flex items-center border rounded-full px-5 py-3 bg-[var(--secondary)] border-[var(--text-secondary)]">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 outline-none bg-[var(--secondary)] text-gray-700 placeholder-gray-500"
            />
            <FaEnvelope className="text-[var(--text-secondary)] text-xl" />
          </div>

          
          <div className="flex items-center border rounded-full px-5 py-3 bg-[var(--secondary)] border-gray-300">
            <input
              type="tel"
              placeholder="Phone Number"
              className="flex-1 outline-none bg-[var(--secondary)] text-[var(--text-secondary)] placeholder-gray-500"
            />
            <FaPhone className="text-[var(--text-secondary)] text-xl" />
          </div>

          
          <div className="flex items-center border rounded-full px-5 py-3 bg-[var(--secondary)] border-gray-300 text-gray-700">
            <select
              className="flex-1 outline-none bg-[var(--secondary)] text-[var(--text-seconadry)] appearance-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select Subject
              </option>
              <option>Web Development</option>
              <option>Brand Marketing</option>
              <option>UI/UX Designing</option>
              <option>Digital Marketing</option>
            </select>
            <MdKeyboardArrowDown className="text-gray-500 text-2xl" />
          </div>
        </div>

        
        <div className="flex items-center border rounded-full px-5 py-3 mt-6 bg-[var(--secondary)] border-gray-300">
          <input
            type="text"
            placeholder="Company name"
            className="flex-1 outline-none bg-[var(--secondary)] text-[var(--text-secondary)] placeholder-gray-500"
          />
          <FaInfoCircle className="text-[var(--text-secondary)] text-xl" />
        </div>

        
        <div className="border rounded-3xl px-5 py-3 mt-6 bg-[var(--secondary)] border-gray-300">
          <textarea
            rows="4"
            placeholder="How can we help you? Feel free to get in touch!*"
            className="w-full outline-none bg-[var(--secondary)] text-[var(--text-secondary)] placeholder-gray-500"
            required
          ></textarea>
        </div>

        
        <div className="mt-8 text-center">
          <button
            type="submit"
            className="bg-[var(--button)] text-white px-10 py-3 hover:border-2 hover:border-white rounded-full transition hover:bg-[var(--text)] hover:text-[var(--primary)] cursor-pointer"
          >
            Submit Message
          </button>
        </div>
      </form>
    </div>
      </div>
    </section>
  )
}

export default Form
