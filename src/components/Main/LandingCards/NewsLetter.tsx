"use client";

import sendNotificationMail from "@/Utils/emailjs";
import { Input } from "antd";
import { sendResponse } from "next/dist/server/image-optimizer";
import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Newsletter() {
  const [email, setEmail] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendNotificationMail(
      {
        email: email,
        message: `Pleased to inform you that we have received a new subscription to our newsletter by ${email}. Please ensure the subscriber's details are updated in our mailing list and that they are included in the next newsletter distribution.`,
        time: new Date().toLocaleString(),
      },
      "template_3p8uwco"
    );
    setEmail("");
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <div className=" flex md:flex-row flex-col items-center justify-between bg-gradient-to-r from-[#0D9488] to-[#064E3B] py-8 px-4 sm:px-6 md:px-8 rounded-xl shadow-md">
      <div className="flex items-center space-x-4">
        <div>
          <img
            src="/images/others/image.png"
            alt="Newsletter Icon"
            className="md:h-28 md:w-28 object-cover"
          />
        </div>
        <div className="text-white">
          <h2 className="text-xl font-semibold">Subscribe to our Newsletter</h2>
          <p className="text-sm">
            Stay updated with the latest College news, Exam alerts, and Academic
            updates!
          </p>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="mt-4 flex gap-x-1">
          <Input
            required
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your Email"
            style={{ borderRadius: "14px" }}
            prefix={<MdOutlineEmail className="text-gray-500" />}
            className="p-2 w-full bg-[#F4F4F5] focus:outline-none focus:ring-2 focus:ring-teal-400 flex justify-center items-center"
          />
          <button
            type="submit"
            className="bg-teal-500 text-white shadow-2xl p-2 rounded-full hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            <MdKeyboardArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
}
