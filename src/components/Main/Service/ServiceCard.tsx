import React from "react";

interface ServiceCardProps {
  id: number;
  icon: string;
  title: string;
  description: string;
  description_one: string;
  description_three?: string;
}

interface IServiceData {
  data: ServiceCardProps;
}

export default function ServiceCard({ data }: IServiceData) {
  return (
    <div className="w-full mb-2 border border-[#eaeaea] mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img src={data?.icon} alt="Admission Icon" className="h-10 w-10" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-gray-800">{data?.title}</h2>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700 text-xs">
            <li>{data?.description}</li>
            <li>{data?.description_one}</li>
            {data?.description_three && <li>{data?.description_three}</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}
