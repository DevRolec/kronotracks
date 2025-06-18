import React from "react";

const Button = ({ label }) => {
  return (
    <>
      <button className="text-white bg-black rounded-md text-sm p-1 px-3 border-t border-t-[#d402f9]">
        {label}
      </button>
    </>
  );
};

export default Button;
