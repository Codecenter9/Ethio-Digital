import React from "react";
import { Lightbulb, PenTool, Code, Rocket, Headphones } from "lucide-react";
import SectionHeading from "../layout/SectionHeading";

const steps = [
    {
        title: "Understanding Your Needs",
        desc: "We begin by listening carefully and researching the best solutions for your goals.",
        icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
        color: "from-yellow-400/30 via-orange-400/20 to-pink-400/30",
    },
    {
        title: "Creative Design & Planning",
        desc: "We shape ideas into clear designs, strategies, and content that fit your vision.",
        icon: <PenTool className="w-6 h-6 text-pink-400" />,
        color: "from-pink-400/30 via-purple-400/20 to-indigo-400/30",
    },
    {
        title: "Building & Development",
        desc: "We create modern websites, apps, campaigns, and visuals with attention to detail.",
        icon: <Code className="w-6 h-6 text-blue-400" />,
        color: "from-blue-400/30 via-cyan-400/20 to-emerald-400/30",
    },
    {
        title: "Launch & Delivery",
        desc: "We test, finalize, and deliver your project to the world with confidence.",
        icon: <Rocket className="w-6 h-6 text-green-400" />,
        color: "from-green-400/30 via-teal-400/20 to-cyan-400/30",
    },
    {
        title: "Ongoing Support & Growth",
        desc: "We continue to assist you with updates, improvements, and long-term guidance.",
        icon: <Headphones className="w-6 h-6 text-purple-400" />,
        color: "from-purple-400/30 via-pink-400/20 to-blue-400/30",
    },
];

const ProductTimeline = () => {
    return (
        <section
            className="relative w-full backdrop-blur border border-purple-500/20 shadow-2xl rounded-3xl overflow-hidden"
            aria-labelledby="process-heading"
        >
            <div className="absolute w-full -bottom-[180px] md:-bottom-[470px]">
                <img
                    src="/images/image1.webp"
                    loading="lazy"
                    className="w-full h-full object-cover opacity-30 rounded-3xl"
                    alt="Background"
                />
            </div>
            <div className="mx-auto px-6 md:px-12 py-12 md:py-24 ">
                <SectionHeading
                    subtitle="How We Work"
                    title="Our Process"
                    description="Here's how we turn your ideas into successful digital products, step by step."
                />

                {/* Desktop Timeline - 3 per row */}
                <div className="hidden md:block">
                    <div className="grid grid-cols-3 gap-6 mt-12">
                        {/* First Row - 3 steps */}
                        {steps.map((step, idx) => (
                            <div
                                key={idx}
                                data-aos="fade-up"
                                data-aos-delay={100 + idx * 100}
                                className="relative flex flex-col items-start text-start p-6 rounded-2xl 
                                    bg-gradient-to-br from-gray-800/40 via-gray-900/40 to-black/40
                                    border border-gray-700 shadow-md hover:shadow-xl transition-all duration-300"
                            >
                                {/* Step Number */}
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gray-700/80 border border-gray-600 flex items-center justify-center">
                                    <span className="text-white text-sm font-bold">
                                        {idx + 1}
                                    </span>
                                </div>

                                {/* Icon */}
                                <div className="flex gap-3 items-center">
                                    <div
                                        className={`flex items-center justify-center w-16 h-16 rounded-full 
                                        bg-gradient-to-tr ${step.color} border border-gray-700 shadow-lg 
                                        backdrop-blur-md mb-4`}
                                    >
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="font-semibold text-lg text-white mb-3">
                                        {step.title}
                                    </h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Timeline - Vertical */}
                <div className="md:hidden relative mt-10">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            data-aos="fade-up"
                            data-aos-delay={50 + idx * 50}
                            className="relative flex items-start mb-8 last:mb-0"
                        >
                            {/* Step Number */}
                            <div className="absolute -left-2 top-0 w-8 h-8 rounded-full bg-gray-700/80 border border-gray-600 flex items-center justify-center z-10">
                                <span className="text-white text-sm font-bold">
                                    {idx + 1}
                                </span>
                            </div>

                            {/* Content */}
                            <div
                                className="relative ml-10 p-5 rounded-2xl 
                                    bg-gradient-to-br from-gray-800/40 via-gray-900/40 to-black/40
                                    border border-gray-700 shadow-md w-full"
                            >
                                {/* Icon */}
                                <div className="flex flex-row gap-3 items-center">
                                    <div
                                        className={`flex items-center justify-center w-12 h-12 rounded-full 
                                        bg-gradient-to-tr ${step.color} border border-gray-700 shadow-md mb-3`}
                                    >
                                        {step.icon}
                                    </div>

                                    <h3 className="font-semibold text-lg text-white mb-2">
                                        {step.title}
                                    </h3>
                                </div>
                                <p className="text-gray-400 text-sm">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductTimeline;
