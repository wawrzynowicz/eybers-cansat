import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import MissionSection from '@/components/home/MissionSection';
import StatsSection from '@/components/home/StatsSection';
import FeaturedProject from '@/components/home/FeaturedProject';
import TeamSection from '@/components/home/TeamSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <MissionSection />
      <FeaturedProject />
      <TeamSection />
      <ContactSection />
    </div>
  );
}