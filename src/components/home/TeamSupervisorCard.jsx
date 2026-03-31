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

  const PhotoSlot = ({ url, subtitle }) => (
    <div className="flex flex-col items-center gap-2 flex-1">
      <div className="aspect-[3/4] w-full relative overflow-hidden bg-white/[0.02]">
        {url ? (
          <motion.img
            src={url}
            alt={subtitle || supervisor.title}
            className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-700"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
          />
        ) : (
          <div className="w-full h-full bg-white/[0.02] flex items-center justify-center">
            <User className="w-12 h-12 text-white/10" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      {subtitle && (
        <p className="text-white/50 text-xs uppercase tracking-wider text-center">{subtitle}</p>
      )}
    </div>
  );

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
        className="group relative max-w-2xl mx-auto cursor-default"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Photos row */}
        <div className="flex gap-4">
          <PhotoSlot url="https://media.base44.com/images/public/6931f02077d600a24db95382/b794813fe_5d54f6f4-77f5-4cfc-a019-6f58bf90d64b.jpeg" subtitle={supervisor.image_subtitle_1} />
          <PhotoSlot url="https://media.base44.com/images/public/6931f02077d600a24db95382/a9e622626_image.png" subtitle={supervisor.image_subtitle_2} />
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