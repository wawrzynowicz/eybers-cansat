import React from 'react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import StarField from '@/components/shared/StarField';
import { LanguageProvider, useLanguage } from '@/components/shared/LanguageContext';
import { StarFieldProvider } from '@/components/shared/StarFieldContext';
import { Monitor } from 'lucide-react';

function LayoutContent({ children }) {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

        :root {
          --background: 222 47% 11%;
          --foreground: 210 40% 98%;
          --primary: 217 91% 60%;
          --accent: 25 95% 53%;
          --purple: 270 91% 65%;
          --cyan: 189 85% 55%;
          --green: 142 76% 56%;
          --orange: 25 95% 53%;
          --pink: 330 85% 60%;
        }
        body {
          background: linear-gradient(135deg, #0f172a 0%, #1a0b3d 20%, #0c1e3d 40%, #1e1b4b 60%, #1e293b 80%, #0f172a 100%);
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        html {
            scroll-behavior: smooth;
          }
          section {
            scroll-margin-top: 120px;
          }
      `}</style>
      <StarField />

      {/* Mobile Desktop Notice */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-center text-xs flex items-center justify-center gap-2">
        <Monitor className="w-4 h-4" />
        <span>{t.mobile.desktopMessage}</span>
      </div>

      <Navbar />
      <main className="relative z-10 md:mt-0 mt-10">
        {children}
      </main>
      <Footer />
      </div>
      );
      }

      export default function Layout({ children }) {
      return (
      <LanguageProvider>
      <StarFieldProvider>
      <LayoutContent>{children}</LayoutContent>
      </StarFieldProvider>
      </LanguageProvider>
      );
      }