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
    id: 1,
    intro: "Registrations are now open!",
    title: "Become a Fullstack Developer",
    description:
      "Learn to build complete web applications from start to finish — combining frontend design, backend logic, and database management into one powerful skill set.",
    virtual: "Virtual",
    physical: "On-site",
    virtualPrice: "₦100,000",
    physicalPrice: "₦640,000",
    button1: "Enroll now",
    button2: "Speak with Us",
    img: "/images/hm-fs.jpg",
  },
];

const FullStackHero: React.FC = () => {
  return (
    <section
      className="course bg-hero-bg"
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

export default FullStackHero;