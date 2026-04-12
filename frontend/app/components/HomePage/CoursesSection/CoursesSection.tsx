"use client";

import { CourseCard } from "../CourseCard/CourseCard";

import { homeOnlineCourses, homeOnsiteCourse } from "./coursesData";

const CoursesSection: React.FC = () => {
  return (
    <section
      id="courses"
      className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-20 sm:scroll-mt-28 lg:px-8 lg:py-24"
      aria-labelledby="home-courses-online-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div>
          <h2
            id="home-courses-online-heading"
            className="font-sfPro text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl lg:text-4xl"
          >
            Our Online courses
          </h2>
          <p className="mt-2 max-w-2xl font-poppins text-sm leading-relaxed text-[#5C6670] sm:text-base">
            Join our online classes from the comfort of your home, from anywhere
            in the world.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {homeOnlineCourses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24">
          <h2
            id="home-courses-onsite-heading"
            className="font-sfPro text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl lg:text-4xl"
          >
            Our On-site courses
          </h2>
          <p className="mt-2 max-w-2xl font-poppins text-sm leading-relaxed text-[#5C6670] sm:text-base">
            Need more focus? You can register for our on-site courses and come
            down to our bootcamp for more training intensity.
          </p>

          <div className="mt-8 sm:mt-10">
            <CourseCard {...homeOnsiteCourse} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
