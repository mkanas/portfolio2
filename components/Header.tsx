'use client'

import Link from 'next/link'
import { Button } from './ui/button'

//components
import Navigation from './Navigation'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <main className="container mx-auto flex justify-between items-center">
        {/*logo*/}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Anas<span className="text-accent">.</span>
          </h1>
        </Link>
        {/*nav links and hire me button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Navigation />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </main>
    </header>
  )
}

export default Header
