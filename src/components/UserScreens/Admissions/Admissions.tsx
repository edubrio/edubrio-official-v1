import React from "react";

export default function Admissions() {
  return (
    <div className="w-full">
      <h1 className="text-[#0b7077] text-xl font-medium">Admissions</h1>
      <p className="text-sm mt-2 mb-3 pr-2">
        EduBrio is one of the leading educational advisory centre in Bangalore
        offering services all over India for career counselling and admission
        guidance since 2004, acquiring acute expertise and excellence in the
        field of education.
      </p>
      <p className="text-sm mb-5 pr-2">
        EduBrio takes pleasure in providing admission guidance in most of the
        reputed institutions offering education in every sphere - Medical,
        Engineering, Management, Ayurveda, Paramedical and BSc Courses and many
        more. We provide all round assistance for students to get admissions in
        various professional courses under Management / NRl quota. EduBrio
        offers a unique range of services dedicated to advising and guiding
        candidates.
      </p>
      <div className="w-[98%] mb-16">
        <h1 className="text-[#0b7077] text-xl font-medium">
          Admission Process
        </h1>
        <img className="mt-5" src="/images/others/flowchart.png" />
      </div>
    </div>
  );
}
