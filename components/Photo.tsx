'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const Photo = () => {
  return (
    <div className="w-full h-full relative mix-blend-lighten">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 1, ease: 'easeInOut' },
        }}
      >
        <div className=" w-[298px] h-[298px] xl:h-[498px] xl:w-[498px] ">
          <Image
            src="/qw.png"
            priority
            fill
            alt=""
            quality={100}
            className="object-contain "
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Photo
