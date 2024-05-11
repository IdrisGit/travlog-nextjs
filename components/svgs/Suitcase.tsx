import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Suitcase = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      className={className}
      {...props}
      width='20'
      height='21'
      viewBox='0 0 20 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M8.7044 2.01898C8.034 2.01898 7.46373 2.4848 7.30365 3.11265H12.6863C12.5263 2.4848 11.956 2.01898 11.2856 2.01898H8.7044ZM14.2071 3.11264H16.1881C18.2891 3.11264 20 4.84428 20 6.97085C20 6.97085 19.94 7.8711 19.92 9.1248C19.918 9.224 19.8699 9.3212 19.7909 9.38C19.3097 9.7354 18.8694 10.0291 18.8294 10.0493C17.1686 11.1632 15.2386 11.947 13.1826 12.3369C13.0485 12.3632 12.9165 12.2934 12.8484 12.1739C12.2721 11.1754 11.1956 10.5253 9.995 10.5253C8.8024 10.5253 7.71586 11.1683 7.12256 12.1678C7.05353 12.2853 6.92346 12.3531 6.7904 12.3278C4.75138 11.9369 2.82141 11.1541 1.17059 10.0594L0.21011 9.3911C0.13007 9.3405 0.08004 9.2493 0.08004 9.1481C0.05003 8.6316 0 6.97085 0 6.97085C0 4.84428 1.71086 3.11264 3.81191 3.11264H5.78289C5.97299 1.6443 7.2036 0.5 8.7044 0.5H11.2856C12.7864 0.5 14.017 1.6443 14.2071 3.11264ZM19.6598 11.3152L19.6198 11.3355C17.5988 12.6924 15.1676 13.5937 12.6163 13.9684C12.2561 14.019 11.8959 13.7861 11.7959 13.4216C11.5758 12.5912 10.8654 12.0443 10.015 12.0443H10.005H9.985C9.1346 12.0443 8.4242 12.5912 8.2041 13.4216C8.1041 13.7861 7.74387 14.019 7.38369 13.9684C4.83242 13.5937 2.4012 12.6924 0.38019 11.3355C0.37019 11.3254 0.27014 11.2646 0.1901 11.3152C0.10005 11.3659 0.10005 11.4874 0.10005 11.4874L0.17009 16.6519C0.17009 18.7785 1.87094 20.5 3.97199 20.5H16.018C18.1191 20.5 19.8199 18.7785 19.8199 16.6519L19.9 11.4874C19.9 11.4874 19.9 11.3659 19.8099 11.3152C19.7599 11.2849 19.6999 11.295 19.6598 11.3152ZM10.7454 15.5583C10.7454 15.9836 10.4152 16.3177 9.995 16.3177C9.5848 16.3177 9.2446 15.9836 9.2446 15.5583V14.2519C9.2446 13.8367 9.5848 13.4924 9.995 13.4924C10.4152 13.4924 10.7454 13.8367 10.7454 14.2519V15.5583Z'
        fill='#F85E9F'
      />
    </svg>
  ),
);

Suitcase.displayName = 'Suitcase';
