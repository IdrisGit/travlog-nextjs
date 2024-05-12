import Image from 'next/image';
import TripadvisorLogo from '@/public/assets/TripadvisorLogo.png';
import ExpediaLogo from '@/public/assets/ExpediaLogo.png';
import BookingdotcomLogo from '@/public/assets/BookingdotcomLogo.png';
import AirbnbLogo from '@/public/assets/AirbnbLogo.png';
import RbitzLogo from '@/public/assets/RbitzLogo.png';
import { ClientLogosGraphics } from '@/components/svgs/ClientLogosGraphics';

export const ClientLogos = () => {
  return (
    <div className='relative flex h-full w-full justify-between px-[165px] py-16'>
      <Image
        src={TripadvisorLogo}
        alt='Tripadvisor Logo'
      />
      <Image
        src={ExpediaLogo}
        alt='Expedia Logo'
      />
      <Image
        src={BookingdotcomLogo}
        alt='Bookingdotcom Logo'
      />
      <Image
        src={AirbnbLogo}
        alt='Airbnb Logo'
      />
      <Image
        src={RbitzLogo}
        alt='Rbitz Logo'
      />
      <div className='absolute bottom-[45px] left-[38px]'>
        <ClientLogosGraphics />
      </div>
    </div>
  );
};
