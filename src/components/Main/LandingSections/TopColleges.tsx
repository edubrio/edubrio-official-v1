"use client";

import { Row } from "antd";
import { useData } from "@/hooks/useData";
import { useEffect, useState } from "react";
import { CollegeCardProps } from "@/main/Main";
import convertData from "@/Utils/JSONConverter";
import Loader from "@/components/General/Loader";
import Typography from "@/components/General/Typography";
import CollegeExploreCard from "@/components/General/CollegeCard";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

const sheetId = "1EA4fO94ghldM-QZwIbaY5S0SDdgqh5Y29chCMkblcA4";
const apiKey = "AIzaSyBA-tUF-rsmevb1TJ-dfO-SdOAZcPTIeJ0";
const sheetRange = "Sheet1!A1:15";

export default function TopColleges() {
  const [cleanedData, setData] = useState<CollegeCardProps[]>([]);
  const { data, error, loading } = useData(sheetId, apiKey, sheetRange);

  useEffect(() => {
    setData(convertData(data));
  }, [data]);

  return (
    <div
      className="w-full px-10 mb-10 pt-10 bg-[#D2E6E4] mt-20 pb-20"
      style={{
        borderBottomRightRadius: "60px",
        borderBottomLeftRadius: "60px",
      }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <Typography name="Top Colleges" />
        {loading && <Loader loading />}
        <Row className="w-full justify-center mt-10 flex-row gap-x-5 gap-y-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cleanedData
            ?.slice(0, 6)
            .map((item: CollegeCardProps, index: number) => (
              <CollegeExploreCard key={index} data={item} />
            ))}
        </Row>
        <div className="flex justify-center mt-10">
          <Link className="mx-auto" href="/app/colleges">
            <button className="group flex justify-center cursor-pointer items-center border border-[#0b7077] text-[#0b7077] py-2 px-5 rounded-lg gap-x-2 hover:bg-[#0b7077] hover:text-white transition-colors duration-200">
              View All Colleges
              <FaArrowCircleRight className="transform transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
