import React, { useState } from "react";
import {
  MdOutlineArrowCircleRight,
  MdOutlineArrowCircleLeft,
} from "react-icons/md";

interface Testimonial {
  client_name: string;
  description: string;
  rating: number;
  date: string;
}

interface TestimonialPaginationProps {
  testimonials: Testimonial[];
  pageSize?: number; // Optional, default to 1 testimonial per page
}

export default function Testimonials({
  testimonials,
  pageSize = 1,
}: TestimonialPaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(testimonials.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const currentTestimonials = testimonials.slice(
    startIndex,
    startIndex + pageSize
  );

  function goToPage(page: number) {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  }

  return (
    <section>
      {currentTestimonials.map((t, idx) => (
        <div key={idx} className="mb-6">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold">{t.client_name}</span>
            <span className="text-xs text-gray-500">{t.date}</span>
          </div>
          <div className="flex mb-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < t.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118L10 13.348l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L3.624 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                </svg>
              ))}
          </div>
          <p className="text-xs text-gray-700">{t.description}</p>
        </div>
      ))}

      {/* Pagination controls */}
      <div className="flex justify-center items-center gap-3">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`rounded-full cursor-pointer ${
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed"
              : "hover:bg-gray-200"
          }`}
        >
          <MdOutlineArrowCircleLeft size={28} />
        </button>

        {[...Array(totalPages).keys()].map((i) => (
          <button
            key={i + 1}
            onClick={() => goToPage(i + 1)}
            className={`px-3 py-1 rounded-full text-xs ${
              currentPage === i + 1
                ? "bg-[#0b7077] text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`rounded-full cursor-pointer ${
            currentPage === totalPages
              ? "text-gray-400 cursor-not-allowed"
              : "hover:bg-gray-200"
          }`}
        >
          <MdOutlineArrowCircleRight size={28} />
        </button>
      </div>
    </section>
  );
}