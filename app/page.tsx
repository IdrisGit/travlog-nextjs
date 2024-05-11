import Image from 'next/image';
import { Navbar } from '@/app/Navbar';
import { TravelPoint } from './TravelPoint';
import { NewsletterCTA } from '@/app/NewsletterCTA';
import { Footer } from '@/app/Footer';

export default function Home() {
  return (
    <main className='h-dvh bg-white'>
      <Navbar />
      <TravelPoint />
      {/* <NewsletterCTA /> */}
      {/* <Footer /> */}
    </main>
  );
}
