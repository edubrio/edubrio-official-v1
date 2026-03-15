import { IExploreCard } from "@/main/Main";
import Link from "next/link";
import React from "react";
import { FaRegCircleRight } from "react-icons/fa6";

/**
 * ExploreCard component
 * @param {IExploreCard} data - The data for the card
 * @returns {JSX.Element} - The rendered card component
 */

export default function ExploreCard({ data }: { data: IExploreCard }) {
  return (
    <div
      key={data.id}
      className="md:w-1/3 mx-auto bg-white shadow-md rounded-xl border border-[#f4f4f4] overflow-hidden"
    >
      <div className="px-3 py-3">
        <div className="flex flex-row gap-x-2 border-b-1 pb-2 border-[#e0e0e0]">
          <img
            className="w-10 h-10 rounded-xl"
            src={data.image}
            alt={data.name}
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{data.name}</h2>
            <h5 className="text-xs font-normal text-[#71717A]">{data.dis}</h5>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-x-2 w-full justify-center items-center md:h-30">
          {data.courses.map((course, index) => (
            <div
              key={index}
              className="text-xs mb-1 font-normal flex justify-center items-center text-black py-1 px-2 bg-[#F4F4F5] border-2 rounded-lg border-[#D4D4D8]"
            >
              {course}
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-x-2 border-t-1 mt-4 border-[#e0e0e0]">
          <Link href="/app/courses">
            <h4 className="text-xs font-normal text-[#045CA4] mt-2 flex justify-center items-center gap-x-2">
              {data.bottom} <FaRegCircleRight />
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
}
