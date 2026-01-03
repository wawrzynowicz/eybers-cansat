import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Clock } from 'lucide-react';
import { useLanguage } from '@/components/shared/LanguageContext';

const TimelineItem = ({ milestone, index, isLast, isEven }) => {
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
      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex items-center gap-0 group">

      {/* Left content */}
      <div className="flex-1 order-1">
        {!isEven &&
        <div className={`border ${getStatusColor()} rounded-lg p-4 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {getStatusIcon()}
                <h3 className="text-base font-medium text-white">{milestone.title}</h3>
              </div>
              <span className="text-sm font-semibold text-blue-400 whitespace-nowrap ml-3">{milestone.date}</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed text-justify">{milestone.description}</p>
            {milestone.achievements &&
          <ul className="mt-3 space-y-1.5">
                {milestone.achievements.map((achievement, idx) =>
            <li key={idx} className="text-xs text-white/60 flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>{achievement}</span>
                  </li>
            )}
              </ul>
          }
          </div>
        }
      </div>

      {/* Center line and circle */}
      <div className="relative flex flex-col items-center order-2 px-6">
        {/* Circle with number */}
        <div className={`relative z-10 w-14 h-14 rounded-full border-3 ${getStatusColor()} flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:scale-110`}>
          <span className="text-white font-bold text-lg">{index + 1}</span>
        </div>

        {/* Vertical line */}
        {!isLast &&
        <div className="w-px h-24 bg-gradient-to-b from-white/20 to-white/10" />
        }
      </div>

      {/* Right content */}
      <div className="flex-1 order-3">
        {isEven &&
        <div className={`border ${getStatusColor()} rounded-lg p-4 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {getStatusIcon()}
                <h3 className="text-base font-medium text-white">{milestone.title}</h3>
              </div>
              <span className="text-sm font-semibold text-blue-400 whitespace-nowrap ml-3">{milestone.date}</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed text-justify">{milestone.description}</p>
            {milestone.achievements &&
          <ul className="mt-3 space-y-1.5">
                {milestone.achievements.map((achievement, idx) =>
            <li key={idx} className="text-xs text-white/60 flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>{achievement}</span>
                  </li>
            )}
              </ul>
          }
          </div>
        }
      </div>
    </motion.div>);

};

export default function TimelineSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">

          <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 uppercase tracking-[0.3em] text-xs mb-4 font-bold">
            {t.timeline?.sectionTitle || 'Our Journey'}
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400">{t.timeline?.heading || 'Project Timeline'}</span>
          </h2>
          <p className="text-white/70 mx-auto text-lg opacity-100 max-w-2xl">
            {t.timeline?.description || 'Follow our progress from concept to launch as we work towards detecting cosmic muons from space.'}
            </p>
            </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {t.timeline?.milestones?.map((milestone, index) =>
          <TimelineItem
            key={index}
            milestone={milestone}
            index={index}
            isLast={index === t.timeline.milestones.length - 1}
            isEven={index % 2 === 1} />

          )}
        </div>
      </div>
    </section>);

}