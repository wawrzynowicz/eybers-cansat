import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { useLanguage } from '@/components/shared/LanguageContext';

const descriptionEN = `We would like to thank Dr. Eng. Dariusz Janiszewski and Poznań University of Technology for their invaluable support throughout our project.`;

const descriptionPL = `Składamy podziękowania dr. inż. Dariuszowi Janiszewskiemu oraz Politechnice Poznańskiej za nieocenione wsparcie w trakcie realizacji projektu.`;

export default function TeamSupervisorCard({ supervisor }) {
  const { language } = useLanguage();

  const description = language === 'pl' ? descriptionPL : descriptionEN;
  const thankYouTitle = language === 'pl' ? 'Podziękowania' : 'Acknowledgements';
  const supervisorLabel = language === 'pl' ? 'Opiekun Drużyny' : 'Team Supervisor';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-24"
    >
      {/* Section label */}
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 uppercase tracking-[0.3em] text-sm mb-4 font-bold text-center">
        {supervisorLabel}
      </p>

      <div className="flex flex-col items-center max-w-2xl mx-auto text-center">
        {/* Photo */}
        <div className="w-56 flex-shrink-0 mb-4">
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
          </div>
          <p className="text-white text-center mt-3 font-medium">dr inż. Dariusz Janiszewski</p>
        </div>

        {/* Title + description */}
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{thankYouTitle}</h3>
        <div className="flex items-center gap-4 justify-center">
          <img
            src="https://media.base44.com/images/public/6931f02077d600a24db95382/9dc772ebd_putlogozw_Nero_AI_Background_Remover_transparent.png"
            alt="Politechnika Poznańska"
            className="w-16 h-16 object-contain flex-shrink-0"
          />
          <p className="text-white/70 text-sm leading-relaxed text-left">{description}</p>
        </div>
      </div>

      <div className="h-px bg-white/10 w-full mt-16" />
    </motion.div>
  );
}