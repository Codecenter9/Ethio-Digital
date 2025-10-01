import React from "react";
import { Target, Eye, CheckCircle2 } from "lucide-react";

const MissionAndVision = () => {
    const missions = [
        "Deliver high-quality and scalable software solutions tailored to client needs.",
        "Empower businesses through digital marketing, branding, and social media strategies.",
        "Design creative, user-friendly interfaces and impactful graphics that strengthen brand identity.",
        "Leverage AI, IoT, and emerging technologies to solve real-world challenges.",
        "Provide continuous support, updates, and innovation to ensure long-term client success.",
        "Encourage teamwork, creativity, and knowledge sharing across our diverse service areas.",
    ];

    const visions = [
        "Become a global leader in software, digital marketing, and creative technology solutions.",
        "Shape the future of business transformation through AI, IoT, and innovative tech.",
        "Create opportunities for young talent in software, design, and digital innovation.",
        "Promote ethical and sustainable use of technology for communities and organizations.",
        "Build a worldwide creative-tech hub that connects Ethiopia with the global digital economy.",
    ];

    return (
        <section
            className="py-12 md:py-24 px-6 md:px-12"
            aria-label="Mission and Vision"
        >
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-start mb-16">
                    <div
                        data-aos="fade-down"
                        className="inline-flex items-center mb-2 px-3 py-1 rounded-full bg-gradient-to-r from-pink-500/10 to-blue-500/10 border border-pink-500/20"
                    >
                        <span className="text-sm font-medium text-pink-500">
                            Mission and Vision
                        </span>
                    </div>
                    <h2
                        data-aos="fade-up"
                        data-aos-delay="50"
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Our Purpose
                    </h2>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl"
                    >
                        Meskot Digitals is more than just a company – we are
                        innovators, creators, and problem solvers, driven by a
                        shared vision to empower businesses and communities in
                        the digital age.
                    </p>
                </div>

                {/* Mission & Vision Cards */}
                <div className="grid md:grid-cols-[1fr_auto_1fr] gap-10 items-stretch relative">
                    {/* Mission */}
                    <div
                        data-aos="fade-right"
                        data-aos-delay="50"
                        className="bg-gradient-to-br from-blue-900/10 to-gray-950 rounded-2xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
                    >
                        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-blue-500/20 rounded-full blur-xl group-hover:bg-purple-500/30 transition-all duration-700"></div>

                        <div className="flex items-center gap-3 mb-8 relative z-10">
                            <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl shadow-lg">
                                <Target className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
                                Our Mission
                            </h2>
                        </div>

                        <ul className="space-y-4 relative z-10">
                            {missions.map((mission, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100/10 dark:hover:bg-gray-700/50 transition-all duration-300"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">
                                        {mission}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Divider */}
                    <div
                        data-aos="zoom-in"
                        className="hidden md:flex flex-col items-center justify-center relative"
                    >
                        <div className="w-1 h-full bg-gradient-to-b from-pink-400 via-purple-500 to-blue-500 rounded-full shadow-[0_0_25px_rgba(236,72,153,0.7)] animate-pulse relative">
                            <div
                                className="absolute top-1/4 -left-2 w-5 h-5 bg-pink-500 rounded-full shadow-lg animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                            />
                            <div
                                className="absolute top-2/4 -left-2 w-5 h-5 bg-purple-500 rounded-full shadow-lg animate-bounce"
                                style={{ animationDelay: "0.4s" }}
                            />
                            <div
                                className="absolute top-3/4 -left-2 w-5 h-5 bg-blue-500 rounded-full shadow-lg animate-bounce"
                                style={{ animationDelay: "0.6s" }}
                            />
                        </div>
                    </div>

                    {/* Vision */}
                    <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        className="bg-gradient-to-bl from-blue-900/10 to-gray-950 rounded-2xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
                    >
                        <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/30 transition-all duration-700"></div>

                        <div className="flex items-center gap-3 mb-8 relative z-10">
                            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
                                <Eye className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                Our Vision
                            </h2>
                        </div>

                        <ul className="space-y-4 relative z-10">
                            {visions.map((vision, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100/10 dark:hover:bg-gray-700/50 transition-all duration-300"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">
                                        {vision}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionAndVision;
