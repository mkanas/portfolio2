import React from 'react'
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'
import Socials from '@/components/Socials'
import Photo from '@/components/Photo'
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex  flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left ">
            <span>Software Developer</span>
            <h1 className="h1">
              Hello I&rsquo;m <br />
              <span className="text-accent">Muhammad Khairul Anas</span>
            </h1>
            <p className="max-w-[580px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and i am
              proficient in framework programming ReactJs, NextJs and
              technologies.
            </p>
            <div className="flex  flex-col  xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download Cv</span>
                <FiDownload className="text-xl" />
              </Button>
              <div>
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
