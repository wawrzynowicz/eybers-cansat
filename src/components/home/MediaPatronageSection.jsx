import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/shared/LanguageContext';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';

export default function MediaPatronageSection() {
  const { t } = useLanguage();

  const { data: mediaPartners = [], isLoading } = useQuery({
    queryKey: ['mediaPartners'],
    queryFn: () => base44.entities.MediaPartner.list('order'),
  });

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 uppercase tracking-[0.3em] text-xs mb-4 font-bold">
            {t.mediaPatronage.sectionTitle}
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            {t.mediaPatronage.heading}
          </h2>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-6 h-6 text-white/30 animate-spin" />
          </div>
        ) : (
          <div className="flex flex-wrap justify-center items-center gap-16">
            {mediaPartners.map((partner, index) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img
                  src={partner.logo_url}
                  alt={`${partner.name} logo`}
                  className="h-16 md:h-20 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}