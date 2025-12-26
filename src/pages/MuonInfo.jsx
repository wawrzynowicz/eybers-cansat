import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Zap, Shield, TrendingDown, Target, Info } from 'lucide-react';
import { useLanguage } from '@/components/shared/LanguageContext';

const InfoCard = ({ icon: Icon, title, content, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500"
  >
    <div className="flex items-start gap-4 mb-4">
      <div className="w-12 h-12 rounded-xl bg-white/[0.08] border border-white/20 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-white/70" />
      </div>
      <h3 className="text-xl font-medium text-white pt-2">{title}</h3>
    </div>
    <div className="text-white/70 text-sm leading-relaxed space-y-3">
      {content}
    </div>
  </motion.div>
);

export default function MuonInfo() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-white/30 uppercase tracking-[0.3em] text-xs mb-4">
            {t.muonInfo?.sectionTitle || 'Scientific Background'}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
            {t.muonInfo?.heading || 'Understanding Muons'}
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            {t.muonInfo?.intro || 'Learn about cosmic rays, muon formation, and why these particles are essential to our research.'}
          </p>
        </motion.div>

        {/* Content Cards */}
        <div className="space-y-6">
          <InfoCard
            icon={Zap}
            title={t.muonInfo?.cosmicRays?.title || 'Cosmic Rays'}
            delay={0.1}
            content={
              <>
                <p>
                  {t.muonInfo?.cosmicRays?.p1 || 'The Earth is continuously bombarded by a flux of particles called cosmic rays. These particles travel near the speed of light, carrying enormous amounts of energy.'}
                </p>
                <p>
                  {t.muonInfo?.cosmicRays?.p2 || 'Composition: ~74% ionized hydrogen (protons), ~18% helium nuclei, and trace amounts of heavier elements.'}
                </p>
              </>
            }
          />

          <InfoCard
            icon={Atom}
            title={t.muonInfo?.birth?.title || 'Birth of Muons'}
            delay={0.2}
            content={
              <>
                <p>
                  {t.muonInfo?.birth?.p1 || "Muons aren't originally from cosmic radiation – they are born in Earth's atmosphere."}
                </p>
                <p>
                  {t.muonInfo?.birth?.p2 || 'When a primary cosmic ray collides with oxygen or nitrogen nuclei in the upper atmosphere, the collision produces short-lived particles called mesons. Muons originate from the decay of these charged mesons.'}
                </p>
              </>
            }
          />

          <InfoCard
            icon={Shield}
            title={t.muonInfo?.atmosphere?.title || 'Atmospheric Shielding'}
            delay={0.3}
            content={
              <>
                <p>
                  {t.muonInfo?.atmosphere?.p1 || "Primary cosmic rays don't reach Earth's surface directly – our atmosphere acts as a natural shield."}
                </p>
                <p>
                  {t.muonInfo?.atmosphere?.p2 || 'Instead, secondary particles like muons are created in the upper atmosphere and shower down to the surface.'}
                </p>
              </>
            }
          />

          <InfoCard
            icon={Target}
            title={t.muonInfo?.properties?.title || 'Muon Properties'}
            delay={0.4}
            content={
              <>
                <p>
                  {t.muonInfo?.properties?.p1 || 'Mass: 105.65 MeV'}
                </p>
                <p>
                  {t.muonInfo?.properties?.p2 || 'Half-life: 2.2 × 10⁻⁶ seconds (2.2 microseconds)'}
                </p>
                <p>
                  {t.muonInfo?.properties?.p3 || 'Muons are particularly penetrating – they interact primarily through ionization and can pass through large amounts of material. This makes them the most numerous charged particles reaching Earth\'s surface.'}
                </p>
              </>
            }
          />

          <InfoCard
            icon={TrendingDown}
            title={t.muonInfo?.reach?.title || 'Why Muons Reach Earth'}
            delay={0.5}
            content={
              <>
                <p>
                  {t.muonInfo?.reach?.p1 || 'Despite their short half-life, muons created at ~15 km altitude reach the surface thanks to special relativity.'}
                </p>
                <p>
                  {t.muonInfo?.reach?.p2 || 'Cosmic ray muons with energy >2.4 GeV travel so fast that time dilation extends their lifetime (as observed from Earth). Their decay length becomes greater than 15 km, allowing them to penetrate the atmosphere before decaying.'}
                </p>
              </>
            }
          />

          <InfoCard
            icon={Info}
            title={t.muonInfo?.importance?.title || 'Why Study Muons?'}
            delay={0.6}
            content={
              <>
                <p>
                  {t.muonInfo?.importance?.p1 || 'Muons provide a window into high-energy cosmic processes and allow us to study particle physics at energies impossible to recreate in laboratories.'}
                </p>
                <p>
                  {t.muonInfo?.importance?.p2 || 'By detecting and measuring muon flux, we can better understand cosmic ray origins, atmospheric interactions, and test fundamental physics principles like relativity.'}
                </p>
              </>
            }
          />
        </div>

        {/* Key Facts */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 border-t border-white/10 pt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-light text-white mb-2">10,000+</p>
              <p className="text-white/30 text-xs uppercase tracking-wider">Muons Hit You Daily</p>
            </div>
            <div>
              <p className="text-3xl font-light text-white mb-2">High Above</p>
              <p className="text-white/30 text-xs uppercase tracking-wider">Created in Upper Atmosphere</p>
            </div>
            <div>
              <p className="text-3xl font-light text-white mb-2">Super Fast</p>
              <p className="text-white/30 text-xs uppercase tracking-wider">Near Light Speed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}