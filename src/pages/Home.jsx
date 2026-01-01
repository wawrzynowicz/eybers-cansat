import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import MissionSection from '@/components/home/MissionSection';
import ProjectDescription from '@/components/home/ProjectDescription';
import MissionsSection from '@/components/home/MissionsSection';
import MuonInfoSection from '@/components/home/MuonInfoSection';
import TimelineSection from '@/components/home/TimelineSection';
import TeamSection from '@/components/home/TeamSection';
import SocialMediaSection from '@/components/home/SocialMediaSection';
import SponsorsSection from '@/components/home/SponsorsSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MissionSection />
      <ProjectDescription />
      <MissionsSection />
      <MuonInfoSection />
      <TimelineSection />
      <TeamSection />
      <SocialMediaSection />
      <SponsorsSection />
      <ContactSection />
    </div>
  );
}