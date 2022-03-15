import React, { useState } from 'react'
import ProjectCard from './projects/ProjectCard'
import projectData from '../data/projects.json'
import Slider from './slider/Slider'
import PaginationDots from './slider/PaginationDots'

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePaginationClick = (i) => {
    setCurrentIndex(i)
  }

  return (
    <div className="bg-white pt-16 pb-44 flex flex-col items-center">
      <div className="headline-xl text-center mb-4 mt-24">Projects</div>
      <div className="content-big text-center font-light mb-4 mx-6 md:mx-28">
        {`Tech is my dream, so I'm contributing to private projects as well. Find what I'm working on in my free-time here:`}
      </div>
      <div className="w-full flex flex-col items-center mt-20 px-8 md:px-20 xl:px-72">
        <Slider
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          dataLength={projectData.length}
        >
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
        </Slider>
        <PaginationDots
          sliderItems={projectData}
          currentIndex={currentIndex}
          handleClick={handlePaginationClick}
        />
      </div>
    </div>
  )
}

export default Projects
