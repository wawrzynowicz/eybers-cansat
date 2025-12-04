import React from 'react';
import { motion } from 'framer-motion';

export default function GlowingOrb({ 
  size = 300, 
  color = "#6366f1", 
  className = "",
  blur = 80,
  opacity = 0.4,
  animate = true
}) {
  const OrbComponent = animate ? motion.div : 'div';
  
  return (
    <OrbComponent
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: `blur(${blur}px)`,
        opacity
      }}
      {...(animate && {
        animate: {
          scale: [1, 1.1, 1],
          opacity: [opacity, opacity * 0.8, opacity]
        },
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }
      })}
    />
  );
}