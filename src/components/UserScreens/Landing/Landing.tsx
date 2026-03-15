import React from "react";
import Explore from "@/components/Main/LandingSections/Explore";
import Hero from "@/components/Main/LandingSections/Hero";
import Partners from "@/components/Main/LandingSections/Partners";
import TopCourses from "@/components/Main/LandingSections/TopCourses";
import TopColleges from "@/components/Main/LandingSections/TopColleges";
import Registrations from "@/components/Main/LandingSections/Registrations";
import News from "@/components/Main/LandingSections/News";
import BlogsSection from "@/components/Main/LandingSections/BlogsSection";

export default function Landing() {
  return (
    <>
      <Hero />
      <TopCourses />
      <Registrations />
      <Explore />
      <Partners />
      <TopColleges />
      <News />
      <BlogsSection />
    </>
  );
}
