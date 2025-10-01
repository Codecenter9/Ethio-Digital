import React from "react";

export default function Preloader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-900 backdrop-blur-sm">
            <div className="relative w-48 h-48">
                <svg
                    viewBox="0 0 200 200"
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Window Frame */}
                    <rect
                        x="50"
                        y="60"
                        width="100"
                        height="80"
                        fill="none"
                        stroke="url(#frameGradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className="animate-drawFrame"
                    />

                    {/* Window Panes - Cross */}
                    <path
                        d="M 100,60 L 100,140 M 50,100 L 150,100"
                        fill="none"
                        stroke="url(#paneGradient)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="animate-drawPanes"
                    />

                    {/* Rising Sun */}
                    <circle
                        cx="100"
                        cy="160"
                        r="20"
                        fill="url(#sunGradient)"
                        className="animate-riseSun"
                    >
                        <animate
                            attributeName="cy"
                            from="160"
                            to="80"
                            dur="2s"
                            fill="freeze"
                            begin="0.5s"
                        />
                    </circle>

                    {/* Sun Reflection on Window */}
                    <ellipse
                        cx="100"
                        cy="140"
                        rx="15"
                        ry="5"
                        fill="url(#reflectionGradient)"
                        className="animate-fadeReflection"
                    >
                        <animate
                            attributeName="cy"
                            from="140"
                            to="90"
                            dur="2s"
                            fill="freeze"
                            begin="0.5s"
                        />
                        <animate
                            attributeName="opacity"
                            values="0;0.8;0.4;0"
                            dur="3s"
                            fill="freeze"
                            begin="0.5s"
                        />
                    </ellipse>

                    {/* Sun Rays */}
                    <g className="animate-pulseRays">
                        <line
                            x1="100"
                            y1="140"
                            x2="100"
                            y2="125"
                            stroke="url(#rayGradient)"
                            strokeWidth="1.5"
                        />
                        <line
                            x1="100"
                            y1="140"
                            x2="115"
                            y2="135"
                            stroke="url(#rayGradient)"
                            strokeWidth="1.5"
                        />
                        <line
                            x1="100"
                            y1="140"
                            x2="120"
                            y2="150"
                            stroke="url(#rayGradient)"
                            strokeWidth="1.5"
                        />
                        <line
                            x1="100"
                            y1="140"
                            x2="110"
                            y2="155"
                            stroke="url(#rayGradient)"
                            strokeWidth="1.5"
                        />
                        <line
                            x1="100"
                            y1="140"
                            x2="90"
                            y2="155"
                            stroke="url(#rayGradient)"
                            strokeWidth="1.5"
                        />
                        <line
                            x1="100"
                            y1="140"
                            x2="80"
                            y2="150"
                            stroke="url(#rayGradient)"
                            strokeWidth="1.5"
                        />
                        <line
                            x1="100"
                            y1="140"
                            x2="85"
                            y2="135"
                            stroke="url(#rayGradient)"
                            strokeWidth="1.5"
                        />
                    </g>

                    {/* Digital Solutions Text */}
                    <text
                        x="100"
                        y="180"
                        textAnchor="middle"
                        className="text-xs font-semibold fill-gray-300"
                        style={{
                            fontFamily: "system-ui, sans-serif",
                            fontSize: "10px",
                        }}
                    >
                        Meskot Digital Solutions
                    </text>

                    {/* Gradients */}
                    <defs>
                        {/* Window Frame Gradient */}
                        <linearGradient
                            id="frameGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop offset="0%" stopColor="#8B5CF6" />
                            <stop offset="50%" stopColor="#06B6D4" />
                            <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>

                        {/* Window Pane Gradient */}
                        <linearGradient
                            id="paneGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop
                                offset="0%"
                                stopColor="#8B5CF6"
                                stopOpacity="0.8"
                            />
                            <stop
                                offset="100%"
                                stopColor="#06B6D4"
                                stopOpacity="0.8"
                            />
                        </linearGradient>

                        {/* Sun Gradient */}
                        <radialGradient
                            id="sunGradient"
                            cx="30%"
                            cy="30%"
                            r="70%"
                        >
                            <stop offset="0%" stopColor="#FDE047" />
                            <stop offset="70%" stopColor="#F59E0B" />
                            <stop offset="100%" stopColor="#DC2626" />
                        </radialGradient>

                        {/* Reflection Gradient */}
                        <linearGradient
                            id="reflectionGradient"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                        >
                            <stop
                                offset="0%"
                                stopColor="#FDE047"
                                stopOpacity="0.8"
                            />
                            <stop
                                offset="100%"
                                stopColor="#F59E0B"
                                stopOpacity="0.3"
                            />
                        </linearGradient>

                        {/* Ray Gradient */}
                        <linearGradient
                            id="rayGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop offset="0%" stopColor="#FDE047" />
                            <stop offset="100%" stopColor="#F59E0B" />
                        </linearGradient>

                        {/* Glow Effect */}
                        <filter
                            id="glow"
                            x="-50%"
                            y="-50%"
                            width="200%"
                            height="200%"
                        >
                            <feGaussianBlur
                                in="SourceGraphic"
                                stdDeviation="2"
                                result="blur"
                            />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                </svg>

                {/* Ambient Light Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-blue-500/5 rounded-full animate-pulse"></div>
            </div>

            <style jsx>{`
                @keyframes drawFrame {
                    0% {
                        stroke-dasharray: 360;
                        stroke-dashoffset: 360;
                        opacity: 0;
                    }
                    50% {
                        stroke-dashoffset: 0;
                        opacity: 1;
                    }
                    100% {
                        stroke-dasharray: 360;
                        stroke-dashoffset: 0;
                        opacity: 1;
                    }
                }
                @keyframes drawPanes {
                    0% {
                        stroke-dasharray: 160;
                        stroke-dashoffset: 160;
                        opacity: 0;
                    }
                    50% {
                        stroke-dashoffset: 0;
                        opacity: 1;
                    }
                    100% {
                        stroke-dasharray: 160;
                        stroke-dashoffset: 0;
                        opacity: 1;
                    }
                }
                @keyframes riseSun {
                    0% {
                        transform: translateY(0);
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-80px);
                        opacity: 1;
                    }
                }
                @keyframes fadeReflection {
                    0% {
                        opacity: 0;
                    }
                    50% {
                        opacity: 0.8;
                    }
                    100% {
                        opacity: 0;
                    }
                }
                @keyframes pulseRays {
                    0%,
                    100% {
                        opacity: 0.3;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.1);
                    }
                }
                .animate-drawFrame {
                    stroke-dasharray: 360;
                    stroke-dashoffset: 360;
                    animation: drawFrame 2s ease-out forwards;
                    filter: url(#glow);
                }
                .animate-drawPanes {
                    stroke-dasharray: 160;
                    stroke-dashoffset: 160;
                    animation: drawPanes 1.5s ease-out 0.5s forwards;
                    filter: url(#glow);
                }
                .animate-riseSun {
                    animation: riseSun 2s ease-in-out 1s forwards;
                    filter: url(#glow);
                }
                .animate-fadeReflection {
                    animation: fadeReflection 3s ease-in-out 1s forwards;
                }
                .animate-pulseRays {
                    animation: pulseRays 2s ease-in-out infinite;
                    opacity: 0;
                    animation-delay: 2s;
                }
            `}</style>
        </div>
    );
}
