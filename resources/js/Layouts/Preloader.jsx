import React from "react";

export default function Preloader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-900 backdrop-blur-sm">
            <div className="relative flex flex-col items-center justify-center space-y-6">
                {/* Main Logo Container */}
                <div className="relative w-20 h-20">
                    {/* Animated Border */}
                    <div className="absolute inset-0 border-2 border-transparent rounded-lg animate-spin-slow">
                        <div className="w-full h-full rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 opacity-75"></div>
                    </div>

                    {/* Inner Content */}
                    <div className="absolute inset-2 flex items-center justify-center bg-gray-900/80 rounded-md backdrop-blur-sm">
                        <div className="text-white font-bold text-sm tracking-wider">
                            MD
                        </div>
                    </div>
                </div>

                {/* Loading Text */}
                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-purple-200 to-cyan-200 bg-clip-text text-transparent">
                        Meskot Digitals
                    </h2>
                    <div className="flex space-x-1 justify-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                </div>

                {/* Subtle Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse-slow"></div>
            </div>
        </div>
    );
}
