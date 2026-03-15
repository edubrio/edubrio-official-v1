import ServiceCard from "@/components/Main/Service/ServiceCard";
import { serviceData } from "@/constants/Service";
import React from "react";

export default function Services() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="text-[#0b7077] text-xl font-medium">
        Exclusive Services from EduBrio
      </h1>
      <p className="text-sm mt-2 mb-5 pr-2">
        EduBrio offers unique and curated services that are transparent,
        reliable and foster as a helping aid for students to augment a brighter
        professional enhancement across the globe. These services are designed
        to develop students holistically so that they can expertise their skills
        and achieve excellence in their careers.
      </p>
      <div className="w-[98%] mb-16">
        {serviceData?.map((doc, index) => (
          <ServiceCard data={doc} key={doc.id + index} />
        ))}
      </div>
    </div>
  );
}
