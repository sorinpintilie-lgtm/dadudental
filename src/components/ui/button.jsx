import React from 'react';

export function Button({ children, variant, size, className, ...props }) {
  let baseClass = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  if (size === 'lg') baseClass += ' h-10 py-2 px-4 text-sm';
  if (variant === 'outline') baseClass += ' border border-input hover:bg-accent hover:text-accent-foreground';
  else baseClass += ' bg-primary text-primary-foreground hover:bg-primary/90';
  return <button className={`${baseClass} ${className}`} {...props}>{children}</button>;
}