import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/shared/LanguageContext';

export default function QuoteSection() {
  const { t } = useLanguage();

  const motto = t.team.quote;
  const translation = t.team.quoteTranslation;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <motion.div
            className="w-8 h-px bg-white/20 mx-auto mb-12"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <blockquote className="text-center space-y-8">
            <p className="text-3xl md:text-5xl text-white font-light italic">
              {motto.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.1,
                    delay: 0.8 + index * 0.05
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </p>
            <motion.p 
              className="text-lg md:text-2xl text-white/70 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.8 + motto.length * 0.05 + 0.5
              }}
            >
              {translation}
            </motion.p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}