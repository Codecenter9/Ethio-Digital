import React from "react";
import { Link } from "@inertiajs/react";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center p-4 md:p-8">
            <div className="relative max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-16">
                {/* Animated 404 SVG */}
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <svg
                        viewBox="0 0 800 400"
                        className="w-full h-auto max-w-lg"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-labelledby="title404 desc404"
                    >
                        <title id="title404">404 — Not Found</title>
                        <desc id="desc404">
                            Animated 404 graphic with floating elements and
                            glowing effects
                        </desc>

                        <defs>
                            <linearGradient
                                id="mainGradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                            >
                                <stop offset="0%" stopColor="#8b5cf6" />
                                <stop offset="50%" stopColor="#ec4899" />
                                <stop offset="100%" stopColor="#f97316" />
                            </linearGradient>

                            <linearGradient
                                id="glowGradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                            >
                                <stop
                                    offset="0%"
                                    stopColor="#8b5cf6"
                                    stopOpacity="0.8"
                                />
                                <stop
                                    offset="100%"
                                    stopColor="#ec4899"
                                    stopOpacity="0.8"
                                />
                            </linearGradient>

                            <filter
                                id="glow"
                                x="-50%"
                                y="-50%"
                                width="200%"
                                height="200%"
                            >
                                <feGaussianBlur
                                    in="SourceGraphic"
                                    stdDeviation="10"
                                    result="blur"
                                />
                                <feColorMatrix
                                    in="blur"
                                    mode="matrix"
                                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -8"
                                    result="glow"
                                />
                                <feComposite
                                    in="SourceGraphic"
                                    in2="glow"
                                    operator="over"
                                />
                            </filter>

                            <filter
                                id="softGlow"
                                height="300%"
                                width="300%"
                                x="-75%"
                                y="-75%"
                            >
                                <feMorphology
                                    operator="dilate"
                                    radius="2"
                                    in="SourceAlpha"
                                    result="thicken"
                                />
                                <feGaussianBlur
                                    in="thicken"
                                    stdDeviation="10"
                                    result="blurred"
                                />
                                <feFlood
                                    floodColor="#8b5cf6"
                                    result="glowColor"
                                />
                                <feComposite
                                    in="glowColor"
                                    in2="blurred"
                                    operator="in"
                                    result="softGlow"
                                />
                                <feMerge>
                                    <feMergeNode in="softGlow" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Background elements */}
                        <g className="background-elements">
                            <circle
                                cx="100"
                                cy="100"
                                r="40"
                                fill="url(#glowGradient)"
                                opacity="0.3"
                                filter="url(#softGlow)"
                                className="animate-float-slow"
                            />
                            <circle
                                cx="700"
                                cy="150"
                                r="30"
                                fill="url(#glowGradient)"
                                opacity="0.4"
                                filter="url(#softGlow)"
                                className="animate-float-medium"
                            />
                            <circle
                                cx="200"
                                cy="300"
                                r="50"
                                fill="url(#glowGradient)"
                                opacity="0.2"
                                filter="url(#softGlow)"
                                className="animate-float-slow"
                            />
                            <circle
                                cx="650"
                                cy="320"
                                r="35"
                                fill="url(#glowGradient)"
                                opacity="0.3"
                                filter="url(#softGlow)"
                                className="animate-float-fast"
                            />
                        </g>

                        {/* 404 Text */}
                        <g
                            className="numbers"
                            textAnchor="middle"
                            fontFamily="system-ui, sans-serif"
                            fontWeight="800"
                        >
                            {/* First 4 */}
                            <g
                                className="digit"
                                transform="translate(40,20)"
                                filter="url(#glow)"
                            >
                                <path
                                    d="M220,80 L140,200 L260,200 M220,80 L220,260"
                                    fill="none"
                                    stroke="url(#mainGradient)"
                                    strokeWidth="12"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="animate-draw"
                                    style={{
                                        strokeDasharray: 440,
                                        strokeDashoffset: 440,
                                    }}
                                />
                            </g>

                            {/* Zero */}
                            <g className="digit" filter="url(#glow)">
                                <circle
                                    cx="400"
                                    cy="180"
                                    r="70"
                                    fill="none"
                                    stroke="url(#mainGradient)"
                                    strokeWidth="12"
                                    className="animate-draw"
                                    style={{
                                        strokeDasharray: 440,
                                        strokeDashoffset: 440,
                                    }}
                                />
                                <circle
                                    cx="400"
                                    cy="180"
                                    r="45"
                                    fill="none"
                                    stroke="url(#mainGradient)"
                                    strokeWidth="8"
                                    strokeOpacity="0.4"
                                    className="animate-pulse"
                                />
                                <circle
                                    cx="400"
                                    cy="130"
                                    r="5"
                                    fill="white"
                                    className="animate-orbit"
                                />
                            </g>

                            {/* Second 4 */}
                            <g
                                className="digit"
                                transform="translate(370,20)"
                                filter="url(#glow)"
                            >
                                <path
                                    d="M220,80 L140,200 L260,200 M220,80 L220,260"
                                    fill="none"
                                    stroke="url(#mainGradient)"
                                    strokeWidth="12"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="animate-draw"
                                    style={{
                                        strokeDasharray: 440,
                                        strokeDashoffset: 440,
                                    }}
                                />
                            </g>
                        </g>

                        {/* Decorative elements */}
                        <g className="decorative">
                            <circle
                                cx="300"
                                cy="80"
                                r="4"
                                fill="#ec4899"
                                className="animate-twinkle"
                            />
                            <circle
                                cx="500"
                                cy="300"
                                r="3"
                                fill="#8b5cf6"
                                className="animate-twinkle"
                            />
                            <circle
                                cx="150"
                                cy="250"
                                r="5"
                                fill="#f97316"
                                className="animate-twinkle"
                            />
                            <circle
                                cx="700"
                                cy="80"
                                r="4"
                                fill="#ec4899"
                                className="animate-twinkle"
                            />
                        </g>
                    </svg>
                </div>

                {/* Content card */}
                <div className="w-full md:w-1/2 bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col gap-6 border border-gray-700/60">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                            Lost in Space?
                        </h1>
                        <p className="text-gray-300 max-w-md">
                            Oops! The page you are looking for seems to have
                            drifted off into the cosmos. Don’t worry, we can
                            help you find your way back home.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-2">
                        <Link
                            href="/"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium hover:shadow-lg hover:scale-[1.02] transform transition-all duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            Back to Home
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="flex-1 px-4 py-3 rounded-xl border border-gray-700 text-gray-200 hover:bg-gray-800/50 transition-all"
                        >
                            Go Back
                        </button>
                    </div>

                    <div className="mt-4">
                        <p className="text-sm text-gray-400 mb-3">
                            Quick Links
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            <Link
                                href="/news"
                                className="p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all text-gray-200 text-sm flex items-center gap-2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                News
                            </Link>
                            <Link
                                href="/about"
                                className="p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all text-gray-200 text-sm flex items-center gap-2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                About Ethio Digitals
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animation styles */}
            <style>{`
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    50% { transform: translateY(-20px) translateX(10px); }
                }
                @keyframes float-medium {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    50% { transform: translateY(-15px) translateX(-15px); }
                }
                @keyframes float-fast {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    50% { transform: translateY(-10px) translateX(5px); }
                }
                @keyframes draw {
                    to { stroke-dashoffset: 0; }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 0.4; r: 45; }
                    50% { opacity: 0.7; r: 48; }
                }
                @keyframes orbit {
                    0% { transform: rotate(0deg) translateX(50px) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
                }
                @keyframes twinkle {
                    0%, 100% { opacity: 0.2; }
                    50% { opacity: 1; }
                }
                .animate-float-slow { animation: float-slow 15s ease-in-out infinite; }
                .animate-float-medium { animation: float-medium 12s ease-in-out infinite; }
                .animate-float-fast { animation: float-fast 10s ease-in-out infinite; }
                .animate-draw {
                    animation: draw 2s ease-in-out forwards;
                    animation-delay: 0.5s;
                }
                .animate-pulse {
                    animation: pulse 3s ease-in-out infinite;
                    animation-delay: 2s;
                }
                .animate-orbit {
                    animation: orbit 8s linear infinite;
                    animation-delay: 2s;
                }
                .animate-twinkle { animation: twinkle 4s ease-in-out infinite; }
                .digit:nth-child(1) path { animation-delay: 0.7s; }
                .digit:nth-child(2) circle { animation-delay: 1.2s; }
                .digit:nth-child(3) path { animation-delay: 1.7s; }
            `}</style>
        </main>
    );
}
