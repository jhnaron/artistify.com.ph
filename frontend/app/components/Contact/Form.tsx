import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../ui/Button';

type Inputs = {
  name: string;
  contactNo: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="mx-auto mt-10 w-full max-w-2xl rounded-3xl bg-white p-8 shadow-md">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Get In Touch</h1>
        <p className="mb-8 text-sm text-gray-500">
          Want to learn more about our services, our dedicated support team is here to help you.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} aria-labelledby="form-title">
        <div className="relative mb-8">
          <label
            htmlFor="name"
            className="absolute -top-3 left-3 block rounded bg-white px-1 text-sm text-gray-700"
          >
            Your name
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            id="name"
            name="name"
            placeholder="Ex. Juan dela Cruz"
            className="mt-1 block w-full rounded-xl border border-gray-500 px-5 py-3 shadow-sm focus:border-primary focus:outline-none focus:ring-primary"
            aria-label="Your name"
            aria-describedby="name-error"
          />
          {errors.name && (
            <p id="name-error" className="ml-4 mt-1 text-xs text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="relative mb-8">
          <label
            htmlFor="contact"
            className="absolute -top-3 left-3 block rounded bg-white px-1 text-sm text-gray-700"
          >
            Contact no.
          </label>
          <input
            {...register('contactNo')}
            type="text"
            id="contact"
            name="contact"
            placeholder="Ex. +639 000 00000"
            className="mt-1 block w-full rounded-xl border border-gray-500 px-5 py-3 shadow-sm focus:border-primary focus:outline-none focus:ring-primary"
            aria-label="Contact number"
          />
        </div>
        <div className="relative mb-8">
          <label
            htmlFor="email"
            className="absolute -top-3 left-3 block rounded bg-white px-1 text-sm text-gray-700"
          >
            Email
          </label>
          <input
            {...register('email', { required: 'Email is required' })}
            type="email"
            id="email"
            name="email"
            placeholder="Ex. you@example.com"
            className="mt-1 block w-full rounded-xl border border-gray-500 px-5 py-3 shadow-sm focus:border-primary focus:outline-none focus:ring-primary"
            aria-label="Email Address"
            aria-describedby="email-error"
          />
          {errors.email && (
            <p id="email-error" className="ml-4 mt-1 text-xs text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="relative mb-8">
          <label
            htmlFor="message"
            className="absolute -top-3 left-3 block rounded bg-white px-1 text-sm text-gray-700"
          >
            Your message
          </label>
          <textarea
            {...register('message', { required: 'Message is required' })}
            id="message"
            name="message"
            placeholder="What’s on your mind?"
            className="mt-1 block w-full rounded-xl border border-gray-500 px-5 py-3 shadow-sm focus:border-primary focus:outline-none focus:ring-primary"
            rows={4}
            aria-label="Your message"
            aria-describedby="message-error"
          ></textarea>
          {errors.message && (
            <p id="message-error" className="ml-4 mt-1 text-xs text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>
        <div className="text-center">
          <Button
            type="submit"
            className="w-full bg-tertiary hover:bg-tertiary focus:outline-none focus:ring-2 focus:ring-tertiary focus:ring-opacity-75"
          >
            Send my message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
