import React from 'react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import StarField from '@/components/shared/StarField';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950">
      <style>{`
        :root {
          --background: 222 47% 5%;
          --foreground: 213 31% 91%;
        }
        body {
          background: linear-gradient(to bottom, #020617, #1e1b4b, #020617);
        }
      `}</style>
      <StarField />
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}