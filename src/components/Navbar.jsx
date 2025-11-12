import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { links } from "../constants/index";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center py-7 px-4 bg-[var(--primary)] text-[var(--text)] relative">
      <Link to='/'><img src="logo.png" alt="Logo" className="h-8 md:h-auto" /></Link>

      {/* Desktop Navigation - unchanged for laptop */}
      <ul className="hidden lg:flex gap-8 bg-[var(--secondary)] rounded-full px-6 py-3">
        {links.map((item, index) => (
          <li key={index} className="text-lg">
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* Desktop Button - unchanged for laptop */}
      <Link to='/contact' className="hidden lg:block">
        <button
          type="button"
          className="flex w-auto px-6 h-12 rounded-full bg-[var(--button)] text-[var(--text)] items-center justify-center gap-2 cursor-pointer border-2 border-transparent hover:text-[var(--button)] hover:bg-white hover:border-white transition-all duration-300"
        >
          Contact Us
          <FaArrowRightLong className="mt-1" size={18} />
        </button>
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden text-[var(--text)] z-50"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[var(--primary)] border-t border-[var(--secondary)] shadow-lg">
          <ul className="flex flex-col py-4">
            {links.map((item, index) => (
              <li key={index} className="text-lg border-b border-[var(--secondary)] last:border-b-0">
                <Link 
                  to={item.path} 
                  className="block px-6 py-3 hover:bg-[var(--secondary)] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4">
            <Link to='/contact' onClick={() => setIsMenuOpen(false)}>
              <button
                type="button"
                className="flex w-50 px-6 h-12 rounded-full bg-[var(--button)] text-[var(--text)] items-center justify-center gap-2 cursor-pointer border-2 border-transparent hover:text-[var(--button)] hover:bg-white hover:border-white transition-all duration-300"
              >
                Contact Us
                <FaArrowRightLong className="mt-1" size={18} />
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;