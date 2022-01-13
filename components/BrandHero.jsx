import Image from 'next/image'
import React from 'react'
import BrandLogo from './../public/assets/brand-logo.png'

export const BrandHero = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <Image
        width={400}
        height={400}
        src={BrandLogo}
        alt="codingstuffandcoffee"
        className="rounded-full"
      />
      <div className="headline-xl text-center leading-relaxed my-4">
        Coding Stuff <br />& Coffee
      </div>
      <div className="content-big text-center md:text-left font-light mb-4 mx-28">
        My current side-project: A podcast that helps to level up tech knowledge
        and supports more people to start their tech journey - Grab your morning
        coffee and listen! ☕️ Talking about being a newbie in tech, current
        tech trends and other coding stuff. Simply explained and easy to
        understand! Find new motivation and start your journey in tech right
        here! ✨
      </div>
      <a
        className="button-gradient-small"
        href="https://codingstuffandcoffee.com"
      >
        Go to Website
      </a>
    </div>
  )
}
