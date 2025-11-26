"use client";

import { motion } from "framer-motion";

// 1. Define available animation types
type AnimationType = 
  | "fade-up" 
  | "fade-down" 
  | "slide-left" 
  | "slide-right" 
  | "scale" 
  | "rotate";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  animation?: AnimationType;
  duration?: number;
  delay?: number;
  className?: string;
}

export const Reveal = ({ 
  children, 
  width = "fit-content", 
  animation = "fade-up", 
  duration = 0.5, 
  delay = 0.25,
  className = ""
}: RevealProps) => {

  // 2. Define the look for each animation type
  const variants = {
    "fade-up": {
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    },
    "fade-down": {
      hidden: { opacity: 0, y: -75 },
      visible: { opacity: 1, y: 0 },
    },
    "slide-left": {
      hidden: { opacity: 0, x: -75 },
      visible: { opacity: 1, x: 0 },
    },
    "slide-right": {
      hidden: { opacity: 0, x: 75 },
      visible: { opacity: 1, x: 0 },
    },
    "scale": {
      hidden: { opacity: 0, scale: 0.5 },
      visible: { opacity: 1, scale: 1 },
    },
    "rotate": {
      hidden: { opacity: 0, rotate: -5, scale: 0.95 },
      visible: { opacity: 1, rotate: 0, scale: 1 },
    }
  };

  return (
    // MERGED: The outer div is now the motion.div
    // This ensures that 'className' (borders, bg) and animations apply to the SAME element.
    <motion.div
      className={className}
      style={{ 
        width, 
        // Note: We removed 'overflow: hidden' because we are no longer masking text inside a box.
        // We are moving the whole box itself.
        display: width === "fit-content" ? "inline-block" : "block" 
      }}
      variants={variants[animation]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay, type: "spring", stiffness: 50 }}
    >
      {children}
    </motion.div>
  );
};