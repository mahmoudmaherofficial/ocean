'use client';

import { navLinks } from '@/constants/nav-links';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="flex items-center md:hidden" onClick={toggleMenu}>
        {!isOpen ? <Menu /> : <X />}
      </div>
      <figure
        className={`absolute rounded-md right-2 origin-top top-20 ${
          isOpen
            ? 'scale-y-100 opacity-100 visible'
            : 'scale-y-50 opacity-0 hidden'
        } w-auto bg-slate-800 p-2 transition-all z-50`}
      >
        <nav className="w-full h-full flex flex-col space-y-2 capitalize font-normal tracking-wide">
          {navLinks.map((link, index) => (
            <Link
              href={`#${link}`}
              key={index}
              className="py-1 px-2 transition-all rounded-md hover:text-sky-400 hover:bg-slate-700"
              onClick={toggleMenu}
            >
              {link}
            </Link>
          ))}
        </nav>
      </figure>
    </>
  );
};

export default MobileNav;
