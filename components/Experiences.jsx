import React from 'react'
import Image from 'next/image'
import hubblrLogo from '../public/assets/hubblr.jpeg'
import flinkLogo from '../public/assets/flink.jpeg'
import flinkPost from '../public/assets/flink.png'
import ironhackLogo from '../public/assets/ironhack.jpeg'
import fileeeLogo from '../public/assets/fileee.jpeg'
import Link from 'next/link'

const Experiences = () => {
  return (
    <div className="bg-beige pt-28 pb-16">
      <div className="flex flex-col items-center gap-4">
        <div className="headline-xl text-center my-4">Experiences</div>
        <div className="content-big text-center font-light mb-4 mx-6 md:mx-auto">
          {`As a woman in Tech, I've got working experience in several projects.`}
        </div>
        <div className="card mx-6 md:mx-auto max-w-xl">
          <Image
            width={30}
            height={30}
            src={hubblrLogo}
            alt="hubblr"
            className="rounded-full"
          />
          <div className="text-center mt-6 mx-10">
            Software Developer
            <br />
            Hubblr.io
          </div>
          <div className="text-center mt-4 mx-10">
            Since June 2021 Developing web applications for several clients,
            e.g. Flink, tech stack includes React.js, Vuejs, Nextjs, Typescript,
            Contentful
          </div>
        </div>
        <div className="card mx-6 md:mx-auto max-w-xl">
          <Image
            width={30}
            height={30}
            src={flinkLogo}
            alt="flink"
            className="rounded-full"
          />
          <div className="text-center mt-6 mx-10">{`Part of Flink's Webshop Team`}</div>
          <Image
            width={350}
            height={580}
            src={flinkPost}
            alt="flink-linkedin"
          />
        </div>
        <div className="card mx-6 md:mx-auto max-w-xl">
          <Image
            width={40}
            height={40}
            src={ironhackLogo}
            alt="ironhack"
            className="rounded-full"
          />
          <div className="text-center mt-6 mx-10">
            Ironhack Full Stack Bootcamp
            <br />
            2021
            <br />
            24-week Web Development Bootcamp
          </div>
          <div className="text-center mt-4 mx-10">
            <span className="font-bold">Front End technologies:</span> HTML |
            CSS | Javascript (ES6) | React
            <br />
            <span className="font-bold">Back End technologies:</span> ExpressJs
            | NodeJs | MongoDb
          </div>
        </div>
        <div className="card mx-6 md:mx-auto max-w-xl">
          <Image
            width={30}
            height={30}
            src={fileeeLogo}
            alt="fileee"
            className="rounded-full"
          />
          <div className="text-center mt-6 mx-10">
            Demo Building & Project Manager
            <br />
            Fileee GmbH
            <br />
            Oct 2018 – Nov 2018
          </div>
          <div className="text-center mt-4 mx-10">
            Coordinated and updated content for the documentation of the web app
            using GitHub
            <br />
            Designed BPMN Models as sales materials for stakeholders
            <br />
            Managed text based content for email marketing and Social Media
            <br />
            Contributed to the training of an AI
          </div>
        </div>
        <Link href="/contact">
          <a className="button-gradient my-4">Contact me</a>
        </Link>
      </div>
    </div>
  )
}

export default Experiences
