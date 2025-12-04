import React from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Loader2, Newspaper } from 'lucide-react';
import SectionTitle from '@/components/shared/SectionTitle';
import UpdateCard from '@/components/updates/UpdateCard';
import GlowingOrb from '@/components/shared/GlowingOrb';

const defaultUpdates = [
  {
    id: 1,
    title: "EYBERS-1 Satellite Design Phase Complete",
    content: "We're thrilled to announce that the initial design phase of our muon detection satellite is complete! The team has finalized the CubeSat frame specifications and detector placement. Next up: prototyping and testing.",
    category: "milestone",
    created_date: new Date().toISOString()
  },
  {
    id: 2,
    title: "Partnership with Local University",
    content: "EYBERS has partnered with the physics department of our local university. Their researchers will provide mentorship and access to specialized equipment for calibrating our detection systems.",
    category: "announcement",
    created_date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 3,
    title: "Ground Station Antenna Assembly",
    content: "The ground station team successfully assembled our Yagi antenna array this weekend. Initial tests show excellent signal reception, preparing us for satellite communication experiments.",
    category: "progress",
    created_date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 4,
    title: "School Presentation: Reaching 200 Students",
    content: "Our outreach team visited three local middle schools, presenting our project and inspiring over 200 students about space science and engineering. The enthusiasm was incredible!",
    category: "event",
    created_date: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString()
  }
];

export default function Updates() {
  const { data: updates = [], isLoading } = useQuery({
    queryKey: ['updates'],
    queryFn: () => base44.entities.Update.list('-created_date'),
  });

  const displayUpdates = updates.length > 0 ? updates : defaultUpdates;

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 px-4">
      {/* Background orbs */}
      <GlowingOrb size={400} color="#8b5cf6" className="-top-40 -left-40" opacity={0.2} />
      <GlowingOrb size={350} color="#06b6d4" className="bottom-40 -right-40" opacity={0.15} />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionTitle 
          title="News & Updates"
          subtitle="Follow our journey as we work towards launching our muon detection satellite and inspiring future scientists."
          light
        />

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 text-indigo-400 animate-spin" />
          </div>
        ) : displayUpdates.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4">
              <Newspaper className="w-8 h-8 text-indigo-300/50" />
            </div>
            <p className="text-indigo-200/60">No updates yet. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {displayUpdates.map((update, index) => (
              <UpdateCard key={update.id} update={update} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}