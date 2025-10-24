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
      <section className="pt-30 pb-30 bg-[var(--secondary)]">
        <div className="flex justify-start items-center gap-3 ml-4">
          <div className="h-2 w-2 bg-[var(--text)] rounded-full"></div>
          <h5 className=" text-xl font-semibold text-[var(--text)] ">
            News & Blog
          </h5>
        </div>
        <div className="flex justify-between items-center pt-6 pl-4 ">
          <h1 className="font-bold text-4xl">Our Latest News & Blog</h1>
          <Link to="/blog">
            <button className="h-12 w-43 mr-8 flex justify-center items-center rounded-full gap-3  border-1 border-gray-400 hover:bg-[var(--text)] hover:text-[var(--primary)] cursor-pointer">
              View All Post <FaArrowRight />
            </button>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mt-8">
          {homeBlogs.map((blog, index) => (
            <div key={index} className="lg:w-104">
              <img
                src={blog.img}
                alt=""
                className="rounded-3xl transform-transition hover:scale-105 cursor-pointer duration-300"
              />
              <div className="flex items-center gap-2 pt-6">
                <h4 className="flex items-center gap-2 text-xl text-gray-500 hover:text-[#6D30FB] cursor-pointer">
                  <MdPersonOutline size={24} className="text-[#6D30FB]" />
                  {blog.author}
                </h4>

                <h4 className="flex items-center gap-2 text-xl text-gray-500 hover:text-[#6D30FB] cursor-pointer">
                  <CiCalendar size={24} className="text-[#6D30FB]" />
                  {blog.date}
                </h4>
              </div>
              <h2 className="text-2xl font-bold w-85 pt-6">{blog.title}</h2>
              <div className="cursor-pointer group flex flex-col  pt-6">
                <button className="border border-[var(--text-secondary)] hover:bg-[var(--text)] hover:text-[var(--secondary)] cursor-pointer transition-transform duration-500 flex justify-center items-center gap-2 w-40 h-14 rounded-full">
                  View All Posts <FaArrowRightLong />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Blog;
