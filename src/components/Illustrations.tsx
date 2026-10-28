import React from "react";

export const StarBurst = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="currentColor"
    stroke="black"
    strokeWidth="4"
    strokeLinejoin="round"
  >
    <polygon points="50,2 62,32 95,25 75,50 98,72 65,75 50,98 35,75 2,72 25,50 5,25 38,32" />
  </svg>
);

export const Squiggle = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
  >
    <path d="M4 12 Q 24 2, 44 12 T 84 12 T 124 12 T 164 12 T 196 12" />
  </svg>
);

export const AbstractBlob = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    fill="currentColor"
    stroke="black"
    strokeWidth="4"
  >
    <path d="M43.5,1.5c20.6,1.4,40.8,13.5,59.3,23.1,22.9,11.8,45.2,27.1,53.9,50.5,8.2,22.1-0.4,48.5-15.2,66.3-17,20.2-45.5,31.9-71.3,31.5-27.9-.5-55.2-13.6-71.1-36.9-15.7-23-20.2-54.1-7.9-78.9,11-22.5,34.7-38.1,55.9-50.2Z" />
  </svg>
);

export const ArrowDoodle = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 60"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 45 C 30 10, 65 10, 85 30" />
    <path d="M65 30 L 85 30 L 85 10" />
  </svg>
);
