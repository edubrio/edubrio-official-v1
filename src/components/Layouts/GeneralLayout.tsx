"use client";

import RegistrationForm from "@/components/General/Registration";
import Typography from "@/components/General/Typography";
import { usePathname } from "next/navigation";

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const path = pathname.split("/").slice(2);
  const capitalizedPath = path[0].split("")[0].toUpperCase() + path[0].slice(1);

  return (
    <div className="max-w-7xl mx-auto pt-20">
      <div className="w-full border-b-1 border-[#e0e0e0]">
        <Typography name={capitalizedPath} />
      </div>
      <div className="w-full flex flex-col md:flex-row md:px-10 px-3 mb-10 pt-6">
        <div className="md:w-2/3">{children}</div>
        <div className="md:w-1/3">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}
