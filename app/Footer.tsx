import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram } from '@/components/svgs';

export const Footer = () => {
  return (
    <footer className='m-auto flex w-full flex-col gap-8 font-nunito xl:gap-16 xl:px-[165px]'>
      <div className='flex flex-col items-start justify-between gap-10 xl:flex-row xl:gap-[153px]'>
        <div className='flex flex-col gap-4 xl:max-w-[281px] xl:gap-8'>
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
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots <br />
              in a piece of classical Latin literature from 45 BC.
            </p>
          </div>
        </div>
        <div className='mx-auto flex h-full flex-1 flex-col flex-wrap gap-10 xl:flex-row xl:gap-[121px]'>
          <div className='flex flex-none flex-col gap-2 text-center xl:gap-8 xl:text-left'>
            <h6 className='text-[23px] font-bold text-[#191825]'>Company</h6>
            <ul className='flex flex-col gap-2 font-inter text-lg text-[#191825BF] xl:gap-8'>
              <li>
                <Link
                  href='#'
                  className='hover:text-[#191825]'
                >
                  {' '}
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='hover:text-[#191825]'
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='hover:text-[#191825]'
                >
                  Mobile
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-2 text-center xl:gap-8 xl:text-left'>
            <h6 className='text-[23px] font-bold text-[#251819]'>Contanct</h6>
            <ul className='flex flex-col gap-2 font-inter text-lg text-[#191825BF] xl:gap-8'>
              <li>
                <Link
                  href='#'
                  className='hover:text-[#191825]'
                >
                  Why Travlog?
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='hover:text-[#191825]'
                >
                  Partner with us
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='hover:text-[#191825]'
                >
                  FAQ&apos;s
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='hover:text-[#191825]'
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex flex-1 flex-col gap-2 text-center xl:gap-8 xl:text-left'>
            <h6 className='text-[23px] font-bold text-[#191825]'>Meet Us</h6>
            <ul className='flex flex-col gap-2 font-inter text-lg text-[#191825BF] xl:gap-8'>
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
      </div>
      <div className='mx-auto flex w-fit flex-row gap-8'>
        <Link href='#'>
          <Facebook />
        </Link>
        <Link href='#'>
          <Twitter />
        </Link>
        <Link href='#'>
          <Instagram />
        </Link>
      </div>
    </footer>
  );
};
