import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, MessageCircle, Mail } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'work', 'services', 'methodology', 'about', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const elem = document.getElementById(section);
        if (elem) {
          const top = elem.offsetTop;
          const height = elem.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Selected Work', href: '#work', id: 'work' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Methodology', href: '#methodology', id: 'methodology' },
    { label: 'Philosophy', href: '#philosophy', id: 'philosophy' },
    { label: 'About', href: '#about', id: 'about' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3.5 shadow-2xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo / Brand Mark */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center gap-3"
            data-cursor="hover"
          >
            <div className="relative flex items-center justify-center size-10 rounded-xl bg-white/[0.05] border border-white/10 group-hover:border-[#E5C378]/50 transition-colors">
              <span className="font-display font-bold text-lg text-white group-hover:text-[#E5C378] transition-colors">A</span>
              <span className="absolute bottom-1 right-1 size-1.5 rounded-full bg-[#E5C378]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-[#E5C378] transition-colors">
                ADARSH
              </span>
              <span className="text-[10px] tracking-widest text-white/50 uppercase font-mono">
                Studio · UI/UX
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] backdrop-blur-md rounded-full px-4 py-1.5 shadow-lg">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  data-cursor="hover"
                  className={`relative px-4 py-2 text-xs uppercase tracking-widest font-medium transition-all duration-300 ${
                    isActive ? 'text-white font-semibold' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-white/[0.08] rounded-full border border-white/10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Primary CTA (Desktop only) & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <MagneticButton
                href="#contact"
                onClick={onOpenContact}
              >
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#E5C378] to-[#D4AF37] text-[#090A0C] font-semibold text-xs uppercase tracking-widest shadow-lg shadow-[#E5C378]/15 hover:shadow-[#E5C378]/30 hover:brightness-105 transition-all">
                  <span>Let's Work Together</span>
                  <ArrowUpRight className="size-3.5 stroke-[2.5]" />
                </span>
              </MagneticButton>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center size-10 rounded-xl bg-white/[0.05] border border-white/10 text-white hover:text-[#E5C378] transition-colors"
              aria-label="Toggle navigation menu"
              data-cursor="hover"
            >
              {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 flex flex-col bg-[#08090B]/98 backdrop-blur-2xl px-6 pt-28 pb-10 md:hidden"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#E5C378]">Navigation</span>
              <div className="flex flex-col gap-1 mt-2">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    className="py-3.5 border-b border-white/[0.07] font-display text-2xl font-bold tracking-tight text-white hover:text-[#E5C378] transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="size-5 text-white/30" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-white/[0.08]">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#E5C378] text-[#090A0C] font-bold text-xs uppercase tracking-widest shadow-xl"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="size-4" />
              </a>

              <a
                href="https://wa.me/919876543210?text=Hi%20Adarsh,%20I'm%20interested%20in%20discussing%20a%20website%20design%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white/[0.05] border border-white/10 text-white hover:bg-white/[0.09] text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="size-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
