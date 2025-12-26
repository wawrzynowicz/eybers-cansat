import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/components/shared/LanguageContext';

export default function QuoteSection() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();

  // Calculate when EYBERS fully disappears (around 1600px based on HeroSection)
  const mottoOpacity = useTransform(scrollY, [1600, 1800], [0, 1]);
  const mottoY = useTransform(scrollY, [1600, 1800], [30, 0]);
  const translationOpacity = useTransform(scrollY, [1900, 2100], [0, 1]);
  const translationY = useTransform(scrollY, [1900, 2100], [20, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <motion.div
            className="w-8 h-px bg-white/20 mx-auto mb-12"
            style={{ 
              opacity: mottoOpacity,
              scaleX: useTransform(scrollY, [1600, 1800], [0, 1])
            }}
          />
          <blockquote className="text-center space-y-8">
            <motion.p 
              className="text-3xl md:text-5xl text-white font-light italic"
              style={{
                opacity: mottoOpacity,
                y: mottoY
              }}
            >
              {t.team.quote}
            </motion.p>
            <motion.p 
              className="text-lg md:text-2xl text-white/70 font-light"
              style={{
                opacity: translationOpacity,
                y: translationY
              }}
            >
              {t.team.quoteTranslation}
            </motion.p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}