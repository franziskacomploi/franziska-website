import React from 'react'
import ProjectCard from './projects/ProjectCard'

const Projects = () => {
  return (
    <div className="bg-white pt-16 pb-44 flex flex-col items-center">
      <div className="headline-xl text-center mb-4 mt-24">Projects</div>
      <div className="content-big text-center font-light mb-4 mx-6 md:mx-28">
        {`Tech is my dream, so I'm contributing to private projects as well. Find what I'm working on in my free-time here:`}
      </div>
      <ProjectCard
        title="Coding Library"
        emoji="📖"
        description="Collecting frameworks, tools, packages and other things that became
      useful and interesting in the Tech world. This gives an overview for
      everyone that is interested in what exists out there!"
        link="https://star-caption-d78.notion.site/Coding-Library-d6a4866dd1584d2bb2899af396d02c01"
      />
      <ProjectCard
        title="Weather API App"
        emoji="🌤"
        description="A web application for weather forecasts created with React.js, Tailwind, Axios and REST API."
        link="https://weather-api-project.vercel.app/"
        codeLink="https://github.com/franziskapendzialek/weather-api-project"
      />
      <ProjectCard
        title="Plant Nerd"
        emoji="🌱"
        description="A web application created mainly with Node.js, Express and MongoDB 
      that lets you collect your favorite plants all over the world, connect with others and post plants yourself!"
        link="https://plant-nerd.herokuapp.com/"
        codeLink="https://github.com/franziskapendzialek/plant-nerd"
      />
    </div>
  )
}

export default Projects
