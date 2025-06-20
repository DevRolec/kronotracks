"use client";
import React, { useState } from "react";
import Link from "next/link";
import ForgotPassword from "../../components/ForgotPassword";

const Page = () => {
  const [forgotPassword, setForgotPassword] = useState(false);

  return (
    <div className="relative">
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-black/50 transition-opacity duration-700 ease-in-out ${
          forgotPassword ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setForgotPassword(false)}
      ></div>

      {/* Modal wrapper */}
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md px-4 transition-all duration-[1000ms] ease-in-out ${
          forgotPassword
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ForgotPassword />
      </div>

      {/* Main login content */}
      <div className="relative min-h-screen flex items-center justify-center px-4 bg-white">
        <div className="max-w-sm w-full space-y-6 z-10">
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

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded px-4 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-700 text-black"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded px-4 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-700 text-black"
              required
            />
            <div className="flex justify-between items-center text-sm text-gray-600">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>

              <p
                className="text-purple-600 hover:underline cursor-pointer"
                onClick={() => setForgotPassword(true)}
              >
                Forgot Password
              </p>
            </div>

            <Link href="/admin">
              <button
                type="button"
                className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800"
              >
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
