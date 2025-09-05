"use client";
import { motion, Variants } from 'framer-motion';
import React from 'react';

const variants: Variants = {
  hidden: { opacity: 0, y: 32, filter: 'blur(4px)' },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0)',
    transition: { duration: 0.7, ease: 'easeOut', delay: i * 0.12 }
  })
};

interface AnimatedRevealProps {
  index?: number;
  children: React.ReactNode;
  className?: string;
}

export function AnimatedReveal({ index = 0, children, className }: AnimatedRevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -80px' }}
      custom={index}
    >
      {children}
    </motion.div>
  );
}
