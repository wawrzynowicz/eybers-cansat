import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { useLanguage } from '@/components/shared/LanguageContext';

export default function TeamSupervisorCard({ supervisor }) {
  const { language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const description = language === 'pl' && supervisor.description_pl
    ? supervisor.description_pl
    : supervisor.description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-20"
    >
      {/* Section label */}
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 uppercase tracking-[0.3em] text-xs mb-8 font-bold text-center">
        Team Supervisor
      </p>

      <div
        className="group relative max-w-xs mx-auto cursor-default"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main photo */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
          {supervisor.image_url_1 ? (
            <img
              src={supervisor.image_url_1}
              alt={supervisor.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-white/[0.02] flex items-center justify-center">
              <User className="w-12 h-12 text-white/10" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Second photo — top right corner */}
          {supervisor.image_url_2 && (
            <div className="absolute top-3 right-3 w-1/3 aspect-square rounded-lg overflow-hidden border-2 border-white/30 shadow-lg">
              <img
                src={supervisor.image_url_2}
                alt={supervisor.image_subtitle_2 || supervisor.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Title */}
        <div className="mt-4 text-center">
          <h3 className="text-xl font-medium text-white">dr inż. Dariusz Janiszewski</h3>
        </div>

        {/* Description on hover */}
        {description && (
          <motion.div
            animate={isHovered ? { opacity: 1, maxHeight: 300, y: 0 } : { opacity: 0, maxHeight: 0, y: -10 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="overflow-hidden mt-3"
          >
            <p
              className="text-white/90 text-sm leading-relaxed bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-lg text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37)'
              }}
            >
              {description}
            </p>
          </motion.div>
        )}

        {/* Bottom line */}
        <div className="h-px bg-white/20 w-0 group-hover:w-full transition-all duration-700 mt-4" />
      </div>
    </motion.div>
  );
}