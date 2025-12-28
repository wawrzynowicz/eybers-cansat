import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Clock } from 'lucide-react';
import { useLanguage } from '@/components/shared/LanguageContext';

const TimelineItem = ({ milestone, index, isLast }) => {
  const getStatusIcon = () => {
    switch (milestone.status) {
      case 'completed':
        return <CheckCircle2 className="w-6 h-6 text-green-400" />;
      case 'in_progress':
        return <Clock className="w-6 h-6 text-blue-400 animate-pulse" />;
      default:
        return <Circle className="w-6 h-6 text-white/30" />;
    }
  };

  const getStatusColor = () => {
    switch (milestone.status) {
      case 'completed':
        return 'border-green-400/50 bg-green-400/10';
      case 'in_progress':
        return 'border-blue-400/50 bg-blue-400/10';
      default:
        return 'border-white/20 bg-white/5';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex gap-6 group"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[23px] top-12 w-px h-full bg-gradient-to-b from-white/20 to-transparent" />
      )}

      {/* Icon container */}
      <div className="relative z-10 flex-shrink-0">
        <div className={`w-12 h-12 rounded-full border-2 ${getStatusColor()} flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:scale-110`}>
          {getStatusIcon()}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <div className={`border ${getStatusColor()} p-6 transition-all duration-300 group-hover:border-white/30`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium text-white">{milestone.title}</h3>
            <span className="text-sm text-white/50">{milestone.date}</span>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">{milestone.description}</p>
          {milestone.achievements && (
            <ul className="mt-4 space-y-2">
              {milestone.achievements.map((achievement, idx) => (
                <li key={idx} className="text-xs text-white/60 flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function TimelineSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-white/30 uppercase tracking-[0.3em] text-xs mb-4">
            {t.timeline?.sectionTitle || 'Our Journey'}
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            {t.timeline?.heading || 'Project Timeline'}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {t.timeline?.description || 'Follow our progress from concept to launch as we work towards detecting cosmic muons from space.'}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {t.timeline?.milestones?.map((milestone, index) => (
            <TimelineItem
              key={index}
              milestone={milestone}
              index={index}
              isLast={index === t.timeline.milestones.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}