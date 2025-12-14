import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import MissionSection from '@/components/home/MissionSection';
import StatsSection from '@/components/home/StatsSection';
import FeaturedProject from '@/components/home/FeaturedProject';
import ProjectDescription from '@/components/home/ProjectDescription';
import TeamSection from '@/components/home/TeamSection';
import SponsorsSection from '@/components/home/SponsorsSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <MissionSection />
      <FeaturedProject />
      <ProjectDescription />
      <TeamSection />
      <SponsorsSection />
      <ContactSection />
    </div>
  );
}