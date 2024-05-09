import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav className='flex h-28 flex-row items-center justify-between px-40 font-nunito'>
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
        <ul className='flex flex-row gap-16 text-sm font-bold text-[#19182580]'>
          <li>
            <Link
              className='text-[#222831]'
              href='#'
            >
              Home
            </Link>
          </li>
          <li>
            <Link href='#'>Discover</Link>
          </li>
          <li>
            <Link href='#'>Special Deals</Link>
          </li>
          <li>
            <Link href='#'>Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className='flex flex-row'>
          <li className='px-8 py-4 text-sm font-bold text-[#222831]'>
            <Link href='#'>Log In</Link>
          </li>
          <li className='rounded-[100px] bg-[#5D50C6] px-8 py-4 text-sm font-bold'>
            <Link href='#'>Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
