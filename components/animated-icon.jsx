"use client"

import { motion } from "framer-motion"

export function AnimatedIcon({ icon: Icon, className = "", delay = 0 }) {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay,
      },
    },
  }

  return (
    <motion.div
      className={className}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Icon className="stroke-amber-600" strokeWidth={1.5} pathvariants={pathVariants} />
    </motion.div>
  )
}

