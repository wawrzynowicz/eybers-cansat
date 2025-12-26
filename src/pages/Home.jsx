import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import MissionSection from '@/components/home/MissionSection';
import MuonInfoSection from '@/components/home/MuonInfoSection';
import ProjectDescription from '@/components/home/ProjectDescription';
import TimelineSection from '@/components/home/TimelineSection';
import MissionMapSection from '@/components/home/MissionMapSection';
import TeamSection from '@/components/home/TeamSection';
import SponsorsSection from '@/components/home/SponsorsSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MissionSection />
      <MuonInfoSection />
      <TimelineSection />
      <MissionMapSection />
      <ProjectDescription />
      <TeamSection />
      <SponsorsSection />
      <ContactSection />
    </div>
  );
}