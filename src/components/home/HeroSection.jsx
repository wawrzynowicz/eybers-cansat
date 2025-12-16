import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/shared/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const acronym = [
    { letter: 'E', word: 'nthusiastic' },
    { letter: 'Y', word: 'outh' },
    { letter: 'B', word: 'ravely' },
    { letter: 'E', word: 'xploring' },
    { letter: 'R', word: 'ay' },
    { letter: 'S', word: 'econdaries' }
  ];
  
  return (
    <section ref={sectionRef} className="relative min-h-[150vh] flex items-center justify-center overflow-hidden px-4">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
          top: '-20%',
          left: '-20%',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)',
          bottom: '-10%',
          right: '-10%',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* Tagline */}
          <motion.p
            className="text-white/30 uppercase tracking-[0.4em] text-xs md:text-sm mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t.hero.tagline}
          </motion.p>

          {/* Main title with scroll-triggered expansion */}
          <div className="mb-6">
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-4xl md:text-6xl lg:text-8xl font-extralight text-white">
              {acronym.map((item, index) => {
                const progress = useTransform(
                  scrollYProgress,
                  [index * 0.12, (index + 1) * 0.12],
                  [0, 1]
                );
                const opacity = useTransform(progress, [0, 1], [0, 1]);
                const width = useTransform(progress, [0, 1], ['0ch', `${item.word.length}ch`]);

                return (
                  <motion.div
                    key={index}
                    className="inline-flex items-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  >
                    <span className="font-semibold">{item.letter}</span>
                    <motion.span
                      style={{ opacity, width }}
                      className="overflow-hidden whitespace-nowrap"
                    >
                      {item.word}
                    </motion.span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Animated line */}
          <motion.div
            className="w-24 h-px bg-white/20 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          />

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed font-light whitespace-pre-line"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {t.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <a href="#project">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-white/90 rounded-none px-8 h-12 text-sm font-medium tracking-wide transition-all duration-300 hover:tracking-wider"
              >
                {t.hero.exploreProject}
              </Button>
            </a>
            <a href="#team">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/5 hover:border-white/40 rounded-none px-8 h-12 text-sm font-medium tracking-wide transition-all duration-300"
              >
                {t.hero.meetTeam}
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#mission"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-white/20" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}