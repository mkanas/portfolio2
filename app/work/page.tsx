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
    category: 'Frontend',
    title: 'project 1',
    description:
      'A modern, responsive e-commerce web application built with Next.js for fast performance and SEO, Redux Toolkit for efficient state management, and Framer Motion for smooth, engaging animations.',
    stack: [
      { name: 'NextJs' },
      { name: 'Tailwind' },
      { name: 'Redux Toolkit' },
      { name: 'Framer Motion' },
    ],
    image: '/assets/work/thumb1.png',
    live: 'https://halalmart.vercel.app/',
    github: 'https://github.com/mkanas/halalmart',
  },
  {
    num: '02',
    category: 'Fullstack',
    title: 'project 2',
    description:
      'A Next.js-based healthcare patient management application that enables patients to seamlessly register, schedule, and manage their doctor appointments. It includes administrative tools for booking, confirming, and canceling appointments, along with SMS notification support.',
    stack: [
      { name: 'NextJs' },
      { name: 'Tailwind' },
      { name: 'Typescript' },
      { name: 'ShadCN' },
      { name: 'Appwrite' },
    ],
    image: '/assets/work/thumb2.png',
    live: 'https://patients-ms.vercel.app/',
    github: 'https://github.com/mkanas/patientsMS',
  },
  {
    num: '03',
    category: 'Frontend',
    title: 'project 3',
    description:
      'We’ll build a full-featured app using React, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid. The app will include light/dark themes, 4 types of charts, 3 data table pages, a FAQ page, a form with validation, and calendar functionality.',
    stack: [
      { name: 'React Vite' },
      { name: 'Material UI' },
      { name: 'Full Calendar' },
      { name: 'Nivo Charts' },
      { name: 'Formik' },
    ],
    image: '/assets/work/thumb3.png',
    live: 'https://dashboard-mkanas.vercel.app/',
    github: 'https://github.com/mkanas/dashboard',
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
      animate={{
        opacity: 1,
        transition: {
          delay: 2,
          duration: 1,
          ease: 'easeInOut',
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center pb-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] mx-1">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-stroke-white ">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leaidng-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60 ">{project.description}</p>
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="xl:text-xl  text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ','}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20 "></div>
              <div className="flex items-center gap-4 mb-12">
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

          <div className="w-[w-full xl:w-[50%]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 2,
                  duration: 1,
                  ease: 'easeInOut',
                },
              }}
            >
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px]"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full  ">
                      <div
                        className="h-[460px] relative group flex justify-center
                     items-center "
                      >
                        <div className="relative xl:w-full xl:h-full h-[300px] w-[380px] ">
                          <Image
                            src={project.image}
                            fill
                            className="xl:object-cover "
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
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
