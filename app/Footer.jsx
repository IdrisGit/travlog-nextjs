import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='m-auto flex w-fit flex-col flex-wrap items-start justify-between gap-40 font-nunito xl:flex-row'>
      <div className='flex flex-col gap-8 xl:max-w-72'>
        <div className='flex flex-row items-center gap-4'>
          <Image
            src='/logo.svg'
            width='40'
            height='40'
            alt='logo'
          />
          <h3 className='text-2xl font-[900] text-[#191825]'>Travlog</h3>
        </div>
        <div>
          <p className='w-full text-2xl font-[900] leading-9 text-[#19182580]'>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC.
          </p>
        </div>
      </div>
      <div className='flex h-full flex-1 flex-col flex-wrap justify-center gap-28 xl:flex-row'>
        <div className='flex h-full flex-col gap-8'>
          <h6 className='text-2xl font-bold text-[#191825]'>Company</h6>
          <ul className='flex flex-col gap-8 font-inter text-lg text-[#191825BF]'>
            <li>
              <Link href='#'> About</Link>
            </li>
            <li>
              <Link href='#'>Career</Link>
            </li>
            <li>
              <Link href='#'>Mobile</Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-1 flex-col gap-8'>
          <h6 className='text-2xl font-bold text-[#191825]'>Contanct</h6>
          <ul className='flex flex-col gap-8 font-inter text-lg text-[#191825BF]'>
            <li>
              <Link href='#'>Why Travlog?</Link>
            </li>
            <li>
              <Link href='#'>Partner with us</Link>
            </li>
            <li>
              <Link href='#'>FAQ's</Link>
            </li>
            <li>
              <Link href='#'>Blog</Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-1 flex-col gap-8'>
          <h6 className='text-2xl font-bold text-[#191825]'>Meet Us</h6>
          <ul className='flex flex-col gap-8 font-inter text-lg text-[#191825BF]'>
            <li>
              <p>+00 92 1234 56789</p>
            </li>
            <li>
              <p>info@travlog.com</p>
            </li>
            <li>
              <p>205. R Street, New York BD23200</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
