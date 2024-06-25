import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/work-with-us', label: 'Work with us' },
  { href: '/services', label: 'Services' },
  { href: '/get-in-touch', label: 'Get in touch' },
];

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <Link href="/" className="inline-block">
          <Image src="/artistify.svg" alt="Artistify.js Logo" width={250} height={60} priority />
        </Link>

        <div className="mt-8 space-x-16">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-400 transition hover:text-gray-800"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
