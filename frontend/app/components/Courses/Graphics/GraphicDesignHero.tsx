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
    id: 4,
    intro: "Registrations are now open!",
    title: "Become a Graphics Designer",
    description: "Join our dynamic program to master the art of visual storytelling. Learn key skills like branding, typography, color theory, and digital design. Work on real-world projects to create compelling visuals.",
    virtual: "Virtual",
    physical: "On-site",
    virtualPrice: "₦40,000",
    physicalPrice: "₦150,000",
    button1: "Enroll now",
    button2: "Speak with Us",
    img: withBasePath("/images/home-gd.png"),
  },
];

const GraphicDesignHero: React.FC = () => {
  return (
    <section
      className="course bg-[#FFA751]"
      id="course"
    >
      <div>
        {sectionData.map(({ id, ...rest }) => (
          <CourseSection key={id} {...rest} showCheckbox={true} />
        ))}
      </div>
    </section>
  );
};

export default GraphicDesignHero;
