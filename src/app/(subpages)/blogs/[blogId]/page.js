"use client";
import Image from "next/image";
import Raw from "../../../../../public/assets/raw.png";
import Arrow from "../../../../../public/assets/arrow.png";
import BackButton from "../../../../../public/assets/back button.png";
import { useRouter } from "next/navigation";

export default function BlogReview() {
  const router = useRouter();
  return (
    <div className="min-h-screen p-8">
      {/* Container */}
      <div className="max-w-screen-lg mx-auto bg-[#202020] bg-opacity-80 text-white rounded-2xl shadow-lg">
        {/* Header */}

        <div className="bg-[#343434] p-8 w-full rounded-2xl flex space-x-3">
          <button
            onClick={() => router.back()}
            className="text-white hidden md:flex"
          >
            <Image
              src={BackButton}
              width={70}
              height={70}
              alt="Back Button"
              quality={100}
            />
          </button>
          <div>
            <h1 className="text-3xl font-bold mb-4">
              Title of the blog which is going to be long because I have to add
              something here to fill this up
            </h1>
            <p className="text-gray-400 mb-4">By user_84</p>
          </div>
        </div>

        {/* Image */}
        <div className="my-6">
          <Image
            src={Raw} // Replace with your image path
            alt="Blog Image"
            width={600}
            height={300}
            className="rounded-md"
          />
        </div>

        <div className="p-8">
          <p>
            Said hurricanes are notoriously tough on trees. Wild poison bridges
            rage near to spark while buckling roadways disrupt the century of
            lights before heading straight through homes and people Said
            hurricanes are notoriously tough on trees. Wild poison bridges rage
            near to spark while buckling roadways disrupt the century of lights
            before heading straight through homes and people Said hurricanes are
            notoriously tough on trees. Wild poison bridges rage near to spark
            while buckling roadways disrupt the century of lights before heading
            straight through homes and people Said hurricanes are notoriously
            tough on trees. Wild poison bridges rage near to spark while
            buckling roadways disrupt the century of lights before heading
            straight through homes and people Said hurricanes are notoriously
            tough on trees. Wild poison bridges rage near to spark while
            buckling roadways disrupt the century of lights before heading
            straight through homes and people Said hurricanes are notoriously
            tough on trees. Wild poison bridges rage near to spark while
            buckling roadways disrupt the century of lights before heading
            straight through homes and people Said hurricanes are notoriously
            tough on trees. Wild poison bridges rage near to spark while
            buckling roadways disrupt the century of lights before heading
            straight through homes and people Said hurricanes are notoriously
            tough on trees. Wild poison bridges rage near to spark while
            buckling roadways disrupt the century of lights before heading
            straight through homes and people Said hurricanes are notoriously
            tough on trees. Wild poison bridges rage near to spark while
            buckling roadways disrupt the century of lights before heading
            straight through homes and people Said hurricanes are notoriously
            tough on trees. Wild poison bridges rage near to spark while
            buckling roadways disrupt the century of lights before heading
            straight through homes and people ...
          </p>
          <p>
            After that, someone will visit the back stage and have some thoughts
            and ideas. At the end, I hope to receive a prize for my input ...
          </p>
          {/* Add more paragraphs as needed */}
        </div>

        {/* Comments Section */}
      </div>

      <div className="mt-8 max-w-screen-md mx-auto space-y-4 flex flex-col items-start">
        <textarea
          className="w-full p-4 bg-[#343434] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          rows="4"
          placeholder="Write your comment..."
        ></textarea>
        <div className="flex items-center">
          <button className="mr-2 text-3xl bg-slate-200 text-black px-5 py-2 rounded-xl hover:mr-4 transition duration-500 hover:shadow-[0_0_15px_3px_rgba(255,255,255,1)]">
            Post
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
        </div>

        {/* UserComments */}
        <div className="flex items-center max-w-screen-md  mb-4">
          <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full mx-auto mr-3">
            {/* Placeholder for additional content */}
          </div>
          <div>
            <h3 className="text-lg text-gray-400 font-semibold">@user</h3>
            <h3 className="text-lg text-gray-400 font-semibold">02/08/2990</h3>
            <p className="text-white">
              Short description about the product comment in comment section...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
