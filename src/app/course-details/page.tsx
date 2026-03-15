import React, { Suspense } from "react";
import Loader from "@/components/General/Loader";
import CourseDetails from "@/components/Main/Courses/CourseDetails";

export default function page() {
  return (
    <Suspense fallback={<Loader loading />}>
      <CourseDetails />
    </Suspense>
  );
}
