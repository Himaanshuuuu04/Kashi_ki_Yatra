"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export function AnimatedCard({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        rotateY: 5,
        rotateX: 5,
      }}
    >
      <Card className={className}>{children}</Card>
    </motion.div>
  )
}

