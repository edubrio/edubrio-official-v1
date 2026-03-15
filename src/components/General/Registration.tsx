// // FormComponent.tsx
// "use client";

// import React from "react";
// import { Form, Button, message } from "antd";
// import { FaRegCheckCircle } from "react-icons/fa";
// import sendNotificationMail from "@/Utils/emailjs";

// type FormData = {
//   name: string;
//   email: string;
//   phone: string;
//   course: string;
//   country: string;
//   state: string;
// };

// export default function RegistrationForm() {

//   const onSubmit = async (data: FormData) => {
//     console.log("Form Data Submitted: ", data);
//     try {
//       await sendNotificationMail({});
//       message.success("Your details have been submitted successfully!");
//     } catch (error) {
//       console.error("Error sending email:", error);
//       message.error(
//         "There was an error submitting your details. Please try again later."
//       );
//     }
//   };

//   return (
//     <div
//       id="contact"
//       className="p-3 bg-white rounded-lg border border-[#f4f4f4] shadow-2xl w-[330px] max-w-lg mx-auto"
//     >
//       <div className="pb-3 mb-3 border-b-1 border-[#E4E4E7]">
//         <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#11181C] via-[#12A150] to-[#0A55A0]">
//           Get a Free Counselling!
//         </h2>

//         <p className="text-gray-500 text-xs">
//           Submit your details to get a callback.
//         </p>
//       </div>

//       <Form onFinish={onSubmit}>
//         {/* Name Field */}
//         <div className="border-2 border-[#E4E4E7] rounded-xl py-1 h-12">
//           <label className="block text-xs ml-3 font-medium text-gray-700">
//             Name
//           </label>
//           <input
//             type="text"
//             placeholder="Enter your Name"
//             className="block mt-[-6px] w-full focus:outline-none focus:border-0 px-3 py-1"
//             style={{ border: "none" }}
//           />
//         </div>

//         {/* Email Field */}
//         <div className="border-2 border-[#E4E4E7] rounded-xl mt-2 py-1 h-12">
//           <label className="block text-xs ml-3 font-medium text-gray-700">
//             Email
//           </label>
//           <input
//             type="email"
//             placeholder="Enter your Email"
//             className="block mt-[-6px] w-full focus:outline-none focus:border-0 px-3 py-1"
//             style={{ border: "none" }}
//           />
//         </div>

//         {/* Phone Field */}
//         <div className="border-2 border-[#E4E4E7] rounded-xl mt-2 py-1 h-12">
//           <label className="block text-xs ml-3 font-medium text-gray-700">
//             Phone
//           </label>
//           <input
//             type="tel"
//             placeholder="Enter your Phone number"
//             className="block mt-[-6px] w-full focus:outline-none focus:border-0 px-3 py-1"
//             style={{ border: "none" }}
//           />
//         </div>

//         {/* Course Field */}

//         <div className="border-2 border-[#E4E4E7] rounded-xl mt-2 py-1 h-12">
//           <label className="block text-xs ml-3 font-medium text-gray-700">
//             Course
//           </label>
//           <div className="p-0 mt-[-6px] ml-[-4px]">
//             <select className="block w-full focus:outline-none focus:border-0 px-3 py-1">
//               <option value="Maharashtra">course 1</option>
//               <option value="Karnataka">course 1</option>
//               <option value="Delhi">course 1</option>
//             </select>
//           </div>
//         </div>

//         {/* Country Field */}
//         <div className="border-2 border-[#E4E4E7] rounded-xl mt-2 py-1 h-12">
//           <label className="block text-xs ml-3 font-medium text-gray-700">
//             Country
//           </label>
//           <input
//             type="text"
//             placeholder="India"
//             className="block mt-[-6px] w-full focus:outline-none focus:border-0 px-3 py-1"
//             defaultValue="India"
//             style={{ border: "none" }}
//           />
//         </div>

