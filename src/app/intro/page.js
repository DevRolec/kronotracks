import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="h-[100vh] w-full flex flex-col items-center justify-around bg-white px-4 text-center">
      <img
        src="/02f094674c6d9ceaa9acf510810b6d9592d335f9 (7).png"
        alt="Avatar"
        className="w-36 h-36 rounded-full mb-6"
      />
      <div className=" flex flex-col items-center justify-around gap-3">
        <h2 className="text-purple-700 font-bold text-[2em]">KronosTrack</h2>
        <p className="text-xl font-semibold text-[var(--dark)]">
          Simplifying ticketing management using technology
        </p>
      </div>

      <Link href="/login" className="block text-blue-500 underline">
        <button className="bg-purple-700 text-white w-[300px] px-8 py-2 rounded-md hover:bg-purple-800 transition">
          Login
        </button>
      </Link>
    </div>
  );
};

export default page;
