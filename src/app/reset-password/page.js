"use client";

import { useState } from "react";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const matched = password && confirm && password === confirm;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white text-black">
      <form className="max-w-sm w-full space-y-6 text-center">
        <img
          src="/d39926b2b0d4065ffd4b2705393dcc34bd5a59f4.png"
          className="w-24 mx-auto"
        />
        <h2 className="text-xl font-semibold text-[var(--dark)]">
          Reset Password
        </h2>

        <input
          type="password"
          placeholder="New Password"
          className="w-full border rounded px-4 py-2 border-gray-300  focus:outline-none  focus:ring-2  focus:ring-purple-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border rounded px-4 py-2 border-gray-300  focus:outline-none  focus:ring-2  focus:ring-purple-700"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />

        {confirm && (
          <p
            className={`text-sm ${matched ? "text-green-600" : "text-red-600"}`}
          >
            {matched ? "Password matched" : "Password not matched"}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}
