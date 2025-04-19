'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FaHome, FaBriefcase, FaEnvelope, FaUser } from 'react-icons/fa'
import { cn } from '@/lib/utils' // pastikan punya helper cn() kalau pakai shadcn/ui

const links = [
  {
    name: 'home',
    path: '/',
    icon: <FaHome />,
  },
  {
    name: 'resume',
    path: '/resume',
    icon: <FaUser />,
  },
  {
    name: 'work',
    path: '/work',
    icon: <FaBriefcase />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <FaEnvelope />,
    hasNotification: true, // simulasi badge
  },
]

const MobileNav = () => {
  const pathname = usePathname()

  return (
    <nav className="flex fixed bottom-0 justify-center items-center  mt-5 w-full left-0  z-50  md:hidden transition-colors duration-300 ">
      <div
        className="bg-white/40 m-3.5 w-full rounded-4xl bg-background 
  shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.3)] 
  flex justify-around items-center py-1.5"
      >
        {links.map((link, index) => {
          const isActive = pathname === link.path
          return (
            <Link
              key={index}
              href={link.path}
              className={cn(
                'relative flex flex-col items-center justify-center text-sm transition-all duration-300',
                isActive ? 'text-black' : 'text-muted-foreground'
              )}
            >
              <div className="text-md relative">{link.icon}</div>
              <span className="capitalize">{link.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default MobileNav
