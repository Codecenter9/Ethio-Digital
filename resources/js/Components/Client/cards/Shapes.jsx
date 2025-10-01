import React from "react";
const AdvancedShapes = () => {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
            {/* Animated Gradient Orbs */}
            <div className="absolute top-0 right-1/4 w-48 h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-float-slow blur-xl"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full animate-float-medium blur-lg"></div>
            </div>

            <div className="absolute bottom-1/3 right-1/4 w-32 h-32">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/15 to-rose-500/15 rounded-full animate-float-medium blur-xl"></div>
                <div className="absolute inset-3 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full animate-float-slow blur-lg"></div>
            </div>

            {/* Floating Dots Pattern */}
            <div className="absolute top-20 left-20 w-24 h-24">
                {Array.from({ length: 9 }).map((_, i) => (
                    <div
                        key={i}
                        className={`absolute w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-float-dots`}
                        style={{
                            top: `${(i % 3) * 30}%`,
                            left: `${Math.floor(i / 3) * 30}%`,
                            animationDelay: `${i * 0.2}s`,
                            animationDuration: `${3 + (i % 2)}s`,
                        }}
                    ></div>
                ))}
            </div>

            {/* Animated Grid */}
            <div className="absolute top-1/2 right-20 w-40 h-40 opacity-20">
                <div className="grid grid-cols-3 gap-6 w-full h-full">
                    {Array.from({ length: 9 }).map((_, i) => (
                        <div
                            key={i}
                            className="border border-purple-400/50 rounded-lg animate-pulse"
                            style={{
                                animationDelay: `${i * 0.1}s`,
                                animationDuration: "2s",
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Pulsing Circles */}
            <div className="absolute bottom-20 left-1/4 w-20 h-20">
                <div className="absolute inset-0 border-2 border-purple-400/30 rounded-full animate-ping-slow"></div>
                <div className="absolute inset-3 border border-pink-400/40 rounded-full animate-ping-medium"></div>
                <div className="absolute inset-6 border border-cyan-400/50 rounded-full animate-ping-fast"></div>
            </div>

            {/* Animated Waves */}
            <div className="absolute bottom-10 left-10 w-40 h-20 opacity-30">
                <svg viewBox="0 0 200 50" className="w-full h-full">
                    <path
                        d="M0,25 C50,10 150,40 200,25"
                        stroke="url(#waveGradient1)"
                        strokeWidth="2"
                        fill="none"
                        className="animate-wave"
                    />
                    <path
                        d="M0,35 C50,20 150,50 200,35"
                        stroke="url(#waveGradient2)"
                        strokeWidth="1.5"
                        fill="none"
                        className="animate-wave delay-1000"
                    />
                    <defs>
                        <linearGradient
                            id="waveGradient1"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop offset="0%" stopColor="#8B5CF6" />
                            <stop offset="100%" stopColor="#EC4899" />
                        </linearGradient>
                        <linearGradient
                            id="waveGradient2"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop offset="0%" stopColor="#06B6D4" />
                            <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Floating Triangles */}
            <div className="absolute top-10 right-20 w-16 h-16">
                <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-purple-400/40 animate-float-slow"></div>
                <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[14px] border-l-transparent border-r-transparent border-t-pink-400/50 ml-4 mt-2 animate-float-medium delay-500"></div>
            </div>

            {/* Animated Lines */}
            <div className="absolute top-1/3 left-10 w-32 h-2 opacity-20">
                <div className="h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-shimmer"></div>
                <div className="h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent mt-2 animate-shimmer delay-300"></div>
            </div>

            {/* Sparkling Particles */}
            <div className="absolute inset-0">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div
                        key={i}
                        className={`absolute w-1 h-1 bg-white rounded-full animate-sparkle`}
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.5}s`,
                        }}
                    ></div>
                ))}
            </div>

            {/* Pulsing Hexagons */}
            <div className="absolute bottom-1/4 right-10 w-12 h-12 opacity-15">
                <div className="w-full h-full bg-purple-400/20 clip-hexagon animate-pulse-slow"></div>
                <div className="absolute inset-2 bg-pink-400/30 clip-hexagon animate-pulse-medium"></div>
            </div>

            <style jsx>{`
                @keyframes float-slow {
                    0%,
                    100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(180deg);
                    }
                }
                @keyframes float-medium {
                    0%,
                    100% {
                        transform: translateY(0px) scale(1);
                    }
                    50% {
                        transform: translateY(-15px) scale(1.1);
                    }
                }
                @keyframes float-dots {
                    0%,
                    100% {
                        transform: translateY(0px) scale(1);
                        opacity: 0.7;
                    }
                    50% {
                        transform: translateY(-10px) scale(1.2);
                        opacity: 1;
                    }
                }
                @keyframes wave {
                    0% {
                        transform: translateX(-10px);
                    }
                    50% {
                        transform: translateX(10px);
                    }
                    100% {
                        transform: translateX(-10px);
                    }
                }
                @keyframes shimmer {
                    0% {
                        transform: translateX(-100%);
                        opacity: 0;
                    }
                    50% {
                        transform: translateX(0%);
                        opacity: 1;
                    }
                    100% {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                }
                @keyframes sparkle {
                    0%,
                    100% {
                        opacity: 0;
                        transform: scale(0);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                @keyframes ping-slow {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    75%,
                    100% {
                        transform: scale(3);
                        opacity: 0;
                    }
                }
                .animate-float-slow {
                    animation: float-slow 6s ease-in-out infinite;
                }
                .animate-float-medium {
                    animation: float-medium 4s ease-in-out infinite;
                }
                .animate-float-dots {
                    animation: float-dots 3s ease-in-out infinite;
                }
                .animate-wave {
                    animation: wave 4s ease-in-out infinite;
                }
                .animate-shimmer {
                    animation: shimmer 3s ease-in-out infinite;
                }
                .animate-sparkle {
                    animation: sparkle 2s ease-in-out infinite;
                }
                .animate-ping-slow {
                    animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
                .animate-ping-medium {
                    animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
                .animate-ping-fast {
                    animation: ping-slow 1.5s cubic-bezier(0, 0, 0.2, 1)
                        infinite;
                }
                .animate-pulse-slow {
                    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                .animate-pulse-medium {
                    animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                .clip-hexagon {
                    clip-path: polygon(
                        50% 0%,
                        100% 25%,
                        100% 75%,
                        50% 100%,
                        0% 75%,
                        0% 25%
                    );
                }
            `}</style>
        </div>
    );
};

export default AdvancedShapes;
