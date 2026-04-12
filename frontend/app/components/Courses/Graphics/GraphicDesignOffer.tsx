import CourseOfferSection from "../CourseOffer/CourseOfferSection";
import { withBasePath } from "@/lib/basePath";

const GraphicDesignOffer: React.FC = () => {
    return (
        <CourseOfferSection
            tag="About the course"
            heading="What we offer?"
            description="Our Graphics Design program equips you with the creative and technical skills needed to bring ideas to life visually. Learn how to design stunning visuals, build strong brand identities, and communicate effectively through design using industry-standard tools."
            imageSrc={withBasePath("/images/fullstack-offer.png")}
            imageAlt="Graphics design offer"
            modules={[
                {
                    id: 1,
                    title: "Comprehensive design training",
                    details:
                        "Learn the fundamentals of design including color theory, typography, layout, and composition using tools like Photoshop and Illustrator.",
                },
                {
                    id: 2,
                    title: "Portfolio-driven projects",
                    details:
                        "Work on real-world design projects such as logos, flyers, social media graphics, and branding materials to build a strong portfolio.",
                },
                {
                    id: 3,
                    title: "Branding & visual storytelling",
                    details:
                        "Understand how to create compelling brand identities and communicate ideas effectively through visuals that resonate with audiences.",
                },
            ]}
            buttonText="Enroll now"
        />
    );
};

export default GraphicDesignOffer;