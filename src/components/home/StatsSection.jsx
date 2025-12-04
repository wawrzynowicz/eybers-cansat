import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "6", label: "Team Members" },
  { value: "1", label: "Active Project" },
  { value: "∞", label: "Curiosity" },
  { value: "2025", label: "Launch Target" }
];

export default function StatsSection() {
  return (
    <section className="relative py-20 px-4 border-y border-white/[0.03]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.p 
                className="text-4xl md:text-5xl font-extralight text-white mb-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-white/30 text-xs uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}