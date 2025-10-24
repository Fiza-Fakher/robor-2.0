import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { MdPersonOutline } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { homeBlogs } from "../../constants";

function Blog() {
  return (
    <>
      <section className="pt-16 md:pt-20 lg:pt-30 pb-16 md:pb-20 lg:pb-30 bg-[var(--secondary)] px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex justify-start items-center gap-3">
            <div className="h-2 w-2 bg-[var(--text)] rounded-full"></div>
            <h5 className="text-lg md:text-xl font-semibold text-[var(--text)]">
              News & Blog
            </h5>
          </div>

          {/* Title and Button */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
              Our Latest News & Blog
            </h1>
            <Link to="/blog">
              <button className="h-12 w-auto px-6 flex justify-center items-center rounded-full gap-3 border-1 border-gray-400 hover:bg-[var(--text)] hover:text-[var(--primary)] cursor-pointer transition-all duration-300 whitespace-nowrap">
                View All Post <FaArrowRight />
              </button>
            </Link>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {homeBlogs.map((blog, index) => (
              <div key={index} className="w-full">
                {/* Blog Image */}
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-64 md:h-72 object-cover rounded-3xl transform transition-transform hover:scale-105 cursor-pointer duration-300"
                  />
                </div>

                {/* Author and Date */}
                <div className="flex flex-wrap items-center gap-4 pt-6">
                  <h4 className="flex items-center gap-2 text-base md:text-lg text-gray-500 hover:text-[#6D30FB] cursor-pointer transition-colors">
                    <MdPersonOutline size={20} className="text-[#6D30FB]" />
                    {blog.author}
                  </h4>

                  <h4 className="flex items-center gap-2 text-base md:text-lg text-gray-500 hover:text-[#6D30FB] cursor-pointer transition-colors">
                    <CiCalendar size={20} className="text-[#6D30FB]" />
                    {blog.date}
                  </h4>
                </div>

                {/* Blog Title */}
                <h2 className="text-xl md:text-2xl font-bold pt-6 line-clamp-2">
                  {blog.title}
                </h2>

                {/* View Button */}
                <div className="pt-6">
                  <button className="border border-[var(--text-secondary)] hover:bg-[var(--text)] hover:text-[var(--secondary)] cursor-pointer transition-all duration-300 flex justify-center items-center gap-2 w-full sm:w-auto px-6 h-12 md:h-14 rounded-full">
                    View All Posts <FaArrowRightLong />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;