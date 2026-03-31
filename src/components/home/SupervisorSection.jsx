import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { useLanguage } from '@/components/shared/LanguageContext';

const supervisors = [
  {
    id: 1,
    image_url: "",
    title: "Team Supervisor",
    subtitle1: "Teacher of Physics",
    subtitle2: "Liceum Ogólnokształcące im. Bolesława Chrobrego",
    bio: "Opis opiekuna pojawi się tutaj. Dodaj zdjęcie i informacje o opiekunie zespołu.",
    bio_pl: "Opis opiekuna pojawi się tutaj. Dodaj zdjęcie i informacje o opiekunie zespołu."
  },
  {
    id: 2,
    image_url: "",
    title: "Team Supervisor",
    subtitle1: "Teacher of IT",
    subtitle2: "Liceum Ogólnokształcące im. Bolesława Chrobrego",
    bio: "Opis opiekuna pojawi się tutaj. Dodaj zdjęcie i informacje o opiekunie zespołu.",
    bio_pl: "Opis opiekuna pojawi się tutaj. Dodaj zdjęcie i informacje o opiekunie zespołu."
  }
];

function SupervisorCard({ supervisor, index }) {
  const { language } = useLanguage();
  const [isHovered, setIsHovered] = React.useState(false);
  const bio = language === 'pl' ? supervisor.bio_pl : supervisor.bio;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <div className="aspect-[3/4] relative overflow-hidden bg-white/[0.02]">
          {supervisor.image_url ? (
            <motion.img
              src={supervisor.image_url}
              alt={`${supervisor.title} - EYBERS CanSat`}
              className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            />
          ) : (
            <div className="w-full h-full bg-white/[0.02] flex items-center justify-center">
              <User className="w-16 h-16 text-white/10" />
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white/60 text-xs uppercase tracking-wider mb-1">{supervisor.title}</p>
            <h3 className="text-xl font-medium text-white mb-1">{supervisor.subtitle1}</h3>
            <p className="text-white/50 text-sm mb-2">{supervisor.subtitle2}</p>
            {bio && (
              <motion.p
                className="text-white/90 text-sm leading-relaxed overflow-hidden mt-2 bg-white/5 backdrop-blur-xl border border-white/10 p-3 rounded-lg shadow-2xl text-justify"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                }}
                animate={isHovered ? { opacity: 1, maxHeight: 1000, y: 0 } : { opacity: 0, maxHeight: 0, y: -10 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {bio}
              </motion.p>
            )}
          </div>
        </div>

        <div className="h-px bg-white/20 w-0 group-hover:w-full transition-all duration-700" />
      </div>
    </motion.div>
  );
}

export default function SupervisorSection() {
  const { language } = useLanguage();

  return (
    <section className="relative py-12 px-4" id="supervisors">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 uppercase tracking-[0.3em] text-xs mb-4 font-bold">
            {language === 'pl' ? 'Opiekunowie' : 'Supervisors'}
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            {language === 'pl' ? 'Opiekunowie ' : 'Team '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {language === 'pl' ? 'Zespołu' : 'Supervisors'}
            </span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {supervisors.map((supervisor, index) => (
            <SupervisorCard key={supervisor.id} supervisor={supervisor} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}