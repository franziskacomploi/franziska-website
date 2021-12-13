import Image from 'next/image';
import React from 'react';
import heroImage from '../public/assets/hero-image.jpg';

const Hero = () => {
  return (
    <>
      <div className="relative">
        <div className="w-full lg:h-96" />
        <div className="relative w-full h-full lg:h-72 bg-beige" />
      </div>

      <div className="flex flex-row items-center justify-evenly bg-beige text-xl text-center pb-4">
        <div>
          Based in
          <br />
          <span className="font-bold">Potsdam, Germany</span>
        </div>
        <div>
          Experience
          <br />
          <span className="font-bold">1+ Years</span>
        </div>
        <div>
          Focused on
          <br />
          <span className="font-bold">Frontend & DevOps</span>
        </div>
      </div>

      <div className="absolute top-0 w-full flex flex-col lg:flex-row items-center justify-center gap-6 mt-10">
        <div>
          <div className="text-2xl">Software Developer</div>
          <div className="text-7xl">
            Franziska
            <br />
            Pendzialek
          </div>
        </div>
        <div>
          <Image
            width={500}
            height={500}
            src={heroImage}
            alt="franziska-profile-image"
            class="rounded-full"
          />
        </div>
        <div className="border-l-2">
          <div className="text-xl py-4 ml-4 w-72">
            {`I'm a software developer that transitioned from Marketing to Tech.
            I love good coffee, playing boardgames with friends and music.`}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
