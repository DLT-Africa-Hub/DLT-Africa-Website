import CourseOfferSection from "../CourseOffer/CourseOfferSection";
import { withBasePath } from "@/lib/basePath";

const FullstackOffer: React.FC = () => {
    return (
        <CourseOfferSection
            tag="About us"
            heading="What we offer?"
            description="With DLT Africa, top talents gain access to extensive training spanning through full-stack and smart contract development. Top projects receive all needed technical support in building their projects to allow them focus on the business side of the project through our exceptional in-house engineers."
            imageSrc={withBasePath("/images/offer-image.jpg")}
            imageAlt="Fullstack development offer"
            modules={[
                {
                    id: 1,
                    title: "300 hours of extensive training",
                    details:
                        "Embark on a transformative journey with DLTAfrica's comprehensive Full-Stack Curriculum, designed to empower aspiring developers and seasoned professionals alike.",
                },
                {
                    id: 2,
                    title: "Guidance on setting up your own coding environment",
                    details:
                        "DLT Africa offers comprehensive technical support before, during and after product launch. We have the burden of building product away from non-technical founders to allow them focus on building the business!",
                },
                {
                    id: 3,
                    title: "A progress-oriented user interface and experience",
                    details:
                        "Our post product launch support includes regular implementation of user request and 24/7 dedicated developers support for all projects in our portfolio.",
                },
            ]}
            buttonText="Enroll now"
        />
    );
}

export default FullstackOffer;