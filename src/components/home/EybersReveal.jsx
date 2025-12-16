import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const acronym = [
  { letter: 'E', word: 'nthusiastic', color: 'text-blue-400' },
  { letter: 'Y', word: 'outh', color: 'text-purple-400' },
  { letter: 'B', word: 'ravely', color: 'text-pink-400' },
  { letter: 'E', word: 'xploring', color: 'text-cyan-400' },
  { letter: 'R', word: 'ay', color: 'text-indigo-400' },
  { letter: 'S', word: 'econdaries', color: 'text-violet-400' }
];

export default function EybersReveal() {
  const { scrollY } = useScroll();
  const [isComplete, setIsComplete] = useState(false);

  // Transition from horizontal to vertical (0-400px scroll)
  const layoutProgress = useTransform(scrollY, [0, 400], [0, 1]);
  
  // Word reveal (400-800px scroll)
  const wordProgress = useTransform(scrollY, [400, 800], [0, 1]);

  useEffect(() => {
    return wordProgress.on('change', (v) => {
      if (v >= 1) {
        setIsComplete(true);
      } else {
        setIsComplete(false);
      }
    });
  }, [wordProgress]);

  return (
    <>
      <div className="h-[100vh] flex items-center justify-center">
        <motion.div className="relative">
          {acronym.map((item, index) => {
            // Calculate position for horizontal to vertical transition
            const xOffset = useTransform(
              layoutProgress,
              [0, 1],
              [index * 80 - 200, 0]
            );
            const yOffset = useTransform(
              layoutProgress,
              [0, 1],
              [0, index * 100 - 250]
            );

            // Word opacity
            const wordOpacity = useTransform(
              wordProgress,
              [0, 0.3, 1],
              [0, 0, 1]
            );

            // Letter size during word reveal
            const letterScale = useTransform(
              wordProgress,
              [0, 1],
              [1, 0.8]
            );

            return (
              <motion.div
                key={index}
                className="absolute flex items-center"
                style={{
                  x: xOffset,
                  y: yOffset,
                  left: '50%',
                  top: '50%'
                }}
              >
                <motion.span
                  className={`text-7xl md:text-8xl font-bold ${item.color}`}
                  style={{ scale: letterScale }}
                >
                  {item.letter}
                </motion.span>
                <motion.span
                  className={`text-4xl md:text-5xl font-light ${item.color} ml-1`}
                  style={{ opacity: wordOpacity }}
                >
                  {item.word}
                </motion.span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Spacer for scroll */}
      <div className="h-[100vh]" />

      {/* Content that appears after reveal */}
      {isComplete && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20"
        >
          {/* This is where the hero content will go */}
        </motion.div>
      )}
    </>
  );
}