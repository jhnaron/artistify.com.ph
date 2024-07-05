import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from './ui/Navigation';

const Header: React.FC = () => {
  return (
    <header>
      <Link href="/" className="inline-block">
        <Image src="/artistify.svg" alt="Artistify.js Logo" width={250} height={60} priority />
      </Link>

      <div className="mt-8">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
