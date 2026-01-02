import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, ExternalLink, Heart } from 'lucide-react';
import { useLanguage } from '@/components/shared/LanguageContext';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';

const platformIcons = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter
};

const platformColors = {
  facebook: 'from-blue-600 to-blue-500',
  instagram: 'from-pink-600 via-purple-600 to-orange-500',
  linkedin: 'from-blue-700 to-blue-600',
  twitter: 'from-sky-500 to-sky-600'
};

const SocialPostCard = ({ post, index, language }) => {
  const Icon = platformIcons[post.platform];
  const gradientColor = platformColors[post.platform];

  return (
    <motion.a
      href={post.post_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0 }}
      className="group block border border-white/10 bg-white/[0.03] overflow-hidden hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500"
    >
      <div className="relative h-48 overflow-hidden bg-white/5">
        {post.image_url ? (
          <>
            <img 
              src={post.image_url} 
              alt="Social post"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Icon className="w-12 h-12 text-white/20" />
          </div>
        )}
        <div className={`absolute top-4 right-4 w-10 h-10 rounded-lg bg-gradient-to-br ${gradientColor} flex items-center justify-center shadow-lg`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-3 text-justify">
          {language === 'pl' && post.content_pl ? post.content_pl : post.content}
        </p>
        
        <div className="flex items-center justify-between text-white/50 text-xs">
          <div className="flex items-center gap-4">
            {post.likes && (
              <span className="flex items-center gap-1">
                <Heart className="w-3 h-3" />
                {post.likes}
              </span>
            )}
            {post.post_date && (
              <span>{new Date(post.post_date).toLocaleDateString()}</span>
            )}
          </div>
          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </motion.a>
  );
};

export default function SocialMediaSection() {
  const { language } = useLanguage();

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['socialPosts'],
    queryFn: () => base44.entities.SocialPost.filter({ featured: true }, '-post_date', 6)
  });

  const isPolish = language === 'pl';

  if (isLoading) {
    return null;
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="relative py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-white/30 uppercase tracking-[0.3em] text-xs mb-4">
            {isPolish ? 'Bądź na Bieżąco' : 'Stay Connected'}
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            {isPolish ? 'Nasze Ostatnie' : 'Latest From'} <span className="font-normal">Social Media</span>
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            {isPolish 
              ? 'Śledź nasz postęp, zobacz zakulisowe zdjęcia i bądź częścią naszej podróży w kosmos'
              : 'Follow our progress, see behind-the-scenes photos, and be part of our journey to space'
            }
          </p>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.map((post, index) => (
            <SocialPostCard 
              key={post.id} 
              post={post} 
              index={index}
              language={language}
            />
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-white/50 text-sm mb-4">
            {isPolish ? 'Śledź nas' : 'Follow us'}
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://www.facebook.com/eybers.cansat/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/eybers.cansat/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/eybers-undefined-7680a1396/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}