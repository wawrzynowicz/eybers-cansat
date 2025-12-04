import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Sparkles } from 'lucide-react';

const cards = [
  {
    icon: Target,
    title: "Mission",
    description: "To design and build a mini-satellite capable of detecting cosmic muons, contributing to scientific research while inspiring the next generation."
  },
  {
    icon: Eye,
    title: "Vision",
    description: "A world where high school students actively participate in cutting-edge space science, proving that age is no barrier to discovery."
  },
  {
    icon: Sparkles,
    title: "Impact",
    description: "By sharing our journey and findings, we spark curiosity and demonstrate that the cosmos is accessible to all who reach for the stars."
  }
];

export default function MissionSection() {
  return (
    <section className="relative py-32 px-4" id="mission">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-white/30 uppercase tracking-[0.3em] text-xs mb-4">Our Purpose</p>
          <h2 className="text-4xl md:text-5xl font-light text-white">
            Reaching for the <span className="font-semibold">Stars</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative h-full border border-white/[0.05] bg-white/[0.01] p-10 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-700">
                {/* Animated corner */}
                <motion.div
                  className="absolute top-0 left-0 w-8 h-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="absolute top-0 left-0 w-full h-px bg-white/20" />
                  <div className="absolute top-0 left-0 w-px h-full bg-white/20" />
                </motion.div>

                <card.icon className="w-6 h-6 text-white/40 mb-8" strokeWidth={1} />
                
                <h3 className="text-xl font-medium text-white mb-4">{card.title}</h3>
                <p className="text-white/40 leading-relaxed text-sm">{card.description}</p>

                {/* Hover line */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-px bg-white/20 w-0 group-hover:w-full transition-all duration-700"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}