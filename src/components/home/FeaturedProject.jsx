import React from 'react';
import { motion } from 'framer-motion';
import { Satellite } from 'lucide-react';
import { useLanguage } from '@/components/shared/LanguageContext';

export default function FeaturedProject() {
  const { t } = useLanguage();
  
  return (
    <section className="relative py-12 px-4 overflow-hidden" id="project">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Main container */}
          <div className="relative border border-white/10 bg-black/40 overflow-hidden">
            {/* Animated scan line */}
            <motion.div
              className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: Content */}
              <div className="p-12 lg:p-16">
                <motion.p
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 uppercase tracking-[0.3em] text-xs mb-6 font-bold"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {t.project.tagline}
                </motion.p>

                <motion.h3 
                  className="text-3xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {t.project.title}
                  <br />
                  <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">{t.project.titleBold}</span>
                </motion.h3>

                <motion.p 
                  className="text-white/70 text-lg mb-10 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  {t.project.description}
                </motion.p>

                {/* Stats */}
                <motion.div 
                  className="grid grid-cols-2 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  {[
                    t.project.stats.detection,
                    t.project.stats.dataLink,
                    t.project.stats.status,
                    t.project.stats.target
                  ].map((stat, i) => (
                    <div key={stat.label} className="border-l border-white/10 pl-4">
                      <p className="text-white/30 text-xs uppercase tracking-wider mb-1">{stat.label}</p>
                      <p className="text-white font-medium">{stat.value}</p>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right: Visualization */}
              <div className="relative h-80 lg:h-auto bg-gradient-to-br from-white/[0.02] to-transparent flex items-center justify-center p-12">
                {/* Orbital rings */}
                {[1, 2, 3].map((ring) => (
                  <motion.div
                    key={ring}
                    className={`absolute rounded-full border-2 ${
                      ring === 1 ? 'border-purple-400/60' :
                      ring === 2 ? 'border-pink-400/60' :
                      'border-orange-400/60'
                    }`}
                    style={{
                      width: `${ring * 80 + 80}px`,
                      height: `${ring * 80 + 80}px`,
                      boxShadow: ring === 1 ? `0 0 30px rgba(168,85,247,0.4)` :
                                 ring === 2 ? `0 0 30px rgba(236,72,153,0.4)` :
                                 `0 0 30px rgba(251,146,60,0.4)`
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20 + ring * 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}

                {/* Center satellite */}
                <motion.div
                  className="relative z-10"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <Satellite className="w-10 h-10 text-white/60" strokeWidth={1} />
                  </div>
                </motion.div>

                {/* Orbiting dots */}
                {[0, 1, 2].map((dot) => (
                  <motion.div
                    key={dot}
                    className="absolute w-2 h-2 rounded-full bg-white/30"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 8 + dot * 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      transformOrigin: `${80 + dot * 40}px center`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}