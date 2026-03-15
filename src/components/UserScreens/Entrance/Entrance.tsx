"use client";

import SegmentedControl from "@/components/General/SegemetedControl";
import { examOptions } from "@/constants/options";
import EntranceCard from "@/components/Main/Entrance/Card";

const entrance = ["NEET-PG", "NEET-UG"];

export default function Entrance() {
  return (
    <div className="mb-10">
      <SegmentedControl onChange={() => {}} options={examOptions} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-1 mt-5">
        {entrance?.map((item, index) => (
          <EntranceCard
            key={index + item}
            image="/images/others/doc1.png"
            designation={item}
          />
        ))}
      </div>
    </div>
  );
}
