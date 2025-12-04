import React from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Loader2, User } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';

const defaultMembers = [
  { id: 1, name: "Alex Chen", role: "Project Lead", bio: "Passionate about aerospace engineering and leading our team to new heights.", image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop", order: 1 },
  { id: 2, name: "Maya Rodriguez", role: "Electronics Engineer", bio: "Designing the circuits that will detect cosmic particles.", image_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop", order: 2 },
  { id: 3, name: "James Park", role: "Software Developer", bio: "Building the systems that process and transmit our satellite's data.", image_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop", order: 3 },
  { id: 4, name: "Sarah Williams", role: "Physics Researcher", bio: "Understanding the mysteries of muons and cosmic radiation.", image_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop", order: 4 },
  { id: 5, name: "Omar Hassan", role: "Communications Lead", bio: "Ensuring our mission reaches and inspires the world.", image_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop", order: 5 },
  { id: 6, name: "Emma Thompson", role: "Data Analyst", bio: "Transforming raw cosmic data into meaningful discoveries.", image_url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop", order: 6 }
];

function TeamMemberCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-2">
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

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-indigo-300 text-sm font-medium mb-1">{member.role}</p>
          <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
          {member.bio && (
            <p className="text-indigo-200/60 text-sm line-clamp-2">{member.bio}</p>
          )}
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}

export default function TeamSection() {
  const { data: members = [], isLoading } = useQuery({
    queryKey: ['teamMembers'],
    queryFn: () => base44.entities.TeamMember.list('order'),
  });

  const displayMembers = members.length > 0 ? members : defaultMembers;

  return (
    <section className="relative py-24 md:py-32 px-4" id="team">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Meet Our Team"
          subtitle="Six passionate students united by a shared dream of exploring the cosmos and pushing the boundaries of what's possible."
          light
        />

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 text-indigo-400 animate-spin" />
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayMembers.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
            <blockquote className="text-xl md:text-2xl text-indigo-100 font-light italic leading-relaxed">
              "Together, we're not just building a satellite — we're proving that the future of space exploration starts in classrooms today."
            </blockquote>
            <p className="mt-6 text-indigo-300/60">— The EYBERS Team</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}