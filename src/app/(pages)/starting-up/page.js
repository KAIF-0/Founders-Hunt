"use client";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import Arrow from "../../../../public/assets/arrow.png";

export default function Component() {
  const sectionRefs = Array(4)
    .fill()
    .map(() => useRef(null));

  const scrollToSection = (index) => {
    sectionRefs[index].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen text-white p-4 md:p-8 lg:p-12 my-16">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="mb-12 md:mb-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Over <span className="text-green-400">3232</span> indie hackers
                are turning their ideas into income.
              </h1>
              <div className="flex space-x-4">
                <Link href={"/join"} className="flex items-center">
                  <button className="mr-2 text-2xl bg-slate-200 text-black p-2 px-5 rounded-xl hover:mr-3 transition duration-300 hover:shadow-[0_0_15px_3px_rgba(255,255,255,1)]">
                    Get Started
                  </button>
                  <span>
                    <Image
                      src={Arrow}
                      width={30}
                      height={30}
                      alt="Logo"
                      quality={100}
                      className="peer"
                    />
                  </span>
                </Link>
                <Button variant="ghost">Learn more</Button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-[#d9d9d9] rounded-lg w-24 h-16 md:w-32 md:h-24"
                ></div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row">
          {/* Left Side Steps */}
          <div className="md:w-1/4 mb-8 md:mb-0 md:mr-8 md:flex hidden">
            <ul className="space-y-4">
              {Array(4)
                .fill()
                .map((_, index) => (
                  <li key={index}>
                    <Button
                      variant="ghost"
                      className="w-full justify-between bg-transparent hover:text-black group hover:bg-[#d9d9d9] text-white"
                      onClick={() => scrollToSection(index)}
                    >
                      <span className="mr-2 bg-[#d9d9d9] group-hover:bg-black group-hover:text-white px-3 py-2 rounded-lg text-black">{index+1}</span> See what&apos;s possible
                    </Button>
                  </li>
                ))}
            </ul>
          </div>

          {/* Right Side Content */}
          <div className="md:w-3/4">
            {Array(4)
              .fill()
              .map((_, index) => (
                <section key={index} ref={sectionRefs[index]} className="mb-12">
                    <div className="rounded-full w-full h-8 flex items-center font-bold mr-4 mb-4 md:mb-0">
                      STEP {index+1}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">
                      See what&apos;s possible
                    </h2>
                  <p className="mb-8 text-gray-400">
                    Browse thousands of projects and ideas from indie hackers
                    just like you. Get inspired and start building.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 rounded-xl bg-[#3f3f3f] bg-opacity-40">
                    {[...Array(18)].map((_, i) => (
                      <Card key={i} className="bg-transparent rounded-none">
                        <CardContent className="p-2 flex items-center gap-2">
                          <div className="bg-[#d9d9d9] w-16 h-16 rounded-md"></div>
                          <div>
                          <p className="text-sm text-[#d9d9d9]">Some Project</p>
                          <p className="text-xs text-gray-400">
                            Something thing
                          </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
