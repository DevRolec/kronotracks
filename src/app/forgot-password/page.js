"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [showNotice, setShowNotice] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowNotice(true); // simulate submission
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      {!showNotice ? (
        <form
          onSubmit={handleSubmit}
          className="max-w-sm w-full space-y-6 text-center"
        >
          <img
            src="/d39926b2b0d4065ffd4b2705393dcc34bd5a59f4.png"
            className="w-24 mx-auto"
          />
          <h2 className="text-xl font-semibold text-[var(--dark)]">
            Forgot Password
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded px-4 py-2 border-gray-300  focus:outline-none  focus:ring-2  focus:ring-purple-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800">
            Send Reset Link
          </button>
          <Link
            href="/login"
            className="text-sm text-purple-600 hover:underline"
          >
            Back to Login
          </Link>
        </form>
      ) : (
        <div className="bg-white rounded-lg border border-gray-200 p-6 text-center max-w-md shadow">
          <div className="text-4xl mb-2">✅</div>
          <p className="text-gray-700">
            A password reset link has been sent to your email. Please check your
            inbox or spam folder to continue.
          </p>
        </div>
      )}
    </div>
  );
}
