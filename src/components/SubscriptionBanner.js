"use client";
import React, { useState } from "react";
import Arrow from "../../public/assets/arrow.png";
import Image from "next/image";

const SubscriptionBanner = () => {
  const [email, setemail] = useState("");

  
  return (
    <div className="flex justify-center items-center bg-slate-200 rounded-2xl bg-opacity-20">
      <div className="relative flex flex-col items-center  text-white p-6 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-xl font-bold mb-4">
          Stay informed as an Founders Hunt
        </h2>
        <p className="mb-4">
          Market insights that help you start and grow your business.
        </p>
        <form className="w-full flex">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="flex-grow p-2 text-gray-900 rounded-l-lg focus:outline-none"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <button
            type="submit"
            className="p-2 bg-black text-white rounded-r-lg flex items-center justify-center"
            onClick={(e)=>{
              e.preventDefault()
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
    </div>
  );
};

export default SubscriptionBanner;
