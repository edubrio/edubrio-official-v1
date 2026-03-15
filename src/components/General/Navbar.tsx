"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { RiPhoneFill } from "react-icons/ri";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // State to track scroll position

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 75) {
      setScrolled(true); // Add background when scrolled more than 100px
    } else {
      setScrolled(false); // Remove background when scrolled back to top
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup the event listener on component unmount
    };
  }, []);

  return (
    <nav
      className={`md:px-10 px-2 w-full sm:rounded-bl-none rounded-bl-4xl sm:rounded-br-none rounded-br-4xl fixed z-20 transition-all duration-300 ${
        scrolled
          ? "md:bg-white bg-white shadow-md"
          : "md:bg-transparent bg-white"
      }`}
    >
      <div className="container flex justify-between items-center mx-auto">
        <div className="flex items-center">
          <img
            src="/images/logo/image.png"
            alt="EduBrio Logo"
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {/* <Link href="/about" className="text-[#0b7077] hover:text-[#0d393c]">
            About
          </Link> */}
          <Link href="/" className="text-[#0b7077] hover:text-[#0d393c]">
            Home
          </Link>
          <Link
            href="/general/services"
            className="text-[#0b7077] hover:text-[#0d393c]"
          >
            Services
          </Link>
          <Link
            href="/app/courses"
            className="text-[#0b7077] hover:text-[#0d393c]"
          >
            Courses
          </Link>
          <Link
            href="/app/colleges"
            className="text-[#0b7077] hover:text-[#0d393c]"
          >
            Colleges
          </Link>
          <Link
            href="/eligibility"
            className="text-[#0b7077] hover:text-[#0d393c]"
          >
            Eligibility
          </Link>
          {/* <Link href="/blogs" className="text-[#0b7077] hover:text-[#0d393c]">
            Blogs
          </Link> */}
          {/* <Link href="/blogs" className="text-[#0b7077] hover:text-[#0d393c]">
            Contact us
          </Link> */}
          <Link
            href="https://wa.me/918089706931"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-[#0b7077] py-2 mt-[-6px] hover:bg-[#355e61] px-4 rounded-lg text-xs flex justify-center items-center"
          >
            <RiPhoneFill className="inline-block mr-1" /> +91 861-8100494
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-[#0b7077] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {/* <Link href="/about" className="block text-gray-700 px-6 py-2">
            About
          </Link> */}
          <Link
            href="/"
            onClick={toggleMenu}
            className="block text-gray-700 px-6 py-2"
          >
            Home
          </Link>
          <Link
            href="/general/services"
            onClick={toggleMenu}
            className="block text-gray-700 px-6 py-2"
          >
            Services
          </Link>
          <Link
            onClick={toggleMenu}
            href="/app/courses"
            className="block text-gray-700 px-6 py-2"
          >
            Courses
          </Link>
          <Link
            onClick={toggleMenu}
            href="/app/colleges"
            className="block text-gray-700 px-6 py-2"
          >
            Colleges
          </Link>
          <Link
            onClick={toggleMenu}
            href="/eligibility"
            className="block text-gray-700 px-6 py-2"
          >
            Eligibility
          </Link>
          {/* <Link href="/blogs" className="block text-gray-700 px-6 py-2">
            Blogs
          </Link> */}
          <Link
            onClick={toggleMenu}
            href="/#contact"
            className="block text-gray-700 px-6 py-2"
          >
            Contact us
          </Link>
          <Link
            href="https://wa.me/918089706931"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-white bg-[#0b7077] mb-10 hover:bg-[#376063] px-6 py-2 rounded-lg"
          >
            <RiPhoneFill className="inline-block mr-1" /> +91 80897 06931
          </Link>
        </div>
      )}
    </nav>
  );
}
