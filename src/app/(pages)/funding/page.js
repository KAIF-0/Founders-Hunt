"use client";
import Image from "next/image";
import Arrow from "../../../../public/assets/arrow.png";
import BG from "../../../../public/assets/bg-image.png";
import { useState } from "react";
import Link from "next/link";

export default function FundingIdeas() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen text-white p-6">
      {/* Header */}
      <div
        style={{
          backgroundImage: `url(${BG.src})`,
          backgroundPosition: "center",
        }}
        className="bg-[#202020] bg-opacity-60 text-center p-10 text-white rounded-3xl overflow-hidden w-full max-w-screen-lg mx-auto my-10 "
      >
        <h1 className="text-4xl font-bold mb-4">Funding For Ideas</h1>
        <p className="text-gray-400 text-lg">
          A database of reports on successful startup ideas, tailored for
          Founders Hunt. Some more things written passing Founders Hunt who
          values ideas more than anything and would love to receive funding from
          you.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row max-w-screen-lg mx-auto">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 mb-8 lg:mb-0 lg:mr-8">
          {/* Search bar */}
          <div className="mb-6">
            <form className="w-full flex">
              <input
                type="search"
                placeholder="Search"
                className="flex-grow p-2 text-gray-900 rounded-l-lg focus:outline-none"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <button
                type="submit"
                className="p-2 bg-black text-white rounded-r-lg flex items-center justify-center"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <Image
                  src={Arrow}
                  width={30}
                  height={30}
                  alt="Logo"
                  quality={100}
                  className="peer"
                />
              </button>
            </form>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Category</h2>
            <div className="space-y-4">
              {[
                "Tech",
                "Health",
                "Electronics",
                "Category",
                "Category",
                "Category",
              ].map((category, index) => (
                <button
                  key={index}
                  className="w-full py-2 px-4 text-black text-xl hover:bg-black hover:text-white hover:border-white border-2 bg-slate-100 rounded-lg transition"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Latest Ideas */}
          <div className="bg-[#202020] bg-opacity-60 rounded-xl p-2">
            <h2 className="text-2xl font-bold mb-4">Latest Ideas</h2>
            <ul className="space-y-4">
              {new Array(6).fill(0).map((_, index) => (
                <li
                  key={index}
                  className="flex items-center md:space-x-3 transition duration-300 rounded-xl hover:bg-[#343434] p-2 "
                >
                  <div>
                    <h3 className="text-lg line-clamp-1">
                      Idea about something
                    </h3>
                    <div className="flex space-x-4 my-2 text-gray-300 text-sm justify-around">
                      <div className="flex gap-1 items-center">
                        <span className="text-xs">Category</span>
                      </div>
                      <div className="flex gap-1 items-center">
                        <span className="text-xs">Dates</span>
                      </div>
                      <div className="flex gap-1 items-center">
                        <span className="text-xs">Revenue</span>
                      </div>
                    </div>
                  </div>
                  <Image
                    src={Arrow}
                    width={50}
                    height={50}
                    alt="Logo"
                    quality={100}
                    className="peer mx-auto"
                  />
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Ideas Grid */}
        <main className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {new Array(10).fill(0).map((_, index) => (
              <div
                key={index}
                className="bg-[#202020] hover:bg-[#343434] transition duration-300 relative hover:translate-y-3 bg-opacity-60 p-4 rounded-xl"
              >
                <Link href={`/ideas/${index}`}>
                <h3 className="text-xl font-semibold mb-2">
                  Idea Title which could be long as well
                </h3>
                <p className="text-gray-400 mb-4">
                  Some great idea description that will stop being read by the
                  fourth or fifth line.
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span>Company</span>
                  <span>Category</span>
                  <span>$100K</span>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
