import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { processStages } from '../../data/projectsData';

export const DesignProcess: React.FC = () => {
  return (
    <section id="methodology" className="py-28 md:py-36 bg-[#0B0D10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 tag-badge tag-badge-gold mb-3">
              <Sparkles className="size-3 text-[#E5C378]" />
              <span>THE METHODOLOGY</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              From Idea to Experience
            </h2>
            <p className="mt-3 text-base sm:text-lg text-white/60 max-w-xl font-light">
              A disciplined, 6-stage engineering and design journey structured to deliver clarity, reliability, and undeniable visual excellence.
            </p>
          </div>

          <div className="text-xs font-mono text-[#E5C378] uppercase tracking-widest flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#E5C378] animate-ping" />
            <span>06 STAGES · 100% TRANSPARENCY</span>
          </div>
        </div>

        {/* 6-Stage Timeline Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {processStages.map((stage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-[#E5C378]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-bold text-[#E5C378] tracking-tighter">
                    {stage.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 group-hover:text-white/80 transition-colors">
                    STAGE {stage.step}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white tracking-tight group-hover:text-[#E5C378] transition-colors mb-3">
                  {stage.title}
                </h3>

                <p className="text-sm text-white/60 font-light leading-relaxed">
                  {stage.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs text-white/40">
                <span className="font-mono text-[10px] uppercase">Step verified</span>
                <CheckCircle2 className="size-4 text-[#E5C378]/60 group-hover:text-[#E5C378] transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
