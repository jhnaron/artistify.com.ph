'use client';

import Collaborate from './components/Collaborate';
import Contact from './components/Contact';
import Goal from './components/Goal';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import WorkWithUs from './components/WorkWithUs';
import Navigation from './components/ui/Navigation';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="fixed right-0 top-0 z-10 mt-5 flex h-screen items-center">
        <Navigation isIcons />
      </div>
      <Hero />
      <HowItWorks />
      <WorkWithUs />
      <Goal />
      <Collaborate />
      <Services />
      <Contact />
    </main>
  );
}
