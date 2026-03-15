"use client";

import { colors } from "@/constants/Colors";
import { useState, CSSProperties } from "react";
import { ClipLoader, HashLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function Loader({ loading }: { loading: boolean }) {
  return (
    <div className="sweet-loading flex h-[300px] w-full justify-center items-center">
      <HashLoader
        color={colors.primary}
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
