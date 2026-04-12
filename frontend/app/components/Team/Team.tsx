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
    role: "Software Developer",
    description:
      "With a passion for coding, I dedicate my expertise to shaping innovative solutions in technology.",
    linkedinLink: "https://www.linkedin.com/in/alameer98",
    twitterLink: "https://twitter.com/17_alAmeer",
  },
  {
    id: 5,
    img: withBasePath("/images/anate.jpeg"),
    name: "Aliyu Anate",
    role: "Software Developer",
    description:
      "Creative software engineer blending innovation with hard work and humor for impactful solutions.",
    linkedinLink: "https://www.linkedin.com/in/aliyu-anate-9773b22b8",
    twitterLink: "https://twitter.com/anate669288",
  },
  {
    id: 6,
    img: withBasePath("/images/fawaz.jpeg"),
    name: "Fawaz Dada",
    role: "Graphic Designer",
    description:
      "A highly creative, fast-working designer who grasps briefs quickly and applies strong design principles to craft clear, visually effective work.",
    linkedinLink: null,
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
      className="bg-white px-4 pb-28 pt-24 sm:px-6 lg:px-8"
      aria-labelledby="team-heading"
    >
      <div className="mx-auto max-w-3xl">
        <header className="mb-16 text-center">
          <h1
            id="team-heading"
            className="font-sfPro text-3xl font-bold tracking-tight text-[#1C1C1C] sm:text-4xl"
          >
            Meet the Team
          </h1>
          <p className="mx-auto mt-3 max-w-lg font-poppins text-sm leading-relaxed text-[#1C1C1C]/55 sm:text-base">
            The people behind DLT Africa—building products, curriculum, and
            community.
          </p>
        </header>

        <ul className="list-none divide-y divide-[#EAEAEA]">
          {teamMembers.map((member) => (
            <li key={member.id} className="py-12 first:pt-0">
              <article className="flex flex-col gap-8 sm:flex-row sm:gap-10">
                <div className="relative mx-auto aspect-square h-[7.5rem] w-[7.5rem] shrink-0 overflow-hidden rounded-2xl bg-neutral-100 ring-1 ring-black/[0.06] sm:mx-0 sm:h-[8.5rem] sm:w-[8.5rem]">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 120px, 136px"
                    loading="lazy"
                  />
                </div>

                <div className="min-w-0 flex-1 text-left">
                  <h2 className="font-sfPro text-xl font-semibold text-[#1C1C1C] sm:text-[1.35rem]">
                    {member.name}
                  </h2>
                  <p className="mt-1 font-poppins text-sm font-medium text-[#1C7800]">
                    {member.role}
                  </p>
                  <p className="mt-4 max-w-prose font-poppins text-[0.9375rem] leading-relaxed text-[#1C1C1C]/72">
                    {member.description}
                  </p>

                  <div
                    className="mt-6 flex items-center gap-2"
                    aria-label={`Social links for ${member.name}`}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center">
                      {member.linkedinLink ? (
                        <a
                          href={withHttps(member.linkedinLink)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#0A66C2] transition hover:opacity-80 focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A66C2]"
                          aria-label={`${member.name} on LinkedIn`}
                        >
                          <BsLinkedin className="h-6 w-6" aria-hidden />
                        </a>
                      ) : null}
                    </span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center">
                      <a
                        href={withHttps(member.twitterLink)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1C1C1C] transition hover:opacity-70 focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1C1C]"
                        aria-label={`${member.name} on X`}
                      >
                        <BsTwitterX className="h-6 w-6" aria-hidden />
                      </a>
                    </span>
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
