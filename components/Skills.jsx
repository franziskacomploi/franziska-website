import Image from 'next/image'
import React from 'react'
import SkillsIcon from '../public/assets/skills.png'
import ContentIcons from '../public/assets/content.png'
import LinksIcon from '../public/assets/links.png'
import skills from '../data/skills.json'

const Skills = () => {
  return (
    <div className="gradient flex flex-col items-center pb-16">
      <div className="card max-w-2xl -mt-28 content-big text-center font-light pb-10">
        <div className="mt-6">
          <Image
            width={40}
            height={40}
            src={LinksIcon}
            alt="skills-franziska"
          />
        </div>
        <div className="font-bold mb-2">{skills.subTitle1}</div>
        {skills.skills1.map((item) => {
          return <div key={item}>{item}</div>
        })}
        <div className="mb-2 mt-10">
          <Image
            width={30}
            height={30}
            src={ContentIcons}
            alt="skills-franziska"
          />
        </div>
        <div className="font-bold mb-2">{skills.subTitle2}</div>
        {skills.skills2.map((item) => {
          return <div key={item}>{item}</div>
        })}
        <div className="mb-2 mt-10">
          <Image
            width={40}
            height={40}
            src={SkillsIcon}
            alt="skills-franziska"
          />
        </div>
        <div className="font-bold mb-2">{skills.subTitle3}</div>
        {skills.skills3.map((item) => {
          return <div key={item}>{item}</div>
        })}
      </div>
    </div>
  )
}

export default Skills
