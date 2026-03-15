"use client";

import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import Link from "next/link";

export default function LandingSearcher() {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="w-full mx-auto mt-5">
      <div className="flex py-2 items-center border border-[#27272A] px-3 rounded-lg shadow-md">
        {/* Dropdown */}
        <div className="relative border-r-1 border-[#27272A] pr-2 mr-2">
          <button className="text-gray-600">
            <span className="text-sm flex items-center gap-x-3">
              All <MdKeyboardArrowDown />
            </span>
          </button>
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search for Courses, Colleges, Blogs & more..."
          value={query}
          onChange={handleSearchChange}
          className="flex-1 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
        />

        {/* Search Icon */}
        <div className="ml-3">
          <Link href={`/app/courses?query=${encodeURIComponent(query)}`}>
            <button className="text-gray-600 cursor-pointer">
              <GoSearch />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
