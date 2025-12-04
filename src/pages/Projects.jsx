import React from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import SectionTitle from '@/components/shared/SectionTitle';
import ProjectCard from '@/components/projects/ProjectCard';
import GlowingOrb from '@/components/shared/GlowingOrb';

const defaultProjects = [
  {
    id: 1,
    title: "Muon Detection Mini-Satellite",
    summary: "Our flagship project: a compact satellite designed to detect cosmic muons from low Earth orbit, contributing to our understanding of cosmic radiation.",
    description: "The EYBERS-1 satellite is a CubeSat-class spacecraft equipped with scintillator-based muon detectors. By measuring the flux and energy distribution of cosmic muons, we aim to provide valuable data for particle physics research and space weather monitoring.",
    objectives: [
      "Design and build a 1U CubeSat frame with integrated muon detection systems",
      "Develop onboard data processing algorithms for real-time particle identification",
      "Establish ground station communication for continuous data transmission",
      "Analyze collected data to contribute to cosmic ray research"
    ],
    status: "in_progress",
    featured: true
  },
  {
    id: 2,
    title: "Ground Station Development",
    summary: "Building the communication infrastructure to receive and process satellite data in real-time.",
    description: "Our ground station uses software-defined radio technology to track and communicate with the satellite, receiving telemetry and scientific data during orbital passes.",
    objectives: [
      "Set up SDR-based tracking and receiving equipment",
      "Develop automated satellite tracking software",
      "Create data processing pipeline for received signals"
    ],
    status: "in_progress",
    featured: false
  },
  {
    id: 3,
    title: "Educational Outreach Program",
    summary: "Inspiring the next generation of scientists by sharing our journey and knowledge with schools and communities.",
    description: "We visit schools, host workshops, and create educational content to show students that space science is accessible to everyone, regardless of age or background.",
    objectives: [
      "Create educational materials about muons and cosmic rays",
      "Conduct workshops at local schools",
      "Develop online resources for remote learning"
    ],
    status: "in_progress",
    featured: false
  }
];

export default function Projects() {
  const { data: projects = [], isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: () => base44.entities.Project.list('-featured'),
  });

  const displayProjects = projects.length > 0 ? projects : defaultProjects;
  const featured = displayProjects.filter(p => p.featured);
  const regular = displayProjects.filter(p => !p.featured);

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 px-4">
      {/* Background orbs */}
      <GlowingOrb size={500} color="#6366f1" className="-top-40 -right-40" opacity={0.2} />
      <GlowingOrb size={400} color="#8b5cf6" className="bottom-20 -left-40" opacity={0.15} />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle 
          title="Our Projects"
          subtitle="From satellite engineering to community outreach, explore the initiatives driving our mission forward."
          light
        />

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 text-indigo-400 animate-spin" />
          </div>
        ) : (
          <>
            {/* Featured Projects */}
            {featured.length > 0 && (
              <div className="mb-12">
                {featured.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            )}

            {/* Regular Projects */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {regular.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}