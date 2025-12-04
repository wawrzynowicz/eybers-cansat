import React from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import SectionTitle from '@/components/shared/SectionTitle';
import TeamMemberCard from '@/components/team/TeamMemberCard';
import GlowingOrb from '@/components/shared/GlowingOrb';

const defaultMembers = [
  { id: 1, name: "Alex Chen", role: "Project Lead", bio: "Passionate about aerospace engineering and leading our team to new heights.", order: 1 },
  { id: 2, name: "Maya Rodriguez", role: "Electronics Engineer", bio: "Designing the circuits that will detect cosmic particles.", order: 2 },
  { id: 3, name: "James Park", role: "Software Developer", bio: "Building the systems that process and transmit our satellite's data.", order: 3 },
  { id: 4, name: "Sarah Williams", role: "Physics Researcher", bio: "Understanding the mysteries of muons and cosmic radiation.", order: 4 },
  { id: 5, name: "Omar Hassan", role: "Communications Lead", bio: "Ensuring our mission reaches and inspires the world.", order: 5 },
  { id: 6, name: "Emma Thompson", role: "Data Analyst", bio: "Transforming raw cosmic data into meaningful discoveries.", order: 6 }
];

export default function Team() {
  const { data: members = [], isLoading } = useQuery({
    queryKey: ['teamMembers'],
    queryFn: () => base44.entities.TeamMember.list('order'),
  });

  const displayMembers = members.length > 0 ? members : defaultMembers;

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 px-4">
      {/* Background orbs */}
      <GlowingOrb size={400} color="#6366f1" className="top-20 -left-40" opacity={0.2} />
      <GlowingOrb size={300} color="#8b5cf6" className="bottom-40 -right-40" opacity={0.15} />

      <div className="max-w-6xl mx-auto relative z-10">
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

        {/* Team quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
            <blockquote className="text-xl md:text-2xl text-indigo-100 font-light italic leading-relaxed">
              "Together, we're not just building a satellite — we're proving that the future of space exploration starts in classrooms today."
            </blockquote>
            <p className="mt-6 text-indigo-300/60">— The EYBERS Team</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}