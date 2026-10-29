"use client";

import { motion } from "motion/react";
import { type ReactNode } from "react";

interface KineticTextProps {
  text: string;
  className?: string;
}

export function KineticText({ text, className = "" }: KineticTextProps) {
  const chars = text.split("");

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        duration: 0.5,
      },
    },
  };

  const charVariants = {
    initial: { opacity: 0, y: 24, rotate: -8 },
    animate: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {chars.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={charVariants}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
