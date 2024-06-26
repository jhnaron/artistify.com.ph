'use client';

import Button from './components/ui/Button';
import Header from './components/Header';
import Image from 'next/image';

export default function Home() {
  const handleClick = () => {
    alert('Coming soon!');
  };

  return (
    <main className="min-h-screen">
      <div className="container mx-auto flex h-screen items-center justify-center bg-white">
        <section className="flex flex-col items-center text-center" aria-labelledby="hero-heading">
          <Header></Header>
          <div className="max-w-2xl">
            <h1 id="hero-heading" className="mt-10 text-6xl font-extrabold leading-snug">
              Powering the Future of Digital Experiences
            </h1>
            <p className="mt-8 text-xl font-bold text-gray-700">
              Innovative web solutions tailored to elevate your brand.
            </p>
            <Button onClick={handleClick} aria-label="Test Button" className="mt-7">
              Connect with us
            </Button>
          </div>
          <Image src="/hero.svg" alt="Artistify hero" width={600} height={400} priority />
        </section>
      </div>
    </main>
  );
}
