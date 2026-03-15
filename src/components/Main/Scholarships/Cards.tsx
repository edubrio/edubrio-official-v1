import React from "react";
import { FaArrowRight } from "react-icons/fa6";

interface CardProps {
  image: string;
  description: string;
}

export default function CardComponent({ image, description }: CardProps) {
  return (
    <div className="bg-white p-2 border border-[#f0f0f0] rounded-lg shadow-md md:w-60 mb-3">
      <img src={image} className="w-full h-25 object-cover rounded-md mb-4" />
      <p className="text-gray-600 font-bold text-sm mb-4 h-16">{description}</p>
      <button className="font-medium flex justify-center items-center gap-x-2 text-xs bg-[#0b7077] text-white py-1 w-full rounded-lg text-center ">
        View details <FaArrowRight />
      </button>
    </div>
  );
}
