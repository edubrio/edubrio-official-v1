"use client";

import React from "react";
import { Input } from "antd";
import { CiSearch } from "react-icons/ci";

interface SearchBarProps {
  onChage: any;
  placeholder: string;
}
export default function SearchBar({ onChage, placeholder }: SearchBarProps) {
  return (
    <Input
      prefix={<CiSearch />}
      placeholder={`Find ${placeholder}`}
      className="shadow-xs py-2"
      style={{
        marginBottom: 10,
        backgroundColor: "#F4F4F5",
        border: "none",
        borderRadius: "10px",
      }}
      onChange={onChage}
    />
  );
}
