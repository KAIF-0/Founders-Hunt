"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Home from "../../../../../public/assets/home.png";
import Facebok from "../../../../../public/assets/facebook.png";
import Twitter from "../../../../../public/assets/twitter.png";
import BackButton from "../../../../../public/assets/back button.png";
import JoinFooterSection from "@/components/JoinFooterSection";
import { useRouter } from "next/navigation";

const ProductCard = () => {
    const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center mt-24 mx-5">
      <div className="flex">
        <button onClick={()=>router.back()} className="text-white hidden md:flex relative right-16">
          <Image
            src={BackButton}
            width={70}
            height={70}
            alt="Back Button"
            quality={100}
          />
        </button>
        <div className="bg-[#202020] bg-opacity-80 text-white rounded-3xl overflow-hidden shadow-lg w-full max-w-screen-lg">
          <div className="flex flex-col md:flex-row md:justify-between md:m-16">
            <div className="flex items-center p-6">
              <div className="rounded-full bg-gray-200 h-24 w-24 flex-shrink-0"></div>
              <div className="ml-6 md:max-w-xl">
                <h2 className="text-5xl font-bold">Product Title</h2>
                <p className="mt-2 text-sm text-gray-400">
                  Here comes some description about the product above which
                  could be long but that depends on the owner.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 md:gap-5 gap-2 p-3">
              {Array(8)
                .fill(null)
                .map((_, index) => (
                  <button
                    key={index}
                    className="bg-[#343434] w-fit  text-gray-400 p-2 hover:text-white hover:border-white border-2 border-[#343434] rounded-lg py-2"
                  >
                    Property
                  </button>
                ))}
            </div>
          </div>

          <div className="flex justify-around p-3 items-center mx-auto text-white bg-[#343434] max-h-32">
            <Link href="#">
              <div className="flex flex-col justify-center items-center hover:text-2xl focus:border-white border-[#343434] p-2 rounded-xl border-2 transition-all duration-500">
                <span className="">Posts</span>
                <p className="text-6xl">7</p>
              </div>
            </Link>
            <Link href="#">
              <div className="flex flex-col md:py-5 justify-center items-center hover:text-2xl focus:border-white border-[#343434] p-2 rounded-xl border-2 transition-all duration-500">
                <span className="">Revenue</span>
                <p className="text-3xl">$8.5K/-</p>
              </div>
            </Link>
            <Link href="#">
              <div className="flex flex-col gap-2 justify-center items-center hover:text-2xl border-[#343434] p-2 rounded-xl border-2 transition-all duration-500">
                <span className="">Website</span>
                <Image
                  src={Home}
                  width={60}
                  height={60}
                  alt="Logo"
                  quality={100}
                  className="peer group-hover:opacity-0 duration-1000"
                />
              </div>
            </Link>
            <Link href="#">
              <div className="flex flex-col  justify-center items-center hover:text-2xl border-[#343434] p-2 rounded-xl border-2 transition-all duration-500">
                <span className="">Twitter</span>
                <Image
                  src={Twitter}
                  width={60}
                  height={60}
                  alt="Logo"
                  quality={100}
                  className="peer group-hover:opacity-0 duration-1000"
                />
              </div>
            </Link>
            <Link href="#">
              <div className="hidden md:flex flex-col  justify-center items-center hover:text-2xl border-[#343434] p-2 rounded-xl border-2 transition-all duration-500">
                <span className="">Facebook</span>
                <Image
                  src={Facebok}
                  width={60}
                  height={60}
                  alt="Logo"
                  quality={100}
                  className="peer group-hover:opacity-0 duration-1000"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-5 p-4 max-w-screen-lg">
        <div className="md:w-2/3">
          <div className="relative pl-10">
            {/* Timeline indicator */}
            <div className="absolute left-[6px] top-0 bottom-0 w-1 bg-gray-300 md:top-4 md:left-[19px] md:w-0.5"></div>
            {Array(4)
              .fill("")
              .map((_, index) => (
                <div className="mb-8" key={index}>
                  <div className="absolute left-0 w-4 h-4 bg-white border-2 border-gray-300 rounded-full md:left-3"></div>
                  <div className="ml-6 md:ml-10">
                    <div className="p-4 bg-[#202020] bg-opacity-80 rounded-xl">
                      <h3 className="text-lg font-semibold text-white">
                        Date of Change
                      </h3>
                      <p className="mt-2 text-white">
                        Hi Everyone, We are thrilled to work with so many
                        distinguished training providers, educators, and
                        education material creators from around the world. As
                        our global community continues to thrive, we prioritized
                        releasing a new feature: the ability to customize texts
                        and content in buttons, confirmation emails, and login
                        screens during the login process via magic-links.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0 md:pl-8">
          <div className="p-4 rounded-xl shadow-md text-white">
            <h3 className="text-xl font-semibold">About</h3>
            <p className="mt-2">
              Very very detailed description of the product which is just going
              to be some non sense that they are going to paste to make their
              product to look good and to sell it. Some random assortment of
              words and non sense to make their product look good and to sell it
              more they are going to mention some benefits for the user.
            </p>
          </div>
          <div className="p-4 mt-4 rounded-xl shadow-md text-white">
            <h3 className="text-xl font-semibold">Developed By</h3>
            <div className="mt-2">
              <div className="flex items-center mt-2">
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <div className="ml-4">
                  <p>Main User</p>
                  <p className="text-sm">Position</p>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <div className="ml-4">
                  <p>User</p>
                  <p className="text-sm">Position</p>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <div className="ml-4">
                  <p>User</p>
                  <p className="text-sm">Position</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-left mt-10 text-white">
        <JoinFooterSection />
      </div>
    </div>
  );
};

export default ProductCard;
