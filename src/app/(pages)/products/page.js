"use client";
import Image from "next/image";
import React from "react";
import Arrow from "../../../../public/assets/arrow.png";
import Link from "next/link";
import { Dropdown } from "flowbite-react";
import JoinFooterSection from "@/components/JoinFooterSection";

const Products = () => {
  return (
    <div className="min-h-screen text-white md:p-4 max-w-screen-xl mx-auto mt-20">
      <div className="mx-4">
        <h1 className="text-3xl font-bold text-center mb-4">
          Products by Founders Hunt
        </h1>
        <p className="text-center mb-6">
          Learn from the makers behind thousands of profitable businesses and
          side projects.
        </p>
        <div className="flex justify-center mb-10">
          <Link href={"/add-product"} className="flex items-center">
            <button className="mr-2 text-xl bg-slate-200 text-black p-3 rounded-xl hover:mr-4 transition duration-500 hover:shadow-[0_0_15px_3px_rgba(255,255,255,1)]">
              Add Your Product
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
            </span>{" "}
            {/* Right arrow symbol */}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {/* Filter Sidebar */}
          <div className="space-y-4 md:col-span-1">
            <div className="bg-[#202020] lg:pl-14 hover:bg-[#343434] bg-opacity-60 p-4 rounded-lg flex justify-between items-center w-full">
              <Dropdown
                label="Sort By"
                placement="right-start"
                className="text-white"
                color={"#202020"}
                size="lg"
              >
                <Dropdown.Item>Category 1</Dropdown.Item>
                <Dropdown.Item>Category 2</Dropdown.Item>
                <Dropdown.Item>Category 3</Dropdown.Item>
                <Dropdown.Item>Category 4</Dropdown.Item>
              </Dropdown>
            </div>
            {Array(8)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="lg:pl-14 bg-[#202020] hover:bg-[#343434] bg-opacity-60 p-4 rounded-lg flex justify-between items-center w-full"
                >
                  <Dropdown
                    label="Caegory"
                    placement="right-start"
                    color={"#202020"}
                    size="sm"
                  >
                    <Dropdown.Item>Category 1</Dropdown.Item>
                    <Dropdown.Item>Category 2</Dropdown.Item>
                    <Dropdown.Item>Category 3</Dropdown.Item>
                    <Dropdown.Item>Category 4</Dropdown.Item>
                  </Dropdown>
                </div>
              ))}
          </div>

          {/* Products Grid */}
          <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array(12)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-[#202020] hover:bg-[#343434] hover:border-2 hover:border-white transition duration-300 hover:shadow-[0_0_15px_3px_rgba(255,255,255,1)] relative hover:-translate-y-3 bg-opacity-60 p-4 rounded-lg"
                >
                  <Link href={`/products/${index}`}>
                    <div className="flex items-center mb-4">
                      <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full mx-auto mr-3">
                        {/* Placeholder for additional content */}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Product Title</h3>
                        <p className="text-gray-400">
                          Short description about the product
                        </p>
                      </div>
                    </div>
                    <div className="text-gray-200">
                      <p>$8,000/Month</p>
                      <p>Self-reported revenue</p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>

        <div className="text-left mt-10">
          <JoinFooterSection />
        </div>
      </div>
    </div>
  );
};

export default Products;
