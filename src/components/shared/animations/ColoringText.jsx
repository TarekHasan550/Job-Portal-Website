import React from 'react'
import { motion } from 'framer-motion'

export default function ColoringText({ text = "Give Your Text Here", colors = ['#3fc8ff', '#3fe8ff', '#0a7785', '#000000'] }) {
  return (
    <>
      <motion.span
        animate={{ color: colors, transition: { duration: 2, repeat: Infinity, repeatType: "mirror" } }}
      >{text}</motion.span>
    </>
  )
}

