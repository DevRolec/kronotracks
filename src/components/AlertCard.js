import React from "react";
import Image from "next/image";

const AlertCard = () => {
  const alert = {
    text: "🔒 Your password has been reset successfully. You can now log in with your new credentials.",
  };
  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-100/40 ">
      <div className="absolute bg-white shadow-md rounded-lg   max-w-md  mt-10 flex items-center flex-col text-center p-6 mx-4 py-16">
        <Image
          src="/Alertcheck.png"
          alt="Alert Icon"
          width={50}
          height={50}
          className="inline-block mr-2"
        />
        <span className="text-lg font-semibold text-gray-800">
          {alert.text}{" "}
        </span>
      </div>
    </div>
  );
};

export default AlertCard;
