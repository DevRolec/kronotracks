"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AlertCard from "./AlertCard";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [showNotice, setShowNotice] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showNotice) return;
    setShowNotice(true);
    setEmail("");
  };

  useEffect(() => {
    if (showNotice) {
      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
      }, 3000); // fade out after 3s

      const refreshTimer = setTimeout(() => {
        window.location.reload(); // refresh after fade completes
      }, 3000); // total delay: 3s

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(refreshTimer);
      };
    }
  }, [showNotice]);

  const message = {
    successReset:
      "🔒 Your password has been reset successfully. You can now log in with your new credentials.",
  };

  return (
    <div className="bg-white shadow-md rounded-lg text-black max-w-md flex items-center flex-col text-center p-6 mx-4 py-5 transition-all duration-[1500ms] ease-in-out">
      {!showNotice ? (
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <img
            src="/d39926b2b0d4065ffd4b2705393dcc34bd5a59f4.png"
            alt="Logo"
            className="w-24 mx-auto"
          />
          <h2 className="text-xl font-semibold text-[var(--dark)]">
            Forgot Password
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded px-4 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-700 text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition-all duration-700 ease-in-out"
          >
            Send Reset Link
          </button>

          <Link
            href="/login"
            className="text-sm text-purple-600 hover:underline block"
          >
            Back to Login
          </Link>
        </form>
      ) : (
        <div
          className={`absolute top-[-150px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md px-4 transition-all duration-500 ease-in-out ${
            fadeOut ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          <AlertCard message={message.successReset} />
        </div>
      )}
    </div>
  );
}
