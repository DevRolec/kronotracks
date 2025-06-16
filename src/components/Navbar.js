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
  );
};

export default Navbar;
