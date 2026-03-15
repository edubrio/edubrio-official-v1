"use client";

import React, { useEffect, useRef } from "react";

const logos = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5kW1QiwZI1mxMzldLk3AV3fhz6-Wmivebmw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrIUGrf41vEqfTcMDbSCQ3Bp5nxDjI7WWzlg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTOkl7IMOSm_rh0tiU9a1OropsvGMp8pPiLA&s",
  "https://www.akashiet.com/Front-end/img/aiet-logo-new.png",
  "https://i.pinimg.com/736x/28/57/7b/28577b764eba23e4b60fb9a16c0fa5ff.jpg",
  "https://upload.wikimedia.org/wikipedia/en/3/34/Bangalore_University_logo.png",
  "https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/rayan_050722_Josephs1.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/62/Kristu-Jayanti-College-Logo.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROBG7zfpJls5cSWwjw3TgW2NaQQABgLJ9IdA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrIUGrf41vEqfTcMDbSCQ3Bp5nxDjI7WWzlg&s",
];

// Duplicate once for looping
const allLogos = [...logos, ...logos];

export default function SponsorsCarousel() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef(0);

  const scrollSpeed = 0.5; // Speed in px per frame

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      if (carouselRef.current && containerRef.current) {
        scrollRef.current += scrollSpeed;

        const totalScrollWidth = carouselRef.current.scrollWidth / 2;

        if (scrollRef.current >= totalScrollWidth) {
          scrollRef.current = 0;
        }

        carouselRef.current.style.transform = `translateX(-${scrollRef.current}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate(); // Start animation

    return () => cancelAnimationFrame(animationFrameId); // Cleanup
  }, []);

  return (
    <div
      className="relative overflow-hidden p-5 rounded-3xl bg-[#F4F4F5]"
      ref={containerRef}
    >
      {/* Fades */}
      <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div
        ref={carouselRef}
        className="flex space-x-6 will-change-transform"
        style={{ width: "max-content" }}
      >
        {allLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-20 h-20 bg-gray-100 rounded-xl overflow-hidden shadow-md"
          >
            <img
              src={logo}
              alt={`Logo ${index}`}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
