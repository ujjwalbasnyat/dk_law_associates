'use client';

import { useState } from 'react';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-100 shadow-md p-4 flex items-center justify-between  fixed top-0  w-full z-50">
      {/* Logo */}
      <div className="text-2xl font-bold flex items-center">
        <span className="text-[var(--foreground-color)]">Dk Law</span>
        <span className="text-[var(--accent-color)]"> Associates</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        <Link href="#" className="hover:text-[var(--accent-color)] text-[var(--foreground-color)]">Home</Link>
        <Link href="#" className="hover:text-[var(--accent-color)] text-[var(--foreground-color)]">Practice Areas</Link>
        <Link href="#" className="hover:text-[var(--accent-color)] text-[var(--foreground-color)]">About Us</Link>
        <Link href="#" className="hover:text-[var(--accent-color)] text-[var(--foreground-color)]">Contact Us</Link>
        <button className="flex items-center bg-[var(--accent-color)] text-[var(--foreground-color)] px-6 py-2 rounded-full hover:opacity-80 transition"><FaWhatsapp className="mr-2" />Whatsapp</button>
        <FiSearch className="text-xl cursor-pointer hover:text-[var(--accent-color)] text-[var(--foreground-color)]" />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-[var(--foreground-color)]">
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[var(--background-color)] shadow-md flex flex-col items-center space-y-4 p-4 md:hidden">
          <Link href="#" className="hover:text-[var(--accent-color)] text-[var(--foreground-color)]">Home</Link>
          <Link href="#" className="hover:text-[var(--accent-color)] text-[var(--foreground-color)]">Practice Areas</Link>
          <Link href="#" className="hover:text-[var(--accent-color)] text-[var(--foreground-color)]">About Us</Link>
          <Link href="#" className="hover:text-[var(--accent-color)] text-[var(--foreground-color)]">Contact Us</Link>
          <button className="flex items-center bg-[var(--accent-color)] text-[var(--foreground-color)] px-6 py-2 rounded-full hover:opacity-80 transition"><FaWhatsapp className="mr-2" /> Whatsapp</button>
          <FiSearch className="text-xl cursor-pointer hover:text-[var(--accent-color)] text-[var(--foreground-color)]" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;