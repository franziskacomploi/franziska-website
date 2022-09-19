import Image from 'next/image'
import React from 'react'
import GithubIcon from '../../public/assets/github.svg'

const ProjectCard = ({ active, title, emoji, description, link, codeLink }) => {
  return (
    <>
      {active && (
        <div className="flex flex-col items-center justify-center min-h-fit">
          <div className="underline-gradient font-serif text-4xl">{title}</div>
          <div className="my-4">{emoji}</div>
          <div className="content-big text-center font-light mb-4 mx-10">
            {description}
          </div>
          <div className="flex flex-col md:flex-row gap-4 flex-wrap md:flex-nowrap">
            {link && (
              <a
                className="button-gradient-small"
                href={link}
                aria-label="click"
              >
                Go to Project
              </a>
            )}
            {codeLink && (
              <a
                href={codeLink}
                className="button-gradient-small"
                aria-label="click"
              >
                Go to Code
              </a>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectCard
