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
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-10">{t.projectDesc.specs.title}</h3>
              <div className="grid grid-cols-2 gap-8">
              {[
                { ...t.projectDesc.specs.items.dimensions, color: 'from-purple-400 to-pink-400' },
                { ...t.projectDesc.specs.items.mass, color: 'from-purple-400 to-pink-400' },
                { ...t.projectDesc.specs.items.power, color: 'from-purple-400 to-pink-400' },
                { ...t.projectDesc.specs.items.comms, color: 'from-purple-400 to-pink-400' }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                >
                  <motion.p 
                    className={`text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2 whitespace-pre-line`}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-white/50 text-xs uppercase tracking-wider font-semibold">{stat.label}</p>
                  </div>
                  ))}
                  </div>
                  </div>

                  {/* 3D Model Viewer */}
                  <div className="h-[500px] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                  <ModelViewer modelPath="https://cdn.jsdelivr.net/gh/wawrzynowicz/eybers-cansat@main/CanSat-3D-model.gltf?v=2" />
                  </div>
                  </div>
                  </motion.div>
      </div>
    </section>
  );
}