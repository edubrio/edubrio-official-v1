import React from "react";
import { Row } from "antd";
import { BlogCardProps } from "@/main/Main";
import { smapleBlogData } from "@/constants/blog";
import BlogCard from "@/components/Main/LandingCards/Blog";
import Typography from "@/components/General/Typography";
import { FaArrowCircleRight } from "react-icons/fa";

export default function BlogsSection() {
  return (
    <div className="w-full max-w-7xl mx-auto md:px-10 px-3 md:mt-20 mt-10 mb-10">
      <Typography name="Blogs" />
      <Row className="w-full flex mt-10 flex-row gap-x-2 gap-y-2">
        {smapleBlogData?.map((item: BlogCardProps, index: number) => (
          <BlogCard key={index} data={item} />
        ))}
      </Row>
      <div className="w-full flex justify-center items-center mt-10">
        <button
          disabled
          className="group relative flex justify-center items-center border border-[#0b7077] text-[#0b7077] py-2 px-5 rounded-lg gap-x-2 bg-gray-100 opacity-60 cursor-not-allowed"
        >
          View all
          <FaArrowCircleRight className="text-[#0b7077] opacity-50 group-hover:opacity-70 transition-opacity duration-200" />
        </button>
      </div>
    </div>
  );
}
