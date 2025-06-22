"use client";
import { useState } from "react";

import { FaEnvelope, FaUser, FaEye, FaLocationArrow } from "react-icons/fa";

export default function DriverSignup() {
  const [formData, setFormData] = useState({
    email: "",
    role: "",
    fullname: "",
    password: "",
    address: "",
    accepted: false,
  });

  const roles = ["Commercial", "Private"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    // You can now send this data to a backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md  p-6  space-y-4">
        <div className="text-center">
          <h2 className="text-purple-600 text-lg font-semibold">
            Welcome Onboard User!
          </h2>
          <p className="text-sm text-gray-500">PLEASE ENTER YOUR DETAILS</p>
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full text-gray-400 border px-4 py-2 rounded-md pr-10"
          />
          <FaEnvelope className="absolute top-2.5 right-3 text-gray-400" />
        </div>

        {/* Role */}
        <div className="flex aitems-center relative gap-3 place-items-center  px-4 py-2  pr-10">
          <label className="text-gray-400 ml-1">Role Name</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className=" border text-gray-600 px-4 py-2 rounded-full"
          >
            <option value="">None</option>
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        {/* Fullname */}
        <div className="relative">
          <input
            type="text"
            name="fullname"
            placeholder="Fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
            className="w-full text-gray-400 border px-4 py-2 rounded-md pr-10"
          />
          <FaUser className="absolute top-2.5 right-3 text-gray-400" />
        </div>

        {/* Password */}
        <div className="relative">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border text-gray-400 px-4 py-2 rounded-md pr-20"
          />
          <FaEye className="absolute top-2.5 right-3 text-gray-400" />
        </div>

        {/* Address */}
        <div className="relative">
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full border text-gray-400 px-4 py-2 rounded-md pr-20"
          />
          <FaLocationArrow className="absolute top-2.5 right-3 text-gray-400" />
        </div>

        {/* Terms */}
        <label className="flex items-center space-x-2 text-sm">
          <input
            type="checkbox"
            name="accepted"
            checked={formData.accepted}
            onChange={handleChange}
            required
          />
          <span className="text-gray-600">
            I accept the terms and conditions
          </span>
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800"
        >
          Sign up
        </button>

        <p className="text-center text-sm text-purple-600 hover:underline cursor-pointer">
          Back to Login
        </p>
      </form>
    </div>
  );
}
