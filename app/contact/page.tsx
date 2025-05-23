'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Call Us',
    description: '(+62) 822-1456-1307',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email Address',
    description: 'muhammad.khairul.anas97@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Banda Aceh, Aceh, Indonesia',
  },
]

import { motion } from 'framer-motion'

const Contact = () => {
  const [selectedService, setSelectedService] = useState('')
  const form = useRef<HTMLFormElement | null>(null)
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.current) {
      emailjs
        .sendForm(
          'service_5mrk2sy',
          'template_qrezcci',
          form.current,
          'sjdIczSKdZNIszkaQ'
        )
        .then(
          () => {
            alert('Message sent successfully!')
            form.current?.reset()
            setSelectedService('')
          },
          (error) => {
            alert('Failed to send message: ' + error.text)
          }
        )
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.0, duration: 0.4, ease: 'easeInOut' },
      }}
      className="py-6"
    >
      <div className="container mx-auto mb-12">
        <div className="flex flex-col xl:flex-row gap-[30px] ">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              ref={form}
              onSubmit={sendEmail}
            >
              <h4 className="sm:text-4xl text-[25px] text-accent">
                Let&apos;s work together
              </h4>
              <p className="text-white/60 tex-[13px]">
                Tell us what you&apos;re looking for, and let&apos;s make it
                happen.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="first_name" placeholder="First Name" />
                <Input type="text" name="last_name" placeholder="Last Name" />
                <Input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                />
                <Input
                  type="text"
                  name="phone_number"
                  placeholder="Phone Number"
                />
              </div>
              <Select onValueChange={(value) => setSelectedService(value)}>
                <SelectTrigger className="w-full h-[48px]">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-primary">
                  <SelectGroup>
                    <SelectLabel className="text-white/60">
                      Services
                    </SelectLabel>
                    <SelectItem value="web-development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="mobile-development">
                      Mobile Development
                    </SelectItem>
                    <SelectItem value="graphic-design">
                      Graphic Design
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <input
                type="hidden"
                name="service"
                value={selectedService}
                readOnly
                hidden
              />

              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here"
              />

              <Button
                type="submit"
                className="bg-accent hover:bg-accent/80 max-w-[150px] transition-all duration-500"
              >
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center justify-start xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6 ">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>

                    <div className="flex-1">
                      <p className=" text-white/60 ">{item.title}</p>
                      <p className="text-[13px] sm:text-xl ">
                        {item.description}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
