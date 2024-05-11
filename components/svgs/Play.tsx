import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Play = React.forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => (
  <svg
    ref={ref}
    className={className}
    {...props}
    width='21'
    height='21'
    viewBox='0 0 21 21'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M10.9688 0.5C5.44875 0.5 0.96875 4.98 0.96875 10.5C0.96875 16.02 5.44875 20.5 10.9688 20.5C16.4888 20.5 20.9688 16.02 20.9688 10.5C20.9688 4.98 16.4988 0.5 10.9688 0.5ZM13.9688 12.73L11.0687 14.4C10.7087 14.61 10.3088 14.71 9.9187 14.71C9.5188 14.71 9.1287 14.61 8.76875 14.4C8.04875 13.98 7.61875 13.24 7.61875 12.4V9.05C7.61875 8.22 8.04875 7.47 8.76875 7.05C9.4888 6.63 10.3487 6.63 11.0787 7.05L13.9787 8.72C14.6987 9.14 15.1287 9.88 15.1287 10.72C15.1287 11.56 14.6987 12.31 13.9688 12.73Z'
      fill='#5D50C6'
    />
  </svg>
));

Play.displayName = 'Play';
