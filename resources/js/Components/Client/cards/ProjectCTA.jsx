import { Link } from "@inertiajs/react";
import { ArrowRight, Sparkles, Rocket, MessageCircle } from "lucide-react";
import React from "react";
import AdvancedShapes from "./Shapes";

const ProjectCTA = () => {
    return (
        <div className="relative">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 backdrop-blur-3xl rounded-3xl -z-10"></div>

            <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-center mt-20"
                role="region"
                aria-labelledby="cta-heading"
            >
                <div className="relative inline-flex flex-col w-full items-center gap-8 p-10 rounded-3xl bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60 backdrop-blur-lg shadow-2xl shadow-black/40 border border-gray-700/40 hover:border-purple-500/30 transition-all duration-500">
                    <AdvancedShapes />
                    <div className="absolute top-4 left-4 opacity-20">
                        <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-20">
                        <Rocket className="w-6 h-6 text-pink-400 animate-bounce" />
                    </div>

                    {/* Content Section */}
                    <div className="text-center max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                            <MessageCircle className="w-4 h-4 text-purple-400" />
                            <span className="text-sm text-purple-300 font-medium">
                                Let's Collaborate
                            </span>
                        </div>

                        <h3
                            id="cta-heading"
                            className="text-2xl md:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent"
                        >
                            Ready to Bring Your Vision to Life?
                        </h3>

                        <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
                            Let's collaborate to create something extraordinary.
                            Your next digital breakthrough starts here.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/projects"
                            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 border border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                            aria-label="View all projects and case studies"
                        >
                            <Sparkles
                                className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                                aria-hidden="true"
                            />
                            View Our Work
                            <ArrowRight
                                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                                aria-hidden="true"
                            />
                        </Link>

                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gray-800/60 backdrop-blur-md hover:bg-gray-700/60 text-white font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-white/5 border border-gray-600/50 hover:border-gray-500/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                            aria-label="Start a new project inquiry"
                        >
                            <Rocket className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                            Start Your Project
                        </Link>
                    </div>

                    {/* Trust Indicator */}
                    <div className="flex items-center gap-3 text-sm text-gray-500 mt-4">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((item) => (
                                <div
                                    key={item}
                                    className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 border-2 border-gray-900"
                                ></div>
                            ))}
                        </div>
                        <span>Trusted by 50+ clients worldwide</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCTA;
