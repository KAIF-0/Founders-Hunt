// components/MostPopular.jsx
import React from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";
import Logo from "../../public/assets/logo.png"

const NewestBlogs = () => {
  // Example data for posts
  const posts = [
    {
      id: 1,
      title: "Title of the mostly popular post which will have a long tile.",
      likes: 77,
      comments: 34,
    },
    {
      id: 2,
      title: "Title of the mostly popular post which will have a long tile.",
      likes: 77,
      comments: 34,
    },
    {
      id: 3,
      title: "Title of the mostly popular post which will have a long tile.",
      likes: 77,
      comments: 34,
    },
    {
      id: 4,
      title: "Title of the mostly popular post which will have a long tile.",
      likes: 77,
      comments: 34,
    },
    {
      id: 5,
      title: "Title of the mostly popular post which will have a long tile.",
      likes: 77,
      comments: 34,
    },
    {
      id: 6,
      title: "Title of the mostly popular post which will have a long tile.",
      likes: 77,
      comments: 34,
    },
    {
      id: 7,
      title: "Title of the mostly popular post which will have a long tile.",
      likes: 77,
      comments: 34,
    },
    {
      id: 8,
      title: "Title of the mostly popular post which will have a long tile.",
      likes: 77,
      comments: 34,
    }
  ];

  return (
    <div className="bg-[#202020] bg-opacity-60  p-4 text-white rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Newest</h2>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="border-b flex items-center transition duration-300 border-gray-500 rounded-xl hover:bg-[#343434] p-2 "
          >
            <div>
              <h3 className="text-lg">{post.title}</h3>
              <div className="flex space-x-4 my-2 text-gray-300 text-sm justify-around">
                <div className="flex gap-1 items-center">
                  <FaHeart />
                  <span className="text-xs">{post.likes}</span>
                </div>
                <div className="flex gap-1 items-center">
                  <RiMessage2Line />
                  <span className="text-xs">{post.comments}</span>
                </div>
                <div className="flex gap-1 items-center">
                  <span className="text-xs">@User</span>
                </div>
              </div>
            </div>
            <Image
              src={Logo}
              width={50}
              height={50}
              alt="Logo"
              quality={100}
              className="peer mx-auto "
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewestBlogs;
