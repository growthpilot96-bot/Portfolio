import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, TrendingUp, Gem, PlayCircle } from 'lucide-react';
import { philosophyPillars } from '../../data/projectsData';

export const Philosophy: React.FC = () => {
  const icons = [Users, TrendingUp, Gem, PlayCircle];

  return (
    <section id="philosophy" className="py-28 md:py-36 bg-[#08090B] relative overflow-hidden">
      <div className="glow-spot-teal top-1/2 right-0 -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 tag-badge tag-badge-gold mb-3">
            <Sparkles className="size-3 text-[#E5C378]" />
            <span>DESIGN PHILOSOPHY</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            A website should do more than look good.{' '}
            <span className="font-serif-luxury italic font-normal text-[#E5C378]">
              It must perform.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 font-light leading-relaxed">
            I unite <strong className="text-white font-medium">Design + UX Architecture + Frontend Code + Motion Physics</strong> to build digital flagships where breathtaking visuals and effortless user experience amplify each other.
          </p>
        </div>

        {/* Four Principles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophyPillars.map((pillar, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-8 rounded-3xl card-luxury flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs font-bold text-[#E5C378] tracking-widest">
                      {pillar.num}
                    </span>
                    <div className="size-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/80 group-hover:text-[#E5C378] group-hover:border-[#E5C378]/40 transition-colors">
                      <Icon className="size-5" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white tracking-tight mb-3 group-hover:text-[#E5C378] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-white/60 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-widest text-white/40">
                  <span className="size-1 rounded-full bg-[#E5C378]" />
                  <span>CORE PRINCIPLE</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
