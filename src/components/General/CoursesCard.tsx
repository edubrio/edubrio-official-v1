"use client";

import React from "react";
import { ICoursesData } from "@/main/Main";
import { colors } from "@/constants/Colors";
import { SlGraduation } from "react-icons/sl";
import { IoCashOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { FieldTimeOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function CourseExloperCards({ data }: ICoursesData) {
  return (
    <div className="md:ml-2 border border-slate-100 md:w-[288px] w-full rounded-2xl bg-white shadow-lg p-5">
      <h2 className="text-xl font-semibold text-gray-800">{data?.name}</h2>
      <div className="min-h-12">
        <div className="mt-2 flex space-x-4 ">
          <span className="text-[#0A55A0] bg-[#006FEE33] rounded-3xl text-xs px-2 pr-5 py-1">
            <FieldTimeOutlined className="mr-3" />
            {data?.duration}
          </span>
          <span className="bg-[#F5A52433] text-[#936316] flex justify-center items-center gap-x-1 text-xs px-2 py-1 rounded-3xl">
            <SlGraduation />
            {data?.mode}
          </span>
        </div>
      </div>
      <div
        className="mt-2 py-2 flex items-center min-h-16"
        style={{ borderBottom: `1px solid ${colors.borders}` }}
      >
        <p className="text-sm text-gray-400 mb">
          Eligibility:{" "}
          <span className="text-gray-900">{data?.eligibility}</span>
        </p>
        <div
          style={{ borderRight: `1px solid ${colors.borders}`, height: "15px" }}
          className="mx-2"
        ></div>
        <p className="text-sm text-gray-400 mb">
          Exam: <span className="text-gray-900">{data?.exam}</span>
        </p>
      </div>
      <div className="mt-4  flex items-center justify-center bg-[#F4F4F5] w-full rounded-sm py-2">
        <p className="text-sm font-normal text-blue-600 flex justify-center items-center gap-x-1">
          <IoCashOutline />
          {data?.fees}
        </p>
        <div
          style={{ borderRight: `1px solid ${colors.borders}`, height: "15px" }}
          className="mx-2"
        ></div>
        <p className="text-sm text-black">{data?.colleges} + Colleges</p>
      </div>
      <Link
        href={`/course-details?key=${data?.key}&foreign_key=${data?.foreign_key}`}
      >
        <div
          className={`mt-4 w-full bg-[#0b7077] flex justify-center items-center gap-x-3 cursor-pointer text-white py-1 rounded-lg hover:bg-teal-700 shadow-md `}
        >
          <FaRegCheckCircle />
          See More
        </div>
      </Link>
    </div>
  );
}
