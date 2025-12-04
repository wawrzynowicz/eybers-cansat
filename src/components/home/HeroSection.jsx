import React from 'react';
import { motion } from 'framer-motion';

import { ChevronDown, Rocket, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GlowingOrb from '../shared/GlowingOrb';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Orbs */}
      <GlowingOrb 
        size={600} 
        color="#6366f1" 
        className="-top-40 -left-40" 
        opacity={0.3}
      />
      <GlowingOrb 
        size={500} 
        color="#8b5cf6" 
        className="-bottom-40 -right-40" 
        opacity={0.25}
      />
      <GlowingOrb 
        size={300} 
        color="#06b6d4" 
        className="top-1/3 right-1/4" 
        opacity={0.15}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-indigo-200 text-sm mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Exploring the Cosmos from High School</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
              EYBERS
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-indigo-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            A team of six young scientists building a mini-satellite to detect cosmic muons and unlock the mysteries of the universe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#project">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-indigo-100 rounded-full px-8 h-14 text-lg font-medium shadow-2xl shadow-white/20 transition-all hover:scale-105">
                <Rocket className="w-5 h-5 mr-2" />
                Explore Our Mission
              </Button>
            </a>
            <a href="#team">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 h-14 text-lg font-medium backdrop-blur-sm">
                Meet the Team
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/40" />
        </motion.div>
      </div>
    </section>
  );
}