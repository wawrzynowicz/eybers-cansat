import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { useLanguage } from '@/components/shared/LanguageContext';

const descriptionEN = `We would like to thank Dr. Eng. Dariusz Janiszewski, our team supervisor and a representative of Poznań University of Technology, for his support during the project. He facilitated access to university facilities, assisted in securing funding for components, and provided technical guidance. We also thank Poznań University of Technology for providing the resources and environment necessary for the project.`;

const descriptionPL = `Składamy podziękowania dr. inż. Dariuszowi Janiszewskiemu, opiekunowi naszej drużyny oraz przedstawicielowi Politechniki Poznańskiej, za wsparcie w trakcie realizacji projektu. Zapewnił dostęp do infrastruktury uczelni, pomógł w organizacji finansowania komponentów oraz wspierał nas merytorycznie w zakresie zagadnień technicznych. Dziękujemy również Politechnice Poznańskiej za udostępnienie zasobów i stworzenie warunków do realizacji projektu.`;

export default function TeamSupervisorCard({ supervisor }) {
  const { language } = useLanguage();

  const description = language === 'pl' ? descriptionPL : descriptionEN;
  const thankYouTitle = language === 'pl' ? 'Podziękowania' : 'Acknowledgements';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-24"
    >
      {/* Section label */}
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 uppercase tracking-[0.3em] text-sm mb-10 font-bold text-center">
        {language === 'pl' ? 'Opiekun drużyny' : 'Team Supervisor'}
      </p>

      <div className="flex flex-col md:flex-row gap-10 items-start max-w-4xl mx-auto">
        {/* Left: photo */}
        <div className="w-full md:w-64 flex-shrink-0 mx-auto md:mx-0">
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
          {/* Name below photo */}
          <p className="text-white text-center mt-4 text-xl font-semibold">dr inż. Dariusz Janiszewski</p>
        </div>

        {/* Right: text — same height as photo via aspect-[3/4] of w-64 = ~256*4/3 ≈ 341px */}
        <div className="flex-1 flex flex-col" style={{ minHeight: 'calc(256px * 4 / 3)' }}>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            {thankYouTitle}
          </h3>
          <div className="relative flex-1 overflow-hidden">
            {/* PUT logo floated top-right so text wraps around it */}
            <img
              src="https://media.base44.com/images/public/6931f02077d600a24db95382/9dc772ebd_putlogozw_Nero_AI_Background_Remover_transparent.png"
              alt="Politechnika Poznańska"
              className="float-right ml-6 mb-4 w-44 h-44 object-contain"
            />
            <div className="space-y-4">
              {description.split('\n\n').map((para, i) => (
                <p key={i} className="text-white/70 text-sm leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
            <div className="clear-both" />
          </div>
        </div>
      </div>

      <div className="h-px bg-white/10 w-full mt-16" />
    </motion.div>
  );
}