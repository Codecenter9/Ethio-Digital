import React from "react";
import {
    Code2,
    Palette,
    Rocket,
    LineChart,
    Megaphone,
    PenTool,
} from "lucide-react";

const WhatWeDo = () => {
    const services = [
        {
            icon: (
                <Code2 className="w-10 h-10 text-pink-500" aria-hidden="true" />
            ),
            title: "Software Development",
            description:
                "We build websites, apps, and systems that are fast, secure, and tailored to your needs.",
        },
        {
            icon: (
                <Palette
                    className="w-10 h-10 text-blue-500"
                    aria-hidden="true"
                />
            ),
            title: "UI/UX Design",
            description:
                "Our designs are clean, modern, and user-friendly to give your audience the best experience.",
        },
        {
            icon: (
                <Megaphone
                    className="w-10 h-10 text-green-500"
                    aria-hidden="true"
                />
            ),
            title: "Digital Marketing",
            description:
                "We help your brand grow online with SEO, social media, and targeted campaigns.",
        },
        {
            icon: (
                <LineChart
                    className="w-10 h-10 text-purple-500"
                    aria-hidden="true"
                />
            ),
            title: "Branding & Growth",
            description:
                "We create strong brand identities that build trust and help businesses grow.",
        },
        {
            icon: (
                <Rocket
                    className="w-10 h-10 text-yellow-500"
                    aria-hidden="true"
                />
            ),
            title: "Startup Solutions",
            description:
                "From MVPs to launch support, we guide startups to scale and succeed faster.",
        },
        {
            icon: (
                <PenTool
                    className="w-10 h-10 text-pink-600"
                    aria-hidden="true"
                />
            ),
            title: "Content Creation",
            description:
                "We craft engaging content, from visuals to storytelling, that connects with your audience.",
        },
    ];

    return (
        <section className="max-w-7xl py-12 md:pb-24 px-6 md:px-12">
            {/* Header */}
            <div className="text-start mb-16">
                <div
                    data-aos="fade-down"
                    className="inline-flex items-center mb-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20"
                >
                    <span className="text-sm font-medium text-pink-500">
                        Services
                    </span>
                </div>
                <h2
                    data-aos="fade-up"
                    data-aos-delay="50"
                    className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                >
                    What We Do
                </h2>
                <p
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl"
                >
                    At{" "}
                    <span className="font-semibold text-pink-500">
                        Meskot Digitals
                    </span>
                    , we mix creativity and technology to turn ideas into real
                    solutions. Explore our services built to help you grow and
                    thrive.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, idx) => (
                    <div
                        data-aos="fade-up"
                        data-aos-delay={100 + idx * 50}
                        key={idx}
                        className="bg-gradient-to-br from-gray-900/30 to-gray-800/20 p-6 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-700/20"
                    >
                        <div className="flex flex-row gap-5 items-center">
                            <div className="flex justify-start mb-4 transition-transform duration-300 group-hover:scale-110">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                {service.title}
                            </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhatWeDo;
