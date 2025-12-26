import React from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Loader2, User } from 'lucide-react';
import { useLanguage } from '@/components/shared/LanguageContext';

const defaultMembers = (language) => [
    { id: 1, name: "Alex Chen", role: language === 'pl' ? "Lider Projektu" : "Project Lead", bio: language === 'pl' ? "Pasjonat inżynierii kosmicznej." : "Passionate about aerospace engineering.", image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop", order: 1 },
    { id: 2, name: "Maya Rodriguez", role: language === 'pl' ? "Inżynier Elektronik" : "Electronics Engineer", bio: language === 'pl' ? "Projektowanie układów detekcji." : "Designing detection circuits.", image_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop", order: 2 },
    { id: 3, name: "James Park", role: language === 'pl' ? "Programista" : "Software Developer", bio: language === 'pl' ? "Budowanie systemów danych." : "Building data systems.", image_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop", order: 3 },
    { id: 4, name: "Sarah Williams", role: language === 'pl' ? "Badaczka Fizyki" : "Physics Researcher", bio: language === 'pl' ? "Zrozumienie promieniowania kosmicznego." : "Understanding cosmic radiation.", image_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop", order: 4 },
    { id: 5, name: "Omar Hassan", role: language === 'pl' ? "Lider Komunikacji" : "Communications Lead", bio: language === 'pl' ? "Dzielenie się naszą misją." : "Sharing our mission.", image_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop", order: 5 },
    { id: 6, name: "Emma Thompson", role: language === 'pl' ? "Analityk Danych" : "Data Analyst", bio: language === 'pl' ? "Przekształcanie danych w odkrycia." : "Transforming data into discoveries.", image_url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop", order: 6 }
  ];

function TeamMemberCard({ member, index }) {
  const { language } = useLanguage();
  const [isHovered, setIsHovered] = React.useState(false);
  
  const bio = language === 'pl' && member.bio_pl ? member.bio_pl : member.bio;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        {/* Image */}
        <div className="aspect-[3/4] relative overflow-hidden bg-white/[0.02]">
          {member.image_url ? (
            <motion.img 
              src={member.image_url} 
              alt={member.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            />
          ) : (
            <div className="w-full h-full bg-white/[0.02] flex items-center justify-center">
              <User className="w-16 h-16 text-white/10" />
            </div>
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <p className="text-white/60 text-xs uppercase tracking-wider mb-1">{member.role}</p>
              <h3 className="text-xl font-medium text-white mb-2">{member.name}</h3>
              {bio && (
                <motion.p 
                  className="text-white/90 text-sm leading-relaxed overflow-hidden mt-2 bg-white/5 backdrop-blur-xl border border-white/10 p-3 rounded-lg shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                  }}
                  animate={isHovered ? { opacity: 1, maxHeight: 1000, y: 0 } : { opacity: 0, maxHeight: 0, y: -10 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {bio}
                </motion.p>
              )}
            </motion.div>
          </div>
        </div>

        {/* Bottom line animation */}
        <motion.div 
          className="h-px bg-white/20 w-0 group-hover:w-full transition-all duration-700"
        />
      </div>
    </motion.div>
  );
}

export default function TeamSection() {
  const { t, language } = useLanguage();
  const { data: members = [], isLoading } = useQuery({
    queryKey: ['teamMembers'],
    queryFn: () => base44.entities.TeamMember.list('order'),
  });

  const displayMembers = members.length > 0 ? members : defaultMembers(language);

  return (
    <section className="relative py-32 px-4" id="team">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-white/30 uppercase tracking-[0.3em] text-xs mb-4">{t.team.sectionTitle}</p>
          <h2 className="text-4xl md:text-5xl font-light text-white">
            {t.team.heading} <span className="font-semibold">{t.team.headingBold}</span>
          </h2>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-6 h-6 text-white/30 animate-spin" />
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayMembers.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        )}

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24 text-center max-w-3xl mx-auto"
        >
          <motion.div
            className="w-8 h-px bg-white/20 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          />
          <blockquote className="text-center">
            <p className="text-2xl md:text-3xl text-white font-light italic mb-3">
              {t.team.quote}
            </p>
            <p className="text-base md:text-lg text-white/70 font-light">
              {t.team.quoteTranslation}
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}