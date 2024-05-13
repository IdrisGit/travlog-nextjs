'use client';

import { useState, Fragment } from 'react';
import { Button, Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { Hamburger } from '@/components/svgs';

import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <nav className='flex h-28 w-full flex-row items-center justify-between gap-40 font-nunito xl:m-auto xl:w-fit'>
      <div className='flex flex-row items-center gap-4'>
        <Image
          src='/logo.svg'
          width='40'
          height='40'
          alt='logo'
        />
        <h3 className='text-2xl font-[900] text-[#191825]'>Travlog</h3>
      </div>
      {/* Navbar on desktop */}
      <div className='hidden items-center gap-40 xl:flex'>
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
              <Link
                href='#'
                className='hover:text-[#222831]'
              >
                Discover
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className='hover:text-[#222831]'
              >
                Special Deals
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className='hover:text-[#222831]'
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className='flex flex-row'>
            <li className='px-8 py-4 text-sm font-bold text-[#222831] hover:text-black'>
              <Link href='#'>Log In</Link>
            </li>
            <li className='rounded-[100px] bg-[#5D50C6] px-8 py-4 text-sm font-bold text-[#EEEEEE] hover:cursor-pointer hover:shadow-hero_gs_shadow'>
              <Link href='#'>Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Navbar button on mobile */}
      <Button
        className='rounded border border-black xl:hidden'
        onClick={() => setIsMobileNavOpen(true)}
      >
        <Hamburger className='h-8 w-8' />
      </Button>
      {/* Navbar Drawer on Mobile */}
      <Transition show={isMobileNavOpen}>
        <Dialog
          as='div'
          open={isMobileNavOpen}
          onClose={() => setIsMobileNavOpen(false)}
          className='relative z-10 focus:outline-none xl:hidden'
        >
          <div className='fixed inset-0 right-0 z-10 h-dvh w-screen overflow-y-auto'>
            <TransitionChild
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='absolute right-0 flex min-h-full w-3/4 items-center justify-center'>
                <TransitionChild
                  as={Fragment}
                  enter='transition ease-in-out duration-200 transform'
                  enterFrom='translate-x-full'
                  enterTo='translate-x-0'
                  leave='transition ease-in-out duration-200 transform'
                  leaveFrom='translate-x-0'
                  leaveTo='translate-x-full'
                >
                  <DialogPanel className='h-full min-h-dvh w-full min-w-full bg-white bg-opacity-[0.98]'>
                    <div className='flex h-full min-h-dvh flex-col items-center justify-center gap-16'>
                      <ul className='flex flex-col items-center gap-4 text-lg font-bold text-[#19182580]'>
                        <li>
                          <Link
                            onClick={() => setIsMobileNavOpen(false)}
                            className='text-[#222831]'
                            href='#'
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={() => setIsMobileNavOpen(false)}
                            href='#'
                            className='hover:text-[#222831]'
                          >
                            Discover
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={() => setIsMobileNavOpen(false)}
                            href='#'
                            className='hover:text-[#222831]'
                          >
                            Special Deals
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={() => setIsMobileNavOpen(false)}
                            href='#'
                            className='hover:text-[#222831]'
                          >
                            Contact
                          </Link>
                        </li>
                      </ul>
                      <ul className='flex flex-row items-center justify-evenly'>
                        <li
                          onClick={() => setIsMobileNavOpen(false)}
                          className='px-8 py-4 text-base font-bold text-[#222831] hover:text-black'
                        >
                          <Link href='#'>Log In</Link>
                        </li>
                        <li
                          onClick={() => setIsMobileNavOpen(false)}
                          className='rounded-[100px] bg-[#5D50C6] px-8 py-4 text-base font-bold text-[#EEEEEE] hover:cursor-pointer hover:shadow-hero_gs_shadow'
                        >
                          <Link href='#'>Sign Up</Link>
                        </li>
                      </ul>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </nav>
  );
};
