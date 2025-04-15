'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip'

import Link from 'next/link'
import Image from 'next/image'
import 'swiper/css'
import WorkSliderBtn from '@/components/WorkSliderBtn'

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra consectetur nunc at fermentum.',
    stack: [{ name: 'html 5' }, { name: 'Css 3' }, { name: 'Javascript' }],
    image: '/assets/work/thumb1.png',
    live: '',
    github: 'https://github.com/mkanas/project1',
  },
  {
    num: '02',
    category: 'fullstack',
    title: 'project 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra consectetur nunc at fermentum.',
    stack: [{ name: 'nextJs' }, { name: 'Tailwind' }, { name: 'Typescript' }],
    image: '/assets/work/thumb2.png',
    live: '',
    github: 'https://github.com/mkanas/project1',
  },
  {
    num: '03',
    category: 'frontend',
    title: 'project 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra consectetur nunc at fermentum.',
    stack: [{ name: 'html 5' }, { name: 'Css 3' }, { name: 'Javascript' }],
    image: '/assets/work/thumb3.png',
    live: '',
    github: 'https://github.com/mkanas/project1',
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0])
  console.log(project.num)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSlideChange = (swiper: { activeIndex: any }) => {
    const currentIndex = swiper.activeIndex
    setProject(projects[currentIndex])
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-stroke-white ">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leaidng-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ','}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20 "></div>
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight
                          size={24}
                          className="text-white text-3xl group-hover:text-accent"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">Live Project </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub
                          size={24}
                          className="text-white text-3xl group-hover:text-accent"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12 "
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full  ">
                    <div
                      className="h-[460px] relative group flex  justify-center
                     items-center bg-amber-400"
                    >
                      <div></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover "
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              <WorkSliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary  text-[22px]       w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconStyles={undefined}
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
