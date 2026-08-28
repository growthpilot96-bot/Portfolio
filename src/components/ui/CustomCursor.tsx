import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'project' | 'action'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 450, mass: 0.2 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect if device supports touch
    const checkTouch = () => {
      if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
        setIsTouchDevice(true);
      }
    };
    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      if (isTouchDevice || shouldReduceMotion) return;
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check cursor data attribute on hover target
      const target = e.target as HTMLElement | null;
      const cursorElem = target?.closest('[data-cursor]') as HTMLElement | null;
      
      if (cursorElem) {
        const type = cursorElem.getAttribute('data-cursor');
        const text = cursorElem.getAttribute('data-cursor-text') || '';
        
        if (type === 'project') {
          setCursorVariant('project');
          setCursorText(text || 'EXPLORE');
        } else if (type === 'view') {
          setCursorVariant('project');
          setCursorText('VIEW');
        } else if (type === 'action') {
          setCursorVariant('action');
          setCursorText(text || '');
        } else {
          setCursorVariant('hover');
          setCursorText('');
        }
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, isTouchDevice, shouldReduceMotion]);

  if (isTouchDevice || shouldReduceMotion || !isVisible) {
    return null;
  }

  const variants = {
    default: {
      width: 10,
      height: 10,
      backgroundColor: '#E5C378',
      borderColor: 'transparent',
      opacity: 0.9,
    },
    hover: {
      width: 48,
      height: 48,
      backgroundColor: 'rgba(229, 195, 120, 0.15)',
      borderColor: 'rgba(229, 195, 120, 0.6)',
      opacity: 1,
    },
    project: {
      width: 80,
      height: 80,
      backgroundColor: 'rgba(229, 195, 120, 0.95)',
      borderColor: '#FFFFFF',
      opacity: 1,
    },
    action: {
      width: 54,
      height: 54,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderColor: 'rgba(229, 195, 120, 0.8)',
      opacity: 1,
    }
  };

  return (
    <motion.div
      className="fixed pointer-events-none z-50 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 border backdrop-blur-[2px] transition-colors"
      style={{
        left: cursorX,
        top: cursorY,
      }}
      variants={variants}
      animate={cursorVariant}
      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
    >
      {cursorText && (
        <span className="text-[10px] font-bold tracking-widest text-[#08090B] uppercase select-none">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
};
