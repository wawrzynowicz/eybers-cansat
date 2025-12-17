import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function TeamMemberCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2">
        {/* Image */}
        <div className="aspect-[4/5] relative overflow-hidden">
          {member.image_url ? (
            <img 
              src={member.image_url} 
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center">
              <User className="w-20 h-20 text-white/30" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-indigo-300 text-sm font-medium mb-1">{member.role}</p>
          <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
          {member.bio && (
            <p className="text-indigo-200/60 text-sm leading-relaxed">{member.bio}</p>
          )}
        </div>

        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}