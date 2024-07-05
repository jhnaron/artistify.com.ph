import React from 'react';
import { NavId } from './ui/Navigation';
import ContactForm from './Contact/Form';

const Contact: React.FC = () => {
  return (
    <div
      id={NavId.getInTouch}
      className="justify-center bg-blue-950 bg-[url(/clouds.svg)] bg-cover bg-bottom bg-no-repeat"
    >
      <div className="mx-auto flex min-h-screen max-w-5xl items-center px-5 py-32">
        <div>
          <h2 className="mb-5 text-center font-bold !leading-snug text-white md:text-6xl">
            What are you waiting for? Let`s Artistify your Needs!
          </h2>
          {/* <Button onClick={handleClick} aria-label="Connect with us" className="mx-auto mt-7">
            Connect with us
          </Button> */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
