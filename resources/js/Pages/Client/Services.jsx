import React from "react";
import ClientLayout from "@/Layouts/ClientLayout/ClientLayout";
import {
    softwareServices,
    creativeServices,
    otherServices,
} from "@/Components/data/services";
import { Code2, Palette, Wrench } from "lucide-react";
import { SharedHero } from "@/Components/Client/Layout/SharedHero";
import { Head } from "@inertiajs/react";

export default function Services() {
    const meta = {
        title: "Our Services | Meskot Digital Solutions",
        description:
            "Discover professional digital services by Meskot Digital Solutions — including custom software development, web & mobile apps, graphics design, social media management, digital marketing, and content creation to help your business grow.",
        keywords:
            "Meskot Digital Solutions services, software development, web development, mobile apps, graphics design, branding, social media management, digital marketing, SEO, content creation, Ethiopia tech company",
        url: "https://meskotdigital.com/services",
        image: "https://meskotdigital.com/images/services-cover.jpg", // replace with real banner
    };

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />

                {/* Open Graph */}
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:site_name"
                    content="Meskot Digital Solutions"
                />
                <meta property="og:url" content={meta.url} />
                <meta property="og:image" content={meta.image} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
            </Head>

            <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950">
                <SharedHero
                    title="Our Services"
                    description="Explore our wide range of digital services — from software engineering to creative solutions — designed to help you grow, innovate, and succeed."
                />

                <section className="max-w-7xl mx-auto py-12 md:py-20 px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
                        <div className="flex flex-col gap-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                    <Code2 className="w-6 h-6 text-blue-400" />
                                </div>
                                <h2 className="text-2xl font-semibold text-blue-400">
                                    Software & Technical
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {softwareServices.map((service) => (
                                    <div
                                        key={service.title}
                                        data-aos="fade-up"
                                        data-aos-delay="50"
                                        className="group relative bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-transparent transition-all duration-500 hover:shadow-xl overflow-hidden"
                                    >
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                        ></div>
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800 shadow-md group-hover:scale-110 transition-transform duration-300 text-white">
                                                    <service.icon />
                                                </div>
                                                <h3 className="text-lg font-semibold text-white">
                                                    {service.title}
                                                </h3>
                                            </div>
                                            <p className="text-sm text-gray-400">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Vertical Divider for Desktop */}
                        <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent transform -translate-x-1/2"></div>

                        {/* Right Column - Creative */}
                        <div className="flex flex-col gap-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center">
                                    <Palette className="w-6 h-6 text-pink-400" />
                                </div>
                                <h2 className="text-2xl font-semibold text-pink-400">
                                    Creative & Marketing
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {creativeServices.map((service) => (
                                    <div
                                        key={service.title}
                                        data-aos="fade-up"
                                        data-aos-delay="50"
                                        className="group relative bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-transparent transition-all duration-500 hover:shadow-xl overflow-hidden"
                                    >
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                        ></div>
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800 shadow-md group-hover:scale-110 transition-transform duration-300 text-white">
                                                    <service.icon />
                                                </div>
                                                <h3 className="text-lg font-semibold text-white">
                                                    {service.title}
                                                </h3>
                                            </div>
                                            <p className="text-sm text-gray-400">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Horizontal Divider for Mobile */}
                    <div className="md:hidden my-12 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

                    {/* Other Services - 3 Cols */}
                    <div className="mt-16">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                                <Wrench className="w-6 h-6 text-purple-400" />
                            </div>
                            <h2 className="text-2xl font-semibold text-purple-400">
                                Other Services
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {otherServices.map((service) => (
                                <div
                                    key={service.title}
                                    data-aos="fade-up"
                                    data-aos-delay="50"
                                    className="group relative bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-transparent transition-all duration-500 hover:shadow-xl overflow-hidden"
                                >
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                    ></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800 shadow-md group-hover:scale-110 transition-transform duration-300 text-white">
                                                <service.icon />
                                            </div>
                                            <h3 className="text-lg font-semibold text-white">
                                                {service.title}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-gray-400">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

Services.layout = (page) => <ClientLayout children={page} />;
