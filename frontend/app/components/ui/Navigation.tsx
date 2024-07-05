import { handleScroll } from '@/utils/Helpers';
import Link from 'next/link';
import React from 'react';

interface NavProps {
  isIcons?: boolean;
}

export enum NavId {
  home = 'home',
  howItWorks = 'how-it-works',
  workWithUs = 'work-with-us',
  services = 'services',
  getInTouch = 'get-in-touch',
  goal = 'goal',
  collaborate = 'colaborative-service',
}

const navLinks = [
  { href: '#' + NavId.home, label: 'Home' },
  { href: '#' + NavId.howItWorks, label: 'How it works' },
  { href: '#' + NavId.workWithUs, label: 'Work with us' },
  { href: '#' + NavId.goal, label: 'Goal' },
  { href: '#' + NavId.collaborate, label: 'Collaborate' },
  { href: '#' + NavId.services, label: 'Services' },
  { href: '#' + NavId.getInTouch, label: 'Get in touch' },
];

const Icon: React.FC = () => {
  return (
    <div
      role="img"
      aria-label="icon"
      className="h-5 w-5 rounded-full bg-black/10 transition hover:scale-125 hover:bg-black/50"
    ></div>
  );
};

const Navigation: React.FC<NavProps> = ({ isIcons }) => {
  return (
    <nav aria-label="Main navigation" className="flex flex-col md:block md:space-x-16">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-500 transition hover:text-gray-800"
          aria-label={link.label}
          onClick={(e) => handleScroll(e, link.href)}
        >
          {isIcons ? <Icon /> : link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
