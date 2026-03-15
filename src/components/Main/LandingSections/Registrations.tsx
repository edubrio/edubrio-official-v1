import RegistrationForm from "@/components/General/Registration";
import React from "react";

export default function Registrations() {
  return (
    <div
      id="registration"
      className="w-full px-10 mb-10 bg-[#D2E6E4] via-[#D2E6E4] mt-20 py-20 flex"
      style={{
        borderBottomRightRadius: "60px",
        borderBottomLeftRadius: "60px",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center">
        <img
          src="/icons/signup/image.png"
          className="h-[400px] w-[450px] object-contain md:ml-40"
        />
        <RegistrationForm />
      </div>
    </div>
  );
}
