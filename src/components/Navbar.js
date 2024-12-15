"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-b from-gray-400 to-black p-4 border-white border-b-4 rounded-b-3xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Hamburger Menu for Mobile View */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Logo and Name */}
        <div className="flex flex-col mx-auto items-center md:hidden">
          <Image src={Logo} width={50} height={50} alt="Logo" quality={100} />
          <span className="ml-2 text-white font-bold">Founders Hunt</span>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex justify-center items-center space-x-12 mx-auto text-white">
        <Link href="/starting-up">
            <div
              className={`${
                pathname.startsWith('/starting-up') ? "bg-black " : ""
              } text-lg hover:border-white border-transparent border-2 rounded p-2 transition duration-300`}
            >
              Starting Up
            </div>
          </Link>
          <Link href="/community">
            <div
              className={`${
                pathname.startsWith('/community') ? "bg-black " : ""
              } text-lg hover:border-white border-transparent border-2 rounded p-2 transition duration-300`}
            >
              Community
            </div>
          </Link>
          <Link href="/">
            <section class="flex justify-center items-center">
              <button
                href="/"
                class="group flex justify-center rounded-md drop-shadow-xl from-gray-800 to-black text-white font-semibold hover:-translate-y-4 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
              >
                <Image
                  src={Logo}
                  width={70}
                  height={70}
                  alt="Logo"
                  quality={100}
                  className="peer"
                />
                <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-lg group-hover:translate-y-16 duration-700">
                  Founders Hunt
                </span>
              </button>
            </section>
          </Link>
          <Link href="/products">
            <div
              className={`${
                pathname.startsWith('/products') ? "bg-black " : ""
              } text-lg hover:border-white border-transparent border-2 rounded p-2 hover:text-white transition duration-300`}
            >
              Products
            </div>
          </Link>
          <Link href="/funding">
            <div
              className={`${
                pathname.startsWith('/funding') ? "bg-black " : ""
              } text-lg hover:border-white border-transparent border-2 rounded p-2 hover:text-white transition duration-300`}
            >
              Funding
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link href="/starting-up">
            <div className="text-white hover:border-white border-transparent border-2 rounded p-2 transition duration-300">
            Starting Up
            </div>
          </Link>
          <Link href="/community">
            <div className="text-white hover:border-white border-transparent border-2 rounded p-2 transition duration-300">
              Community
            </div>
          </Link>
          <Link href="/products">
            <div className="text-white hover:border-white border-transparent border-2 rounded p-2 hover:text-white transition duration-300">
              Products
            </div>
          </Link>
          <Link href="/funding">
            <div className="text-white hover:border-white border-transparent border-2 rounded p-2 hover:text-white transition duration-300">
              Funding
            </div>
          </Link>
          <div>
            <button className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full w-full">
              Join
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
