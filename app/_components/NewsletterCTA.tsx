import { Input, Button } from '@headlessui/react';
import { EnvelopeIcon, NewsletterGraphic } from '@/components/svgs';

export const NewsletterCTA = () => {
  return (
    <div className='relative flex max-w-[1110px] flex-col gap-16 rounded-[32px] bg-[#FACD4914] px-2 py-6 font-nunito xl:px-16 xl:py-32'>
      <NewsletterGraphic className='absolute -left-12 -top-14' />
      <div className='flex flex-col items-center gap-8 text-center'>
        <p className='text-2xl font-bold uppercase text-[#F85E9F]'>subscribe to our newsletter</p>
        <h2 className='text-4xl font-bold text-[#191825] xl:text-6xl'>
          Prepare yourself & let&apos;s explore the beauty of the world
        </h2>
      </div>
      <div className='flex flex-col gap-8 xl:flex-row xl:gap-16'>
        <div className='relative flex w-full items-center'>
          <EnvelopeIcon className='pointer-events-none absolute ml-9' />
          <Input
            type='email'
            inputMode='email'
            name='email'
            placeholder='Your Email'
            className='w-full rounded-[32px] bg-white p-8 pl-20 text-xl font-bold xl:text-2xl'
          />
        </div>
        <Button className='rounded-[32px] bg-[#5D50C6] px-16 py-8 text-center font-bold text-white'>
          Subscribe
        </Button>
      </div>
    </div>
  );
};
