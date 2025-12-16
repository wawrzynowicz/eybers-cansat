import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/shared/LanguageContext';

const acronym = [
  { letter: 'E', word: 'nthusiastic' },
  { letter: 'Y', word: 'outh' },
  { letter: 'B', word: 'ravely' },
  { letter: 'E', word: 'xploring' },
  { letter: 'R', word: 'ay' },
  { letter: 'S', word: 'econdaries' }
];

export default function HeroSection() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const [isComplete, setIsComplete] = useState(false);

  // Parallax for background elements
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
  const backgroundOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  
  // Transition from horizontal to vertical (0-500px scroll)
  const layoutProgress = useTransform(scrollY, [0, 500], [0, 1]);
  
  // Word reveal (600-1300px scroll) - starts after vertical positioning is complete
  const wordProgress = useTransform(scrollY, [600, 1300], [0, 1]);

  // Fixed content appears after full reveal (with longer pause)
  const contentOpacity = useTransform(scrollY, [1500, 1600], [0, 1]);
  const contentY = useTransform(scrollY, [1500, 1600], [50, 0]);

  useEffect(() => {
    return wordProgress.on('change', (v) => {
      setIsComplete(v >= 0.95);
    });
  }, [wordProgress]);
  
  return (
    <>
      {/* EYBERS Acronym Section - Takes 3 viewport heights */}
      <section className="relative h-[300vh]">
        {/* Parallax background elements */}
        <motion.div
          className="fixed inset-0 z-0"
          style={{ y: backgroundY, opacity: backgroundOpacity }}
        >
          <motion.div
            className="absolute w-[800px] h-[800px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
              filter: 'blur(60px)',
              top: '10%',
              left: '20%'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
              filter: 'blur(60px)',
              bottom: '10%',
              right: '20%'
            }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-px bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </motion.div>

        {/* Sticky container for EYBERS animation */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            {acronym.map((item, index) => {
              // Calculate position for horizontal to vertical transition
              const xOffset = useTransform(
                layoutProgress,
                [0, 1],
                [index * 90 - 225, 0]
              );
              const yOffset = useTransform(
                layoutProgress,
                [0, 1],
                [0, index * 90 - 225]
              );

              // Word opacity and width
              const wordOpacity = useTransform(
                wordProgress,
                [0, 0.2, 1],
                [0, 0, 1]
              );

              const wordWidth = useTransform(
                wordProgress,
                [0, 1],
                ['0%', '100%']
              );

              // Calculate horizontal offset to keep text centered as word reveals
              const centerOffset = useTransform(
                wordProgress,
                [0, 1],
                [0, -100]
              );

              return (
                <motion.div
                  key={index}
                  className="absolute flex items-center whitespace-nowrap"
                  style={{
                    x: useTransform(() => xOffset.get() + centerOffset.get()),
                    y: yOffset,
                    left: '50%',
                    top: '50%'
                  }}
                >
                  <motion.span
                    className="text-6xl md:text-8xl font-extralight text-white"
                  >
                    {item.letter}
                  </motion.span>
                  <motion.div
                    className="overflow-hidden"
                    style={{ 
                      opacity: wordOpacity,
                      width: wordWidth
                    }}
                  >
                    <span className="text-3xl md:text-5xl font-light text-white/90 ml-1">
                      {item.word}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hero Content - Only visible after EYBERS is fully revealed */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center px-4 -mb-20"
        style={{
          opacity: contentOpacity,
          y: contentY,
          pointerEvents: isComplete ? 'auto' : 'none'
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto text-center">
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#mission"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-white/20" />
          </motion.div>
        </motion.a>
      </motion.section>
    </>
  );
}