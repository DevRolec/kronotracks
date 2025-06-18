// src/components/UserTable.jsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import jimo from "../assets/jimo.png";
import avatar from "../assets/profile.png";

const UserTable = () => {
  //   const [menuVisible, setMenuVisible] = useState("true");

  const users = [
    {
      id: 1,
      image: jimo,
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "0909498043",
      gender: "Male",
      role: "admin",
    },
    {
      id: 2,
      image: "",
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "0909498043",
      gender: "Male",
      role: "admin",
    },
    {
      id: 3,
      image: jimo,
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "0909498043",
      gender: "Male",
      role: "admin",
    },
  ];
  return (
    <div className="overflow-x-auto scrollhide">
      <table className="min-w-full border-none shadow-sm text-center">
        <thead className="bg-black text-center border-none text-white">
          <tr>
            <th className="px-4 py-2 w-auto text-nowrap">Profile picture</th>
            <th className="px-4 py-2 w-auto text-nowrap">Full Name</th>
            <th className="px-4 py-2 w-auto text-nowrap">Email</th>
            <th className="px-4 py-2 w-auto text-nowrap">Phone</th>
            <th className="px-4 py-2 w-auto text-nowrap">Gender</th>
            <th className="px-4 py-2 w-auto text-nowrap">Role</th>
            <th className="px-4 py-2 w-auto text-nowrap">Actions</th>
          </tr>
        </thead>
        <tbody className=" border-none">
          {users?.map((user, index) => (
            <tr key={user.id} className="border-none ">
              <td className="px-4 py-2 flex justify-center">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt="profile avatar"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                ) : (
                  <Image
                    src={avatar} // fallback avatar (imported or from /public)
                    alt="default avatar"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                )}
              </td>

              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.phone}</td>
              <td className="px-4 py-2">{user.gender}</td>
              <td className="px-4 py-2 ">{user.role}</td>

              <td className="px-4 py-2 h-full gap-3 ">
                <div className="flex gap-3">
                  <Button label="Edit" />
                  <Button label="Delete" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
