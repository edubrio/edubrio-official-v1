// Footer.tsx
import React from "react";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { IoLogoLinkedin } from "react-icons/io";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="md:h-[400px] h-[113vh] overflow-hidden">
      <footer
        style={{
          backgroundImage: "url('/images/backgrounds/footer.png')",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div className="container py-8 p md:px-10 px-2 bg-gradient-to-t from-[#D2E6E4] to-transparent mx-auto text-center md:text-left mt-20">
          {/* About Section */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            {/* Logo Section */}
            <div>
              <div className="flex justify-center md:justify-start mb-8">
                <img
                  src="/images/logo/image.png"
                  alt="EduBrio"
                  className="h-20"
                />
              </div>
              <p className="text-xs text-[#045CA4] mb-4">
                EduBrio located in Bangalore is India's best educational centre
                offering student's support services such as career counselling
                and admission guidance.
              </p>
            </div>
            <div className="md:ml-10">
              <h5 className="text-lg md:text-start text-center font-semibold text-[#0B7077]">
                Quick Links
              </h5>
              <ul className="text-xs md:text-start text-center text-[#045CA4] space-y-2">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/app/courses">Courses</Link>
                </li>
                <li>
                  <Link href="/app/colleges">Colleges</Link>
                </li>
                <li>
                  <Link href="/eligibility">Eligibility</Link>
                </li>
                <li>
                  {/* <Link href="#">Blogs</Link>
                </li>
                <li>
                  <Link href="#">News</Link>
                </li>
                <li>
                  <Link href="#">Articles</Link>
                </li>
                <li>
                  <Link href="/placement">Terms & Conditions</Link> */}
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg md:text-start text-center font-semibold text-[#0B7077]">
                About
              </h5>
              <ul className="text-xs md:text-start text-center text-[#045CA4] space-y-2">
                {/* <li>
                  <Link href="#">About us</Link>
                </li>
                <li>
                  <Link href="#">Why Study in Bangalore</Link>
                </li>
                <li>
                  <Link href="#">Awards</Link>
                </li>
                <li>
                  <Link href="#">Success Stories</Link>
                </li>
                <li>
                  <Link href="#">Students Talk</Link>
                </li> */}
                <li>
                  <Link href="#contact">Contact us</Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg md:text-start text-center font-semibold text-[#0B7077]">
                Services
              </h5>
              <ul className="text-xs md:text-start text-center text-[#045CA4] space-y-2">
                <li>
                  <Link href="/general/services">Our Services</Link>
                </li>
                <li>
                  <Link href="/general/admissions">Admission Process</Link>
                </li>
                {/* <li>
                  <Link href="#">Rankings</Link>
                </li> */}
                <li>
                  <Link href="/general/carrier">Careers</Link>
                </li>
                <li>
                  <Link href="/general/scholarships">Scholarships</Link>
                </li>
                <li>
                  <Link href="/general/entrance-exam">Entrance Exams</Link>
                </li>
                <li>
                  <Link href="/placement">Placement Cell</Link>
                </li>
              </ul>
            </div>

            {/* Contact & Social Media */}
            <div className="">
              <h5 className="text-lg md:text-start text-center font-semibold text-[#0B7077]">
                Reach Us
              </h5>
              <div className="flex flex-col items-center md:items-start space-y-2 md:space-x-4 text-xs text-[#045CA4]">
                <p>+91 773-6406931 , +91 861-8100494</p>
                <p>sebastian@edubrio.com</p>
                <p className="md:text-start text-center">
                  #401/H, 11th Floor, Brigade Gardens, Whitefield, Bangalore,
                  Karnataka - 560001
                </p>
                <p className="md:text-start text-center">
                  4th floor ksrtc, Anagamly, Ernakulam, Kerala
                </p>
              </div>
              <h5 className="text-lg md:text-start text-center font-semibold mt-5 text-[#0B7077]">
                Follow Us
              </h5>
              <div className="flex space-x-4 md:justify-start justify-center mt-2">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaSquareXTwitter color="#045CA4" size={25} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <CiFacebook color="#045CA4" size={26} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaSquareInstagram color="#045CA4" size={25} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <IoLogoLinkedin
                    color="#045CA4"
                    size={29}
                    className="mt-[-2px]"
                  />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaYoutube color="#045CA4" size={34} className="mt-[-5px]" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-xs text-[#045CA4] text-center">
            <p>&copy; EduBrio 2025. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
