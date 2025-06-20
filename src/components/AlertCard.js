import React from "react";
import Image from "next/image";

const AlertCard = ({ message }) => {
  return (
    <div className="absolute bg-white shadow-md rounded-lg   max-w-md  mt-10 flex items-center flex-col text-center p-6 mx-4 py-16">
      <Image
        src="/Alertcheck.png"
        alt="Alert Icon"
        width={50}
        height={50}
        className="inline-block mr-2"
      />
      <span className="text-lg font-semibold text-gray-800">{message}</span>
    </div>
  );
};

export default AlertCard;
