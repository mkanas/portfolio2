'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Stairs from './Stairs'

const StairEffect = () => {
  const pathname = usePathname()
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div
          className="h-screen w-screen fixed left-0 top-0 
        pointer-events-none z-40 flex"
        >
          <Stairs />
        </div>
        <motion.div
          className="h-screen w-screen fixed bg-primary top-0
         pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.6, duration: 0.4, ease: 'easeInOut' },
          }}
        />
      </div>
    </AnimatePresence>
  )
}

export default StairEffect
