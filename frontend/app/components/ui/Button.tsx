// components/Button.tsx
import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = (props) => {
  const buttonClass = twMerge(
    'text-white bg-primary to-blue-600 focus:ring-4 focus:outline-none focus:ring-tertiary font-medium rounded-full px-10 py-4 text-center me-2 mb-2',
    props.className,
  );
  return (
    <button {...props} onClick={(e) => props.onClick?.(e)} className={buttonClass}>
      {props.children}
    </button>
  );
};

export default Button;
