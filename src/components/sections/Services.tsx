import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpRight, Sparkles, CheckCircle2, Clock } from 'lucide-react';
import { servicesData } from '../../data/projectsData';
import { MagneticButton } from '../ui/MagneticButton';

interface ServicesProps {
  onOpenContact: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenContact }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-28 md:py-36 bg-[#0B0D10] relative overflow-hidden">
      {/* Background glow */}
      <div className="glow-spot-gold top-1/3 -left-40 -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 tag-badge tag-badge-gold mb-3">
              <Sparkles className="size-3 text-[#E5C378]" />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              What I Build
            </h2>
            <p className="mt-3 text-base sm:text-lg text-white/60 max-w-xl font-light">
              High-end digital solutions designed to elevate your brand prestige, reduce customer friction, and generate measurable business growth.
            </p>
          </div>

          <MagneticButton href="#contact" onClick={onOpenContact}>
            <span className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-[#E5C378] hover:text-[#090A0C] border border-white/15 text-white font-semibold text-xs uppercase tracking-widest transition-all">
              <span>Discuss Your Website</span>
              <ArrowUpRight className="size-4" />
            </span>
          </MagneticButton>
        </div>

        {/* Services Accordion Cards */}
        <div className="flex flex-col divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {servicesData.map((svc, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="group py-8 transition-colors"
              >
                <div
                  onClick={() => toggleExpand(idx)}
                  data-cursor="hover"
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-start md:items-center gap-6">
                    <span className="font-mono text-xs font-bold text-[#E5C378] tracking-widest pt-1 md:pt-0">
                      {svc.num}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-white group-hover:text-[#E5C378] transition-colors tracking-tight">
                        {svc.title}
                      </h3>
                      <p className="text-xs uppercase tracking-wider text-white/50 font-mono mt-1">
                        {svc.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end md:self-center">
                    <span className="text-xs text-white/40 font-mono hidden lg:inline">
                      Typical Timeline: {svc.timeline}
                    </span>
                    <div
                      className={`size-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isExpanded
                          ? 'bg-[#E5C378] text-[#08090B] border-[#E5C378] rotate-180'
                          : 'bg-white/[0.03] text-white/70 border-white/10 group-hover:border-white/30'
                      }`}
                    >
                      <ChevronDown className="size-4" />
                    </div>
                  </div>
                </div>

                {/* Expandable Details Drawer */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pb-2 grid md:grid-cols-12 gap-6 pl-0 md:pl-12">
                        <div className="md:col-span-6">
                          <p className="text-sm text-white/75 font-light leading-relaxed">
                            {svc.desc}
                          </p>
                          <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#E5C378]">
                            <Clock className="size-3.5" />
                            <span>Estimated Delivery: {svc.timeline}</span>
                          </div>
                        </div>

                        <div className="md:col-span-6 flex flex-col gap-2 bg-white/[0.02] p-5 rounded-2xl border border-white/[0.05]">
                          <span className="text-[10px] uppercase font-mono tracking-widest text-white/50 font-semibold mb-1">
                            Included Deliverables
                          </span>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {svc.deliverables.map((item, dIdx) => (
                              <div key={dIdx} className="flex items-center gap-2 text-xs text-white/80 font-light">
                                <CheckCircle2 className="size-3.5 text-[#E5C378] shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
