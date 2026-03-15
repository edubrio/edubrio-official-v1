"use client";

import React from "react";
import { IBlogData } from "@/main/Main";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoCalendarNumberOutline } from "react-icons/io5";

export default function BlogCard({ data }: IBlogData) {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-sm mx-auto border border-[#f4f4f4]">
      <div className="relative">
        <img
          src={data?.imageUrl}
          alt="Card Image"
          className="w-full h-40 object-cover"
        />
        <div className="flex items-center">
          <span className="text-xs text-[#FFFFFF] bg-[#000000] flex justify-center items-center gap-x-1 px-2 py-1 rounded-3xl absolute right-2 bottom-2">
            <IoCalendarNumberOutline />
            {data?.date}
          </span>
        </div>
      </div>
      <div className="p-4 bg-black flex items-center justify-between">
        <p className="text-white text-xs mt-3 w-2/3">{data?.description}</p>
        <div className="mt-4 w-1/3 flex justify-end">
          <button
            disabled
            className="relative text-[#00468c] py-1 px-2 flex justify-center items-center gap-x-1 bg-[#006FEE] rounded-2xl text-xs font-semibold cursor-not-allowed"
          >
            Read more
            <span className="group relative">
              <IoIosArrowDroprightCircle className="opacity-50 group-hover:opacity-100 transition-opacity duration-200" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
