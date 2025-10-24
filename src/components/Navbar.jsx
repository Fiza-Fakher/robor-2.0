import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { links,pages } from "../constants/index";

function Navbar() {
  

  return (
    <nav className="flex justify-between items-center py-7 px-4 bg-[var(--primary)] text-[var(--text)] relative">
      <img src="logo.svg" alt="Logo" />

      <ul className="flex gap-8 bg-[var(--secondary)] rounded-full px-6 py-3">
        {links.map((item, index) => (
          <li key={index} className="relative group text-lg">
            {item.name === "Pages" ? (
              <>
                <span className="cursor-pointer">{item.name}</span>

                <ul className="absolute top-full left-0 mt-2 bg-[var(--secondary)] text-[var(--text)] rounded-lg shadow-lg p-3 space-y-2 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {pages.map((page, i) => (
                    <li key={i}>
                      <Link
                        to={page.path}
                        className="block hover:text-[var(--button)]"
                      >
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link to={item.path}>{item.name}</Link>
            )}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="hidden md:flex w-auto px-6 h-12 rounded-full bg-[var(--button)] text-[var(--text)] items-center justify-center gap-2 cursor-pointer border-2 border-transparent hover:text-[var(--button)] hover:bg-white hover:border-white transition-all duration-300"
      >
        Get Started Now
        <FaArrowRightLong className="mt-1" size={18} />
      </button>
    </nav>
  );
}

export default Navbar;
