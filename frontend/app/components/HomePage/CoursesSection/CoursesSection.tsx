"use client";

import { CourseCard } from "../CourseCard/CourseCard";

import { homeFeaturedCourse, homeGridCourses } from "./coursesData";

const CoursesSection: React.FC = () => {
  return (
    <section
      id="courses"
      className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-20 sm:scroll-mt-28 lg:px-8 lg:py-24"
      aria-labelledby="home-courses-heading"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="home-courses-heading"
          className="text-center font-sfPro text-2xl font-bold tracking-tight text-[#083700] sm:text-3xl lg:text-4xl"
        >
          Check out the courses we offer
        </h2>

        <div className="mt-10 space-y-8 sm:mt-12 lg:mt-14 lg:space-y-10">
          <CourseCard {...homeFeaturedCourse} />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {homeGridCourses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
