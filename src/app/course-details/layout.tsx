"use client";

import Typography from "@/components/General/Typography";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pt-20">
      <div className="w-full border-b-1 border-[#e0e0e0]">
        <Typography name="Course Overview" />
      </div>
      {children}
    </div>
  );
}