//         {/* State Field */}
//         <div className="border-2 border-[#E4E4E7] rounded-xl mt-2 h-12">
//           <label className="block text-xs ml-3 font-medium text-gray-700">
//             State
//           </label>
//           <div className="p-0 mt-[-6px] ml-[-4px]">
//             <select
//               className="block w-full focus:outline-none focus:border-0 px-3 py-1"
//               defaultValue="Maharashtra"
//             >
//               <option value="Andhra Pradesh">Andhra Pradesh</option>
//               <option value="Arunachal Pradesh">Arunachal Pradesh</option>
//               <option value="Assam">Assam</option>
//               <option value="Bihar">Bihar</option>
//               <option value="Chhattisgarh">Chhattisgarh</option>
//               <option value="Goa">Goa</option>
//               <option value="Gujarat">Gujarat</option>
//               <option value="Haryana">Haryana</option>
//               <option value="Himachal Pradesh">Himachal Pradesh</option>
//               <option value="Jharkhand">Jharkhand</option>
//               <option value="Karnataka">Karnataka</option>
//               <option value="Kerala">Kerala</option>
//               <option value="Madhya Pradesh">Madhya Pradesh</option>
//               <option value="Maharashtra">Maharashtra</option>
//               <option value="Manipur">Manipur</option>
//               <option value="Meghalaya">Meghalaya</option>
//               <option value="Mizoram">Mizoram</option>
//               <option value="Nagaland">Nagaland</option>
//               <option value="Odisha">Odisha</option>
//               <option value="Punjab">Punjab</option>
//               <option value="Rajasthan">Rajasthan</option>
//               <option value="Sikkim">Sikkim</option>
//               <option value="Tamil Nadu">Tamil Nadu</option>
//               <option value="Telangana">Telangana</option>
//               <option value="Tripura">Tripura</option>
//               <option value="Uttar Pradesh">Uttar Pradesh</option>
//               <option value="Uttarakhand">Uttarakhand</option>
//               <option value="West Bengal">West Bengal</option>
//             </select>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-end">
//           <button
//             type="submit"
//             className="mt-4 w-1/3 flex justify-center items-center p-2 gap-x-2"
//             style={{
//               background: "#0b7077",
//               color: "#fff",
//               borderRadius: "12px",
//             }}
//           >
//             <FaRegCheckCircle color="white" />
//             Submit
//           </button>
//         </div>
//       </Form>
//     </div>
//   );
// }
"use client";

import React, { useState } from "react";
import { App, Form, Spin } from "antd";
import { FaRegCheckCircle } from "react-icons/fa";
import sendNotificationMail from "@/Utils/emailjs";

type FormData = {
  name: string;
  email: string;
  phone: string;
  course: string;
  country: string;
  state: string;
};

