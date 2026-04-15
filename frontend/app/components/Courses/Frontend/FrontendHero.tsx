import CourseSection from "../CoursesHero/CourseHeroSec";
import { withBasePath } from "@/lib/basePath";

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
    id: 2,
    intro: "Registrations are now open!",
    title: "Become a Frontend Developer",
    description: "Master the art of building complete frontend web applications from scratch. Combine responsive design, API integration, CRUD operations, and state management to create powerful and dynamic web applications.",
    virtual: "Virtual",
    physical: "On-site",
    virtualPrice: "₦100,000",
    physicalPrice: "₦420,000",
    button1: "Enroll now",
    button2: "Speak with Us",
    img: withBasePath("/images/hm-fs.jpg"),
  },
];

const FrontendHero: React.FC = () => {
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

export default FrontendHero;