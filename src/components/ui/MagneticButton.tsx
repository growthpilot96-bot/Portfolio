import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  dataCursor?: string;
  dataCursorText?: string;
  strength?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
  dataCursor = 'action',
  dataCursorText = '',
  strength = 0.25,
}) => {
  const ref = useRef<any>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const rotateX = useTransform(springY, [-20, 20], [6, -6]);
  const rotateY = useTransform(springX, [-20, 20], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const commonProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: {
      x: springX,
      y: springY,
      rotateX,
      rotateY,
      transformStyle: 'preserve-3d' as const,
    },
    whileTap: { scale: 0.96 },
    'data-cursor': dataCursor,
    'data-cursor-text': dataCursorText,
    className,
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        {...commonProps}
      >
        <div style={{ transform: 'translateZ(10px)' }}>
          {children}
        </div>
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      {...commonProps}
    >
      <div style={{ transform: 'translateZ(10px)' }}>
        {children}
      </div>
    </motion.button>
  );
};
