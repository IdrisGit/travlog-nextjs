import { Navbar } from '@/app/Navbar';
import { Hero } from '@/app/Hero';
import { ClientLogos } from '@/app/ClientLogos';
import { Services } from '@/app/Services';
import { TravelPoint } from '@/app/TravelPoint';
import { NewsletterCTA } from '@/app/NewsletterCTA';
import { Footer } from '@/app/Footer';

export default function Home() {
  return (
    <main className='bg-white pb-16'>
      <Navbar />
      <div className='mt-16 h-[713px] pl-[165px]'>
        <Hero />
      </div>
      <div className='mt-16 w-full'>
        <ClientLogos />
      </div>
      <div className='mt-16 h-fit w-full pl-[166px]'>
        <Services />
      </div>
      <div className='mt-[109px] w-full'>
        <TravelPoint />
      </div>
      <div className='m-auto my-[168px] w-fit'>
        <NewsletterCTA />
      </div>
      <Footer />
    </main>
  );
}
