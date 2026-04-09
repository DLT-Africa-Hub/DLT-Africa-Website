import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export type Module = {
    id: number;
    title: string;
    details: string;
};

type CourseOfferSectionProps = {
    tag: string;
    heading: string;
    description: string;
    imageSrc: string;
    imageAlt?: string;
    modules: Module[];
    buttonText: string;
};

export default function CourseOfferSection({
    tag,
    heading,
    description,
    imageSrc,
    imageAlt = "section image",
    modules,
    buttonText,
}: CourseOfferSectionProps) {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggleModule = (id: number) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="bg-[#F6F6F6] px-6 py-16 md:px-12 lg:px-20 font-sfPro">
            <div className="mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">

                {/* LEFT CONTENT */}
                <div>
                    <p className="mb-2 text-[18px] font-normal text-[#FEA650]">{tag}</p>

                    <h2 className="mb-5 text-[48px] font-semibold text-[#252A24]">
                        {heading}
                    </h2>

                    <p className="mb-[60px] text-[18px] font-normal leading-[170%] text-[#666]">
                        {description}
                    </p>

                    <div className="space-y-6">
                        {modules.map((module) => {
                            const isOpen = openId === module.id;

                            return (
                                <div key={module.id} className="border-b border-[#D5D5D5] pb-4">
                                    <button
                                        type="button"
                                        onClick={() => toggleModule(module.id)}
                                        className="flex w-full items-center gap-4 text-left"
                                    >
                                        {isOpen ? (
                                            <FiMinus className="text-xl text-[#1C1C1C]" />
                                        ) : (
                                            <FiPlus className="text-xl text-[#1C1C1C]" />
                                        )}

                                        <span className="font-semibold text-[20px] leading-[100%] text-[#292929]">
                                            {module.title}
                                        </span>
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="pl-8 text-[18px] font-normal leading-[170%] text-[#5F5F5F]">
                                            {module.details}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* IMAGE */}
                <div>
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="h-[635px] w-[945px] rounded-[20px] object-cover"
                    />
                </div>
            </div>

            {/* BUTTON */}
            <div className="mt-16 flex justify-center">
                <button className="rounded-lg bg-[#1F7A0C] px-8 py-3 text-white transition hover:bg-[#176608]">
                    {buttonText}
                </button>
            </div>
        </section>
    );
}