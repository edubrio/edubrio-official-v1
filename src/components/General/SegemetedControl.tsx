"use client";

import React from "react";
import { Flex, Segmented } from "antd";
import { colors } from "@/constants/Colors";

interface SegmentedProps {
  label: string;
  value: string;
}

interface ISegmentedProps {
  options: SegmentedProps[];
  onChange: (_state: any) => void;
}

export default function SegmentedControl({
  options,
  onChange,
}: ISegmentedProps) {
  return (
    <Flex gap="large" align="flex-start" vertical>
      <Segmented
        options={options}
        className="custom-segmented shadow-sm border border-[#E4E4E7] md:w-auto w-full overflow-auto"
        shape="round"
        color={colors.primary}
        onChange={onChange}
        size="large"
      />
    </Flex>
  );
}
