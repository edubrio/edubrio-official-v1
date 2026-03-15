import PlacementService from "@/components/UserScreens/Placement/Placement";
import React from "react";

export default function page() {
  return (
    <div className="max-w-7xl mx-auto pt-20">
      <h1 className="text-2xl my-4 font-bold text-center text-[#0b7077]">
        EduBrio Placement Cell
      </h1>
      <img src="/images/backgrounds/placement.png" className="w-full" />
      <div className="md:w-2/3 flex md:px-10 px-3">
        <PlacementService />
      </div>
    </div>
  );
}
