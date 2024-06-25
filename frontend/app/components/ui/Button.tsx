// components/Button.tsx
import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  const buttonClass = twMerge(
    'text-white bg-gradient-to-br from-[#0093d1] to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-3xl px-7 py-2.5 text-center me-2 mb-2',
    className,
  );
  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
