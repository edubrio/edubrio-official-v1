// BscPerfusionCard.tsx
import React from "react";
import { FieldTimeOutlined } from "@ant-design/icons";
import { FaRegCheckCircle } from "react-icons/fa";
import { CritiriaData } from "@/main/Main";

export default function EligiblityCard({ data }: { data: CritiriaData }) {
  return (
    <div className="md:w-[350px] relative min-h-[390px] w-full bg-white shadow-md rounded-xl border border-[#f4f4f4] overflow-hidden">
      <div className="px-3 py-3">
        <h2 className="text-lg font-semibold text-gray-800 border-b-1 pb-2 border-[#e0e0e0]">
          {data.title}
        </h2>
        <p className="text-xs mt-2 text-[#0A55A0] bg-[#006FEE33] w-20 rounded-2xl px-2 py-1 flex justify-center items-center gap-x-1">
          {" "}
          <FieldTimeOutlined />
          {data.duration}
        </p>
        <div className="mt-4">
          <h3 className="text-sm font-semibold text-gray-700">Eligibility:</h3>
          <ul className="list-disc text-xs pl-5 text-gray-600">
            {data.eligibility.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-700">University:</h3>
          <ul className="list-disc text-xs pl-5 text-gray-600">
            {data.universities.map((university, index) => (
              <li key={index}>{university}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6 absolute bottom-0 left-0 right-0 px-3 pb-3">
          <button
            className={`mt-4 w-full bg-[#0b7077] flex justify-center items-center gap-x-3 cursor-pointer text-white py-1 rounded-lg hover:bg-teal-700 shadow-md `}
          >
            <FaRegCheckCircle />
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
}
