"use client";

import Link from "next/link";

const values = [
  {
    title: "Cohort-Based Tech Training",
    description:
      "We run intensive, hands-on training across Frontend, Backend, Full-Stack, Product UI/UX and Graphics Design with guided projects and mentor feedback.",
  },
  {
    title: "Technical Product Support",
    description:
      "Beyond learning, we support founders and teams with implementation, product improvements, and engineering support so ideas can move from concept to shipped product.",
  },
  {
    title: "Talent Pipeline for Teams",
    description:
      "Through our ecosystem, companies can access trained and vetted talent ready to contribute across product, design, and engineering roles.",
  },
];

const stats = [
  { label: "Hours of structured training", value: "300+" },
  { label: "Core learning tracks", value: "5" },
  { label: "Technical support lifecycle", value: "Pre to Post Launch" },
];

export default function AboutUsPage() {
  return (
    <main className="bg-[#F7FAF8]">
      <section className="px-4 pb-12 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[#E4E8EC] bg-white p-8 shadow-sm sm:p-12">
          <p className="font-poppins text-sm font-semibold text-[#1C7800]">About DLT Africa</p>
          <h1 className="mt-3 max-w-4xl font-sfPro text-4xl font-bold leading-tight text-[#083700] sm:text-5xl">
            We train talent, support products, and help teams scale with technology.
          </h1>
          <p className="mt-5 max-w-3xl font-poppins text-base leading-relaxed text-[#5C6670]">
            DLT Africa is a practical tech ecosystem for learners, founders, and organizations.
            We provide intensive cohort training, help product teams build and improve digital
            solutions, and connect businesses with capable talent from our growing community.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/application"
              className="rounded-xl bg-[#1C7800] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#166100]"
            >
              Enroll in a Cohort
            </Link>
            <Link
              href="/talent-pool"
              className="rounded-xl border border-[#D6DEE6] bg-white px-5 py-3 text-sm font-semibold text-[#2E3A46] transition hover:border-[#1C7800] hover:text-[#1C7800]"
            >
              Hire Talent
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[#E4E8EC] bg-white p-6 text-center shadow-sm"
            >
              <p className="font-sfPro text-3xl font-bold text-[#083700]">{item.value}</p>
              <p className="mt-1 font-poppins text-sm text-[#5C6670]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[#E4E8EC] bg-white p-8 shadow-sm sm:p-12">
          <h2 className="font-sfPro text-3xl font-bold text-[#083700] sm:text-4xl">
            What we actually do
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-[#EEF1F4] bg-[#F9FBFA] p-5"
              >
                <h3 className="font-sfPro text-xl font-semibold text-[#083700]">{value.title}</h3>
                <p className="mt-2 font-poppins text-sm leading-relaxed text-[#5C6670]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </main>
  );
}
