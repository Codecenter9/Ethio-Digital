import React from "react";
import { Check } from "lucide-react";
import { Link } from "@inertiajs/react"; // ✅ Inertia link

const features = [
    "Focused on your goals and vision",
    "Committed to solving real business challenges",
    "Delivering innovative and practical digital solutions",
    "Building long-term value and trusted partnerships",
];

const About = () => {
    return (
        <section
            className="pt-24 pb-16 relative px-6 md:px-12"
            aria-labelledby="about-meskot-digitals"
        >
            <div className="absolute inset-0 opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-purple-500/15 to-transparent blur-3xl" />
            </div>

            <div className="container mx-auto grid md:grid-cols-2 gap-3 items-stretch">
                <div
                    data-aos="fade-right"
                    data-aos-delay={100}
                    className="w-full h-full flex justify-center items-stretch"
                >
                    <img
                        src="/images/teams.webp"
                        loading="lazy"
                        alt="EthioDigitals team working on digital solutions"
                        className="rounded-xl object-cover w-full h-full"
                    />
                </div>

                {/* Content */}
                <article
                    data-aos="fade-up"
                    className="flex flex-col gap-6 bg-gray-900/20 border border-purple-500/20 shadow-2xl p-5 rounded-xl h-full"
                >
                    <header>
                        <h2
                            id="about-ethiodigitals"
                            className="text-3xl md:text-4xl font-bold mb-3 text-white"
                        >
                            About{" "}
                            <span className="text-pink-500">
                                Meskot Digitals
                            </span>
                        </h2>
                        <p
                            data-aos-delay={150}
                            className="text-gray-300 leading-relaxed"
                        >
                            We are a growing digital solutions company committed
                            to supporting businesses and individuals with smart
                            technology, creative marketing, and modern design
                            that drive real growth.
                        </p>
                    </header>

                    {/* Features list */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {features.map((feature, idx) => (
                            <li
                                key={idx}
                                data-aos="fade-up"
                                data-aos-delay={100 + idx * 50}
                                className="flex items-start gap-3 p-4 rounded-xl relative bg-gradient-to-r from-gray-700/10 to-cyan-700/10 cards-gradient-border"
                            >
                                <Check
                                    className="w-6 h-6 text-pink-500 shrink-0"
                                    aria-hidden="true"
                                />
                                <p className="text-gray-200">{feature}</p>
                            </li>
                        ))}
                    </ul>

                    {/* Call to action */}
                    <div
                        data-aos="fade-down"
                        data-aos-delay={150}
                        className="flex flex-wrap gap-4 mt-2"
                    >
                        <Link
                            href="/about"
                            className="relative group p-3 inline-block"
                        >
                            <span className="text-pink-600 font-medium relative">
                                Read More...
                                <span className="absolute left-0 -bottom-1 w-[10px] h-0.5 bg-pink-400 transition-all duration-500 group-hover:w-full"></span>
                            </span>
                        </Link>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default About;
