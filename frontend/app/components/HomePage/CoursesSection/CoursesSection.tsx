"use client";

import { CourseCard } from "../CourseCard/CourseCard";

import { homeCourses } from "./coursesData";

const CoursesSection: React.FC = () => {
  return (
    <section
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      aria-labelledby="home-courses-heading"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="home-courses-heading"
          className="text-center font-sfPro text-2xl font-bold tracking-tight text-[#083700] sm:text-3xl lg:text-4xl"
        >
          Check out the courses we offer
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {homeCourses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
