"use client";

import { useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";

interface HandWrittenTitleProps {
    title?: string;
    subtitle?: string;
    className?: string;
}

const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { delay: 0.2, type: "spring", duration: 3, bounce: 0 },
            opacity: { delay: 0.2, duration: 0.01 },
        },
    },
};

export function HandWrittenTitle({
    title = "Build Your Financial Future",
    subtitle = "Welcome to the next generation of finance.",
    className
}: HandWrittenTitleProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div ref={ref} className={`relative w-full py-20 sm:py-24 md:py-32 ${className}`}>
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 3500 1200"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="w-full h-auto max-h-[600px]"
                >
                    <motion.path
                        d="M 200,600 C -200,250 3700,250 3300,600 C 2900,950 600,950 200,600"
                        fill="none"
                        strokeWidth="20"
                        stroke="currentColor"
                        variants={draw}
                        className="text-gray-800 opacity-50"
                    />
                </motion.svg>
            </div>
            <div className="relative text-center z-10 flex flex-col items-center justify-center h-full px-4">
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl text-gray-900 tracking-tight font-space flex items-center gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        className="text-base sm:text-lg text-gray-600 mt-2 max-w-2xl"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </div>
    );
} 