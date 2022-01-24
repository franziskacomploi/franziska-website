import Image from 'next/image'
import React from 'react'
import BrandLogo from './../public/assets/brand-logo.png'
import AppleIcon from './../public/assets/apple.svg'
import SpotifyIcon from './../public/assets/spotify.svg'

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
      <p className="font-sans text-xl font-bold text-center py-10">
        Listen to the podcast here:
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 bg-lilac py-2 px-4 rounded-lg">
        <a
          href="https://podcasts.apple.com/us/podcast/coding-stuff-coffee/id1602976086"
          className="link"
        >
          <Image width={60} height={60} src={AppleIcon} alt="apple-music" />
        </a>
        <a
          href="https://open.spotify.com/show/2iYHh6x5OQkHds74ub6zkC"
          className="link"
        >
          <Image width={60} height={60} src={SpotifyIcon} alt="spotify" />
        </a>
      </div>
    </div>
  )
}
