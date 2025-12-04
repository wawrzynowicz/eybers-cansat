import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Satellite, Zap, Radio } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FeaturedProject() {
  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden" id="project">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-indigo-500/20 overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-sm mb-6">
                <Satellite className="w-4 h-4" />
                <span>Featured Project</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Muon Detection Mini-Satellite
              </h3>
              
              <p className="text-indigo-200/80 text-lg mb-8 leading-relaxed">
                Our flagship project: a compact satellite designed to detect cosmic muons from space. By measuring these high-energy particles, we aim to contribute to our understanding of cosmic rays and their origins.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <Zap className="w-6 h-6 text-yellow-400 mb-2" />
                  <p className="text-white font-semibold">Particle Detection</p>
                  <p className="text-indigo-300/70 text-sm">Real-time muon sensing</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <Radio className="w-6 h-6 text-cyan-400 mb-2" />
                  <p className="text-white font-semibold">Data Transmission</p>
                  <p className="text-indigo-300/70 text-sm">Ground station link</p>
                </div>
              </div>

              <Link to={createPageUrl('Projects')}>
                <Button className="bg-white text-slate-900 hover:bg-indigo-100 rounded-full px-6 h-12 font-medium group">
                  View All Projects
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <motion.div
                className="relative aspect-square"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 rounded-full border border-indigo-500/30 border-dashed" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/5 h-3/5 rounded-full border border-purple-500/30 border-dashed" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2/5 h-2/5 rounded-full border border-cyan-500/30 border-dashed" />
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/30">
                  <Satellite className="w-16 h-16 md:w-20 md:h-20 text-white" />
                </div>
              </motion.div>

              {/* Orbiting particles */}
              <motion.div
                className="absolute w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                style={{ top: '20%', left: '10%' }}
                animate={{ 
                  x: [0, 20, 0, -20, 0],
                  y: [0, -20, 0, 20, 0]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"
                style={{ bottom: '25%', right: '15%' }}
                animate={{ 
                  x: [0, -15, 0, 15, 0],
                  y: [0, 15, 0, -15, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}