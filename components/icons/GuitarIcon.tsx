import React from 'react';

export const GuitarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m12 12 4-1-1 4-3 3-4-1-1 4-3 3-1.5-1.5L2 15l3-3 4-1 1-4Z" />
    <path d="m9 9 4-1" />
    <path d="m18 8 2-2" />
    <path d="m15 11 2-2" />
    <path d="m21 5-2-2" />
  </svg>
);
