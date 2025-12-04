import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Globe } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To design and build a mini-satellite capable of detecting cosmic muons, contributing to scientific research while inspiring the next generation of space explorers.",
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description: "A world where high school students actively participate in cutting-edge space science, proving that age is no barrier to making meaningful discoveries.",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: Globe,
    title: "Our Impact",
    description: "By sharing our journey and findings, we aim to spark curiosity and demonstrate that the cosmos is accessible to all who dare to reach for the stars.",
    gradient: "from-cyan-500 to-indigo-600"
  }
];

export default function MissionSection() {
  return (
    <section className="relative py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Reaching for the Stars"
          subtitle="Driven by curiosity and powered by passion, we're redefining what young scientists can achieve."
          light
        />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"
                  style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                />
                <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <card.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                  <p className="text-indigo-200/70 leading-relaxed">{card.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}