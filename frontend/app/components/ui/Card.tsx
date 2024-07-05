import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, ...props }) => {
  const cardClass = twMerge(
    'shadow-3xl rounded-3xl border border-gray-200 bg-white px-10 py-20',
    props.className,
  );
  return (
    <section {...props} role="group" className={cardClass}>
      {children}
    </section>
  );
};

export default Card;
