import React from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Loader2, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/components/shared/LanguageContext';

function SponsorCard({ sponsor, index }) {
  const { language } = useLanguage();
  
  const description = language === 'pl' && sponsor.description_pl ? sponsor.description_pl : sponsor.description;
  const cooperationScope = language === 'pl' && sponsor.cooperation_scope_pl ? sponsor.cooperation_scope_pl : sponsor.cooperation_scope;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative border border-white/20 bg-white/[0.04] backdrop-blur-sm p-8 hover:border-white/30 transition-all duration-500">
        {/* Logo */}
        <div className="aspect-[2/1] relative overflow-hidden bg-white mb-6 flex items-center justify-center p-6">
          {sponsor.logo_url ? (
            <img 
              src={sponsor.logo_url} 
              alt={sponsor.name}
              className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
          ) : (
            <div className="text-white/40 text-2xl font-light">{sponsor.name}</div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-white">{sponsor.name}</h3>
          
          {description && (
            <p className="text-white/70 text-sm leading-relaxed">
              {description}
            </p>
          )}
          
          {cooperationScope && (
            <div className="pt-4 border-t border-white/10">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-2">
                {language === 'pl' ? 'Zakres Współpracy' : 'Cooperation Scope'}
              </p>
              <p className="text-white/80 text-sm">
                {cooperationScope}
              </p>
            </div>
          )}
          
          {sponsor.website && (
            <a 
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors mt-4"
            >
              <span>{language === 'pl' ? 'Odwiedź stronę' : 'Visit website'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function SponsorsSection() {
  const { t, language } = useLanguage();
  const { data: sponsors = [], isLoading } = useQuery({
    queryKey: ['sponsors'],
    queryFn: () => base44.entities.Sponsor.list('order'),
  });

  if (isLoading) {
    return (
      <section className="relative py-32 px-4">
        <div className="flex justify-center">
          <Loader2 className="w-6 h-6 text-white/30 animate-spin" />
        </div>
      </section>
    );
  }

  if (sponsors.length === 0) return null;

  return (
    <section className="relative py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-white/30 uppercase tracking-[0.3em] text-xs mb-4">
            {language === 'pl' ? 'Nasi Partnerzy' : 'Our Partners'}
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white">
            {language === 'pl' ? 'Sponsorzy' : 'Sponsors'}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sponsors.map((sponsor, index) => (
            <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}