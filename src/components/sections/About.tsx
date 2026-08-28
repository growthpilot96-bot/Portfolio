import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Layers, Cpu, Compass, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const capabilities = [
    { title: 'UI/UX & User Flows', category: 'Strategy' },
    { title: 'Conversion Rate Optimization (CRO)', category: 'Strategy' },
    { title: 'Framer Motion Physics', category: 'Animation' },
    { title: 'Micro-Interactions & Gestures', category: 'Animation' },
    { title: 'React & Modern TypeScript', category: 'Frontend' },
    { title: 'Tailwind CSS & Token Systems', category: 'Frontend' },
    { title: 'Editorial Typography Architecture', category: 'Visual Design' },
    { title: 'Responsive Mobile-First QA', category: 'Engineering' },
    { title: 'Lighthouse Performance & SEO', category: 'Engineering' },
    { title: 'Interactive High-Fidelity Prototyping', category: 'Prototyping' }
  ];

  return (
    <section id="about" className="py-28 md:py-36 bg-[#08090B] relative overflow-hidden">
      <div className="glow-spot-gold top-1/2 left-0 -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Manifesto */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 tag-badge tag-badge-gold self-start">
              <Sparkles className="size-3 text-[#E5C378]" />
              <span>THE DESIGNER & CRAFTSMAN</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              Obsessed with the space where{' '}
              <span className="font-serif-luxury italic font-normal text-[#E5C378]">
                aesthetic luxury
              </span>{' '}
              meets mathematical precision.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-white/70 font-light leading-relaxed">
              <p>
                In a digital landscape flooded with generic templates and disposable web pages, I believe in the power of <strong className="text-white font-medium">intentional craftsmanship</strong>.
              </p>
              <p>
                My work is rooted in the belief that your website is your business's single most critical asset. It is your flagship storefront, your lead generator, and the immediate benchmark of your brand's credibility.
              </p>
              <p>
                By working at the exact intersection of <span className="text-white font-medium">Senior UI/UX strategy</span>, <span className="text-white font-medium">bespoke frontend engineering</span>, and <span className="text-[#E5C378] font-medium">Framer Motion physics</span>, I eliminate the disconnect between how a website looks in design files and how it actually feels in your client's hands.
              </p>
            </div>

            {/* Core Manifesto Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.08]">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-xs uppercase font-mono text-[#E5C378] block mb-1 font-semibold">
                  Zero Templates
                </span>
                <p className="text-xs text-white/60 font-light">
                  Every layout and interaction is hand-tailored to the client's distinct brand identity.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-xs uppercase font-mono text-[#E5C378] block mb-1 font-semibold">
                  Direct Collaboration
                </span>
                <p className="text-xs text-white/60 font-light">
                  You work directly with the senior designer and engineer building your product - zero agency bureaucracy.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Capabilities Arsenal */}
          <div className="lg:col-span-5 flex flex-col gap-6 p-8 rounded-3xl card-luxury border-white/[0.1]">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-2">
                <Cpu className="size-4 text-[#E5C378]" />
                <h3 className="font-display font-bold text-lg text-white">
                  Technical Arsenal & Skills
                </h3>
              </div>
              <span className="text-[10px] font-mono text-white/40 uppercase">STACK 2026</span>
            </div>

            <p className="text-xs text-white/60 font-light leading-relaxed">
              Every tool and discipline selected for optimal speed, fluidity, and maintainability.
            </p>

            <div className="flex flex-col gap-2.5">
              {capabilities.map((cap, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-[#E5C378]/30 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-3.5 text-[#E5C378]" />
                    <span className="text-xs font-medium text-white/90">{cap.title}</span>
                  </div>
                  <span className="text-[9px] uppercase font-mono tracking-wider text-white/40 bg-white/[0.04] px-2 py-0.5 rounded-full">
                    {cap.category}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
