<<<<<<< HEAD
// components/Navbar.js
import Link from "next/link";
import { FaRocket, FaUserAlt, FaHome, FaCode, FaMoon } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[#0d0d0d] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2 text-[#00FFFF] text-xl font-bold">
          <FaRocket />
          <span>TechNova</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-[#00FFFF] transition">
            <FaHome className="inline mr-1" /> Home
          </Link>
          <Link href="/about" className="hover:text-[#00FFFF] transition">
            <FaUserAlt className="inline mr-1" /> About
          </Link>
          <Link href="/projects" className="hover:text-[#00FFFF] transition">
            <FaCode className="inline mr-1" /> Projects
          </Link>
        </div>

        <div className="text-[#00FFFF] cursor-pointer md:block">
          <FaMoon />
        </div>
      </div>
    </nav>
=======
'use client';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-4 md:px-10 bg-white shadow-sm">
      <div className="text-xl font-bold">KronoTrack</div>
      <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
        <Link href="/">Discover</Link>
        <Link href="/trips">Trip Idea</Link>
        <Link href="/inspiration">Inspiration</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/blog">Blog</Link>
      </nav>
      <div className="flex gap-4 items-center">
        <button className="hidden md:inline text-sm text-gray-600">🔍 Search</button>
        <button className="bg-black text-white px-4 py-2 rounded-full text-sm">Start</button>
      </div>
    </header>
>>>>>>> origin/wizfooter
  );
};

export default Navbar;
<<<<<<< HEAD
=======

>>>>>>> origin/wizfooter