export default function RegistrationForm() {
  const [form] = Form.useForm();
  const [loadinf, setLoading] = useState(false);
  const { message } = App.useApp();

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      await sendNotificationMail(data); // Pass actual form data
      form.resetFields(); // Reset form fields after successful submission
      message.success("Your details have been submitted successfully!");
      setLoading(false);
    } catch (error) {
      console.error("Error sending email:", error);
      message.error(
        "There was an error submitting your details. Please try again later."
      );
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <div
      id="contact"
      className="p-3 bg-white rounded-lg border border-[#f4f4f4] shadow-2xl w-[330px] max-w-lg mx-auto"
    >
      <div className="pb-3 mb-3 border-b-1 border-[#E4E4E7]">
        <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#11181C] via-[#12A150] to-[#0A55A0]">
          Get a Free Counselling!
        </h2>
        <p className="text-gray-500 text-xs">
          Submit your details to get a callback.
        </p>
      </div>

      <Form form={form} onFinish={onSubmit} layout="vertical">
        {/* Name Field */}
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <div className="border-2 border-[#E4E4E7] rounded-xl py-1 h-12">
            <label className="block text-xs ml-3 font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="block mt-[-6px] w-full focus:outline-none px-3 py-1"
              style={{ border: "none" }}
            />
          </div>
        </Form.Item>

        {/* Email Field */}
        <Form.Item
          className=""
          name="email"
          rules={[
            { required: true, type: "email", message: "Enter a valid email" },
          ]}
        >
          <div className="border-2 border-[#E4E4E7] rounded-xl mt-[-20px] py-1 h-12">
            <label className="block text-xs ml-3 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="block mt-[-6px] w-full focus:outline-none px-3 py-1"
              style={{ border: "none" }}
            />
          </div>
        </Form.Item>

        {/* Phone Field */}
        <Form.Item
          name="phone"
          rules={[
            { required: true, message: "Please enter your phone number" },
          ]}
        >
          <div className="border-2 border-[#E4E4E7] mt-[-20px] rounded-xl py-1 h-12">
            <label className="block text-xs ml-3 font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              placeholder="Enter your Phone number"
              className="block mt-[-6px] w-full focus:outline-none px-3 py-1"
              style={{ border: "none" }}
            />
          </div>
        </Form.Item>

        {/* Course Field */}
        <Form.Item
          name="course"
          rules={[{ required: true, message: "Please select a course" }]}
        >
          <div className="border-2 border-[#E4E4E7] mt-[-20px] rounded-xl py-1 h-12">
            <label className="block text-xs ml-3 font-medium text-gray-700">
              Course
            </label>
            <div className="p-0 mt-[-6px] ml-[-4px]">
              <select className="block w-full focus:outline-none px-3 py-1">
                <option value="">Select course</option>
                <option value="MBBS">
                  MBBS (Bachelor of Medicine and Bachelor of Surgery)
                </option>
                <option value="BDS">BDS (Bachelor of Dental Surgery)</option>
                <option value="BAMS">
                  BAMS (Bachelor of Ayurvedic Medicine and Surgery)
                </option>
                <option value="BHMS">
                  BHMS (Bachelor of Homeopathic Medicine and Surgery)
                </option>
                <option value="B.Sc Nursing">B.Sc Nursing</option>
                <option value="BPT">BPT (Bachelor of Physiotherapy)</option>
                <option value="B.Tech">B.Tech (Bachelor of Technology)</option>
                <option value="BE">BE (Bachelor of Engineering)</option>
                <option value="B.Arch">
                  B.Arch (Bachelor of Architecture)
                </option>
                <option value="BCA">
                  BCA (Bachelor of Computer Applications)
                </option>
                <option value="B.Sc Computer Science">
                  B.Sc Computer Science
                </option>
                <option value="B.Com">B.Com (Bachelor of Commerce)</option>
                <option value="BBA">
                  BBA (Bachelor of Business Administration)
                </option>
                <option value="BA">BA (Bachelor of Arts)</option>
                <option value="B.Sc">B.Sc (Bachelor of Science)</option>
                <option value="LLB">LLB (Bachelor of Laws)</option>
                <option value="BFA">BFA (Bachelor of Fine Arts)</option>
                <option value="B.Ed">B.Ed (Bachelor of Education)</option>
                <option value="BHM">BHM (Bachelor of Hotel Management)</option>
              </select>
            </div>
          </div>
        </Form.Item>

        {/* Country Field */}
        <Form.Item
          name="country"
          initialValue="India"
          rules={[{ required: true }]}
        >
          <div className="border-2 border-[#E4E4E7] mt-[-20px] rounded-xl py-1 h-12">
            <label className="block text-xs ml-3 font-medium text-gray-700">
              Country
            </label>
            <input
              type="text"
              placeholder="India"
              className="block mt-[-6px] w-full focus:outline-none px-3 py-1"
              style={{ border: "none" }}
            />
          </div>
        </Form.Item>

        {/* State Field */}
        <Form.Item
          name="state"
          initialValue="Maharashtra"
          rules={[{ required: true }]}
        >
          <div className="border-2 border-[#E4E4E7] mt-[-20px] rounded-xl h-12">
            <label className="block text-xs ml-3 font-medium text-gray-700">
              State
            </label>
            <div className="p-0 mt-[-6px] ml-[-4px]">
              <select className="block w-full focus:outline-none px-3 py-1">
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
          </div>
        </Form.Item>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            disabled={loadinf}
            type="submit"
            className="w-1/3 flex justify-center items-center p-2 gap-x-2 hover:bg-[#2f5154]"
            style={{
              background: "#0b7077",
              color: "#fff",
              borderRadius: "12px",
            }}
          >
            {loadinf && (
              <Spin spinning={loadinf} size="small" className="mr-2" />
            )}
            <FaRegCheckCircle color="white" />
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}
