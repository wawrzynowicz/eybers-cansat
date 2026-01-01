import React from 'react';
import { Mail, Instagram, Facebook, Linkedin } from 'lucide-react';
import { useLanguage } from '@/components/shared/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="relative">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-4">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6931f02077d600a24db95382/bca3a73ca_552650322_1319197539651737_3123669821236239099_n.jpg"
                alt="EYBERS Logo"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-lg font-medium text-white">EYBERS</span>
            </a>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white/70 uppercase tracking-wider text-xs mb-6">{t.footer.navigation}</h4>
            <div className="flex flex-col gap-3">
              {[
                { name: t.nav.mission, href: '#mission' },
                { name: t.nav.project, href: '#project' },
                { name: t.nav.team, href: '#team' },
                { name: t.nav.contact, href: '#contact' }
              ].map(link => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white/70 uppercase tracking-wider text-xs mb-6">{t.contact.connect}</h4>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: 'https://www.facebook.com/eybers.cansat/' },
                { icon: Linkedin, href: 'https://www.linkedin.com/company/eybers-cansat/' },
                { icon: Instagram, href: 'https://www.instagram.com/eybers.cansat/' },
                { icon: Mail, href: 'mailto:eybers.cansat@gmail.com' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.05] mt-12 pt-8 text-center">
          <p className="text-white/50 text-xs tracking-wider">
            © {new Date().getFullYear()} EYBERS TEAM. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}