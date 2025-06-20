"use client";
import Image from "next/image";
import React, { useState } from "react";
import AlertCard from "../../components/AlertCard";
import AdminCard from "../../components/AdminCard";
import UserTable from "../../components/UserTable";
import Sidebar from "../../components/Sidebar";

const page = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div className="md:flex md:justify-center">
      <div className="relative">
        <Sidebar
          className={`fixed  top-0 left-0 h-screen w-1/2 md:w-45 bg-black/70 shadow-md z-50 transform transition-transform duration-300 ease-in-out  bottom-0 ${
            menuVisible ? "translate-x-0" : "-translate-x-full"
          }`}
        />

        <div
          className={` text-black h-screen px-4 bg w-full  ${
            menuVisible ? " animate-fade-in bg-black/40" : "bg-white"
          }`}
        >
          <section>
            {/* <div>
          <AlertCard />
          </div> */}

            <div className="flex justify-end py-7">
              <div
                onClick={() =>
                  !menuVisible ? setMenuVisible(true) : setMenuVisible(false)
                }
                className={` bg-[#D402F9] w-[90px] p-2 rounded-md text-white flex items-center justify-center  ${
                  menuVisible ? " animate-fade-in opacity-30" : ""
                }`}
              >
                <Image src="/menu.svg" alt="menu" width={20} height={20} />
                Menu
              </div>
            </div>

            <div className="flex flex-col font-semibold my-5 gap-2">
              <h1 className="">Welcome Admin</h1>
              <p className="text-sm text-[#d402f9]">Jimoh Damilola</p>
              <div className="flex justify-between py-4">
                <h1>Registered User</h1>
                <div className="flex flex-row gap-5">
                  <button className="text-white bg-black rounded-md text-sm p-1 border-t border-t-[#d402f9]">
                    Add Driver
                  </button>
                  <button className="text-white bg-black rounded-md text-sm p-1 border-t border-t-[#d402f9]">
                    Add Clients
                  </button>
                </div>
              </div>
            </div>
            <div className="flex text-sm gap-2 justify-center">
              <AdminCard title="Number Of Users" number={5} />
              <AdminCard title="Unresolved Cases" number={5} />
              <AdminCard title="%Cases this Week" number={5} />
            </div>
            <div className="flex flex-col gap-3 py-9">
              <div className="flex flex-row gap-3 ">
                <select
                  id="menu"
                  name="menu"
                  className="border-2 border-solid border-black rounded-xl text-sm p-1"
                >
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="unspecified">Unspecified</option>
                </select>
                <select
                  id="menu"
                  name="menu"
                  className="border-2 border-solid border-black rounded-xl text-sm p-1"
                >
                  <option value="">All Role</option>
                  <option value="male">Admin</option>
                  <option value="female">Ticketer</option>
                </select>
              </div>
              <div>
                <div className="relative w-full max-w-sm flex justify-between pl-4 text-sm pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <input
                    type="text"
                    placeholder="Search By Email"
                    className="w-full outline-none"
                  />
                  <Image
                    src="/search.png"
                    alt="search button"
                    width={20}
                    height={20}
                  />
                </div>
              </div>

              <div>
                <button className="menu-bg py-1 px-5 text-md rounded-sm  text-white">
                  Filter
                </button>
              </div>
            </div>
          </section>
          <section className="overflow-x-scroll  w-auto ">
            <div>
              <UserTable />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
