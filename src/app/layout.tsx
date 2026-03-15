import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import Navbar from "@/components/General/Navbar";
import Footer from "@/components/General/Footer";
import { CourseProvider } from "@/context/CoursesContext";
import AntdAppProvider from "@/components/General/AntdAppProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EduBrio - Best Educational Counselling Centre in India",
  description:
    "Top educational consultancy in bangalore | Top educational consultancy in kerala | India’s best educational consultancy | India’s best educational centre offering student’s support services such as career counselling and admission guidance.",
  icons: {
    icon: "/images/logo/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="min-h-screen">
          <CourseProvider>
            <AntdRegistry>
            <AntdAppProvider>{children}</AntdAppProvider>
          </AntdRegistry>
          </CourseProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
