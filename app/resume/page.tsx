'use client'

import { FaHtml5, FaCss3, FaJs, FaReact, FaGithub } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si'

const about = {
  title: 'About Me',
  description:
    'I am a software engineer with a passion for creating engaging and user-friendly web applications. I have a deep understanding of front-end development and have worked with various technologies such as HTML, CSS, JavaScript, React, Next.js, and TypeScript.',
  info: [
    { filedName: 'Name', FieldValue: ' Muhammad Khairul Anas' },
    { filedName: 'Experience', FieldValue: '2+ Years' },
    { filedName: 'Nationality', FieldValue: 'Indonesian' },
    {
      filedName: 'Email',
      FieldValue: ' muhammad.khairul.anas97@gmail.com',
    },
    { filedName: 'Freelance', FieldValue: 'Avalaible' },
    { filedName: 'Languange', FieldValue: 'Indonesia, English' },
  ],
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description:
    'Freelancing on Upwork, delivering high-quality front-end solutions tailored to client needs.',
  items: [
    {
      company: 'Upwork',
      position: 'Frontend Developer',
      duration: '2024-Present',
    },
  ],
}
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description:
    'Completed various online courses and certifications to enhance my front-end and full-stack development skills.',
  items: [
    {
      institution: 'Dicoding',
      degree: 'Frontend Developer',
      duration: '2023',
    },
    {
      institution: 'Progate',
      degree: 'Frontend Developer with ReactJs',
      duration: '2022',
    },
    {
      institution: 'Freecodecamp',
      degree: 'Frontend Developer',
      duration: '2024',
    },
    {
      institution: 'Fullstackopen',
      degree: 'Fullstack Developer',
      duration: '2024',
    },
  ],
}
const skills = {
  title: 'My Skills',
  description: 'Completed',
  skillList: [
    { icon: <FaHtml5 />, name: 'HTML5' },
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

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' },
      }}
      className="min-h-[88vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 md:px-10 px-1 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent ">{item.duration}</span>
                          <h3 className="text-xl mx-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 md:px-10 px-1 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent ">{item.duration}</span>
                          <h3 className="text-xl mx-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div>
                  <h3 className="text-4xl font-bold gap-[30px] text-center xl:text-left">
                    {skills.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grod-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize ">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[720px] mx-auto xl:mx-0">
                  {about.info.map((about, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4 "
                    >
                      <span className="text-white/60">{about.filedName}</span>
                      <span className="text-xl">{about.FieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
