import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex justify-between fo items-center p-4 md:px-10 bg-[var(--light)]  w-[95%]">
      <div className="text-xl font-bold">
        <img
          src="/d39926b2b0d4065ffd4b2705393dcc34bd5a59f4.png"
          className="w-24 mx-auto"
        />
      </div>
      <nav className="hidden md:flex gap-6 font-[550] text-[var(--dark)] ">
        <Link href="/">Discover</Link>
        <Link href="/trips">Trip Idea</Link>
        <Link href="/inspiration">Inspiration</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/blog">Blog</Link>
      </nav>
      <div className="flex gap-4 items-center">
        <button className="bg-purple w-[100px] text-light px-4 font-[550] py-2 rounded text-sm">
          Start
        </button>
      </div>
    </header>
  );
};

export default Navbar;
