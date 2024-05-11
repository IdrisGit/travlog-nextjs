import { CustomCarousel } from '@/components/ui/CustomCarousel';

export const Services = () => {
  return (
    <div className='flex h-[500px] flex-row items-center pl-[166px]'>
      <div className='min-w-[444px] max-w-[444px]'>
        <h6 className='text-2xl font-bold uppercase text-[#F85E9F]'>Services</h6>
        <h3 className='text-[44px] font-bold leading-tight text-[#191825]'>
          Our top value categories for you
        </h3>
      </div>
      <CustomCarousel />
    </div>
  );
};
