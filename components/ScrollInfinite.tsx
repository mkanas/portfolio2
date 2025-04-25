'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3, FaJs, FaReact, FaGithub } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si'

const skills = {
  title: 'My Skills',
  description: 'Completed',
  skillList: [
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3 />, name: 'CSS3' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    { icon: <FaGithub />, name: 'GitHub' },
  ],
}

// Untuk animasi loop horizontal
const slide = {
  animate: {
    x: ['0%', '-50%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 35,
        ease: 'linear',
      },
    },
  },
}

const ScrollInfinite = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full  py-6">
      <motion.div className="flex gap-8" variants={slide} animate="animate">
        {[...skills.skillList, ...skills.skillList].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-w-[120px] hover:scale-105 transition"
          >
            <div className="text-4xl text-accent">{skill.icon}</div>
            <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-200">
              {skill.name}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default ScrollInfinite
