"use client";

import React, { useEffect, useState } from "react";
import { Row } from "antd";
import { useData } from "@/hooks/useData";
import convertData from "@/Utils/JSONConverter";
import Loader from "@/components/General/Loader";
import SearchBar from "@/components/General/Search";
import { Course } from "@/main/Main";
import CourseExloperCards from "@/components/General/CoursesCard";
import { searchByName } from "@/Utils/dataSearchByName";
import { useSearchParams } from "next/navigation";

const sheetId = "1wRJXotgsLPGPKmy1I-YoZNJzOPK8-FiJMtekYhX2e34";
const apiKey = "AIzaSyA8NPgaAJM9nxLUhwNfFFfy4x0TRkAO0qY";
const sheetRange = "Sheet1!A1:15";

export default function AllCourses() {
  const searchParams = useSearchParams();
  const [cleanedData, setData] = useState<Course[]>([]);
  const [displayData, setDisplayData] = useState<Course[]>([]);
  const { data, error, loading } = useData(sheetId, apiKey, sheetRange);

  // Convert raw data once it's loaded
  useEffect(() => {
    const converted = convertData(data) as Course[];
    setData(converted);
    setDisplayData(converted); // initially unfiltered
  }, [data]);

  // Search handler
  const handleSearch = (e: any) => {
    const searchTerm = e.target.value.trim();

    // Remove query parameters from the URL
    const url = new URL(window.location.href);
    if (url.searchParams.has("query")) {
      url.searchParams.delete("query");
      window.history.replaceState({}, document.title, url.pathname);
    }

    if (!searchTerm) {
      return applyFilters(cleanedData); // fallback to filters
    }
    const searched = searchByName(cleanedData, searchTerm) as Course[];
    applyFilters(searched);
  };

  // Filter whenever query parameters change
  useEffect(() => {
    applyFilters(cleanedData);
  }, [searchParams, cleanedData]);

  const applyFilters = (sourceData: Course[]) => {
    const category = searchParams.get("category"); // from affiliation dropdown
    const level = searchParams.get("levels");
    const location = searchParams.get("location");
    const q = searchParams.get("query");

    let filtered = [...sourceData];

    if (category) {
      filtered = filtered.filter((item) =>
        item.category?.toLowerCase().includes(category.toLowerCase())
      );
    }

    if (level) {
      filtered = filtered.filter((item) =>
        item?.level?.toLowerCase().includes(level.toLowerCase())
      );
    }

    if (location) {
      filtered = filtered.filter((item) =>
        item.location?.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (q) {
      filtered = filtered.filter((item) =>
        item.name?.toLowerCase().includes(q.toLowerCase())
      );
    }

    setDisplayData(filtered);
  };

  return (
    <div className="w-full mb-30">
      <SearchBar onChage={handleSearch} placeholder="Courses" />
      {loading && <Loader loading />}
      <Row className="w-full mt-3 gap-y-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
        {displayData?.map((item: any, index: number) => (
          <CourseExloperCards key={index} data={item} />
        ))}
      </Row>
    </div>
  );
}
