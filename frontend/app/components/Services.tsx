import React from 'react';
import Image from 'next/image';
import { NavId } from './ui/Navigation';
import Card from './ui/Card';

const serviceItems: { imgUrl: string; description: string }[] = [
  {
    imgUrl: '/hero.svg',
    description: 'Customized management system',
  },
  {
    imgUrl: '/hero.svg',
    description: 'Structured data architecture',
  },
  {
    imgUrl: '/hero.svg',
    description: 'Tailed design solution by UI/UX designer',
  },
  {
    imgUrl: '/hero.svg',
    description: 'Complete development support',
  },
  {
    imgUrl: '/hero.svg',
    description: 'Web hosting',
  },
  {
    imgUrl: '/hero.svg',
    description: 'Heightened security measures',
  },
  {
    imgUrl: '/hero.svg',
    description: 'Designated business analyst & quality assurance',
  },
  {
    imgUrl: '/hero.svg',
    description: 'Exclusive project manager',
  },
];

const Services: React.FC = () => {
  return (
    <div id={NavId.services}>
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-5 py-32">
        <div>
          <div className="text-center">
            <p className="mb-3 font-bold uppercase">How it Works</p>
            <h2 className="mb-5 font-bold !leading-snug md:mb-20 md:text-5xl">
              From Concept to Practical Solution
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {serviceItems.map((service) => (
              <Card key={service.description} className="flex flex-col items-center p-5 shadow-lg">
                <Image src="/hero.svg" alt="Artistify hero" width={200} height={200} />
                <p className="text-center">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
