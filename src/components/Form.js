import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-9 w-full bg-gray text-white">
      <section className="my-3 w-3/5 text-center">
        <h1 className="text-3xl ">
          PARTNER WITH <b className=" font-thin text-5xl">kronotrack</b>{" "}
        </h1>
        <p> We will contact you promptly</p>
      </section>
      <section className=" w-3/5 ">
        <form action="https://formsubmit.co/your@email.com" method="POST">
          <input
            type="text"
            className="w-full my-3 bg-gray-400/80 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your full name"
          />
          <input
            type="email"
            className="w-full bg-gray-400/80 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your email address"
          />
          <button
            type="submit"
            className="bg-primary text-white px-5 py-1.5 mt-3 hover:opacity-85 cursor-pointer"
          >
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default Form;
