import CourseOfferSection from "../CourseOffer/CourseOfferSection";
import { withBasePath } from "@/lib/basePath";

const ProductDesignOffer: React.FC = () => {
    return (
        <CourseOfferSection
            tag="About the course"
            heading="What we offer?"
            description="Our Product Design program teaches you how to design intuitive, user-centered digital products from start to finish. Learn how to solve real user problems through research, wireframing, prototyping, and high-fidelity design using industry-standard tools."
            imageSrc={withBasePath("/images/fullstack-offer.png")}
            imageAlt="Product design offer"
            modules={[
                {
                    id: 1,
                    title: "UI/UX design fundamentals",
                    details:
                        "Learn core principles of user interface and user experience design, including layout, typography, color systems, and usability best practices.",
                },
                {
                    id: 2,
                    title: "User research & prototyping",
                    details:
                        "Understand user behavior through research and translate insights into wireframes and interactive prototypes using tools like Figma.",
                },
                {
                    id: 3,
                    title: "Real-world product projects",
                    details:
                        "Work on end-to-end product design projects—from idea to final design—building a portfolio that showcases your problem-solving and design thinking skills.",
                },
            ]}
            buttonText="Enroll now"
        />
    );
};

export default ProductDesignOffer;