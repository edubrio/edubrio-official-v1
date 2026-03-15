import Typography from "@/components/General/Typography";
import SponsorsCarousel from "@/components/Main/LandingCards/SponsorsCarousel";
import React from "react";

export default function Partners() {
  return (
    <div className="w-full max-w-7xl mx-auto md:px-10 px-3 md:mt-20 mt-10 mb-10">
      <Typography name="Our Partners" />
      <SponsorsCarousel />
    </div>
  );
}
