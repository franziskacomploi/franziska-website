import Image from 'next/image'
import React from 'react'
import heroImage from '../public/assets/hero-image.jpg'

const Hero = () => {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 my-16">
        <div>
          <div className="text-2xl font-light">Software Developer</div>
          <div className="headline-xl">
            Franziska
            <br />
            Pendzialek
          </div>
        </div>
        <div className="w-80 h-80 rounded-full bg-redpink shadow flex flex-row items-center justify-center">
          <Image
            width={300}
            height={300}
            src={heroImage}
            alt="franziska-profile-image"
            className="rounded-full"
          />
        </div>
        <div className="border-l-2">
          <div className="content-big font-light py-4 ml-4 w-72">
            {`I'm a software developer that transitioned from Marketing to Tech.
            I love good coffee, playing boardgames with friends and music.`}
          </div>
        </div>
      </div>

      <div className="content-big flex flex-col md:flex-row gap-4 items-center justify-evenly bg-beige text-center pt-16">
        <div>
          Based in
          <br />
          <span className="font-bold">Potsdam, Germany</span>
        </div>
        <div>
          Experience
          <br />
          <span className="font-bold">1+ Years</span>
        </div>
        <div>
          Focused on
          <br />
          <span className="font-bold">Frontend & DevOps</span>
        </div>
      </div>
    </>
  )
}

export default Hero
