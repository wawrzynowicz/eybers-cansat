import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Rocket, Mail, Twitter, Instagram, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-900/50 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to={createPageUrl('Home')} className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">EYBERS</span>
            </Link>
            <p className="text-indigo-200/60 max-w-sm leading-relaxed">
              Six high school students on a mission to explore the cosmos through innovative satellite technology and muon detection.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <div className="flex flex-col gap-3">
              {[
                { name: 'Home', href: '#' },
                { name: 'Mission', href: '#mission' },
                { name: 'Project', href: '#project' },
                { name: 'Team', href: '#team' },
                { name: 'Contact', href: '#contact' }
              ].map(link => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-indigo-200/60 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Github, href: '#' },
                { icon: Mail, href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-200/60 hover:text-white hover:bg-white/10 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-indigo-200/40 text-sm">
            © {new Date().getFullYear()} EYBERS Team. Exploring the universe, one muon at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}