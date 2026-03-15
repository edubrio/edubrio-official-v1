"use client";

import CoursesFinder from "@/components/General/CoursesFinder";
import Finder from "@/components/General/Finder";
import Typography from "@/components/General/Typography";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const path = pathname.split("/").slice(2);
  const capitalizedPath =
    path[0]?.charAt(0).toUpperCase() + path[0]?.slice(1) || "";

  return (
    <div className="pt-20">
      <div className="w-full border-b-1 border-[#e0e0e0]">
        <Typography name={capitalizedPath} />
      </div>
      <div className="w-full flex md:flex-row flex-col gap-x-4 px-10 mb-10 pt-10">
        <div className="md:w-1/3">
          {path[0] === "colleges" ? <Finder /> : <CoursesFinder />}
        </div>
        <div className="w-full md:ml-[-70px] md:mt-0 mt-10">{children}</div>
      </div>
    </div>
  );
}
