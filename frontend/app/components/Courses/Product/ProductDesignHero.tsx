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
    title: "Become a Product Designer",
    description:
      "Step into our immersive program to master the principles of product design. Learn UX/UI, prototyping, user research, and design thinking. Dive into real-world projects to create impactful designs.",
    virtual: "Virtual",
    physical: "On-site",
    virtualPrice: "₦40,000",
    physicalPrice: "₦150,000",
    button1: "Enroll now",
    button2: "Speak with Us",
    img: "/images/full-stack-hero.png",
  },
];

const ProductDesignHero: React.FC = () => {
  return (
    <section className="course bg-[#FFA751]" id="course">
      <div>
        {sectionData.map(({ id, ...rest }) => (
          <CourseSection key={id} {...rest} showCheckbox={true} />
        ))}
      </div>
    </section>
  );
};

export default ProductDesignHero;
