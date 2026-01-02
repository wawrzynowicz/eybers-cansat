import React from 'react';
import { Mail, Instagram, Facebook, Linkedin } from 'lucide-react';
import { useLanguage } from '@/components/shared/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="relative">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center space-y-6">
          {/* Brand */}
          <div className="flex flex-col items-center gap-4">
            <a href="#" className="flex items-center gap-3">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6931f02077d600a24db95382/bca3a73ca_552650322_1319197539651737_3123669821236239099_n.jpg"
                alt="EYBERS Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-xl font-medium text-white">EYBERS</span>
            </a>
            <p className="text-white/80 text-sm leading-relaxed max-w-md">
              {t.footer.tagline}
            </p>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/[0.05] pt-6">
            <p className="text-white/50 text-xs tracking-wider">
              © 2025 EYBERS TEAM. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}