import Image from 'next/image'
import React from 'react'
import heroImage from '../public/assets/hero-image.jpeg'
import hero from '../data/hero.json'

const Hero = ({ showBanner }) => {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 my-16">
        <div>
          <div className="text-2xl font-light">{hero.jobTitle}</div>
          <div className="headline-xl">
            {hero.firstName}
            <br />
            {hero.lastName}
          </div>
        </div>
        <div className="w-80 h-80 rounded-full bg-darkMint shadow flex flex-row items-center justify-center">
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
            {hero.description}
          </div>
        </div>
      </div>
      {showBanner && (
        <div className="content-big flex flex-col md:flex-row gap-4 items-center justify-evenly bg-beige text-center pt-16">
          <div>
            {hero.feature1}
            <br />
            <span className="font-bold">{hero.basedIn}</span>
          </div>
          <div>
            {hero.feature2}
            <br />
            <span className="font-bold">{hero.experience}</span>
          </div>
          <div>
            {hero.feature3}
            <br />
            <span className="font-bold">{hero.focusOn}</span>
          </div>
        </div>
      )}
    </>
  )
}

export default Hero
