import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Atom, Zap, Shield, TrendingDown, Target, Info, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/components/shared/LanguageContext';
import { Button } from '@/components/ui/button';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const InfoCard = ({ icon: Icon, title, preview, content, id, expandedId, onToggle }) => {
          const isExpanded = expandedId === id;

          return (
            <div
              className="group border border-white/10 bg-white/[0.03] p-8 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500"
            >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:border-pink-400/50 transition-all duration-300">
          <Icon className="w-5 h-5 text-pink-400" />
        </div>
        <h3 className="text-xl font-medium text-white group-hover:text-pink-400 transition-colors pt-2">{title}</h3>
      </div>
      
      <div className="text-white/70 text-sm leading-relaxed space-y-3 mb-4">
        <p>{preview}</p>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-white/70 text-sm leading-relaxed space-y-3 mb-4 overflow-hidden"
            >
            {content}
            </motion.div>
        )}
      </AnimatePresence>

      <Button
        variant="ghost"
        onClick={() => onToggle(id)}
        className="text-white/50 hover:text-white hover:bg-white/[0.05] text-xs -ml-2"
      >
        {isExpanded ? 'Show less' : 'Learn more'}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-4 h-4 ml-1" />
        </motion.div>
        </Button>
        </div>
        );
        };

export default function MuonInfoSection() {
  const { t } = useLanguage();
  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="muon-info" className="relative py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-white/30 uppercase tracking-[0.3em] text-xs mb-4">
            {t.muonInfo?.sectionTitle || 'Scientific Background'}
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            {t.muonInfo?.heading || 'Understanding Muons'}
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            {t.muonInfo?.intro || 'Learn about cosmic rays, muon formation, and why these particles are essential to our research.'}
              </p>
              </div>

            {/* Key Facts */}
            <div className="mb-20 border border-white/10 bg-white/[0.02] p-8 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-light text-white mb-2">10,000+</p>
              <p className="text-white/30 text-xs uppercase tracking-wider">Muons Hit You Daily</p>
            </div>
            <div>
              <p className="text-3xl font-light text-white mb-2">~15 km</p>
              <p className="text-white/30 text-xs uppercase tracking-wider">Creation Altitude</p>
            </div>
            <div>
              <p className="text-3xl font-light text-white mb-2">Super Fast</p>
              <p className="text-white/30 text-xs uppercase tracking-wider">Near Light Speed</p>
            </div>
              </div>
              </div>

            {/* Content Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              <InfoCard
                id="cosmic-rays"
                icon={Zap}
                title={t.muonInfo?.cosmicRays?.title || 'Cosmic Rays'}
                preview={t.muonInfo?.cosmicRays?.p1 || 'Earth is constantly being hit by high-speed particles from space called cosmic rays.'}
                content={
                  <p>
                    {t.muonInfo?.cosmicRays?.p2 || 'Most of these cosmic rays are tiny pieces of atoms – mainly hydrogen and helium – traveling from distant parts of our galaxy and beyond.'}
                  </p>
                }
                expandedId={expandedId}
                onToggle={handleToggle}
              />

              <InfoCard
                id="birth"
                icon={Atom}
                title={t.muonInfo?.birth?.title || 'Birth of Muons'}
                preview={t.muonInfo?.birth?.p1 || "Muons don't come directly from space – they're created right here in Earth's atmosphere."}
                content={
                  <p>
                    {t.muonInfo?.birth?.p2 || 'When cosmic rays crash into air molecules high above us, the collision creates new particles called muons.'}
                  </p>
                }
                expandedId={expandedId}
                onToggle={handleToggle}
              />

              <InfoCard
                id="atmosphere"
                icon={Shield}
                title={t.muonInfo?.atmosphere?.title || 'Atmospheric Shielding'}
                preview={t.muonInfo?.atmosphere?.p1 || "Our atmosphere acts like a protective blanket, stopping the original cosmic rays from reaching the ground."}
                content={
                  <p>
                    {t.muonInfo?.atmosphere?.p2 || 'But the muons created by these collisions are tough enough to make it all the way down to Earth\'s surface.'}
                  </p>
                }
                expandedId={expandedId}
                onToggle={handleToggle}
              />

              <InfoCard
                id="properties"
                icon={Target}
                title={t.muonInfo?.properties?.title || 'What Makes Muons Special'}
                preview={t.muonInfo?.properties?.p1 || 'Muons are tiny charged particles, similar to electrons but heavier.'}
                content={
                  <>
                    <p>
                      {t.muonInfo?.properties?.p2 || 'They don\'t last long – just a fraction of a second before breaking apart.'}
                    </p>
                    <p>
                      {t.muonInfo?.properties?.p3 || 'What makes them amazing is their ability to pass through solid objects.'}
                    </p>
                  </>
                }
                expandedId={expandedId}
                onToggle={handleToggle}
              />

              <InfoCard
                id="reach"
                icon={TrendingDown}
                title={t.muonInfo?.reach?.title || 'How Do They Reach Us?'}
                preview={t.muonInfo?.reach?.p1 || 'Even though muons break apart quickly, they\'re created high in the atmosphere and travel incredibly fast.'}
                content={
                  <p>
                    {t.muonInfo?.reach?.p2 || 'Because they move so fast, time actually slows down for them (thanks to Einstein\'s relativity!).'}
                  </p>
                }
                expandedId={expandedId}
                onToggle={handleToggle}
              />

              <InfoCard
                id="importance"
                icon={Info}
                title={t.muonInfo?.importance?.title || 'Why Study Muons?'}
                preview={t.muonInfo?.importance?.p1 || 'Muons are like messengers from space, carrying information about high-energy events happening far away in the universe.'}
                content={
                  <p>
                    {t.muonInfo?.importance?.p2 || 'By detecting muons, we can learn about cosmic rays, test fundamental physics theories, and better understand our atmosphere and space environment.'}
                  </p>
                }
                expandedId={expandedId}
                onToggle={handleToggle}
              />
            </div>
      </div>
    </section>
  );
}