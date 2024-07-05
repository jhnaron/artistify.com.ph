import React from 'react';

import Button from './ui/Button';
import Header from './Header';
import Image from 'next/image';
import { NavId } from './ui/Navigation';
import { handleScroll } from '@/utils/Helpers';

const Hero: React.FC = () => {
  return (
    <div
      id={NavId.home}
      className="mx-auto flex min-h-screen max-w-7xl items-center justify-center bg-white"
    >
      <section
        className="flex flex-col items-center px-5 py-32 text-center"
        aria-labelledby="hero-heading"
      >
        <Header></Header>
        <div className="max-w-2xl">
          <h1 id="hero-heading" className="mt-10 text-xl font-extrabold !leading-snug md:text-6xl">
            Powering the Future of Digital Experiences
          </h1>
          <p className="mt-8 font-bold text-gray-700 md:text-xl">
            Innovative web solutions tailored to elevate your brand.
          </p>
          <Button
            onClick={(e) => handleScroll(e, '#' + NavId.getInTouch)}
            aria-label="Connect with us"
            className="mt-7"
          >
            Connect with us
          </Button>
        </div>
        <Image src="/hero.svg" alt="Artistify hero" width={600} height={400} priority />
      </section>
    </div>
  );
};

export default Hero;
