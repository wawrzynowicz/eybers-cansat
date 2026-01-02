import React from 'react';
import { motion } from 'framer-motion';
import { Target, Atom, TrendingUp, BarChart3, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/components/shared/LanguageContext';

const MissionCard = ({ mission, icon: Icon }) => {
  return (
    <div
      className="group border border-white/10 bg-white/[0.03] p-8 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-white/[0.08] border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">{mission.title}</h3>
          <p className="text-white/50 text-sm">{mission.subtitle}</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <h4 className="text-white/90 font-medium text-sm uppercase tracking-wider group-hover:text-blue-300 transition-colors">{mission.whatWeDo.title}</h4>
          </div>
          <p className="text-white/70 text-sm leading-relaxed text-justify">{mission.whatWeDo.description}</p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="w-4 h-4 text-blue-400" />
            <h4 className="text-white/90 font-medium text-sm uppercase tracking-wider group-hover:text-blue-300 transition-colors">{mission.howWeUse.title}</h4>
          </div>
          <p className="text-white/70 text-sm leading-relaxed text-justify">{mission.howWeUse.description}</p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="w-4 h-4 text-blue-400" />
            <h4 className="text-white/90 font-medium text-sm uppercase tracking-wider group-hover:text-blue-300 transition-colors">{mission.whyMatters.title}</h4>
          </div>
          <p className="text-white/70 text-sm leading-relaxed text-justify">{mission.whyMatters.description}</p>
        </div>
        </div>
        </div>
        );
        };

export default function MissionsSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-12 px-4" id="missions">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-white/30 uppercase tracking-[0.3em] text-xs mb-4">
            {t.missions?.sectionTitle || 'About the Project'}
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            {t.missions?.heading || 'Our Missions'}
              </h2>
              </div>

        {/* Missions Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          <MissionCard 
            mission={t.missions?.primary} 
            icon={Target}
          />
          <MissionCard 
            mission={t.missions?.secondary} 
            icon={Atom}
          />
        </div>
      </div>
    </section>
  );
}