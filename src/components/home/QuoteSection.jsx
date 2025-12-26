import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/shared/LanguageContext';

export default function QuoteSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.div
            className="w-8 h-px bg-white/20 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          />
          <blockquote className="text-center">
            <p className="text-2xl md:text-3xl text-white font-light italic mb-3">
              {t.team.quote}
            </p>
            <p className="text-base md:text-lg text-white/70 font-light">
              {t.team.quoteTranslation}
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}