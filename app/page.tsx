import Image from 'next/image';
import { Navbar } from '@/app/Navbar';
import { ClientLogos } from '@/app/ClientLogos';
import { Services } from '@/app/Services';
import { TravelPoint } from '@/app/TravelPoint';
import { NewsletterCTA } from '@/app/NewsletterCTA';
import { Footer } from '@/app/Footer';

export default function Home() {
  return (
    <main className='h-dvh bg-white'>
      <Navbar />
      <Services />
      {/* <ClientLogos /> */}
      {/* <TravelPoint /> */}
      {/* <NewsletterCTA /> */}
      {/* <Footer /> */}
    </main>
  );
}
