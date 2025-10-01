import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// Single Counter
const Counter = ({ target, text, suffix, Icon }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000;
            const stepTime = Math.abs(Math.floor(duration / target));
            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start >= target) clearInterval(timer);
            }, stepTime);
        }
    }, [isInView, target]);

    return (
        <motion.li
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-pink-500/30 transition-all duration-300 "
        >
            <div className="inner flex flex-col gap-3 md:flex-row items-center justify-center">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
                    {count.toLocaleString()}
                    {suffix || "+"}
                </h3>
                <p className="mt-2 text-xl font-medium text-gray-200">{text}</p>
            </div>
        </motion.li>
    );
};

// Wrapper
const Counters = () => {
    const constants = [
        { count: 100, text: "Satisfied Clients", suffix: "" },
        { count: 25, text: "Projects Completed" },
        { count: 10, text: "Countries Reached" },
        { count: 15, text: "Team Members" },
    ];

    return (
        <section className="px-5 py-12 md:px-12 pb-0 w-full mx-auto">
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
                {constants.map((counter, idx) => (
                    <Counter
                        key={idx}
                        target={counter.count}
                        text={counter.text}
                        suffix={counter.suffix}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Counters;
