"use client";
import React, { useState } from "react";
import { Card } from "flowbite-react";

const BlogCard = ({ orientation }) => {
  const [ori, setori] = useState(orientation);
  return (
    <div>
      {orientation == "horizontal" ? (
        <>
          <Card
            className="h-full w-full rounded-2xl bg-[#202020] bg-opacity-60 hover:bg-[#343434] border-0"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={
              "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg"
            }
            horizontal
          >
            <p className="text-xl font-bold tracking-tight text-white dark:text-white">
              Noteworthy technology acquisitions 2021
            </p>
            <p className="font-normal text-gray-300 line-clamp-2">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="flex justify-between text-xs text-gray-400">
              <span>Upvotes</span>
              <span>12/3/2024</span>
              <span>@User</span>
            </div>
          </Card>
        </>
      ) : (
        <>
          <Card
            className="h-full w-full rounded-2xl bg-[#202020] bg-opacity-70 hover:bg-[#343434] border-0"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={
              "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg"
            }
          >
            <p className="text-xl font-bold tracking-tight text-white dark:text-white">
              Noteworthy technology acquisitions 2021
            </p>
            <p className="font-normal text-gray-300 line-clamp-2">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="flex justify-between text-xs text-gray-400">
              <span>Upvotes</span>
              <span>12/3/2024</span>
              <span>@User</span>
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default BlogCard;
