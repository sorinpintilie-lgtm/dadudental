import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className, ...props }: ButtonProps) {
  return <button onClick={onClick} className={className} {...props}>{children}</button>;
}