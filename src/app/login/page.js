import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="max-w-sm w-full space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <img
            src="/d39926b2b0d4065ffd4b2705393dcc34bd5a59f4.png"
            alt="Logo"
            className="w-24"
          />
          <h2 className="text-[30px] font-semibold text-purple-700 text-center">
            Welcome Back!
          </h2>
          <p className="text-xl font-semibold text-[var(--dark)]">
            PLEASE ENTER YOUR DETAILS
          </p>
        </div>
        {/* <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            /> */}

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded px-4 py-2 border-gray-300  focus:outline-none  focus:ring-2  focus:ring-purple-700"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded px-4 py-2 border-gray-300  focus:outline-none  focus:ring-2 focus:ring-purple-700"
          />
          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <Link href="/forgot-password" className="block underline">
              <p className="text-purple-600 hover:underline">Forgot Password</p>
            </Link>
          </div>
          <button className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
