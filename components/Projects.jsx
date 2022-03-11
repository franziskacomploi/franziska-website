import React, { useState } from 'react'
import ArrowButton from './layout/ArrowButton'
import ProjectCard from './projects/ProjectCard'
import ArrowLeft from '../public/assets/arrow-left.svg'
import ArrowRight from '../public/assets/arrow-right.svg'
import projectData from '../data/projects.json'

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClickLeft = () => {
    setCurrentIndex(currentIndex - 1)
  }
  const handleClickRight = () => {
    setCurrentIndex(currentIndex + 1)
  }

  return (
    <div className="bg-white pt-16 pb-44 flex flex-col items-center">
      <div className="headline-xl text-center mb-4 mt-24">Projects</div>
      <div className="content-big text-center font-light mb-4 mx-6 md:mx-28">
        {`Tech is my dream, so I'm contributing to private projects as well. Find what I'm working on in my free-time here:`}
      </div>
      <div className="w-full flex flex-row items-center justify-between mt-20 px-8 md:px-20 xl:px-72">
        <div className="w-20">
          <ArrowButton
            active={currentIndex > 0}
            handleClick={handleClickLeft}
            icon={ArrowLeft}
            alt="slider-arrow-left"
            size={30}
          />
        </div>
        {projectData.map((project, i) => {
          return (
            <ProjectCard
              active={i === currentIndex}
              key={project.title}
              title={project.title}
              emoji={project.emoji}
              description={project.description}
              link={project.link ? project.link : undefined}
              codeLink={project.codeLink ? project.codeLink : undefined}
            />
          )
        })}
        <div className="w-20">
          <ArrowButton
            active={currentIndex < projectData.length - 1}
            handleClick={handleClickRight}
            icon={ArrowRight}
            alt="slider-arrow-right"
            size={30}
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
