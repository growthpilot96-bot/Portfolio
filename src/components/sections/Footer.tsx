import React from 'react';
import { ArrowUp, Sparkles, MessageCircle, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-20 pb-12 bg-[#050608] border-t border-white/[0.08] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-9 rounded-xl bg-white/[0.05] border border-white/10">
                <span className="font-display font-bold text-base text-[#E5C378]">A</span>
              </div>
              <span className="font-display font-bold text-lg text-white tracking-tight">ADARSH</span>
            </div>
            <p className="text-xs text-white/60 font-light max-w-sm leading-relaxed">
              Senior Digital Product Designer & UI/UX Specialist crafting high-converting, unforgettable web experiences for discerning brands.
            </p>
            <p className="text-xs font-serif-luxury italic text-[#E5C378] mt-1">
              "Designed with intention. Built for the web."
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-white/40 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-light text-white/70">
              <li>
                <a href="#work" className="hover:text-[#E5C378] transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#E5C378] transition-colors">
                  Services & Deliverables
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-[#E5C378] transition-colors">
                  Design Methodology
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-[#E5C378] transition-colors">
                  Core Philosophy
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#E5C378] transition-colors">
                  About & Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E5C378] transition-colors">
                  Contact & Inquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-white/40 mb-2">
              Direct Channels
            </h4>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-white/70 hover:text-[#25D366] transition-colors"
            >
              <MessageCircle className="size-3.5 text-[#25D366]" />
              <span>WhatsApp Direct Desk</span>
            </a>
            <a
              href="mailto:hello@adarshstudio.design"
              className="inline-flex items-center gap-2 text-xs text-white/70 hover:text-[#E5C378] transition-colors"
            >
              <Mail className="size-3.5 text-[#E5C378]" />
              <span>hello@adarshstudio.design</span>
            </a>
            <div className="pt-2 text-[11px] font-mono text-white/40">
              TIMEZONE: UTC+05:30 (Available Worldwide)
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>
            © {new Date().getFullYear()} ADARSH. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            data-cursor="hover"
            className="flex items-center gap-2 hover:text-[#E5C378] transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="size-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
