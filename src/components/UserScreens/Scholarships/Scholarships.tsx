import SegmentedControl from "@/components/General/SegemetedControl";
import { Collapse } from "antd";
import React from "react";
import MainPage from "./CollapseChildren";

const options = [
  { label: "Government Scholarships", value: "Government Scholarships" },
  { label: "Private Scholarships", value: "Private Scholarships" },
];

const data = [
  "AICTE Scholarships",
  "Central Scholarship - by Ministry of Minority Affairs",
  "Department of Empowerment of Persons with Disabilities",
  "Ministry of Social Justice and Empowerment",
  "Ministry of Labour and Empowerment",
  "Ministry of Tribal Affairs",
  "Department of School Education and Literacy",
  "Department of Higher Education",
  "Welfare and Rehabilitation Board (WARB) - Ministry of Home Affairs",
  "Railway Protection Force (RPF) / Railway Protection Special Force (RPSF) - Ministry of Railways",
  "UGC Schemes - Ministry of Human Resource Development (MHRD)",
  "Sports Scholarship Scheme - Airports Authority of India",
  "International Scholarship",
  "Department of Social Justice and Empowerment - Ministry of Education",
  "Pre-Matric Scholarship",
];

export default function Scholarships() {
  return (
    <div className="w-full">
      <h1 className="text-[#0b7077] text-xl font-medium">
        What is Scholarship program?
      </h1>
      <p className="text-sm mt-2 mb-3 pr-2">
        The scholarship is financial support awarded to a student, based on
        academic achievement or other criteria that may include financial need,
        for the purpose of schooling. There are various types of scholarships -
        the two most common being merit-based and need-based. The donor or
        department funding the scholarship sets the criteria for recipient
        selection, and the grantor specifically defines how the money is to be
        applied. The funds are used to defray the costs of tuition, books, room,
        board and other expenses directly tied to a student's educational cost
        through the university.
      </p>
      <p className="text-sm mb-5 pr-2">
        The scholarships are awarded to the deserving candidates and are not
        limited only to the academics. The scholarships are also for the
        individuals for their work in departmental and community involvement,
        employment experience, areas of study, and financial need etc.
      </p>
      <div className="w-[98%] mb-16">
        <SegmentedControl onChange={() => {}} options={options} />
        <div className="mt-5">
          {data?.map((item, index) => (
            <Collapse
              items={[
                {
                  key: index,
                  label: item,
                  children: index === 0 ? <MainPage /> : <></>,
                },
              ]}
              defaultActiveKey={["0"]}
              key={index}
              style={{ borderRadius: "12px", marginBottom: "10px" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
