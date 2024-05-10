import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const EnvelopeIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={className}
      width='28'
      height='24'
      viewBox='0 0 28 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M20.586 0C22.374 0 24.094 0.706667 25.3594 1.97467C26.626 3.24 27.334 4.94667 27.334 6.73333V17.2667C27.334 20.9867 24.3074 24 20.586 24H7.41403C3.69269 24 0.667358 20.9867 0.667358 17.2667V6.73333C0.667358 3.01333 3.67936 0 7.41403 0H20.586ZM22.7074 8.72L22.814 8.61333C23.1327 8.22667 23.1327 7.66667 22.7994 7.28C22.614 7.08133 22.3594 6.96 22.094 6.93333C21.814 6.91867 21.5474 7.01333 21.346 7.2L15.334 12C14.5607 12.6413 13.4527 12.6413 12.6674 12L6.66736 7.2C6.25269 6.89333 5.67936 6.93333 5.33403 7.29333C4.97403 7.65333 4.93403 8.22667 5.23936 8.62667L5.41403 8.8L11.4807 13.5333C12.2274 14.12 13.1327 14.44 14.0807 14.44C15.026 14.44 15.9474 14.12 16.6927 13.5333L22.7074 8.72Z'
        fill='#191825'
        fill-opacity='0.75'
      />
    </svg>
  ),
);

EnvelopeIcon.displayName = 'EnvelopeIcon';
