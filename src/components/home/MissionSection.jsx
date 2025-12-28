import React from 'react';
import { motion } from 'framer-motion';
import { Users, Rocket, Trophy, Target, Loader2 } from 'lucide-react';
import { useLanguage } from '@/components/shared/LanguageContext';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';

const iconMap = {
  Users,
  Rocket,
  Trophy,
  Target
};

export default function MissionSection() {
  const { t, language } = useLanguage();
  
  const { data: cards = [], isLoading } = useQuery({
    queryKey: ['aboutCards'],
    queryFn: () => base44.entities.AboutCard.list('order'),
  });

  const displayCards = cards.map(card => ({
    icon: iconMap[card.icon] || Users,
    title: language === 'pl' && card.title_pl ? card.title_pl : card.title,
    description: language === 'pl' && card.description_pl ? card.description_pl : card.description
  }));
  
  return (
    <section className="relative py-32 px-4" id="mission">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-white/30 uppercase tracking-[0.3em] text-xs mb-4">{t.aboutUs.sectionTitle}</p>
          <h2 className="text-4xl md:text-5xl font-light text-white">
            {t.aboutUs.heading}
          </h2>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-6 h-6 text-white/30 animate-spin" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {displayCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full border border-white/20 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500">
                {/* Icon with glow */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-blue-400/50 transition-all duration-500">
                  <card.icon className="w-7 h-7 text-blue-400" strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">{card.title}</h3>
                <p className="text-white/80 leading-relaxed text-base">{card.description}</p>

                {/* Accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              </motion.div>
              ))}
              </div>
              )}
      </div>
    </section>
  );
}