import Link from 'next/link'

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/mkanas' },
  { icon: <FaLinkedin />, path: 'linkedin.com/in/muhammad-khairul-anas' },
  { icon: <FaInstagram />, path: 'https://www.instagram.com/mk_anas' },
]
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Socials
