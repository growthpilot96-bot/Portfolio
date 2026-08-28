import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Compass, Smartphone, Zap, Sparkles } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustMetrics = [
    {
      icon: Layers,
      stat: '10+',
      label: 'Website Concepts',
      sublabel: 'Fully realized digital flagships'
    },
    {
      icon: Compass,
      stat: '5+',
      label: 'Diverse Industries',
      sublabel: 'Healthcare, Luxury, Travel & More'
    },
    {
      icon: Smartphone,
      stat: '100%',
      label: 'Bespoke & Responsive',
      sublabel: 'Custom architecture, zero templates'
    },
    {
      icon: Zap,
      stat: '60fps',
      label: 'Fluid Framer Motion',
      sublabel: 'Natural physics & micro-interactions'
    },
    {
      icon: Sparkles,
      stat: 'CRO',
      label: 'Conversion Focused',
      sublabel: 'Engineered for real client growth'
    }
  ];

  return (
    <section className="py-12 border-y border-white/[0.08] bg-[#0C0E12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {trustMetrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex flex-col gap-1.5 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
              >
                <div className="flex items-center gap-2">
                  <Icon className="size-4 text-[#E5C378]" />
                  <span className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    {item.stat}
                  </span>
                </div>
                <span className="text-xs uppercase tracking-wider text-white/90 font-semibold font-mono">
                  {item.label}
                </span>
                <span className="text-[11px] text-white/50 leading-snug">
                  {item.sublabel}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
