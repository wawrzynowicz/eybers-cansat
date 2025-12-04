import React from 'react';
import { motion } from 'framer-motion';
import { Satellite } from 'lucide-react';

export default function FeaturedProject() {
  return (
    <section className="relative py-32 px-4 overflow-hidden" id="project">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Main container */}
          <div className="relative border border-white/[0.05] bg-black/20 overflow-hidden">
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
                  className="text-white/30 uppercase tracking-[0.3em] text-xs mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Flagship Project
                </motion.p>
                
                <motion.h3 
                  className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Muon Detection
                  <br />
                  <span className="font-semibold">Mini-Satellite</span>
                </motion.h3>
                
                <motion.p 
                  className="text-white/40 text-lg mb-10 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  A compact CubeSat designed to detect cosmic muons from space. By measuring these high-energy particles, we contribute to our understanding of cosmic rays and their origins.
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
                    { label: "Detection", value: "Real-time" },
                    { label: "Data Link", value: "Ground Station" },
                    { label: "Status", value: "In Progress" },
                    { label: "Target", value: "2025 Launch" }
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
                    className="absolute rounded-full border border-white/[0.05]"
                    style={{
                      width: `${ring * 80 + 80}px`,
                      height: `${ring * 80 + 80}px`,
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