import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ClientLogosGraphics = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      className={className}
      {...props}
      width='65'
      height='171'
      viewBox='0 0 65 171'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_832_1216)'>
        <path
          d='M44.0254 170.703L65 170.703L54.5127 160.216L44.0254 170.703Z'
          fill='#FF5722'
        />
        <path
          d='M44.0254 135.164L65 135.164L54.5127 124.677L44.0254 135.164Z'
          fill='#FF5722'
        />
        <path
          d='M44.0254 99.6108L65 99.6108L54.5127 89.1235L44.0254 99.6108Z'
          fill='#FF5722'
        />
        <path
          d='M44.0254 64.0722L65 64.0722L54.5127 53.5849L44.0254 64.0722Z'
          fill='#FF5722'
        />
        <path
          d='M44.0254 28.5335L65 28.5335L54.5127 18.0311L44.0254 28.5335Z'
          fill='#FF5722'
        />
        <path
          d='M0.000263214 153.426L20.9749 153.426L10.4876 142.939L0.000263214 153.426Z'
          fill='#FF5722'
        />
        <path
          d='M1.90735e-05 117.873L20.9746 117.873L10.4873 107.385L1.90735e-05 117.873Z'
          fill='#FF5722'
        />
        <path
          d='M1.90735e-05 82.3339L20.9746 82.3339L10.4873 71.8466L1.90735e-05 82.3339Z'
          fill='#FF5722'
        />
        <path
          d='M1.90735e-05 46.7954L20.9746 46.7954L10.4873 36.3081L1.90735e-05 46.7954Z'
          fill='#FF5722'
        />
        <path
          d='M1.90735e-05 11.2416L20.9746 11.2416L10.4873 0.754332L1.90735e-05 11.2416Z'
          fill='#FF5722'
        />
      </g>
      <defs>
        <clipPath id='clip0_832_1216'>
          <rect
            width='65'
            height='169.949'
            fill='white'
            transform='translate(65 170.703) rotate(180)'
          />
        </clipPath>
      </defs>
    </svg>
  ),
);

ClientLogosGraphics.displayName = 'ClientLogosGraphics';
