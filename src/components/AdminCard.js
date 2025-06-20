import React from "react";

const AdminCard = ({ title, number }) => {
  return (
    <div>
      <div className=" text-center p-4 bg-[#E5E3E3] w-[120px]">
        <h2 className="font-extrabold">{title}</h2>
        <p className="py-1">{number}</p>
      </div>
    </div>
  );
};

export default AdminCard;
