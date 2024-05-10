import Image from 'next/image';
import { Navbar } from '@/app/Navbar';
import { Footer } from '@/app/Footer';

export default function Home() {
  return (
    <main className='bg-white'>
      <Navbar />
      <Footer />
    </main>
  );
}
