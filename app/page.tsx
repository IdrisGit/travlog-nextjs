import { Navbar } from '@/app/Navbar';
import { Hero, ClientLogos, Services, TravelPoint, NewsletterCTA } from '@/app/_components';
import { Footer } from '@/app/Footer';

export default function Home() {
  return (
    <main className='relative overflow-x-hidden bg-white px-4 pb-16 xl:px-0'>
      {/* Gradient colored backgrounds from the figma design */}
      <div className='absolute -left-[356px] -top-[223px] h-[500px] w-[500px] rounded-full bg-[#FF5722] bg-opacity-50 blur-[500px]'></div>
      <div className='absolute left-[1351px] top-[847px] h-[500px] w-[500px] rounded-full bg-[#FACD49] bg-opacity-50 blur-[500px]'></div>
      {/* Gradient colored backgrounds from the figma design */}
      <Navbar />
      <div className='mt-10 xl:mt-16 xl:h-[713px] xl:pl-[165px]'>
        <Hero />
      </div>
      <div className='mt-16 w-full'>
        <ClientLogos />
      </div>
      <div className='mt-16 h-fit w-full xl:pl-[166px]'>
        <Services />
      </div>
      <div className='mt-20 w-full xl:mt-[109px]'>
        <TravelPoint />
      </div>
      <div className='m-auto my-36 w-fit xl:my-[168px]'>
        <NewsletterCTA />
      </div>
      <Footer />
    </main>
  );
}
