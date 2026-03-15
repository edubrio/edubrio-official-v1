import React from "react";
import { FaArrowRight } from "react-icons/fa6";

interface CardProps {
  image: string;
  designation: string;
}

export default function CarrierCard({ image, designation }: CardProps) {
  return (
    <div className="bg-white border border-[#f0f0f0] rounded-xl overflow-hidden shadow-md md:w-65 mb-3">
      <img src={image} className="w-full h-30 object-cover rounded-md mb-4" />
      <div className="flex flex-row items-center justify-between px-2 pb-3">
        <p className="text-gray-600 font-bold text-sm">
          {designation}
        </p>
        <button className="font-medium flex justify-center items-center gap-x-2 text-xs bg-[#0b7077] text-white py-1 w-1/2 rounded-lg text-center ">
          View details <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
