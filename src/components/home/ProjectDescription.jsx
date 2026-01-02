import React from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/components/shared/LanguageContext';
import ModelViewer from '@/components/shared/ModelViewer';

export default function ProjectDescription() {
  const { t } = useLanguage();
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative pt-4 pb-12 px-4 overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* 3D Model and Technical Specs Combined */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Technical specs */}
            <div>
              <h3 className="text-2xl font-light text-white mb-10">{t.projectDesc.specs.title}</h3>
              <div className="grid grid-cols-2 gap-8">
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
                    className="text-3xl md:text-4xl font-light text-white mb-2 whitespace-pre-line"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-white/30 text-xs uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
              </div>
            </div>

            {/* 3D Model Viewer */}
            <div className="h-[500px] rounded-2xl overflow-hidden">
              <ModelViewer modelPath="https://raw.githubusercontent.com/wawrzynowicz/eybers-cansat/main/CanSat-3D-model.gltf" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}