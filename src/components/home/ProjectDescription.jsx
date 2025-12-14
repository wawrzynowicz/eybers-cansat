import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Atom, Waves, Cpu, Radio, BarChart3, Compass } from 'lucide-react';
import { useLanguage } from '@/components/shared/LanguageContext';

export default function ProjectDescription() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  
  const features = [
    { icon: Atom, title: t.projectDesc.features.detection.title, description: t.projectDesc.features.detection.description },
    { icon: Waves, title: t.projectDesc.features.processing.title, description: t.projectDesc.features.processing.description },
    { icon: Cpu, title: t.projectDesc.features.collection.title, description: t.projectDesc.features.collection.description },
    { icon: Radio, title: t.projectDesc.features.transmission.title, description: t.projectDesc.features.transmission.description },
    { icon: BarChart3, title: t.projectDesc.features.analysis.title, description: t.projectDesc.features.analysis.description },
    { icon: Compass, title: t.projectDesc.features.discovery.title, description: t.projectDesc.features.discovery.description }
  ];
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative py-32 px-4 overflow-hidden" id="about">
      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleX: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.p 
            className="text-white/40 uppercase tracking-[0.3em] text-xs mb-4"
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {t.projectDesc.sectionTitle}
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
            {t.projectDesc.heading}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            {t.projectDesc.description}
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="relative h-full bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                  <motion.div 
                    className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-white/20 to-transparent"
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  />
                  <motion.div 
                    className="absolute top-0 right-0 h-px w-full bg-gradient-to-l from-white/20 to-transparent"
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  />
                </div>

                <motion.div 
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors duration-300"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <feature.icon className="w-5 h-5 text-white/70" />
                </motion.div>

                <h3 className="text-lg font-medium text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>

                {/* Animated dot */}
                <motion.div
                  className="absolute bottom-4 right-4 w-1 h-1 rounded-full bg-white/30"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical specs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-light text-white text-center mb-10">{t.projectDesc.specs.title}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            t.projectDesc.specs.items.dimensions,
            t.projectDesc.specs.items.mass,
            t.projectDesc.specs.items.power,
            t.projectDesc.specs.items.comms
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.p 
                className="text-3xl md:text-4xl font-light text-white mb-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-white/30 text-xs uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}