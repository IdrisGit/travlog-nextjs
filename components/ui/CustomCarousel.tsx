'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Booking, Cloudy, GlobeDestination } from '@/components/svgs';

interface Slide {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  header: string;
  body: string;
}

// Duplicating Slides since the library sets loop:false if there are not enough items
const slides: Slide[] = [
  {
    icon: GlobeDestination,
    header: 'Best Tour Guide',
    body: 'What looked like a small patch of purple grass, above five feet.',
  },
  {
    icon: Booking,
    header: 'Easy Booking',
    body: 'Square, was moving across the sand in their direction.',
  },
  {
    icon: Cloudy,
    header: 'Weather Forecast',
    body: 'What looked like a small patch of purple grass, above five feet.',
  },
  {
    icon: GlobeDestination,
    header: 'Best Tour Guide',
    body: 'What looked like a small patch of purple grass, above five feet.',
  },
  {
    icon: Booking,
    header: 'Easy Booking',
    body: 'Square, was moving across the sand in their direction.',
  },
  {
    icon: Cloudy,
    header: 'Weather Forecast',
    body: 'What looked like a small patch of purple grass, above five feet.',
  },
];

export const CustomCarousel: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      speed: 1,
      startDelay: 250,
      playOnInit: true,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);

  return (
    <div
      className='h-full w-full overflow-x-clip overflow-y-visible'
      ref={emblaRef}
    >
      <div className='flex h-full items-center'>
        {slides.map((item, index) => (
          <div
            className='mx-2.5 h-[443px] max-h-[443px] min-w-[350px] max-w-[350px] rounded-[32px] bg-white p-16 transition-shadow duration-200 hover:shadow-carousel_shadow'
            key={index}
          >
            <div className='m-auto flex min-w-0 flex-[0_0_100%] flex-col items-center gap-16'>
              <item.icon />
              <div className='flex flex-col gap-8'>
                <p className='text-center font-nunito text-[28px] font-bold text-[#191825]'>
                  {item.header}
                </p>
                <p className='text-center font-inter text-lg text-[#191825]'>{item.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
