import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles, ShieldCheck, Eye, Layers, Compass } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

interface HeroProps {
  onExploreWork: () => void;
  onOpenProject: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onOpenProject }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt physics for 3D layered composition
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 120, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], ['-7deg', '7deg']);

  // Parallax offsets for floating satellites
  const sat1X = useTransform(smoothMouseX, [-0.5, 0.5], [-20, 20]);
  const sat1Y = useTransform(smoothMouseY, [-0.5, 0.5], [-25, 25]);

  const sat2X = useTransform(smoothMouseX, [-0.5, 0.5], [25, -25]);
  const sat2Y = useTransform(smoothMouseY, [-0.5, 0.5], [20, -20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-between overflow-hidden bg-[#08090B]"
    >
      {/* Ambient background glows */}
      <div className="glow-spot-gold top-20 left-1/2 -translate-x-1/2 -z-10" />
      <div className="glow-spot-teal bottom-10 right-10 -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full flex-1 flex flex-col justify-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 self-start tag-badge tag-badge-gold mb-6 backdrop-blur-md"
        >
          <span className="size-2 rounded-full bg-[#E5C378] animate-pulse" />
          <span>SENIOR WEB DESIGNER · UI/UX & CONVERSION ARCHITECT</span>
        </motion.div>

        {/* Headline & Value Proposition Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] text-white text-balance"
            >
              I design websites{' '}
              <span className="font-serif-luxury font-normal italic text-[#E5C378] underline decoration-[#E5C378]/30 underline-offset-8">
                people remember
              </span>{' '}
              and businesses grow with.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed font-light"
            >
              I help ambitious businesses stand out with custom digital flagships - combining editorial luxury, high-converting UX architecture, and bespoke Framer Motion interactions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 w-full sm:w-auto"
            >
              <MagneticButton href="#work" onClick={onExploreWork} className="w-full sm:w-auto">
                <span className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#E5C378] text-[#08090B] font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#E5C378]/20 hover:bg-[#F3D58C] transition-all">
                  <span>View Selected Work</span>
                  <ArrowDown className="size-4" />
                </span>
              </MagneticButton>

              <MagneticButton href="#contact" className="w-full sm:w-auto">
                <span className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/[0.05] border border-white/15 text-white font-semibold text-xs uppercase tracking-widest hover:bg-white/[0.1] hover:border-white/30 transition-all">
                  <span>Let's Build Something</span>
                  <ArrowUpRight className="size-4 text-[#E5C378]" />
                </span>
              </MagneticButton>
            </motion.div>

            {/* Credibility statement */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-6 border-t border-white/[0.08] text-xs uppercase tracking-widest text-white/50 font-mono"
            >
              <span>UI/UX Strategy</span>
              <span className="text-[#E5C378]">✦</span>
              <span>Web Design</span>
              <span className="text-[#E5C378]">✦</span>
              <span>Frontend Engineering</span>
              <span className="text-[#E5C378]">✦</span>
              <span>Kinetic Motion</span>
            </motion.div>
          </div>

          {/* 3D Floating Interactive Composition */}
          <div className="lg:col-span-5 relative perspective-1000 flex items-center justify-center">
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-lg aspect-[4/3] rounded-3xl transition-transform duration-200"
            >
              {/* Main Showcase Window (Apex Fitness / IronForge preview) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                onClick={() => onOpenProject('apex-fitness')}
                data-cursor="project"
                data-cursor-text="PREVIEW"
                className="relative z-10 w-full h-full rounded-2xl overflow-hidden card-luxury group cursor-pointer border border-white/15 shadow-2xl"
                style={{ transform: 'translateZ(30px)' }}
              >
                {/* Browser top chrome */}
                <div className="h-9 bg-[#111317] border-b border-white/10 px-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-red-500/80" />
                    <span className="size-2.5 rounded-full bg-yellow-500/80" />
                    <span className="size-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/[0.04] text-[10px] text-white/50 font-mono">
                    <ShieldCheck className="size-3 text-[#E5C378]" />
                    <span>ironforge.club</span>
                  </div>
                  <span className="text-[10px] uppercase font-mono text-[#E5C378] font-bold">LIVE PROJECT</span>
                </div>

                {/* Hero Showcase Image */}
                <div className="relative h-[calc(100%-36px)] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop"
                    alt="IronForge Athletic Club Design"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/40 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <span className="tag-badge tag-badge-gold text-[10px] mb-1">FITNESS & WELLNESS</span>
                      <h3 className="font-display text-lg font-bold text-white tracking-tight">
                        IronForge Athletic Club
                      </h3>
                      <p className="text-xs text-white/70 line-clamp-1 font-light">
                        High-energy fitness brand experience with progressive overload tracks.
                      </p>
                    </div>
                    <span className="p-2 rounded-xl bg-white/10 backdrop-blur-md text-white group-hover:bg-[#E5C378] group-hover:text-[#090A0C] transition-colors">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Satellite Card 1: Nivora Dental (Top Right) */}
              <motion.div
                style={{
                  x: sat1X,
                  y: sat1Y,
                  transform: 'translateZ(60px)',
                }}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                onClick={() => onOpenProject('dental-studio')}
                data-cursor="project"
                data-cursor-text="DENTAL"
                className="absolute -top-8 -right-6 z-20 w-48 p-3 rounded-xl bg-[#0F1115]/95 border border-white/15 backdrop-blur-xl shadow-2xl cursor-pointer hover:border-[#E5C378] transition-colors hidden sm:block"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="size-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[9px] font-mono uppercase tracking-wider text-white/50">Healthcare UI</span>
                </div>
                <div className="aspect-[16/10] rounded-lg overflow-hidden mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=400&auto=format&fit=crop"
                    alt="Nivora Dental Studio"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs font-bold text-white tracking-tight">Nivora Dental Studio</div>
                <div className="text-[10px] text-[#E5C378] font-medium">Tranquil Clinical Experience</div>
              </motion.div>

              {/* Floating Satellite Card 2: LUXE Atelier (Bottom Left) */}
              <motion.div
                style={{
                  x: sat2X,
                  y: sat2Y,
                  transform: 'translateZ(50px)',
                }}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                onClick={() => onOpenProject('lan-commerce')}
                data-cursor="project"
                data-cursor-text="LUXE"
                className="absolute -bottom-8 -left-6 z-20 w-52 p-3 rounded-xl bg-[#0F1115]/95 border border-white/15 backdrop-blur-xl shadow-2xl cursor-pointer hover:border-[#E5C378] transition-colors hidden sm:block"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="size-3 text-[#E5C378]" />
                  <span className="text-[9px] font-mono uppercase tracking-wider text-white/50">Luxury E-Commerce</span>
                </div>
                <div className="aspect-[16/10] rounded-lg overflow-hidden mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=400&auto=format&fit=crop"
                    alt="LUXE Atelier Fashion"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs font-bold text-white tracking-tight">LUXE Atelier Edition</div>
                <div className="text-[10px] text-white/60">Quiet Luxury Fashion Interface</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="max-w-7xl mx-auto px-5 sm:px-8 w-full pt-10 flex items-center justify-between text-xs font-mono text-white/40"
      >
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-[#E5C378]" />
          <span>AVAILABLE FOR SELECT CLIENT PROJECTS</span>
        </div>
        <a
          href="#work"
          onClick={onExploreWork}
          className="flex items-center gap-2 hover:text-[#E5C378] transition-colors"
          data-cursor="hover"
        >
          <span>EXPLORE WORK</span>
          <ArrowDown className="size-3 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};
