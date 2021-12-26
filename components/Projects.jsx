import React from 'react'

const Projects = () => {
  return (
    <div className="bg-white pt-16 pb-44">
      <div className="headline-xl text-center mb-4 mt-24">Projects</div>
      <div className="content-big text-center font-light mb-4 mx-6 md:mx-28">
        {`Tech is my dream, so I'm contributing to private projects, as well.`}
      </div>
      <div className="flex flex-col items-center justify-center mt-16">
        <div className="underline-gradient font-serif text-4xl">
          Coding Library
        </div>
        <div className="my-4">📖</div>
        <div className="content-big text-center font-light mb-4 mx-10 md:mx-72">
          Collecting frameworks, tools, packages and other things that became
          useful and interesting in the Tech world. This gives an overview for
          everyone that is interested in what exists out there!
        </div>
        <a
          className="button-gradient"
          href="https://star-caption-d78.notion.site/Coding-Library-d6a4866dd1584d2bb2899af396d02c01"
        >
          Go to Library
        </a>
      </div>
    </div>
  )
}

export default Projects
