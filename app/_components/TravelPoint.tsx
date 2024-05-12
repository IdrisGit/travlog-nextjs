import Image from 'next/image';
import { SquigglyPercent, TicketStar } from '@/components/svgs';
import womanOnSuitcase from '@/public/assets/WomanOnSuitcase.png';

export const TravelPoint = () => {
  return (
    <div className='flex flex-col font-nunito xl:flex-row xl:gap-[42px]'>
      <div className='relative hidden w-[789px] justify-end xl:flex'>
        <div className='absolute bottom-4 left-0'>
          <div className='h-[550px] w-[705px] rounded-l-none rounded-r-[500px] bg-[#FACD49]'></div>
        </div>
        <div className='absolute left-[584px] top-[20px]'>
          <div className='h-[96px] w-[96px] rounded-full bg-gradient-to-br from-[#5D50C6] to-[#F85E9F] blur-md'></div>
        </div>
        <div className='absolute left-[165px] top-[105px]'>
          <div className='h-[40px] w-[40px] rounded-full bg-gradient-to-br from-[#5D50C6] to-[#F85E9F] blur-sm'></div>
        </div>
        <div className='absolute left-[735px] top-[200px]'>
          <div className='h-[40px] w-[40px] rounded-full bg-[#FACD49] blur-sm'></div>
        </div>
        <div className='absolute left-[572px] top-[299px]'>
          <div className='h-[16px] w-[16px] rounded-full bg-[#FF5722] blur-sm'></div>
        </div>
        <div className='absolute left-[632px] top-[459px]'>
          <div className='h-[32px] w-[32px] rounded-full bg-[#FF5722] blur-sm'></div>
        </div>
        <Image
          className='relative'
          src={womanOnSuitcase}
          alt=''
        />
        <div className='absolute right-0 top-[131px] flex items-center gap-4 rounded-full bg-white px-8 py-4 shadow-discount_shadow'>
          <SquigglyPercent />
          <p className='text-2xl text-[#191825]'>Discounted Price</p>
        </div>
      </div>
      <div>
        <div className='flex max-w-[445px] flex-col gap-8 xl:gap-16'>
          <div className='flex flex-col gap-4 xl:gap-8'>
            <div className='flex flex-col gap-2 xl:gap-4'>
              <h6 className='text-2xl font-bold uppercase text-[#F85E9F]'>Travel Point</h6>
              <h3 className='text-[44px] font-bold leading-tight text-[#191825]'>
                We helping you find your dream location
              </h3>
            </div>
            <p className='text-[#19182580]'>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC.
            </p>
          </div>
          <div className='relative flex max-w-md flex-row flex-wrap justify-evenly gap-4 xl:gap-8'>
            <div className='absolute -right-14 -top-14 hidden h-[100px] w-[100px] items-center rounded-[100px] bg-[#FACD49] p-8 xl:flex'>
              <TicketStar />
            </div>
            <div className='w-[150px] rounded-[32px] border border-[#1918251A] p-4 text-center xl:w-[206px] xl:p-8'>
              <p className='text-4xl font-bold text-[#FF5722]'>500+</p>
              <p className='text-lg text-[#191825]'>Holiday Package</p>
            </div>
            <div className='w-[150px] rounded-[32px] border border-[#1918251A] p-4 text-center xl:w-[206px] xl:p-8'>
              <p className='text-4xl font-bold text-[#FF5722]'>5100</p>
              <p className='text-lg text-[#191825]'>Luxury Hotel</p>
            </div>
            <div className='w-[150px] rounded-[32px] border border-[#1918251A] p-4 text-center xl:w-[206px] xl:p-8'>
              <p className='text-4xl font-bold text-[#FF5722]'>7</p>
              <p className='text-lg text-[#191825]'>Premium Airlines</p>
            </div>
            <div className='w-[150px] rounded-[32px] border border-[#1918251A] p-4 text-center xl:w-[206px] xl:p-8'>
              <p className='text-4xl font-bold text-[#FF5722]'>2k+</p>
              <p className='text-lg text-[#191825]'>Happy Customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
