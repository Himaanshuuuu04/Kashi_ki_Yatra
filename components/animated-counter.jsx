"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

export function AnimatedCounter({ from = 0, to, duration = 2, delay = 0, className = "" }) {
  const [count, setCount] = useState(from)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let startTime
      let animationFrame

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        setCount(Math.floor(from + progress * (to - from)))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      setTimeout(() => {
        animationFrame = requestAnimationFrame(animate)
      }, delay * 1000)

      return () => cancelAnimationFrame(animationFrame)
    }
  }, [from, to, duration, delay, isInView])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {count}
    </motion.div>
  )
}

