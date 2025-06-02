import React from 'react'
import { motion } from 'framer-motion'

export default function AnimatedUnderline({ children, classes = "text-4xl" }) {
  return (
    <div>
      <h2 className={`${classes} font-bold relative inline-block my-6`}>
        {children}

        <svg
          className="absolute -bottom-4 left-0 w-full h-6 overflow-visible"
          viewBox="0 0 120 20"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0 10
              C15 0, 30 20, 45 10
              C60 0, 75 20, 90 10
              C105 0, 120 20, 135 10"
            stroke="#3fe8ff"
            strokeWidth="2"
            fill="transparent"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </svg>
      </h2>
    </div>
  )
}

