import React from 'react';
import { NavId } from './ui/Navigation';
import Card from './ui/Card';

const serviceItems: string[] = [
  'Websites',
  'Web applications',
  'Mobile applications',
  'Wireframing',
  'Branding',
  'Application maintenance',
  'CRM integrations',
  'Application enhancement',
];

const Collaborate: React.FC = () => {
  return (
    <div id={NavId.collaborate} className="bg-tertiary">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-5 py-32">
        <div>
          <h2 className="mx-auto mb-20 max-w-3xl text-center font-bold !leading-snug md:text-5xl">
            Discover Our Collaborative Services Tailored to Your Needs
          </h2>
          <div className="flex flex-wrap justify-center space-x-3 md:space-x-8">
            {serviceItems.map((service) => (
              <Card key={service} className="mb-5 rounded-full px-2 py-2 shadow md:px-10 md:py-5">
                <p className="whitespace-nowrap text-center font-bold md:text-3xl">{service}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
