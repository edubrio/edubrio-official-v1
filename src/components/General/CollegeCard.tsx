import React from "react";
import { colors } from "@/constants/Colors";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { ICollegeData } from "@/main/Main";
import { CiLocationOn } from "react-icons/ci";
import { IoDownloadOutline } from "react-icons/io5";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CollegeExploreCard({ data }: ICollegeData) {
  const pathname = usePathname();
  return (
    <div className="max-w-sm border border-slate-100 w-[289px] rounded-2xl bg-white shadow-lg p-3">
      <div className="flex justify-between relative mb-4">
        <img
          src={data?.imageurl}
          alt={data?.name}
          className="rounded-lg h-40 w-full object-cover"
        />
        <div className="absolute right-1 top-1 flex bg-[#00000080] flex-col justify-between px-2 rounded-xl">
          <span className="flex justify-center items-center gap-x-1 text-xs font-medium text-white">
            <FaStar color="#FB923C" />
            {data?.rating}/5
          </span>
        </div>
      </div>
      <h2 className="text-xl font-semibold text-gray-800 h-[55px] overflow-hidden">
        {data?.name}
      </h2>
      <div className="mt-2 flex space-x-4">
        <span className="text-[#0A55A0] flex justify-center items-center gap-x-1 text-xs">
          <CiLocationOn />
          {data?.location}
        </span>
        <span className="text-[#0D9488] flex justify-center items-center gap-x-1 text-xs">
          <SlBadge />
          {data?.mode}
        </span>
      </div>
      <div
        className="py-2 pb-3 flex items-center"
        style={{ borderBottom: `1px solid ${colors.borders}` }}
      >
        <p className="text-sm text-gray-400">
          Estd: <span className="text-gray-900">{data?.established}</span>
        </p>
        <div
          style={{ borderRight: `1px solid ${colors.borders}`, height: "15px" }}
          className="mx-2"
        ></div>
        <p className="text-sm text-gray-400">
          Aff: <span className="text-gray-900">{data?.affiliation}</span>
        </p>
      </div>
      <div className="mt-2 flex space-x-4">
        <span className="text-[#0A55A0] bg-[#006FEE33] w-1/2 flex justify-center items-center rounded-xl px-2  py-1">
          <IoDownloadOutline className="mr-3" />
          {"Brochure"}
        </span>
        <span className="bg-[#F5A52433] text-[#936316] w-1/2 flex justify-center items-center gap-x-1  px-2 py-1 rounded-xl">
          <MdOutlineAddToPhotos />
          {"Compare"}
        </span>
      </div>
      <Link href={pathname === "/" ? `/app/colleges` : "/#contact"}>
        <button
          className={`mt-4 w-full bg-[#0b7077] flex justify-center items-center gap-x-3 cursor-pointer text-white py-1 rounded-lg hover:bg-teal-700  shadow-xl`}
        >
          <FaRegCheckCircle />
          {pathname === "/" ? "See More" : "Contact Us"}
        </button>
      </Link>
    </div>
  );
}
