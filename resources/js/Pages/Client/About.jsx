import React from "react";
import ClientLayout from "@/Layouts/ClientLayout/ClientLayout";
import { SharedHero } from "@/Components/Client/Layout/SharedHero";
import AboutImageCard from "@/Components/Client/cards/AboutImageCard";
import MissionAndVision from "@/Components/Client/cards/MissionAndVission";
import WhatWeDo from "@/Components/Client/cards/WhatWeDo";
import { Head } from "@inertiajs/react";

export default function About() {
    const meta = {
        title: "About Us | Meskot Digital Solutions",
        description:
            "Discover Meskot Digital Solutions — Ethiopia's innovative software development and digital marketing company. Learn about our mission, services, and the team driving your digital growth.",
        keywords:
            "Meskot Digital Solutions, software development Ethiopia, digital marketing Ethiopia, graphics design Ethiopia, social media management, content creation, tech company Ethiopia",
        url: "https://meskotdigitals.com/about",
    };

    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />
                <link rel="canonical" href={meta.url} />

                {/* Open Graph / Facebook / LinkedIn */}
                <meta property="og:url" content={meta.url} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
            </Head>

            <main className="relative">
                <SharedHero
                    title="About Us"
                    description="At Meskot Digital Solutions, we are passionate about delivering innovative digital solutions that empower businesses and individuals to grow, connect, and thrive in today’s fast-paced world."
                />

                <section className="relative bg-gray-950 z-10 max-w-full pt-12 md:pt-24 px-6 md:px-12 mx-auto space-y-12">
                    <div className="relative flex flex-col gap-0 rounded-2xl bg-gray-900/30">
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>

                        <div className="grid md:grid-cols-2 gap-0 items-start">
                            {/* Image Card */}
                            <div
                                data-aos="fade-right"
                                data-aos-delay="50"
                                className="flex-1 overflow-hidden flex-shrink-0"
                            >
                                <img
                                    src="/images/teams.webp"
                                    alt="Meskot Digital Solutions Team at Work"
                                    className="object-cover rounded-tl-2xl w-full h-full hover:scale-105 transition-all duration-300"
                                />
                            </div>

                            {/* First Content */}
                            <div
                                data-aos="fade-up"
                                data-aos-delay="100"
                                className="flex flex-col justify-center p-8 overflow-hidden"
                            >
                                <div className="relative mb-6 pb-4 border-b border-gray-700">
                                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
                                        Who We Are
                                    </h2>
                                    <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"></div>
                                </div>

                                <p className="text-lg text-gray-300 leading-relaxed relative z-10">
                                    <span className="absolute -left-3 text-5xl text-pink-500/30 font-serif -top-2">
                                        “
                                    </span>
                                    <span className="font-semibold text-white">
                                        Meskot Digital Solutions
                                    </span>{" "}
                                    is a creative and technology-driven company
                                    that helps businesses and individuals grow
                                    in the digital age. Our team brings together
                                    experts in software development, social
                                    media, digital marketing, content creation,
                                    graphic design and more. We work as one to
                                    deliver solutions that are simple,
                                    effective, and built for real-world impact.
                                    From innovative apps and engaging websites
                                    to impactful campaigns and stunning visuals,
                                    we focus on turning ideas into experiences
                                    that connect, inspire, and deliver
                                    measurable results.
                                </p>
                            </div>
                        </div>

                        {/* Second Content */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="150"
                            className="px-8 relative z-10"
                        >
                            <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                From building modern websites and mobile apps to
                                managing social media, creating engaging
                                content, designing eye-catching graphics, and
                                running result-driven marketing campaigns — we
                                do it all. Our mission is simple: to make
                                digital tools and strategies accessible,
                                powerful, and useful for everyone. With{" "}
                                <span className="font-semibold text-white">
                                    Meskot Digital Solutions
                                </span>
                                , you don’t just get services, you get a partner
                                ready to explore opportunities and take your
                                ideas further.
                            </p>

                            <div className="mb-8">
                                <a
                                    href="/teams"
                                    className="group inline-flex items-center justify-center w-full md:w-[20%] bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    Meet Our Team
                                </a>
                            </div>
                        </div>
                    </div>

                    <AboutImageCard />
                </section>

                <MissionAndVision />
                <WhatWeDo />
            </main>
        </>
    );
}

About.layout = (page) => <ClientLayout children={page} />;
