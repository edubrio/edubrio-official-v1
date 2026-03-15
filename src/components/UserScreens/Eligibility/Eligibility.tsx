"use client";

import { useState } from "react";
import { Row } from "antd";
import { CritiriaData } from "@/main/Main";
import EligiblityCard from "@/components/Main/Eligiblity/Card";
import { eligibilityCriteriaData } from "@/constants/EligibilityCritiria";
import SegmentedControl from "@/components/General/SegemetedControl";
import { eligibilityOptions } from "@/constants/options";

export default function Eligibility() {
  const [data, setData] = useState<CritiriaData[]>(eligibilityCriteriaData);

  const filterData = (value: string) => {
    if (value === "All") {
      setData(eligibilityCriteriaData);
    } else {
      const filtered = eligibilityCriteriaData.filter(
        (item) => item.category === value
      );
      setData(filtered);
    }
  };

  return (
    <div className="w-full mb-30">
      <SegmentedControl options={eligibilityOptions} onChange={filterData} />
      <Row className="w-full gap-x-4 mt-6 gap-y-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
        {data.map((item: CritiriaData, index : number) => (
          <EligiblityCard data={item} key={index} />
        ))}
      </Row>
    </div>
  );
}
