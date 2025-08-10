import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface AnimatedTextProps {
  phrases: string[];
  className: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", damping: 12, stiffness: 100 },
  },
  exit: {
    opacity: 0,
    y: -30,
    x: 20,
    skew: 30,
    rotateZ: 60,
    transition: { type: "tween", ease: "anticipate", duration: 0.5 },
  },
};

export const AnimatedText = ({ phrases, className }: AnimatedTextProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [phrases.length]);

  return (
    <span className={`inline-block align-middle ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={phrases[index]}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ display: "inline-block" }}
        >
          {phrases[index].split("").map((char, i) => (
            <motion.span key={i} variants={letterVariants} style={{ display: 'inline-block' }}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </span>
  );
}; 