"use client";

import Image from "next/image";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";

import { withBasePath } from "@/lib/basePath";

interface TeamMember {
  id: number;
  img: string;
  name: string;
  role: string;
  description: string;
  linkedinLink: string | null;
  twitterLink: string;
}
function withHttps(url: string): string {
  const trimmed = url.trim();
  if (!trimmed) return "#";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

const teamMembers: TeamMember[] = [
  // {
  //   id: 1,
  //   img: "/images/soliu.jpeg",
  //   name: "Soliu Ahmad",
  //   role: "Software Developer",
  //   description:
  //     "Soliu is a software developer, he is a very good team worker. He is always ready to face any challenging projects.",
  //   linkedinLink: "https://www.linkedin.com/in/soliu-ahmad-31b049240",
  //   twitterLink: "https://twitter.com/Ahmadsoliu1",
  // },
  // {
  //   id: 2,
  //   img: "/images/naheem.jpeg",
  //   name: "Naheem Oloyede",
  //   role: "Software Developer & Team Lead",
  //   description:
  //     "Naheem is a witty and result oriented full stack developer. Naheem is astuteness and zeal for getting excellent results coupled with his exceptional leadership, and HR skills earned him job at DLT Africa..",
  //   linkedinLink: "https://www.linkedin.com/in/naheem-oloyede-593809251",
  //   twitterLink: "https://twitter.com/OloyedeNaheem",
  // },
  // {
  //   id: 3,
  //   img: "/images/kenny.png",
  //   name: "Kehinde Abubakar",
  //   role: "Software Developer",
  //   description:
  //     "Kehinde is a strong software developer and a dependable team player. He consistently brings a collaborative attitude to every project and doesn’t shy away from difficult or complex challenges. He’s the kind of engineer who steps up, takes ownership, and delivers.",
  //   linkedinLink: "https://www.linkedin.com/in/kehinde-abubakar/",
  //   twitterLink: "https://twitter.com/kennySpec",
  // },
  {
    id: 4,
    img: withBasePath("/images/abdullah.jpeg"),
    name: "Abdullah Raji",
    role: "Data and Infra Engineer",
    description:
      "With a passion for coding, I dedicate my expertise to shaping innovative solutions in technology.",
    linkedinLink: "https://www.linkedin.com/in/alameer98",
    twitterLink: "https://twitter.com/17_alAmeer",
  },
  {
    id: 5,
    img: withBasePath("/images/anate.jpeg"),
    name: "Aliyu Anate",
    role: "Full Stack Developer",
    description:
      "Creative software engineer blending innovation with hard work and humor for impactful solutions.",
    linkedinLink: "https://www.linkedin.com/in/aliyu-anate-9773b22b8",
    twitterLink: "https://twitter.com/anate669288",
  },
  {
    id: 6,
    img: withBasePath("/images/fawaz.jpeg"),
    name: "Fawaz Dada",
    role: "Design Lead | Branding, Visual & Logo design",
    description:
      "A highly creative, fast-working designer who grasps briefs quickly and applies strong design principles to craft clear, visually effective work.",
    linkedinLink: "https://www.linkedin.com/in/dada-fawaz-3399bb1a6",
    twitterLink: "https://twitter.com/dadaXxf",
  },
  {
    id: 7,
    img: withBasePath("/images/seyi.jpeg"),
    name: "Oluwaseyi Abolaji",
    role: "Product Designer & Manager",
    description:
      "Product designer with a computer science background—balancing user needs with business goals to make sound design decisions.",
    linkedinLink: "https://www.linkedin.com/in/oluwaseyi-abolaji-8b936a213",
    twitterLink: "https://twitter.com/Oluwaseyi_7",
  },
  // {
  //   id: 8,
  //   img: "/images/herlew.jpeg",
  //   name: "Aliu Musa",
  //   role: "Chief Servant Officer",
  //   description:
  //     "Aliu Musa has wealth of experience in Software Engineering and Business Operations, having worked with top web3 companies across the world including OKX, Real Items and Celo Foundation  and also worked at Arbitrum Foundation as a Senior Program Manager.",
  //   linkedinLink: "https://www.linkedin.com/in/aliumusa",
  //   twitterLink: "https://twitter.com/herlew99",
  // },
];

const Team: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#FAFBFA] via-white to-[#F4F9F2] px-4 pb-28 pt-24 sm:px-6 lg:px-8"
      aria-labelledby="team-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(28,120,0,0.08),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-14 text-center sm:mb-16">
          <p className="font-sfPro text-xs font-semibold uppercase tracking-[0.2em] text-[#1C7800]/90">
            People
          </p>
          <h1
            id="team-heading"
            className="font-sfPro mt-3 text-3xl font-bold tracking-tight text-[#1C1C1C] sm:text-4xl lg:text-[2.5rem] lg:leading-tight"
          >
            Meet the{" "}
            <span className="bg-gradient-to-r from-[#1C7800] to-[#2a9d00] bg-clip-text text-transparent">
              team
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-poppins text-sm leading-relaxed text-[#1C1C1C]/60 sm:text-base">
            The people behind DLT Africa—building products, curriculum, and
            community.
          </p>
          <div
            className="mx-auto mt-8 h-px w-16 bg-gradient-to-r from-transparent via-[#FC7C13]/60 to-transparent"
            aria-hidden
          />
        </header>

        <ul className="grid list-none gap-6 sm:gap-8 md:grid-cols-2">
          {teamMembers.map((member) => (
            <li key={member.id}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#E8ECF0] bg-white/90 shadow-[0_4px_24px_-4px_rgba(28,28,28,0.06)] transition duration-300 hover:border-[#1C7800]/25 hover:shadow-[0_20px_40px_-12px_rgba(28,120,0,0.12)] sm:flex-row sm:items-stretch">
                <div
                  className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#1C7800] via-[#2a9d00] to-[#FC7C13] opacity-90 transition group-hover:opacity-100"
                  aria-hidden
                />

                <div className="relative aspect-[5/4] w-full shrink-0 overflow-hidden bg-neutral-100 sm:aspect-square sm:w-[42%] sm:max-w-[13rem]">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 220px"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/[0.08] to-transparent opacity-0 transition group-hover:opacity-100"
                    aria-hidden
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-center p-6 sm:p-7">
                  <h2 className="font-sfPro text-xl font-semibold tracking-tight text-[#1C1C1C] sm:text-[1.35rem]">
                    {member.name}
                  </h2>
                  <p className="mt-2 inline-flex w-fit rounded-full bg-[#EFFFE2] px-3 py-1 font-poppins text-xs font-semibold text-[#1C7800]">
                    {member.role}
                  </p>
                  <p className="mt-4 font-poppins text-[0.9375rem] leading-relaxed text-[#1C1C1C]/75">
                    {member.description}
                  </p>

                  <div
                    className="mt-6 flex flex-wrap items-center gap-2"
                    aria-label={`Social links for ${member.name}`}
                  >
                    {member.linkedinLink ? (
                      <a
                        href={withHttps(member.linkedinLink)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F5F5] text-[#0A66C2] transition hover:bg-[#E8F3FC] hover:text-[#084d94] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A66C2]"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <BsLinkedin className="h-[1.35rem] w-[1.35rem]" aria-hidden />
                      </a>
                    ) : null}
                    <a
                      href={withHttps(member.twitterLink)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F5F5] text-[#1C1C1C] transition hover:bg-[#EAEAEA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1C1C]"
                      aria-label={`${member.name} on X`}
                    >
                      <BsTwitterX className="h-[1.35rem] w-[1.35rem]" aria-hidden />
                    </a>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Team;
