import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle, light = false, className = "" }) {
  return (
    <motion.div 
      className={`text-center mb-12 md:mb-16 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
        light ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-2xl mx-auto ${
          light ? 'text-indigo-200/80' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}