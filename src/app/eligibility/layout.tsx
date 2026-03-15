"use client";

import Typography from "@/components/General/Typography";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-7xl mx-auto pt-20">
      <div className="w-full border-b-1 border-[#e0e0e0]">
        <Typography name="Eligibility Criteria" />
      </div>
      <div className="w-full flex flex-col gap-x-4 px-3 md:px-20 mb-10 pt-6">
        {children}
      </div>
    </div>
  );
}
