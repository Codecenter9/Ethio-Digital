import React, { useEffect } from "react";
import { CirclePercent } from "lucide-react";
import { Link } from "@inertiajs/react";
import AOS from "aos";
import "aos/dist/aos.css";
import Spotlight from "../ui/Spotlight";

export default function Hero() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 100,
            easing: "ease-in-out",
            once: true,
        });
        AOS.refresh();
    }, []);

    return (
        <section
            className="relative min-h-max md:min-h-screen pt-20 md:pt-24 py-16 w-full flex flex-col items-center justify-center antialiased"
            aria-label="Hero Section"
        >
            <Spotlight />

            <div className="relative max-w-5xl z-10 px-6 mx-auto flex flex-col items-start md:items-center md:text-center">
                <div
                    className="top-6 z-20 mb-8"
                    data-aos="fade-up"
                    data-aos-delay="50"
                >
                    <div className="relative flex items-center gap-2 p-1 rounded-full shadow-2xl w-fit bg-gradient-to-r from-pink-500/30 via-purple-600/30 to-gray-800 animate-gradient-x">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-gray-800 opacity-75 blur-lg animate-pulse -z-10"></div>

                        <div className="flex items-center gap-2 bg-gray-950/95 backdrop-blur-sm text-white px-7 py-2 rounded-full border border-gray-800/50 w-full">
                            <CirclePercent className="w-6 h-6 text-pink-400 animate-bounce drop-shadow-[0_0_8px_rgba(236,72,153,0.9)]" />
                            <span className="text-sm font-bold">
                                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                                    Limited Offer:{" "}
                                </span>
                                <span className="text-white drop-shadow-[0_0_6px_rgba(139,92,246,0.8)]">
                                    30% OFF
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <h1
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-4xl md:text-7xl font-black leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-blue-400 via-purple-500 to-pink-600"
                >
                    Your Trusted Partner for Digital Growth
                </h1>

                <p
                    data-aos="fade-up"
                    data-aos-delay="150"
                    className="mt-6 text-xl md:text-2xl text-neutral-300 max-w-2xl font-light"
                >
                    We specialize in software development, digital marketing,
                    graphics design, social media management, and content
                    creation to help businesses thrive online.
                </p>

                <div className="mt-10 flex flex-col md:flex-row items-center gap-6">
                    <Link
                        href="/contact"
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="group relative px-8 py-4 flex items-center justify-center gap-3 rounded-full text-xl font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 overflow-hidden transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
                        <span className="relative z-10">
                            Start Your Journey
                        </span>
                    </Link>

                    {/* <button
                        data-aos="fade-up"
                        data-aos-delay="250"
                        className="flex items-center gap-3 px-8 py-4 bg-neutral-900/70 backdrop-blur-md text-white rounded-2xl text-xl font-semibold shadow-xl hover:bg-neutral-800/90 hover:scale-105 transition-all duration-300 border border-neutral-700/50"
                        aria-label="Watch Demo"
                    >
                        <PlayCircle className="w-7 h-7 text-green-400 animate-pulse drop-shadow-[0_0_8px_rgba(34,197,94,0.9)]" />
                        Watch Demo
                    </button> */}
                </div>
            </div>
        </section>
    );
}
