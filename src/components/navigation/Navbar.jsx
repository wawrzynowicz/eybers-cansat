import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/shared/LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: t.nav.mission, href: '#mission' },
    { name: t.nav.project, href: '#about' },
    { name: t.nav.team, href: '#team' },
    { name: t.nav.muons, href: '#muon-info' },
    { name: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-gradient-to-br from-slate-950/50 via-blue-950/50 to-slate-900/50 backdrop-blur-md border-b border-blue-500/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6931f02077d600a24db95382/bca3a73ca_552650322_1319197539651737_3123669821236239099_n.jpg"
                  alt="EYBERS Logo"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-xl font-semibold text-white tracking-wide">EYBERS</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                link.isPage ? (
                  <Link 
                    key={link.name} 
                    to={link.href}
                    className="relative text-sm font-medium text-white/60 hover:text-white transition-colors duration-300 py-2 group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                  </Link>
                ) : (
                  <motion.a 
                    key={link.name} 
                    href={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative text-sm font-medium text-white/60 hover:text-white transition-colors duration-300 py-2 group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                  </motion.a>
                )
              ))}
              
              {/* Language switcher */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'pl' : 'en')}
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
              >
                <Globe className="w-4 h-4" />
                {language === 'en' ? 'PL' : 'EN'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/10 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-20 md:hidden"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link, index) => (
                link.isPage ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={handleNavClick}
                    className="text-2xl font-light text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={handleNavClick}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ delay: index * 0.05 }}
                    className="text-2xl font-light text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </motion.a>
                )
              ))}
              
              {/* Mobile language switcher */}
              <button
                onClick={() => {
                  setLanguage(language === 'en' ? 'pl' : 'en');
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm mt-6"
              >
                <Globe className="w-4 h-4" />
                {language === 'en' ? 'Polski' : 'English'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}