import Image from 'next/image'
import React from 'react'
import SkillsIcon from '../public/assets/skills.png'
import ContentIcons from '../public/assets/content.png'
import LinksIcon from '../public/assets/links.png'

const Skills = () => {
  return (
    <div className="gradient flex flex-col items-center pb-16">
      <div className="card flex flex-col items-center -mt-28 content-big text-center font-light">
        <div className="py-4">
          <Image
            width={40}
            height={40}
            src={SkillsIcon}
            alt="skills-franziska"
          />
        </div>
        <div className="font-bold mb-2">Frontend Tech Stack</div>
        <div>HTML, CSS, Javascript(ES6)</div>
        <div>React.js, NextJs</div>
        <div>Vue.js, nuxt</div>
        <div>Typescript</div>
        <div>Gatsby.js</div>
        <div>MobX</div>
        <div className="mb-2 mt-10">
          <Image
            width={30}
            height={30}
            src={ContentIcons}
            alt="skills-franziska"
          />
        </div>
        <div className="font-bold mb-2">Content Management Systems</div>
        <div>Contentful</div>
        <div className="mb-2 mt-10">
          <Image
            width={40}
            height={40}
            src={LinksIcon}
            alt="skills-franziska"
          />
        </div>
        <div className="font-bold mb-2">Backend Tech Stack</div>
        <div>MongoDB, Express, NodeJS</div>
      </div>
    </div>
  )
}

export default Skills
