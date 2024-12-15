import React from "react";
import { IoMegaphoneOutline } from "react-icons/io5";
import { Button } from "./ui/button";
import { FaFeatherAlt } from "react-icons/fa";
import { LuMegaphone } from "react-icons/lu";

const FoundersHuntActions = () => {
  return (
    <div className=" text-white max-w-md mx-auto space-y-4">
      <div className="bg-[#202020] bg-opacity-70 flex p-4 rounded-xl">
        <div className=" flex flex-col items-center justify-between gap-2">
          <h2 className="text-xl font-bold">
            What to get delay updates from Founders Hunt ?
          </h2>
          <Button className="text-black bg-white w-full hover:bg-[#343434] hover:text-white rounded-full transition duration-300 ">
            Subscribe
          </Button>
        </div>
        <div className="text-8xl">
          <IoMegaphoneOutline />
        </div>
      </div>

      <div className="space-y-2 bg-[#202020] flex-col bg-opacity-60 flex p-4 rounded-xl">
        <button className="w-full bg-transparent gap-2 border-b-2 text-white py-2 px-4  hover:underline transition duration-300 flex items-center">
        <FaFeatherAlt className="text-2xl"/>
          Submit your post to Founders Hunt
        </button>

        <button className="w-full bg-transparent gap-3 text-white py-2 px-4 hover:underline transition duration-300 flex items-center">
        <LuMegaphone className="text-3xl"/>
          Advertise on Founders Hunt
        </button>
      </div>
    </div>
  );
};

export default FoundersHuntActions;
