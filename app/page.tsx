import Image from 'next/image';
import { Navbar } from '@/app/Navbar';
import { Footer } from '@/app/Footer';
import { NewsletterCTA } from '@/app/NewsletterCTA';

export default function Home() {
  return (
    <main className='bg-white'>
      <Navbar />
      <NewsletterCTA />
      <Footer />
    </main>
  );
}
