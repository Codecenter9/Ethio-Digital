import React from "react";
import { motion } from "framer-motion";

const Spotlight = ({
    gradientFirst = "radial-gradient(circle at 55% 35%, hsla(265, 100%, 80%, .16) 0%, hsla(260, 90%, 55%, .03) 40%, transparent 80%)",
    gradientSecond = "radial-gradient(circle at 50% 50%, hsla(270, 100%, 80%, .15) 0%, hsla(270, 80%, 60%, .025) 60%, transparent 100%)",
    gradientThird = "radial-gradient(circle at 50% 50%, hsla(280, 100%, 80%, .14) 0%, hsla(280, 70%, 50%, .02) 70%, transparent 100%)",
    translateY = -350,
    width = 560,
    height = 1380,
    smallWidth = 240,
    duration = 7,
    xOffset = 100,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }} // Reduced from 1 to 0.8
            transition={{ duration: 1.5 }}
            className="pointer-events-none absolute inset-0 h-full w-full"
            style={{ opacity: 0.7 }} // Additional overall opacity reduction
        >
            {/* Left spotlight */}
            <motion.div
                animate={{ x: [0, xOffset, 0] }}
                transition={{
                    duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none"
                style={{ opacity: 0.6 }} // Reduced opacity for left spotlight
            >
                <div
                    style={{
                        transform: `translateY(${translateY}px) rotate(-45deg)`,
                        background: gradientFirst,
                        width: `${width}px`,
                        height: `${height}px`,
                        opacity: 0.5, // Additional reduction
                    }}
                    className="absolute top-0 left-0"
                />

                <div
                    style={{
                        transform: "rotate(-45deg) translate(5%, -50%)",
                        background: gradientSecond,
                        width: `${smallWidth}px`,
                        height: `${height}px`,
                        opacity: 0.4, // Additional reduction
                    }}
                    className="absolute top-0 left-0 origin-top-left"
                />

                <div
                    style={{
                        transform: "rotate(-45deg) translate(-180%, -70%)",
                        background: gradientThird,
                        width: `${smallWidth}px`,
                        height: `${height}px`,
                        opacity: 0.3, // Additional reduction
                    }}
                    className="absolute top-0 left-0 origin-top-left"
                />
            </motion.div>

            {/* Right spotlight */}
            <motion.div
                animate={{ x: [0, -xOffset, 0] }}
                transition={{
                    duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                className="absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none"
                style={{ opacity: 0.6 }} // Reduced opacity for right spotlight
            >
                <div
                    style={{
                        transform: `translateY(${translateY}px) rotate(45deg)`,
                        background: gradientFirst,
                        width: `${width}px`,
                        height: `${height}px`,
                        opacity: 0.5, // Additional reduction
                    }}
                    className="absolute top-0 right-0"
                />

                <div
                    style={{
                        transform: "rotate(45deg) translate(-5%, -50%)",
                        background: gradientSecond,
                        width: `${smallWidth}px`,
                        height: `${height}px`,
                        opacity: 0.4, // Additional reduction
                    }}
                    className="absolute top-0 right-0 origin-top-right"
                />

                <div
                    style={{
                        transform: "rotate(45deg) translate(180%, -70%)",
                        background: gradientThird,
                        width: `${smallWidth}px`,
                        height: `${height}px`,
                        opacity: 0.3, // Additional reduction
                    }}
                    className="absolute top-0 right-0 origin-top-right"
                />
            </motion.div>
        </motion.div>
    );
};

export default Spotlight;
