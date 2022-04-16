import React from 'react'
import about from '../data/about.json'

const About = () => {
  return (
    <div className="bg-beige pt-28 pb-44">
      <div className="mx-auto w-1/2">
        <div className="headline-xl text-center md:text-left my-4">
          {about.title}
        </div>
        <div className="content-big text-center md:text-left font-light mb-4">
          {about.text}
        </div>
      </div>
    </div>
  )
}

export default About
