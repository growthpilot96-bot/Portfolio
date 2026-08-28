import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setProgress(25), 200);
    const timer2 = setTimeout(() => setProgress(65), 550);
    const timer3 = setTimeout(() => setProgress(92), 850);
    const timer4 = setTimeout(() => setProgress(100), 1100);
    const timer5 = setTimeout(() => onComplete(), 1450);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        initial={{ y: 0 }}
        exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-between p-8 md:p-12 bg-[#08090B] text-white"
      >
        <div className="w-full flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/40 font-mono">
          <span>ADARSH · PORTFOLIO</span>
          <span>EDITION 2026</span>
        </div>

        <div className="flex flex-col items-center gap-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center justify-center size-20 rounded-2xl bg-white/[0.03] border border-white/10 shadow-2xl"
          >
            <span className="font-display font-bold text-3xl tracking-tighter text-[#E5C378]">AD</span>
            <span className="absolute -top-1 -right-1 size-2 rounded-full bg-[#E5C378] animate-ping" />
          </motion.div>

          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-xs uppercase tracking-[0.3em] text-[#E5C378] font-semibold"
            >
              Digital Studio & UI/UX Strategy
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-1 text-sm text-white/60 font-light font-serif-luxury italic"
            >
              Crafting websites people remember
            </motion.p>
          </div>
        </div>

        <div className="w-full max-w-xs flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs font-mono text-white/50">
            <span>LOADING EXPERIENCE</span>
            <span className="text-[#E5C378] font-semibold">{progress}%</span>
          </div>
          <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#E5C378]/60 to-[#E5C378]"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.3 }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
