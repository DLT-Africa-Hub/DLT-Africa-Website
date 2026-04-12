import CourseOfferSection from "../CourseOffer/CourseOfferSection";

const FrontendOffer: React.FC = () => {
    return (
        <CourseOfferSection
            tag="About the course"
            heading="What we offer?"
            description="With our Frontend Development program, you’ll gain hands-on experience building modern, responsive web applications. Learn how to turn designs into interactive user interfaces using industry-standard tools and frameworks, while mastering best practices used by professional frontend developers."
            imageSrc="/images/fullstack-offer.png"
            imageAlt="Frontend development offer"
            modules={[
                {
                    id: 1,
                    title: "Hands-on frontend training",
                    details:
                        "Learn HTML, CSS, JavaScript, and modern frameworks like React by building real-world projects that strengthen your portfolio.",
                },
                {
                    id: 2,
                    title: "Project-based learning",
                    details:
                        "Work on practical projects including landing pages, dashboards, and fully responsive web apps to gain real industry experience.",
                },
                {
                    id: 3,
                    title: "Modern UI/UX best practices",
                    details:
                        "Understand responsive design, accessibility, performance optimization, and how to create seamless user experiences across devices.",
                },
            ]}
            buttonText="Enroll now"
        />
    );
};

export default FrontendOffer;