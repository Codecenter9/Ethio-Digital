import React from "react";

export default function Preloader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 backdrop-blur-sm">
            <div className="relative flex flex-col items-center justify-center space-y-8">
                {/* Elegant Spinner */}
                <div className="relative">
                    {/* Outer Glow */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/30 to-purple-500/30 rounded-full blur-lg animate-pulse"></div>

                    {/* Main Spinner */}
                    <div className="relative w-16 h-16">
                        {/* Spinning Ring */}
                        <div className="absolute inset-0 border-4 border-transparent rounded-full animate-spin-slow">
                            <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 opacity-80"></div>
                        </div>

                        {/* Center Logo */}
                        <div className="absolute inset-2 flex items-center justify-center bg-slate-900/90 rounded-full backdrop-blur-sm border border-slate-700/50">
                            <div className="text-white font-bold text-lg tracking-tight bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                                MD
                            </div>
                        </div>
                    </div>
                </div>

                {/* Loading Content */}
                <div className="text-center space-y-4">
                    <h2 className="text-2xl font-light text-white tracking-wide">
                        Meskot Digitals
                    </h2>

                    {/* Elegant Loading Dots */}
                    <div className="flex space-x-2 justify-center">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse delay-0"></div>
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-150"></div>
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
                    </div>
                </div>

                {/* Subtle Background Elements */}
                <div className="absolute -bottom-8 w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent rounded-full animate-pulse"></div>
            </div>
        </div>
    );
}
