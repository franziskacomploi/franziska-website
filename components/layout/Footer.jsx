import React from 'react'
import LinkedinIcon from '../../public/assets/linkedin.svg'
import GithubIcon from '../../public/assets/github.svg'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="bg-dark text-center text-white py-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <a href="https://www.linkedin.com/in/franziska-pendzialek/">
          <Image
            width={30}
            height={30}
            src={LinkedinIcon}
            alt="skills-franziska"
            className="color-beige"
          />
        </a>
        <a href="https://github.com/franziskapendzialek">
          <Image
            width={30}
            height={30}
            src={GithubIcon}
            alt="skills-franziska"
            className="color-dark"
          />
        </a>
      </div>

      <div className="mt-4">Copyright 2021 Franziska Pendzialek</div>
    </div>
  )
}

export default Footer
