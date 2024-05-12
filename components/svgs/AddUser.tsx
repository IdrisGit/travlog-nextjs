import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const AddUser = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      className={className}
      {...props}
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M12.6667 16.7383C16.3395 16.7383 19.2835 13.7561 19.2835 10.0358C19.2835 6.31551 16.3395 3.33333 12.6667 3.33333C8.99399 3.33333 6.04991 6.31551 6.04991 10.0358C6.04991 13.7561 8.99399 16.7383 12.6667 16.7383ZM12.6667 20.0203C7.27237 20.0203 2.66675 20.8828 2.66675 24.3285C2.66675 27.7731 7.24435 28.6667 12.6667 28.6667C18.0598 28.6667 22.6667 27.8041 22.6667 24.3583C22.6667 20.9125 18.0891 20.0203 12.6667 20.0203ZM26.5306 12.7838H28.1347C28.795 12.7838 29.3334 13.3297 29.3334 13.9993C29.3334 14.6688 28.795 15.2148 28.1347 15.2148H26.5306V16.7845C26.5306 17.4541 25.9937 18 25.3321 18C24.6718 18 24.1334 17.4541 24.1334 16.7845V15.2148H22.5321C21.8703 15.2148 21.3334 14.6688 21.3334 13.9993C21.3334 13.3297 21.8703 12.7838 22.5321 12.7838H24.1334V11.2155C24.1334 10.5459 24.6718 10 25.3321 10C25.9937 10 26.5306 10.5459 26.5306 11.2155V12.7838Z'
        fill='white'
      />
    </svg>
  ),
);

AddUser.displayName = 'AddUser';