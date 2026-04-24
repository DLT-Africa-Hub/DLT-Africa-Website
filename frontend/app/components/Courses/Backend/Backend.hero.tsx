import { withBasePath } from "@/lib/basePath";
import CourseSection from "../CoursesHero/CourseHeroSec";

interface SectionDataItem {
  id: number;
  intro: string;
  title: string;
  description: string;
  button1: string;
  virtual: string;
  physical: string;
  virtualPrice: string;
  physicalPrice: string;
  button2: string;
  img: string;
}

const sectionData: SectionDataItem[] = [
  {
    id: 3,
    intro: "Registrations are now open!",
    title: "Become a Backend Developer",
    description:
      "Master the art of building complete backend web applications from scratch. Combine backend logic, database management, and API development into one powerful skill set.",
    virtual: "Virtual",
    physical: "On-site",
    virtualPrice: "₦150,000",
    physicalPrice: "Not available",
    button1: "Enroll now",
    button2: "Speak with Us",
    img: withBasePath("/images/backend-dev.jpg"),
  },
];

const BackendHero: React.FC = () => {
  return (
    <section className="course bg-hero-bg relative overflow-hidden" id="course">
      <div className="absolute top-[500px]  blur-[300px]  w-[1832px] h-[1832px] rounded-full bg-[#89FF44] opacity-50" />
      <div>
        {sectionData.map(({ id, ...rest }) => (
          <CourseSection key={id} {...rest} showCheckbox={true} />
        ))}
      </div>
    </section>
  );
};

export default BackendHero;
