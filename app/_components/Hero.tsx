import Image from 'next/image';
import { Button } from '@headlessui/react';
import { AddUser, Location, Suitcase, Play, Send } from '@/components/svgs';
import HeroImageOne from '@/public/assets/HeroImageOne.png';
import HeroImageTwo from '@/public/assets/HeroImageTwo.png';
import HeroImageThree from '@/public/assets/HeroImageThree.png';
import HeroPattern from '@/public/assets/HeroPattern.svg';

export const Hero = () => {
  return (
    <div className='flex h-full w-full flex-row items-center font-nunito'>
      <div className='flex w-[427px] flex-col gap-[43px]'>
        <div className='z-10 flex w-fit flex-row items-center gap-[18px] rounded-full bg-white px-8 py-4 text-sm font-bold shadow-hero_etw_shadow'>
          <p className='text-[#F85E9F]'>Explore the world!</p>
          <Suitcase />
        </div>
        <h1 className='text-[69px] font-bold'>
          Travel <span className='text-[#F85E9F]'>top destination</span> of the world
        </h1>
        <p className='font-inter text-lg text-[#19182580]'>
          We always make our customer happy by providing as many choices as possible{' '}
        </p>
        <div className='flex flex-row gap-4'>
          <Button className='rounded-full bg-[#5D50C6] px-8 py-4 text-sm font-bold text-[#EEEEEE] hover:shadow-hero_gs_shadow'>
            Get Started
          </Button>
          <Button className='flex items-center gap-2 rounded-full border border-[#EEEEEE] bg-[#FFFFFF] px-8 py-4 text-sm font-bold text-[#222831] hover:shadow-hero_gs_shadow'>
            <Play className='h-6 w-6' /> <p className='m-auto'>Watch Demo</p>
          </Button>
        </div>
      </div>
      <div className='relative grid grid-flow-col grid-rows-2 items-center justify-center gap-8 pb-2 pl-[91px] pr-[106px] pt-[75px]'>
        <Image
          src={HeroPattern}
          alt='Hero Pattern'
          className='absolute top-0'
        />
        <div className='relative z-10 row-span-1'>
          <Image
            src={HeroImageOne}
            alt='Hero Image'
          />
          <div className='absolute -bottom-[30px] -left-[35px] rounded-full bg-[#F85E9F] p-4 shadow-hero_icon_shadow'>
            <Send />
          </div>
        </div>
        <div className='z-10 row-span-1'>
          <Image
            src={HeroImageTwo}
            alt='Hero Image'
          />
        </div>
        <div className='relative z-10 row-span-2'>
          <Image
            src={HeroImageThree}
            alt='Hero Image'
          />
          <div className='absolute -right-[92px] bottom-[47px] flex flex-row items-center justify-center gap-1 rounded-full bg-white px-8 py-4 font-nunito font-bold text-[#393E46] shadow-hero_icon_tp_shadow'>
            <Location />
            <p className='text-sm'>Top Places</p>
          </div>
        </div>
        <div className='absolute bottom-0 left-[474px] rounded-full bg-[#FF5722] p-4 shadow-hero_icon_shadow'>
          <AddUser />
        </div>
      </div>
    </div>
  );
};
