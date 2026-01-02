import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AboutCardsManager from '@/components/dashboard/AboutCardsManager';
import TeamManager from '@/components/dashboard/TeamManager';
import SponsorsManager from '@/components/dashboard/SponsorsManager';
import SocialPostsManager from '@/components/dashboard/SocialPostsManager';
import ContactMessagesManager from '@/components/dashboard/ContactMessagesManager';

export default function Dashboard() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Data Manager</h1>
          <p className="text-white/60">Manage all sections and content</p>
        </div>

        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="about">About Cards</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="sponsors">Sponsors</TabsTrigger>
            <TabsTrigger value="social">Social Media</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <AboutCardsManager />
          </TabsContent>

          <TabsContent value="team">
            <TeamManager />
          </TabsContent>

          <TabsContent value="sponsors">
            <SponsorsManager />
          </TabsContent>

          <TabsContent value="social">
            <SocialPostsManager />
          </TabsContent>

          <TabsContent value="messages">
            <ContactMessagesManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}