import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-9 w-full bg-[var(--purplelt)] text-white text-wrap">
      <section className="my-3  text-center">
        <h1 className="text-4xl font-bold text-[var(--light)] mb-6 leading-tight">
          Partner With kronotrack
        </h1>
        <p className="text-[0.875rem] font1 text-[var(--light)] font-semibold ">
          {" "}
          We will contact you promptly
        </p>
      </section>
      <section className=" w-3/5 max-md:w-full max-md:px-5 ">
        <form action="https://formsubmit.co/your@email.com" method="POST">
          <input
            type="text"
            className="w-full my-3 text-[0.875rem] font-sans text-justify  bg-light px-4 py-2 border text-[var(--dark)]  font-semibold border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purplelt"
            placeholder="Your full name"
          />
          <input
            type="email"
            className="w-full my-3 text-[0.875rem] font-sans text-justify  bg-light px-4 py-2 border text-[var(--dark)]  font-semibold border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purplelt"
            placeholder="Your email address"
          />

          <button className="bg-purple text-light mt-3 h-auto px-6 py-2 rounded">
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default Form;
