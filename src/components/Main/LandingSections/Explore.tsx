import React from "react";
import Typography from "@/components/General/Typography";
import ExploreCard from "@/components/Main/LandingCards/ExploreCard";
import { exportData } from "@/constants/explore";

export default function Explore() {
  return (
    <div className="w-full max-w-7xl mx-auto md:px-10 px-3 mt-20 mb-10">
      <Typography name="Explore Programs" />
      <div className="w-full flex md:mt-10 md:gap-x-4 md:space-y-0 space-y-4 md:px-10 px-2 md:flex-row flex-col">
        {exportData?.map((data, index) => (
          <ExploreCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
}
