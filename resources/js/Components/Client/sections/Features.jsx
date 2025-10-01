import React from "react";
import { Users, Globe2, Cpu, Award, ShieldCheck } from "lucide-react";
import SectionHeading from "../Layout/SectionHeading";

const features = [
    {
        icon: <Users className="w-8 h-8 text-cyan-400" aria-hidden="true" />,
        title: "Skilled Team",
        description:
            "We have a friendly and talented team ready to help you with websites, apps, and digital solutions.",
    },
    {
        icon: <Globe2 className="w-8 h-8 text-indigo-400" aria-hidden="true" />,
        title: "Strong Online Presence",
        description:
            "We make it easy for businesses and people to be seen online with modern and simple platforms.",
    },
    {
        icon: <Cpu className="w-8 h-8 text-emerald-400" aria-hidden="true" />,
        title: "Smart Technology",
        description:
            "We use the latest tools and technology to give you easy and effective solutions.",
    },
    {
        icon: <Award className="w-8 h-8 text-pink-400" aria-hidden="true" />,
        title: "Creative Design",
        description:
            "From logos to visuals, we design creative content that makes your brand stand out.",
    },
    {
        icon: <Award className="w-8 h-8 text-yellow-400" aria-hidden="true" />,
        title: "Proven Experience",
        description:
            "We have worked on many projects for startups, companies, and organizations with great results.",
    },
    {
        icon: (
            <ShieldCheck
                className="w-8 h-8 text-purple-400"
                aria-hidden="true"
            />
        ),
        title: "Safe & Reliable",
        description:
            "We care about your trust. Everything we build is secure, dependable, and built to last.",
    },
];

const Features = () => {
    return (
        <section
            className="relative py-16 px-6 md:px-12 mx-auto"
            aria-labelledby="features-heading"
        >
            {/* Background decoration */}
            <div className="absolute -top-[500px] -right-[900px] md:-right-[800px] -rotate-45">
                <img
                    src="/images/image2.jpg"
                    className="inset-0 w-full h-full object-cover opacity-5 rounded-3xl animate-in"
                    alt="Background"
                />
            </div>

            {/* Section heading */}
            <SectionHeading
                subtitle="Features"
                title="Key Features"
                description="Explore the innovative tools and solutions that set Meskot Digitals apart and help you achieve more."
            />

            {/* Features list */}
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 relative z-10">
                {features.map((feature, idx) => (
                    <li
                        key={idx}
                        data-aos="fade-up"
                        data-aos-delay={100 + idx * 50}
                        className="relative flex items-start gap-5 p-6 rounded-xl 
                                   bg-gradient-to-br from-gray-800/40 via-gray-900/40 to-black/40
                                   border border-gray-800/50 shadow-sm shadow-cyan-500/5
                                   group overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                    >
                        {/* Icon container */}
                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gray-800/60 flex items-center justify-center group-hover:bg-gray-700/70 transition-colors">
                            {feature.icon}
                        </div>

                        {/* Title + description */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                {feature.description}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Features;
