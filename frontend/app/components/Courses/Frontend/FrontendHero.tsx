import CourseSection from "../CoursesHero/CourseHeroSec";

interface SectionDataItem {
  id: number;
  intro: string;
  title: string;
  text: string;
  headline1: string;
  headline2: string;
  headline3: string;
  button1: string;
  button2: string;
  img: string;
}

const sectionData: SectionDataItem[] = [
  {
    id: 1,
    intro: "Registrations are now open!",
    title: "Become a Frontend Developer",
    text: "Learn to build complete web applications from start to finish — combining frontend design, backend logic, and database management into one powerful skill set.",
    headline1:
      "Graduate in six months, part-time, and start working in the high-demand field of software development.",
    headline2:
      "Meet regularly with an experienced mentor to ask the questions you care about.",
    headline3:
      "Build your coding skills and launch your software engineering career",
    button1: "Enroll now",
    button2: "Speak with Us",
    img: "/images/front-end-hero.png",
  },
];

const FullStackHero: React.FC = () => {
  return (
    <section className="course bg-hero-bg" id="course">
      <div>
        {sectionData.map(({ id, ...rest }) => (
          <CourseSection key={id} {...rest} showCheckbox={true} />
        ))}
      </div>
    </section>
  );
};

export default FullStackHero;