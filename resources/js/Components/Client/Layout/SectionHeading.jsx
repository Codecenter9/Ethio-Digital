import React from "react";

const SectionHeading = ({ subtitle, title, description, center = false }) => {
    return (
        <div
            className={`max-w-4xl ${
                center ? "mx-auto text-center" : "text-left"
            } mb-20 relative px-4`}
        >
            {/* Enhanced Subtitle */}
            {subtitle && (
                <div
                    className="relative inline-flex items-center justify-center mb-6"
                    data-aos="fade-down"
                >
                    <div className="relative inline-flex items-center gap-3 px-3 py-3 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 border border-white/10 backdrop-blur-sm shadow-lg">
                        <div className="flex items-center gap-2">
                            <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-purple-400 rounded-full "></div>
                                <div
                                    className="w-2 h-2 bg-pink-400 rounded-full "
                                    style={{ animationDelay: "0.2s" }}
                                ></div>
                                <div
                                    className="w-2 h-2 bg-blue-400 rounded-full"
                                    style={{ animationDelay: "0.4s" }}
                                ></div>
                            </div>

                            <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
                                {subtitle}
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* Enhanced Title */}
            {title && (
                <div
                    className="relative mb-8"
                    data-aos="fade-up"
                    data-aos-delay={100}
                >
                    <h2 className="text-2xl md:text-5xl font-bold text-white relative">
                        {/* Main gradient text */}
                        <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">
                            {title}
                        </span>

                        {/* Enhanced glow effect */}
                        <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 opacity-30 blur-lg scale-105">
                            {title}
                        </span>
                    </h2>

                    {/* Underline decoration */}
                    <div className="absolute -bottom-4 left-0 transform  w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 rounded-full opacity-80"></div>
                    <div className="absolute -bottom-6 left-0 transform  w-16 h-0.5 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full opacity-50 blur-sm"></div>
                </div>
            )}

            {/* Enhanced Description */}
            {description && (
                <div
                    data-aos="fade-up"
                    data-aos-delay={200}
                    className="relative"
                >
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 max-w-3xl font-light">
                        {description}
                    </p>

                    {/* Decorative line ends */}
                    <div className="flex items-center justify-start space-x-4 opacity-40">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-400"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-pink-400"></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SectionHeading;
