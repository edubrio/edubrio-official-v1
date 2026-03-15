"use client";

import React from "react";
import RegistrationForm from "@/components/General/Registration";
import ScrollableTable from "@/components/General/ScrollableTable";
import Testimonials from "@/components/General/Testinmonials";
import { useData } from "@/hooks/useData";
import { useSearchParams } from "next/navigation";
import Loader from "@/components/General/Loader";
import convertData from "@/Utils/JSONConverter";
import { extractTestimonials } from "@/Utils/reviewFormat";
import { extractAdavatages } from "@/Utils/KeyDisFormatter";
import { FaArrowCircleRight } from "react-icons/fa";
import Link from "next/link";

const apiKey = "AIzaSyBA-tUF-rsmevb1TJ-dfO-SdOAZcPTIeJ0";
const sheetRange = "Sheet1";
const sheetId = "1wRJXotgsLPGPKmy1I-YoZNJzOPK8-FiJMtekYhX2e34";
const CourseapiKey = "AIzaSyA8NPgaAJM9nxLUhwNfFFfy4x0TRkAO0qY";

export default function CourseDetails() {
  const searchParams = useSearchParams();
  const key = searchParams.get("key");
  const foreignKey = searchParams.get("foreign_key");

  const { data, error, loading } = useData(
    foreignKey || "",
    apiKey,
    sheetRange
  );
  const { data: Course } = useData(sheetId, CourseapiKey, "Sheet1!A1:15");

  const formattedCourseData = convertData(Course);

  const selectedCourse = formattedCourseData.find(
    (course: any) => course.key === key
  );
  const testimonials = extractTestimonials(selectedCourse);
  const advantagesData = extractAdavatages(selectedCourse);

  const formattedData = data.slice(1).map((entry) => ({
    sl: parseInt(entry[0]),
    name_of_college: entry[1],
    college_type: entry[2],
    state: entry[3],
    district: entry[4],
    govt_g_fees: entry[4] || "-",
    private_p_fees: entry[5] === "0" ? "-" : entry[5],
    other_q_fees: entry[6] === "0" ? "-" : entry[6],
    nri_n_fees: entry[7] || "-",
  }));

  // === Dynamic Filters ===
  const getUniqueValues = (data: any[], key: string) => {
    return Array.from(new Set(data.map((item) => item[key]))).filter(Boolean);
  };

  const stateFilters = getUniqueValues(formattedData, "state").map((state) => ({
    text: state,
    value: state,
  }));

  const districtFilters = getUniqueValues(formattedData, "district").map(
    (district) => ({
      text: district,
      value: district,
    })
  );

  const typeFilters = getUniqueValues(formattedData, "college_type").map(
    (type) => ({
      text: type,
      value: type,
    })
  );

  // === Table Columns with Filters ===
  const Columns = [
    { title: "Sl", dataIndex: "sl", key: "sl", width: 70, align: "center" },
    {
      title: "Name of College",
      dataIndex: "name_of_college",
      key: "name_of_college",
      width: 400,
    },
    {
      title: "College Type",
      dataIndex: "college_type",
      key: "college_type",
      width: 200,
      filters: typeFilters,
      onFilter: (value: string, record: any) =>
        record.college_type.toLowerCase().includes(value.toLowerCase()),
      filterSearch: true,
      filterMode: "tree",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
      width: 150,
      filters: stateFilters,
      onFilter: (value: string, record: any) =>
        record.state.toLowerCase().includes(value.toLowerCase()),
      filterSearch: true,
      filterMode: "tree",
    },
    {
      title: "District",
      dataIndex: "district",
      key: "district",
      width: 180,
      filters: districtFilters,
      onFilter: (value: string, record: any) =>
        record.district.toLowerCase().includes(value.toLowerCase()),
      filterSearch: true,
      filterMode: "tree",
    },
    {
      title: "Govt (G) Fees",
      dataIndex: "govt_g_fees",
      key: "govt_g_fees",
      width: 150,
    },
    {
      title: "Private (P) Fees",
      dataIndex: "private_p_fees",
      key: "private_p_fees",
      width: 150,
      sorter: (a: any, b: any) => {
        const aFees = a.other_q_fees === "-" ? 0 : parseInt(a.other_q_fees);
        const bFees = b.other_q_fees === "-" ? 0 : parseInt(b.other_q_fees);
        return aFees - bFees;
      },
    },
    {
      title: "Other (Q) Fees",
      dataIndex: "other_q_fees",
      key: "other_q_fees",
      width: 150,
      sorter: (a: any, b: any) => {
        const aFees = a.other_q_fees === "-" ? 0 : parseInt(a.other_q_fees);
        const bFees = b.other_q_fees === "-" ? 0 : parseInt(b.other_q_fees);
        return aFees - bFees;
      },
    },
    {
      title: "NRI (N) Fees",
      dataIndex: "nri_n_fees",
      key: "nri_n_fees",
      width: 150,
      sorter: (a: any, b: any) => {
        const aFees = a.other_q_fees === "-" ? 0 : parseInt(a.other_q_fees);
        const bFees = b.other_q_fees === "-" ? 0 : parseInt(b.other_q_fees);
        return aFees - bFees;
      },
    },
  ];

  if (loading) {
    return <Loader loading />;
  }

  if (error) {
    return (
      <p className="text-center text-red-600 p-5 border border-red-700">
        Error fetching data
      </p>
    );
  }

  return (
    <div className="container max-w-7xl mx-auto font-sans text-gray-800">
      {/* Banner */}
      <div className="w-full flex flex-col md:flex-row md:px-10 px-3 mb-10 pt-6">
        <div className="md:w-2/3">
          <section className="mb-8">
            <img
              src={selectedCourse?.imageurl}
              alt="Doctors discussion"
              className="rounded-lg max-h-72 w-full object-cover mb-3"
            />
            <h2 className="text-[28px] font-bold text-[#0b7077] w-full">
              {selectedCourse?.name}
            </h2>

            <p className="text-gray-700 max-w-3xl leading-relaxed mb-10">
              {selectedCourse?.overview}
            </p>

            <Testimonials testimonials={testimonials} pageSize={1} />
          </section>
        </div>
        <div className="md:w-1/3 md:top-20 md:ml-2 right-0">
          <RegistrationForm />
        </div>
      </div>

      {/* Benefits Section */}
      <section className="mb-10 px-10 max-w-5xl mx-auto">
        <h2 className="font-bold text-xl mb-1 leading-none pb-1 border-b-2 border-black inline-block">
          Course Details & Colleges
        </h2>
      </section>

      {/* Key Advantages */}
      <section className="mb-10 md:px-10 px-3 max-w-5xl mx-auto">
        <h3 className="font-semibold text-base mb-3">Key Advantages</h3>
        <p className="text-xs mb-8">
          {selectedCourse?.keydiscription || "No key advantages available."}
        </p>

        <div className="flex md:flex-row flex-col gap-4 mb-10 md:w-4/5">
          {advantagesData.map((advantage: any, index: number) => (
            <div
              key={index}
              className="border-2 border-gray-300 rounded-2xl shadow-lg p-3 flex-1 text-xs"
            >
              <strong className="block mb-1">{advantage.title}</strong>
              <p>{advantage.dis}</p>
            </div>
          ))}
        </div>

        <h3 className="font-semibold text-base mb-3">All Colleges</h3>
        <ScrollableTable
          className="shadow-xs rounded-2xl"
          columns={Columns as any}
          dataSource={formattedData || []}
        />
        {/* <div className="flex justify-center mt-10">
          <Link className="mx-auto" href="/#contact">
            <button
              disabled
              className="group flex justify-center items-center border border-[#0b7077] text-[#0b7077] py-2 px-5 rounded-lg gap-x-2 hover:bg-[#0b7077] hover:text-white transition-colors duration-200"
            >
              Register Now
              <FaArrowCircleRight className="transform transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </Link>
        </div> */}
      </section>
    </div>
  );
}
