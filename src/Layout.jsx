import React from 'react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import StarField from '@/components/shared/StarField';
import { LanguageProvider } from '@/components/shared/LanguageContext';

export default function Layout({ children }) {
  return (
    <LanguageProvider>
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <style>{`
        :root {
          --background: 222 47% 11%;
          --foreground: 210 40% 98%;
          --primary: 217 91% 60%;
          --accent: 25 95% 53%;
        }
        body {
          background: linear-gradient(135deg, #0f172a 0%, #0c1e3d 50%, #1e293b 100%);
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <StarField />
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
    </LanguageProvider>
  );
}