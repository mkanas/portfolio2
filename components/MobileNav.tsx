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
    <nav className="fixed bottom-0 bg-white/60 left-0 w-full bg-background border-t z-50 flex justify-around items-center py-2 md:hidden transition-colors duration-300">
      {links.map((link, index) => {
        const isActive = pathname === link.path
        return (
          <Link
            key={index}
            href={link.path}
            className={cn(
              'relative flex flex-col items-center justify-center text-sm transition-all duration-300',
              isActive ? 'text-accent' : 'text-muted-foreground'
            )}
          >
            <div className="text-2xl relative">
              {link.icon}
              {link.hasNotification && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 py-[1px] rounded-full">
                  !
                </span>
              )}
            </div>
            <span className="capitalize">{link.name}</span>
          </Link>
        )
      })}
    </nav>
  )
}

export default MobileNav
