import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-4 md:px-10 bg-white shadow-sm w-full">
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

  );
};

export default Navbar;