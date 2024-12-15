"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Component() {
  const [activeButton, setActiveButton] = useState("public");

  return (
    <div className="flex flex-col md:flex-row text-white min-h-screen max-w-screen-lg mx-auto my-16 gap-7 px-5">
      {/* Sidebar */}
      <div className="w-full md:max-w-max bg-[#d2d2d2] text-black p-7 rounded-xl h-fit mx-auto ">
        <h2 className="text-2xl font-bold mb-4">All Community</h2>
        <nav>
          {[
            "Users",
            "Companies",
            "General",
            "New Founders",
            "Celebrations",
            "Stories",
            "Staff",
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="block py-2 px-4 text-lg hover:bg-zinc-900 hover:text-white border-b-black border-2 border-t-transparent border-r-transparent border-l-transparent"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 rounded-xl bg-[#161616] bg-opacity-70">
        <div className="mb-4 gap-4 flex flex-col rounded-xl p-4 bg-[#232323]">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Top Discussions</h1>
            <select className="bg-[#d9d9d9] text-black p-2 rounded">
              <option>Sort By</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="relative inline-flexrounded-lg flex justify-evenly w-full">
              <button
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeButton === "public"
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
                onClick={() => setActiveButton("public")}
              >
                Public Posts
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeButton === "your"
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
                onClick={() => setActiveButton("your")}
              >
                Your Posts
              </button>
              <div
                className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ease-out ${
                  activeButton === "public" ? "w-1/2" : "w-1/2 translate-x-full"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Discussion list */}
        <div className="space-y-4 m-4">
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className="bg-[#3f3f3f] p-4 rounded-lg flex items-start space-x-4"
            >
              <div className="w-12 h-12 bg-[#d9d9d9] rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="font-bold">Some Topic about the post</h3>
                <p className="text-zinc-400 text-sm">
                  This is a brief description of the topic. It provides a quick
                  overview of what the discussion is about.
                </p>
                <div className="mt-2 text-xs text-zinc-500">
                  <span>23 comments</span>
                  <span className="ml-2">5 hours ago</span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-sm">Categories:</p>
                <span className="text-zinc-500 border-2 border-[#d9d9d9] px-1 rounded-md bg-[#4f4f4f] ">
                  Ideas
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
