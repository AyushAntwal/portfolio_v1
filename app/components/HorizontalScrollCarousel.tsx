'use client';
import { motion, useTransform, useScroll } from 'framer-motion';
import React, { ReactNode, useRef } from 'react';

interface CardProps {
  children: ReactNode;
}

const HorizontalScrollCarousel = ({ children }: CardProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const childrenCount = React.Children.count(children);
  const childrenHight = 100 / childrenCount;
  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
    <section ref={targetRef} className="relative">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex g
        ap-4">
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
