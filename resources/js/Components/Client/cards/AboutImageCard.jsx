import { Laptop, Lightbulb, Palette, Users } from "lucide-react";
import React from "react";

const AboutImageCard = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 pt-0 gap-8">
                {/* Key Points with Icons */}
                <div
                    data-aos="fade-up"
                    className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-900/30 rounded-xl p-5 relative z-10"
                >
                    <div
                        data-aos="zoom-in"
                        data-aos-delay={50}
                        className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl shadow-lg">
                            <Users className="w-7 h-7 text-white" />
                        </div>
                        <p className="text-gray-200 text-lg">
                            <span className="font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                                Collaborative Team:
                            </span>{" "}
                            We work together, combining diverse skills to
                            achieve outstanding results.
                        </p>
                    </div>

                    <div
                        data-aos="zoom-in"
                        data-aos-delay={100}
                        className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-900 via-yellow-900/20 to-gray-900 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <div className="p-3 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl shadow-lg">
                            <Lightbulb className="w-7 h-7 text-white" />
                        </div>
                        <p className="text-gray-200 text-lg">
                            <span className="font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                                Innovative Thinking:
                            </span>{" "}
                            We bring fresh ideas and creative solutions to every
                            project.
                        </p>
                    </div>

                    <div
                        data-aos="zoom-in"
                        data-aos-delay={150}
                        className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
                            <Laptop className="w-7 h-7 text-white" />
                        </div>
                        <p className="text-gray-200 text-lg">
                            <span className="font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                Technology Driven:
                            </span>{" "}
                            Leveraging modern tools and frameworks to build
                            scalable solutions.
                        </p>
                    </div>

                    <div
                        data-aos="zoom-in"
                        data-aos-delay={200}
                        className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-900 via-green-900/20 to-gray-900 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
                            <Palette className="w-7 h-7 text-white" />
                        </div>
                        <p className="text-gray-200 text-lg">
                            <span className="font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                                Creative Designs:
                            </span>{" "}
                            Crafting user-friendly and visually appealing
                            experiences.
                        </p>
                    </div>
                </div>

                {/* Devices Container */}
                <div
                    data-aos="fade-right"
                    className="relative w-full flex items-center justify-center  bg-gray-900/30 rounded-xl "
                >
                    <div
                        data-aos="fade-right"
                        data-aos-delay={100}
                        className="w-full flex items-center justify-center relative"
                    >
                        <svg
                            viewBox="250 0 500 500"
                            className="w-full h-auto max-w-[600px]"
                        >
                            <rect
                                x="250"
                                y="500"
                                width="500"
                                height="50"
                                rx="10"
                                fill="url(#laptopBaseGradient)"
                            />

                            <g filter="url(#laptopShadow)">
                                <rect
                                    x="270"
                                    y="70"
                                    width="460"
                                    height="400"
                                    rx="15"
                                    fill="#111"
                                    stroke="url(#laptopBorderGradient)"
                                    strokeWidth="2"
                                />

                                <rect
                                    x="285"
                                    y="90"
                                    width="430"
                                    height="360"
                                    rx="10"
                                    fill="#0f0f13"
                                />

                                {/* Header bar */}
                                <rect
                                    x="285"
                                    y="90"
                                    width="430"
                                    height="50"
                                    fill="#1a1a22"
                                />
                                <circle
                                    cx="310"
                                    cy="115"
                                    r="7"
                                    fill="#ec4899"
                                />
                                <circle
                                    cx="335"
                                    cy="115"
                                    r="7"
                                    fill="#8b5cf6"
                                />
                                <circle
                                    cx="360"
                                    cy="115"
                                    r="7"
                                    fill="#4ade80"
                                />
                                <text
                                    x="500"
                                    y="120"
                                    textAnchor="middle"
                                    fill="white"
                                    fontSize="16"
                                    fontFamily="Arial, sans-serif"
                                    fontWeight="500"
                                >
                                    Dashboard
                                </text>

                                {/* Sidebar */}
                                <rect
                                    x="285"
                                    y="140"
                                    width="100"
                                    height="290"
                                    fill="#15151c"
                                />

                                {/* Menu items */}
                                <rect
                                    x="305"
                                    y="160"
                                    width="60"
                                    height="8"
                                    rx="4"
                                    fill="#8b5cf6"
                                />
                                <rect
                                    x="305"
                                    y="180"
                                    width="50"
                                    height="8"
                                    rx="4"
                                    fill="#555"
                                    opacity="0.7"
                                />
                                <rect
                                    x="305"
                                    y="200"
                                    width="50"
                                    height="8"
                                    rx="4"
                                    fill="#555"
                                    opacity="0.7"
                                />
                                <rect
                                    x="305"
                                    y="220"
                                    width="50"
                                    height="8"
                                    rx="4"
                                    fill="#555"
                                    opacity="0.7"
                                />
                                <rect
                                    x="305"
                                    y="240"
                                    width="50"
                                    height="8"
                                    rx="4"
                                    fill="#555"
                                    opacity="0.7"
                                />
                                <rect
                                    x="305"
                                    y="260"
                                    width="50"
                                    height="8"
                                    rx="4"
                                    fill="#555"
                                    opacity="0.7"
                                />
                                <rect
                                    x="305"
                                    y="280"
                                    width="50"
                                    height="8"
                                    rx="4"
                                    fill="#555"
                                    opacity="0.7"
                                />
                                <rect
                                    x="305"
                                    y="300"
                                    width="50"
                                    height="8"
                                    rx="4"
                                    fill="#555"
                                    opacity="0.7"
                                />

                                {/* Content area */}
                                <rect
                                    x="395"
                                    y="145"
                                    width="300"
                                    height="280"
                                    fill="#15151c"
                                    rx="8"
                                />

                                {/* Stats cards */}
                                <rect
                                    x="410"
                                    y="165"
                                    width="130"
                                    height="100"
                                    rx="8"
                                    fill="url(#cardGradient1)"
                                />
                                <rect
                                    x="410"
                                    y="280"
                                    width="130"
                                    height="100"
                                    rx="8"
                                    fill="url(#cardGradient2)"
                                />
                                <rect
                                    x="555"
                                    y="165"
                                    width="130"
                                    height="100"
                                    rx="8"
                                    fill="url(#cardGradient3)"
                                />
                                <rect
                                    x="555"
                                    y="280"
                                    width="130"
                                    height="100"
                                    rx="8"
                                    fill="url(#cardGradient4)"
                                />

                                {/* Chart area */}
                                <rect
                                    x="410"
                                    y="165"
                                    width="275"
                                    height="100"
                                    rx="8"
                                    fill="url(#chartGradient)"
                                    opacity="0.8"
                                />
                            </g>
                        </svg>
                    </div>

                    {/* Mobile - Made larger and positioned to overlay */}
                    <div
                        className="absolute z-10 transform rotate-6
                        top-60 -right-10 -translate-y-1/2 w-60 md:w-70
                        md:top-67 md:right-[-2rem] 
                        "
                    >
                        <svg
                            viewBox="0 0 300 600"
                            className="w-full h-full drop-shadow-2xl"
                        >
                            <rect
                                x="50"
                                y="20"
                                width="200"
                                height="400"
                                rx="20"
                                fill="url(#mobileBaseGradient)"
                                stroke="url(#mobileBorderGradient)"
                                strokeWidth="2"
                            />

                            {/* Screen */}
                            <rect
                                x="65"
                                y="35"
                                width="170"
                                height="370"
                                rx="12"
                                fill="#0f0f13"
                            />

                            {/* Notch */}
                            <rect
                                x="120"
                                y="20"
                                width="60"
                                height="15"
                                rx="7"
                                fill="#222"
                            />

                            {/* App header */}
                            <rect
                                x="65"
                                y="35"
                                width="170"
                                height="50"
                                fill="#1a1a22"
                            />
                            <text
                                x="150"
                                y="65"
                                textAnchor="middle"
                                fill="white"
                                fontSize="14"
                                fontFamily="Arial, sans-serif"
                                fontWeight="500"
                            >
                                Dashboard
                            </text>

                            {/* Stats circle */}
                            <circle
                                cx="150"
                                cy="150"
                                r="40"
                                fill="none"
                                stroke="url(#progressGradient)"
                                strokeWidth="8"
                            />
                            <text
                                x="150"
                                y="155"
                                textAnchor="middle"
                                fill="white"
                                fontSize="20"
                                fontFamily="Arial, sans-serif"
                                fontWeight="bold"
                            >
                                75%
                            </text>

                            {/* Progress bars */}
                            <rect
                                x="80"
                                y="210"
                                width="140"
                                height="12"
                                rx="6"
                                fill="#333"
                            />
                            <rect
                                x="80"
                                y="210"
                                width="91"
                                height="12"
                                rx="6"
                                fill="url(#progressGradient1)"
                            />

                            <rect
                                x="80"
                                y="235"
                                width="140"
                                height="12"
                                rx="6"
                                fill="#333"
                            />
                            <rect
                                x="80"
                                y="235"
                                width="56"
                                height="12"
                                rx="6"
                                fill="url(#progressGradient2)"
                            />

                            <rect
                                x="80"
                                y="260"
                                width="140"
                                height="12"
                                rx="6"
                                fill="#333"
                            />
                            <rect
                                x="80"
                                y="260"
                                width="112"
                                height="12"
                                rx="6"
                                fill="url(#progressGradient3)"
                            />

                            {/* Buttons */}
                            <rect
                                x="90"
                                y="300"
                                width="120"
                                height="35"
                                rx="17"
                                fill="url(#buttonGradient1)"
                            />
                            <rect
                                x="90"
                                y="345"
                                width="120"
                                height="35"
                                rx="17"
                                fill="#333"
                            />
                        </svg>
                    </div>
                </div>
                {/* SVG Definitions */}
                <svg width="0" height="0">
                    <defs>
                        {/* Laptop Gradients */}
                        <linearGradient
                            id="laptopBaseGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop offset="0%" stopColor="#333" />
                            <stop offset="100%" stopColor="#222" />
                        </linearGradient>
                        <linearGradient
                            id="laptopBorderGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>

                        {/* Card Gradients */}
                        <linearGradient
                            id="cardGradient1"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >
                            <stop offset="0%" stopColor="#1a1a22" />
                            <stop offset="100%" stopColor="#252535" />
                        </linearGradient>
                        <linearGradient
                            id="cardGradient2"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >
                            <stop offset="0%" stopColor="#1a1a22" />
                            <stop offset="100%" stopColor="#252535" />
                        </linearGradient>
                        <linearGradient
                            id="cardGradient3"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >
                            <stop offset="0%" stopColor="#1a1a22" />
                            <stop offset="100%" stopColor="#252535" />
                        </linearGradient>
                        <linearGradient
                            id="cardGradient4"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >
                            <stop offset="0%" stopColor="#1a1a22" />
                            <stop offset="100%" stopColor="#252535" />
                        </linearGradient>
                        <linearGradient
                            id="chartGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop
                                offset="0%"
                                stopColor="#8b5cf6"
                                stopOpacity="0.4"
                            />
                            <stop
                                offset="100%"
                                stopColor="#ec4899"
                                stopOpacity="0.4"
                            />
                        </linearGradient>

                        {/* Mobile Gradients */}
                        <linearGradient
                            id="mobileBaseGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >
                            <stop offset="0%" stopColor="#222" />
                            <stop offset="100%" stopColor="#333" />
                        </linearGradient>
                        <linearGradient
                            id="mobileBorderGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>

                        {/* Progress Gradients */}
                        <linearGradient
                            id="progressGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                        <linearGradient
                            id="progressGradient1"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#a78bfa" />
                        </linearGradient>
                        <linearGradient
                            id="progressGradient2"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >
                            <stop offset="0%" stopColor="#ec4899" />
                            <stop offset="100%" stopColor="#f472b6" />
                        </linearGradient>
                        <linearGradient
                            id="progressGradient3"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>

                        {/* Button Gradient */}
                        <linearGradient
                            id="buttonGradient1"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>

                        {/* Shadow Filter */}
                        <filter
                            id="laptopShadow"
                            x="-20%"
                            y="-20%"
                            width="140%"
                            height="140%"
                        >
                            <feGaussianBlur
                                in="SourceAlpha"
                                stdDeviation="10"
                            />
                            <feOffset dx="0" dy="10" result="offsetblur" />
                            <feFlood floodColor="#000" floodOpacity="0.3" />
                            <feComposite in2="offsetblur" operator="in" />
                            <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    );
};

export default AboutImageCard;
