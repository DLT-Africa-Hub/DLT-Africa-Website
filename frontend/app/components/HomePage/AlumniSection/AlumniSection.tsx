"use client";

import { AlumniCard } from "./AlumniCard";
import { alumniTestimonials } from "./alumniData";

const AlumniSection: React.FC = () => {
  return (
    <section
      className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="home-alumni-heading"
    >
      <div className="w-full">
        <h2
          id="home-alumni-heading"
          className="text-center font-sfPro text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"
        >
          <span className="text-[#083700]">What our </span>
          <span className="text-[#FFA751]">Alumni</span>
          <span className="text-[#083700]"> has to say?</span>
        </h2>

        <div className="mt-12 flex flex-col items-center justify-center gap-8 md:mt-16 md:flex-row md:items-end md:gap-4 lg:gap-6">
          {alumniTestimonials.map(({ id, ...item }) => (
            <AlumniCard key={id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniSection;
