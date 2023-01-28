/* eslint-disable @next/next/no-img-element */
import React from "react";
import SearchIcon from "assets/search.png";

export default function ExpandableSearch() {
  return (
    <div className="flex items-center bg-[#FFFDF6] w-fit border-2 rounded-full px-4 border-[#f3bc59]">
      <img src={SearchIcon.src} alt="search" className="h-5 cursor-pointer" />
      <input
        type="text"
        className="bg-transparent w-28 transition-all delay-150 duration-300 focus:w-[300px] px-2 py-1 outline-none rounded-full"
        name=""
        placeholder="Search"
      />
    </div>
  );
}
