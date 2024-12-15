import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Arrow from "../../public/assets/arrow.png";

const JoinFooterSection = () => {
  return (
    <><h1 className="text-2xl font-bold mb-4">
    Want free access to over 10,000 products?
  </h1>
  <p className="mb-6">
    Join the Indie Hacker cxommunity! We&apos;re a group of founders helping
    each other start profitable online businesses, and we&apos;d love to have
    you.
  </p>
  <Link href={"/join"} className="flex items-center">
    <button className="mr-2 text-3xl  bg-slate-200 text-black p-2 px-5 rounded-xl hover:mr-3 transition duration-300 hover:shadow-[0_0_15px_3px_rgba(255,255,255,1)]">
      Join
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
  </Link></>
  )
}

export default JoinFooterSection