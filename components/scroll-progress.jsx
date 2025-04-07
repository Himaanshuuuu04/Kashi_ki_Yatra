"use client"

import { motion, useScroll } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-amber-600 origin-left z-50 transition-transform duration-300 ease-in-out"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

