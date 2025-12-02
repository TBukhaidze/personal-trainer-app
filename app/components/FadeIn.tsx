"use client";

import { motion } from "framer-motion";

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: delay,
      }}
      viewport={{
        once: false,
        amount: 0.3,
        margin: "0px 0px -100px 0px",
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
