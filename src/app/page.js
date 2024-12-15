import Image from "next/image";
import MostPopular from "@/components/PopularBlogs";
import BlogCard from "@/components/BlogCard";
import FoundersHuntActions from "@/components/FoundersHuntAction";
import NewestBlogs from "@/components/NewestBlogs";
import Logo from "../../public/assets/logo.png";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0 mt-24 mx-4">
        <div>
          <MostPopular />
        </div>
        <div className="md:w-[70%] space-y-5">
          <div className="border-gray-300 border-[1px] rounded-xl p-2">
            <BlogCard orientation="vertical" />
          </div>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 border-gray-300 border-[1px] rounded-xl p-2 md:space-x-3 md:h-[60vh]">
            <BlogCard orientation="vertical" />
            <BlogCard orientation="vertical" />
          </div>
          <div className="hidden md:flex flex-col space-y-2  border-gray-300 border-[1px] rounded-xl p-2 ">
            <BlogCard orientation="horizontal" />
            <BlogCard orientation="horizontal" />
            <BlogCard orientation="horizontal" />
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <FoundersHuntActions />
          </div>
          <NewestBlogs />
        </div>
      </div>

      <div className="min-h-screen bg-[#202020] bg-opacity-60 max-w-screen-xl rounded-xl text-white md:p-4 mx-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
          {/* Remote Jobs Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Remote Jobs</h2>
            <p className="text-sm">Jobs for industrious Founders Hunt.</p>
            {Array(5)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-tranparent border-slate-300 border-2 cursor-pointer rounded-lg p-1"
                >
                <div className="border-slate-300 border-2 rounded-lg w-full p-3 hover:bg-[#343434] flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Job at Some Company
                    </h3>
                    <p>Job descriptions and stipend for it.</p>
                    <p>What Time</p>
                  </div>
                  <Image
                    src={Logo}
                    width={50}
                    height={50}
                    alt="Logo"
                    quality={100}
                    className="peer mx-auto "
                  />
                  </div>
                </div>
              ))}
          </div>

          {/* Partner Up Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Partner up</h2>
            <p className="text-sm">
              Meet your co-founders, start something new, or lend a helping
              hand.
            </p>
            {Array(9)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-[#202020] p-4 rounded-lg flex items-center"
                >
                  <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full mr-4">
                    {/* Placeholder for additional content */}
                  </div>
                  <p>Some partnership opportunity we have</p>
                </div>
              ))}
          </div>

          {/* Meetups Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Meetups</h2>
            <p className="text-sm">Local events hosted by your peers.</p>
            {Array(5)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-[#202020] hover:bg-[#343434] bg-opacity-70 p-4 rounded-lg flex items-center"
                >
                  <div className="text-center mr-4">
                    <p className="text-xl font-bold">27</p>
                    <p>JUL</p>
                  </div>
                  <div>
                    <p className="font-semibold">Title of the Event</p>
                    <p>Could be long</p>
                    <p>Remote</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
