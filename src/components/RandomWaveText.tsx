import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import "./random-wave.css";

interface RandomWaveTextProps {
  text: string;
}

export const RandomWaveText = ({ text }: RandomWaveTextProps) => {
  const letters = useMemo(() => text.split(""), [text]);
  const [animatedIndices, setAnimatedIndices] = useState<Set<number>>(
    new Set()
  );

  const timeoutRef = useRef<number | null>(null);

  const pickLetterToAnimate = useCallback(() => {
    setAnimatedIndices((currentIndices) => {
      const availableIndices = letters
        .map((_, i) => i)
        .filter((i) => !currentIndices.has(i) && letters[i].trim() !== "");

      if (availableIndices.length > 0) {
        const randomIndex =
          availableIndices[Math.floor(Math.random() * availableIndices.length)];

        const newIndices = new Set(currentIndices);
        newIndices.add(randomIndex);

        setTimeout(() => {
          setAnimatedIndices((prev) => {
            const next = new Set(prev);
            next.delete(randomIndex);
            return next;
          });
        }, 4000); // Animation duration

        return newIndices;
      }

      return currentIndices;
    });

    const randomInterval = Math.random() * 1000 + 2000;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(pickLetterToAnimate, randomInterval);
  }, [letters]);

  useEffect(() => {
    const randomInitialDelay = Math.random() * 1000 + 2000;
    timeoutRef.current = window.setTimeout(pickLetterToAnimate, randomInitialDelay);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [pickLetterToAnimate]);

  return (
    <>
      {letters.map((letter, index) => (
        <span
          key={index}
          className={`random-wave-letter ${
            animatedIndices.has(index) ? "is-waving" : ""
          }`}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </>
  );
}; 