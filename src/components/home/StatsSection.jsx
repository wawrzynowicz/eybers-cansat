import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "6", label: "Team Members" },
  { value: "1", label: "Active Satellite Project" },
  { value: "∞", label: "Curiosity" },
  { value: "2025", label: "Launch Target" }
];

export default function StatsSection() {
  return (
    <section className="relative py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent mb-2">
                {stat.value}
              </p>
              <p className="text-indigo-300/60 text-sm md:text-base uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}