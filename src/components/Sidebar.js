import Image from "next/image";
import React, { useState } from "react";
import icon from "../assets/adminprofile.png";

const Sidebar = ({ className }) => {
  const features = [
    "Dashboard",
    "Users",
    "Tickets",
    "Drivers",
    "Settings",
    "Profile",
  ];

  const [activeFeature, setActiveFeature] = useState("Dashboard");

  return (
    <div className={className}>
      <div className="menu-bg h-screen border-none pt-10 items-center text-black flex flex-col gap-[10px]">
        <div>
          <h1 className="font-bold text-xl">AttendIQ Admin</h1>
        </div>
        <div>
          <Image
            src={icon}
            alt=""
            width={80}
            height={60}
            className="rounded-full border-4 border-purple-950"
          />
        </div>

        <ul className="flex flex-col gap-[3px] p-[10px] w-full">
          {features.map((feature, index) => (
            <li
              key={index}
              onClick={() => setActiveFeature(feature)}
              className={`px-[10px] font-semibold cursor-pointer p-[10px] rounded-[5px] w-full ${
                activeFeature === feature
                  ? "bg-[#E5E3E3] text-[#670098]"
                  : "hover:text-menu-bg"
              }`}
            >
              {feature}
            </li>
          ))}
          <li className="bg-[#9E0003] text-white p-[10px] rounded-[5px] w-full">
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
