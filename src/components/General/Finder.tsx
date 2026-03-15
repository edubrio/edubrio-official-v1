"use client";

import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, Input, Checkbox } from "antd";
import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { useRouter, useSearchParams } from "next/navigation";

const affiliationsList = [
  "Autonomous",
  "BCU, RGUHS, VTU",
  "RGUHS",
  "VTU",
  "BCU",
  "BU",
  "NITTE",
  "KSLU",
];

const locationsList = [
  "Bangalore, Karnataka",
  "Tumkur, Karnataka",
  "Bijapur, Karnataka",
  "Mangalore, Karnataka",
  "Mandya, Karnataka",
  "Shimoga, Karnataka",
  "Chitradurga, Karnataka",
  "Kolar, Karnataka",
];

function Finder() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedAffiliation, setSelectedAffiliation] = useState<string | null>(
    null
  );
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  useEffect(() => {
    const affiliationParam = searchParams.get("affiliation");
    const locationParam = searchParams.get("location");
    if (affiliationParam) setSelectedAffiliation(affiliationParam);
    if (locationParam) setSelectedLocation(locationParam);
  }, [searchParams]);

  const updateQueryParams = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleAffiliationChange = (value: string) => {
    const newValue = value === selectedAffiliation ? null : value;
    setSelectedAffiliation(newValue);
    updateQueryParams("affiliation", newValue);
  };

  const handleLocationChange = (value: string) => {
    const newValue = value === selectedLocation ? null : value;
    setSelectedLocation(newValue);
    updateQueryParams("location", newValue);
  };

  const items = [
    {
      key: "1",
      label: "AFFILIATIONS",
      children: (
        <>
          <Input
            prefix={<CiSearch />}
            placeholder="Find Affiliations"
            style={{ marginBottom: 10, border: "none" }}
          />
          {affiliationsList.map((item) => (
            <div className="flex items-center gap-x-2" key={item}>
              <Checkbox
                className="custom-check"
                checked={selectedAffiliation === item}
                onChange={() => handleAffiliationChange(item)}
              />
              <span className="text-sm text-gray-600">{item}</span>
            </div>
          ))}
        </>
      ),
    },
    {
      key: "2",
      label: "LOCATIONS",
      children: (
        <>
          <Input
            prefix={<CiSearch />}
            placeholder="Find Locations"
            style={{ marginBottom: 10, border: "none" }}
          />
          {locationsList.map((item) => (
            <div className="flex items-center gap-x-2" key={item}>
              <Checkbox
                className="custom-check"
                checked={selectedLocation === item}
                onChange={() => handleLocationChange(item)}
              />
              <span className="text-sm text-gray-600">{item}</span>
            </div>
          ))}
        </>
      ),
    },
  ];

  return (
    <div className="md:w-[230px] bg-[#F4F4F5] rounded-lg shadow-md">
      <h2 className="text-lg px-3 pt-3 font-semibold text-gray-800 mb-3">
        FOUND 60+ COLLEGES
      </h2>
      <Collapse
        items={items}
        bordered={false}
        expandIconPosition="end"
        defaultActiveKey={["1", "2"]}
        style={{ background: "transparent" }}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
      />
    </div>
  );
}

export default Finder;
