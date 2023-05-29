import Link from 'next/link';
import React from 'react'
import { Icons } from './icons';

export function FullNav() {
  return (
    <header className='w-screen z-40'>
        <nav className='px-4 md:px-0 flex justify-between h-20 items-center py-6 container max-w-[1200px] mx-auto'>
            <Link href={'/'}>
              <Icons.logo width="150" height="30"/>
            </Link>
            <Link className="px-4 py-2 rounded-full bg-slate-900 text-white text-sm" href={"/login"}>Get Started</Link>
        </nav>
    </header>
  );
}
