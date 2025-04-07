"use client"

import { motion } from "framer-motion"

export function FloatingElement({ children, duration = 3, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -10, 0],
        rotate: [0, 2, 0, -2, 0],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
        delay,
        times: [0, 0.25, 0.5, 0.75, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

