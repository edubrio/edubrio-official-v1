"use client";

import React, { useEffect, useState } from "react";
import { Row } from "antd";
import { useData } from "@/hooks/useData";
import { CoursesOptions } from "@/constants/options";
import { Course, CourseExploerCardProps } from "@/main/Main";
import Typography from "@/components/General/Typography";
import SegmentedControl from "@/components/General/SegemetedControl";
import CourseExloperCards from "@/components/General/CoursesCard";
import convertData from "@/Utils/JSONConverter";
import Loader from "@/components/General/Loader";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

const sheetId = "1wRJXotgsLPGPKmy1I-YoZNJzOPK8-FiJMtekYhX2e34";
const apiKey = "AIzaSyA8NPgaAJM9nxLUhwNfFFfy4x0TRkAO0qY";
const sheetRange = "Sheet1!A1:15";

export default function TopCourses() {
  const [fullData, setFullData] = useState<Course[]>([]);
  const [displayData, setDisplayData] = useState<Course[]>([]);

  const { data, error, loading } = useData(sheetId, apiKey, sheetRange);

  useEffect(() => {
    setFullData(convertData(data));
    setDisplayData(convertData(data).slice(0, 8));
  }, [data]);

  const onChangeHandler = (selectedValue: string) => {
    if (selectedValue === "all") {
      setDisplayData(fullData.slice(0, 8));
    } else {
      const filtered = fullData.filter(
        (course) => course.category === selectedValue
      ).slice(0, 8);
      setDisplayData(filtered);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto md:mt-20 md:px-10 px-3 mb-10 min-h-[400px]">
      <Typography name="Top Courses" />
      <SegmentedControl onChange={onChangeHandler} options={CoursesOptions} />

      {loading && <Loader loading />}

      <Row className="w-full mt-6 gap-y-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
        {displayData.map((item: any, idx: number) => (
          <CourseExloperCards key={idx} data={item} />
        ))}
      </Row>
      <div className="flex justify-center mt-10">
        <Link className="mx-auto" href="/app/courses">
          <button
            className="group flex cursor-pointer justify-center items-center border border-[#0b7077] text-[#0b7077] py-2 px-5 rounded-lg gap-x-2 hover:bg-[#0b7077] hover:text-white transition-colors duration-200"
          >
            View All Courses
            <FaArrowCircleRight className="transform transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </Link>
      </div>
    </div>
  );
}
