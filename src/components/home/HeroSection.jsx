import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/shared/LanguageContext';

const LETTERS_DATA = [
  { letter: 'E', word: 'Enthusiastic', color: '#FF6B6B' },
  { letter: 'Y', word: 'Youth', color: '#4ECDC4' },
  { letter: 'B', word: 'Bravely', color: '#45B7D1' },
  { letter: 'E', word: 'Exploring', color: '#FFA07A' },
  { letter: 'R', word: 'Ray', color: '#98D8C8' },
  { letter: 'S', word: 'Secondaries', color: '#F7DC6F' }
];

export default function HeroSection() {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate animation progress
  const rotationProgress = Math.min(scrollY / 400, 1); // 0-400px: rotation
  const revealProgress = Math.max(0, Math.min((scrollY - 400) / 600, 1)); // 400-1000px: reveal
  const isFullyRevealed = revealProgress >= 1;
  
  // Parallax for background elements
  const bgY1 = useTransform(useScroll().scrollY, [0, 500], [0, 150]);
  const bgY2 = useTransform(useScroll().scrollY, [0, 500], [0, -100]);
  
  return (
    <section className="relative min-h-[300vh] overflow-hidden">
      {/* Parallax background orbs */}
      <motion.div
        className="fixed w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
          top: '-20%',
          left: '-20%',
          y: bgY1,
        }}
      />
      <motion.div
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)',
          bottom: '-10%',
          right: '-10%',
          y: bgY2,
        }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-px h-px bg-white rounded-full pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            y: useTransform(useScroll().scrollY, [0, 500], [0, Math.random() * 200 - 100]),
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

      {/* Main content - fixed until fully revealed */}
      <div 
        className="fixed inset-0 flex items-center justify-center px-4"
        style={{
          transform: isFullyRevealed ? `translateY(-${(scrollY - 1000) * 0.5}px)` : 'translateY(0)',
          opacity: isFullyRevealed ? Math.max(0, 1 - (scrollY - 1000) / 300) : 1,
        }}
      >
        <div className="relative z-10 text-center">
          {/* EYBERS letters animation */}
          <div 
            className="flex items-center justify-center gap-2 md:gap-4"
            style={{
              flexDirection: rotationProgress > 0.5 ? 'column' : 'row',
            }}
          >
            {LETTERS_DATA.map((item, index) => {
              const letterReveal = Math.max(0, Math.min((revealProgress - index * 0.15) * 2, 1));
              
              return (
                <motion.div
                  key={index}
                  className="relative"
                  style={{
                    marginBottom: rotationProgress > 0.5 ? `${rotationProgress * 20}px` : 0,
                  }}
                >
                  <div className="flex items-center gap-2">
                    {/* Letter */}
                    <motion.span
                      className="text-6xl md:text-8xl lg:text-9xl font-extralight text-white"
                      style={{
                        opacity: 1 - letterReveal * 0.3,
                      }}
                    >
                      {item.letter}
                    </motion.span>
                    
                    {/* Full word reveal */}
                    <motion.span
                      className="text-2xl md:text-4xl lg:text-5xl font-light text-white/90 whitespace-nowrap"
                      style={{
                        opacity: letterReveal,
                        width: `${letterReveal * 100}%`,
                        overflow: 'hidden',
                        marginLeft: letterReveal > 0 ? '8px' : '0px',
                      }}
                    >
                      {item.word}
                    </motion.span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Buttons - appear after full reveal */}
          {isFullyRevealed && (
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      {!isFullyRevealed && (
        <motion.div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-20"
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
        </motion.div>
      )}
    </section>
  );
}