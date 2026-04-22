import CourseOfferSection from "../CourseOffer/CourseOfferSection";
import { withBasePath } from "@/lib/basePath";

const BackendOffers: React.FC = () => {
  return (
    <CourseOfferSection
      tag="About the course"
      heading="What we offer?"
      description="This Backend Development program is built to take you from theory to real-world systems. You’ll design and build scalable APIs, work with databases, handle authentication, and understand how production-grade backend systems are structured and deployed."
      imageSrc={withBasePath("/images/backend-dev.jpg")}
      imageAlt="Backend development offer"
      modules={[
        {
          id: 1,
          title: "Production-grade backend engineering",
          details:
            "Build and structure real backend systems using modern frameworks, clean architecture, and industry best practices used in real companies.",
        },
        {
          id: 2,
          title: "APIs, databases & system design",
          details:
            "Design RESTful APIs, manage relational and NoSQL databases, and understand how data flows across services at scale.",
        },
        {
          id: 3,
          title: "Real-world projects & deployment",
          details:
            "Work on backend-heavy projects, implement authentication, handle errors, and deploy your services to the cloud like a real engineer.",
        },
      ]}
      buttonText="Enroll now"
    />
  );
};

export default BackendOffers;
