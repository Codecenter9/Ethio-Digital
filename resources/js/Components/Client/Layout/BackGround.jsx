import React from "react";

const BubbleBackground = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
            <svg
                className="absolute top-0 left-0 w-full h-full"
                viewBox="0 0 800 600"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    {/* Main Background Gradient */}
                    <linearGradient
                        id="mainGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                    >
                        <stop offset="0%" stopColor="#0f0f23" stopOpacity="1" />
                        <stop
                            offset="50%"
                            stopColor="#1a1a2e"
                            stopOpacity="1"
                        />
                        <stop
                            offset="100%"
                            stopColor="#16213e"
                            stopOpacity="1"
                        />
                    </linearGradient>

                    {/* Shape Gradients */}
                    <linearGradient
                        id="gradient1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                    >
                        <stop
                            offset="0%"
                            stopColor="#8B5CF6"
                            stopOpacity="0.4"
                        />
                        <stop
                            offset="100%"
                            stopColor="#EC4899"
                            stopOpacity="0.2"
                        />
                    </linearGradient>

                    <linearGradient
                        id="gradient2"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                    >
                        <stop
                            offset="0%"
                            stopColor="#3B82F6"
                            stopOpacity="0.3"
                        />
                        <stop
                            offset="100%"
                            stopColor="#06B6D4"
                            stopOpacity="0.15"
                        />
                    </linearGradient>

                    <linearGradient
                        id="gradient3"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                    >
                        <stop
                            offset="0%"
                            stopColor="#10B981"
                            stopOpacity="0.3"
                        />
                        <stop
                            offset="100%"
                            stopColor="#84CC16"
                            stopOpacity="0.15"
                        />
                    </linearGradient>

                    <linearGradient
                        id="gradient4"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                    >
                        <stop
                            offset="0%"
                            stopColor="#F59E0B"
                            stopOpacity="0.3"
                        />
                        <stop
                            offset="100%"
                            stopColor="#D97706"
                            stopOpacity="0.15"
                        />
                    </linearGradient>

                    {/* Filters */}
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
                            stdDeviation="8"
                            result="blurred"
                        />
                        <feFlood
                            floodColor="#8B5CF6"
                            floodOpacity="0.4"
                            result="glowColor"
                        />
                        <feComposite
                            in="glowColor"
                            in2="blurred"
                            operator="in"
                            result="softGlow_colored"
                        />
                        <feMerge>
                            <feMergeNode in="softGlow_colored" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    <filter id="blur">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
                    </filter>

                    {/* Modern Shapes */}
                    <symbol id="hexagon" viewBox="0 0 100 100">
                        <path
                            d="M50,15 L85,35 L85,65 L50,85 L15,65 L15,35 Z"
                            fill="currentColor"
                        />
                    </symbol>

                    <symbol id="diamond" viewBox="0 0 100 100">
                        <path
                            d="M50,10 L90,50 L50,90 L10,50 Z"
                            fill="currentColor"
                        />
                    </symbol>

                    <symbol id="star" viewBox="0 0 100 100">
                        <path
                            d="M50,10 L61,35 L88,35 L66,52 L72,78 L50,63 L28,78 L34,52 L12,35 L39,35 Z"
                            fill="currentColor"
                        />
                    </symbol>

                    <symbol id="cloud" viewBox="0 0 100 60">
                        <path
                            d="M20,40 C10,40 0,30 0,20 C0,10 10,0 20,0 C25,0 30,3 33,8 C38,3 45,0 50,0 C65,0 75,10 75,25 C85,25 95,35 95,45 C95,55 85,60 75,60 L25,60 C15,60 5,55 5,45 C5,35 15,30 20,40 Z"
                            fill="currentColor"
                        />
                    </symbol>

                    <symbol id="wave" viewBox="0 0 100 30">
                        <path
                            d="M0,15 C20,0 40,30 60,15 C80,0 100,30 100,15 L100,30 L0,30 Z"
                            fill="currentColor"
                        />
                    </symbol>
                </defs>

                {/* Background */}
                <rect width="100%" height="100%" fill="url(#mainGradient)" />

                {/* Floating Hexagons */}
                {[...Array(6)].map((_, i) => {
                    const size = 40 + Math.random() * 40;
                    const x = Math.random() * 700;
                    const y = Math.random() * 500;
                    const rotation = Math.random() * 360;
                    const delay = Math.random() * 5;

                    return (
                        <use
                            key={`hex-${i}`}
                            href="#hexagon"
                            x={x}
                            y={y}
                            width={size}
                            height={size}
                            fill="url(#gradient1)"
                            opacity="0.1"
                            filter="url(#blur)"
                            transform={`rotate(${rotation} ${x + size / 2} ${
                                y + size / 2
                            })`}
                            style={{
                                animation: `float ${
                                    15 + delay
                                }s ease-in-out infinite`,
                            }}
                        />
                    );
                })}

                {/* Floating Diamonds */}
                {[...Array(5)].map((_, i) => {
                    const size = 30 + Math.random() * 50;
                    const x = Math.random() * 750;
                    const y = Math.random() * 550;
                    const rotation = Math.random() * 360;
                    const delay = Math.random() * 5;

                    return (
                        <use
                            key={`diamond-${i}`}
                            href="#diamond"
                            x={x}
                            y={y}
                            width={size}
                            height={size}
                            fill="url(#gradient2)"
                            opacity="0.08"
                            filter="url(#blur)"
                            transform={`rotate(${rotation} ${x + size / 2} ${
                                y + size / 2
                            })`}
                            style={{
                                animation: `rotate ${
                                    40 + delay
                                }s linear infinite`,
                            }}
                        />
                    );
                })}

                {/* Twinkling Stars */}
                {[...Array(12)].map((_, i) => {
                    const size = 8 + Math.random() * 15;
                    const x = Math.random() * 780;
                    const y = Math.random() * 580;
                    const rotation = Math.random() * 360;
                    const delay = Math.random() * 3;

                    return (
                        <use
                            key={`star-${i}`}
                            href="#star"
                            x={x}
                            y={y}
                            width={size}
                            height={size}
                            fill="url(#gradient4)"
                            opacity="0.4"
                            style={{
                                animation: `twinkle ${
                                    3 + delay
                                }s ease-in-out infinite`,
                            }}
                        />
                    );
                })}

                {/* Floating Clouds */}
                {[...Array(4)].map((_, i) => {
                    const width = 80 + Math.random() * 100;
                    const height = width * 0.6;
                    const x = Math.random() * 700;
                    const y = Math.random() * 400;
                    const delay = Math.random() * 8;

                    return (
                        <use
                            key={`cloud-${i}`}
                            href="#cloud"
                            x={x}
                            y={y}
                            width={width}
                            height={height}
                            fill="url(#gradient3)"
                            opacity="0.06"
                            filter="url(#blur)"
                            style={{
                                animation: `drift ${
                                    25 + delay
                                }s ease-in-out infinite`,
                            }}
                        />
                    );
                })}

                {/* Wave Patterns */}
                {[...Array(3)].map((_, i) => {
                    const width = 200 + Math.random() * 300;
                    const height = 40;
                    const x = Math.random() * 600;
                    const y = 100 + Math.random() * 400;
                    const delay = Math.random() * 10;

                    return (
                        <use
                            key={`wave-${i}`}
                            href="#wave"
                            x={x}
                            y={y}
                            width={width}
                            height={height}
                            fill="url(#gradient1)"
                            opacity="0.05"
                            style={{
                                animation: `wave ${
                                    12 + delay
                                }s ease-in-out infinite`,
                            }}
                        />
                    );
                })}

                {/* Elegant Dots Grid */}
                {[...Array(8)].map((_, i) =>
                    [...Array(6)].map((_, j) => {
                        const x = 50 + i * 100;
                        const y = 50 + j * 100;
                        const size = 2 + Math.random() * 3;
                        const delay = Math.random() * 2;

                        return (
                            <circle
                                key={`dot-${i}-${j}`}
                                cx={x}
                                cy={y}
                                r={size}
                                fill="rgba(255,255,255,0.03)"
                                style={{
                                    animation: `pulse ${
                                        4 + delay
                                    }s ease-in-out infinite`,
                                }}
                            />
                        );
                    })
                )}

                {/* Connection Lines */}
                {[...Array(20)].map((_, i) => {
                    const x1 = Math.random() * 800;
                    const y1 = Math.random() * 600;
                    const x2 = x1 + (Math.random() * 150 - 75);
                    const y2 = y1 + (Math.random() * 150 - 75);

                    return (
                        <line
                            key={`line-${i}`}
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke="rgba(139, 92, 246, 0.1)"
                            strokeWidth="0.5"
                            strokeDasharray="2,4"
                        />
                    );
                })}
            </svg>

            {/* Animations */}
            <style>{`
                @keyframes float {
                    0%, 100% { 
                        transform: translateY(0) rotate(0deg);
                        opacity: 0.1;
                    }
                    50% { 
                        transform: translateY(-20px) rotate(5deg);
                        opacity: 0.15;
                    }
                }

                @keyframes rotate {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                @keyframes twinkle {
                    0%, 100% { 
                        opacity: 0.3;
                        transform: scale(1);
                    }
                    50% { 
                        opacity: 0.8;
                        transform: scale(1.1);
                    }
                }

                @keyframes drift {
                    0%, 100% { 
                        transform: translateX(0);
                        opacity: 0.06;
                    }
                    50% { 
                        transform: translateX(30px);
                        opacity: 0.09;
                    }
                }

                @keyframes wave {
                    0%, 100% { 
                        transform: translateX(0) scaleY(1);
                    }
                    50% { 
                        transform: translateX(-10px) scaleY(1.05);
                    }
                }

                @keyframes pulse {
                    0%, 100% { 
                        opacity: 0.03;
                        r: 2;
                    }
                    50% { 
                        opacity: 0.08;
                        r: 2.5;
                    }
                }
            `}</style>
        </div>
    );
};

export default BubbleBackground;
