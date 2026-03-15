"use client";

import { Row } from "antd";
import { useData } from "@/hooks/useData";
import { useEffect, useState } from "react";
import { CollegeCardProps } from "@/main/Main";
import convertData from "@/Utils/JSONConverter";
import Loader from "@/components/General/Loader";
import SearchBar from "@/components/General/Search";
import { searchByName } from "@/Utils/dataSearchByName";
import CollegeExploreCard from "@/components/General/CollegeCard";
import { useSearchParams } from "next/navigation";

const sheetId = "1EA4fO94ghldM-QZwIbaY5S0SDdgqh5Y29chCMkblcA4";
const apiKey = "AIzaSyBA-tUF-rsmevb1TJ-dfO-SdOAZcPTIeJ0";
const sheetRange = "Sheet1!A1:15";

export default function AllColleges() {
  const searchParams = useSearchParams();
  const [cleanedData, setData] = useState<CollegeCardProps[]>([]);
  const [displayData, setDisplayData] = useState<CollegeCardProps[]>([]);
  const { data, error, loading } = useData(sheetId, apiKey, sheetRange);

  // Convert raw data once it's loaded
  useEffect(() => {
    const converted = convertData(data) as CollegeCardProps[];
    setData(converted);
    setDisplayData(converted); // initially unfiltered
  }, [data]);

  // Search handler
  const handleSearch = (e: any) => {
    const searchTerm = e.target.value.trim();
    if (!searchTerm) {
      return applyFilters(cleanedData); // fallback to filters
    }
    const searched = searchByName(
      cleanedData,
      searchTerm
    ) as CollegeCardProps[];
    applyFilters(searched);
  };

  // Filter whenever query parameters change
  useEffect(() => {
    applyFilters(cleanedData);
  }, [searchParams, cleanedData]);

  const applyFilters = (sourceData: CollegeCardProps[]) => {
    const affiliation = searchParams.get("affiliation");
    const location = searchParams.get("location");

    let filtered = [...sourceData];

    if (affiliation) {
      filtered = filtered.filter((item) =>
        item.affiliation?.toLowerCase().includes(affiliation.toLowerCase())
      );
    }

    if (location) {
      filtered = filtered.filter((item) =>
        item.location?.toLowerCase().includes(location.toLowerCase())
      );
    }

    setDisplayData(filtered);
  };
  return (
    <div className="w-full min-h-screen mb-30">
      <SearchBar onChage={handleSearch} placeholder="Colleges" />
      {loading && <Loader loading />}
      <Row className="w-full mt-3 gap-y-6 gap-x-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
        {displayData?.map((item: CollegeCardProps, index: number) => (
          <CollegeExploreCard key={index + item?.name} data={item} />
        ))}
      </Row>
    </div>
  );
}
