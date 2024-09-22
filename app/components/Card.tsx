"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
}
const cardVariants: Variants = {
  offscreen: {
    y: 50, // Starting position offscreen
    opacity: 0, // Optional: start with zero opacity
  },
  onscreen: {
    y: 0, // End position
    opacity: 1, // Optional: end with full opacity
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.5, // Duration of the animation
      stiffness: 50, // Adjust spring stiffness for smoothness
    },
  },
};

function Card({ children }: CardProps) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 'all', margin: '100px' }}
      variants={cardVariants}
      className="card-container hover:shadow-md hover:backdrop-grayscale-0 p-1 rounded-xl hover:bg-white/5"
    >
      {children}
    </motion.div>
  );
}

export default Card;
