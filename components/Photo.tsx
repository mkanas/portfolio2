'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' },
          }}
          className=" w-[298px] h-[298px] xl:h-[498px] xl:w-[498px]  mix-blend-lighten absolute "
        >
          <Image
            src="/qw.png"
            priority
            fill
            alt=""
            quality={100}
            className="object-contain "
          />
        </motion.div>
        <motion.svg
          className="w-[300px] xl:w-[490px] h-[300px] xl:h-[490px] "
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <defs>
            <linearGradient id="rgbGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="red" />
              <stop offset="33%" stopColor="lime" />
              <stop offset="66%" stopColor="blue" />
              <stop offset="100%" stopColor="red" />
            </linearGradient>
          </defs> */}
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            //url(#rgbGradient)
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Photo
