"use client";

import { FaRegCheckCircle } from "react-icons/fa";
import LandingSearcher from "./LandingSearch";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [styles, setStyles] = useState<Record<string, string>>({
    backgroundImage: "url('/images/backgrounds/hero.png')",
    backgroundSize: "contain",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
  });

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      setStyles({
        backgroundImage: "url('/images/backgrounds/hero.png')",
        backgroundSize: "contain",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      });
    }
  }, []);

  return (
    <div
      className="w-full bg-[#D2E6E4]"
      style={{ borderRadius: "0 0 50px 50px" }}
    >
      <div
        style={styles}
        className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:h-[108vh] lg:h-auto overflow-hidden mb-5"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between md:ml-10 pb-10 mt-[7rem]">
          <div className="md:w-1/2 w-full space-y-6 max-w-lg">
            <h1 className="text-4xl text-center font-semibold text-[#0b7077]">
              Best Educational Counselling Centre in India
            </h1>
            <p className="text-sm text-center text-[#045CA4]">
              EduBrio located in Bangalore is India’s best educational centre
              offering student’s support services such as career counselling and
              admission guidance.
            </p>
            <div className="w-full flex justify-center">
              <Link href="#contact">
                <button className="bg-[#0b7077] cursor-pointer text-sm font-medium flex justify-center items-center gap-x-2 mx-auto text-white py-2 px-10 rounded-lg hover:bg-[#224345] focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <FaRegCheckCircle />
                  Apply Now
                </button>
              </Link>
            </div>
            <LandingSearcher />
          </div>
          <div className="flex md:w-1/2 md:pt-[15rem]">
            <div className="bg-[#FFFFFF] text-white text-xs -ml-10 md:ml-0 md:mt-0 mt-10 rounded-xl px-4 py-4 flex gap-x-8 justify-center items-center">
              <img
                src="/icons/hero/calendar.png"
                className="h-12"
                alt="chart"
              />
              <span className="text-[#595959] ">
                <span className="text-xl font-bold">250k</span> <br /> Assisted
                Students
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
