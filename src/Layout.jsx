import React from 'react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import StarField from '@/components/shared/StarField';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black">
      <style>{`
        :root {
          --background: 0 0% 0%;
          --foreground: 0 0% 100%;
        }
        body {
          background: #000;
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
  );
}