import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/shared/LanguageContext';

export default function StatsSection() {
  const { t } = useLanguage();
  
  const stats = [
    { value: "6", label: t.stats.teamMembers },
    { value: "1", label: t.stats.activeProject },
    { value: "∞", label: t.stats.curiosity },
    { value: "Apr 2026", label: t.stats.launchTarget }
  ];
  
  const gradients = [
    'from-cyan-400 to-blue-400',
    'from-purple-400 to-pink-400',
    'from-pink-400 to-orange-400',
    'from-orange-400 to-yellow-400'
  ];

  return (
    <section className="relative py-12 px-4 border-y border-purple-500/20 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-orange-500/5">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.p 
                className={`text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${gradients[index]} mb-2`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {stat.value}
              </motion.p>
              <p className={`text-transparent bg-clip-text bg-gradient-to-r ${gradients[index]} text-xs uppercase tracking-[0.2em] font-semibold`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}