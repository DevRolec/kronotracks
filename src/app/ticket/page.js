import React from "react";

const page = () => {
  const articles = [
    { title: "Receipt No", content: "JKL-DRV-003354" },
    { title: "Date", content: "2025-07-16" },
    { title: "Driver's Name", content: "Damilola Obinna" },
    { title: "Route", content: "Yaba Ikeja" },
    { title: "Amount", content: "3000" },
    { title: "Payment Method", content: "Cash" },
    { title: "Agent Name", content: "James Lola" },
  ];

  return (
    <div className="text-black">
      <div className="text-center pt-9">
        <h1 className="font-extrabold text-xl">
          KronosTrack Commercial Ticket
        </h1>
        <h2 className="text-lg">Driver Daily Payment Ticket</h2>
      </div>

      <div className="mt-6 space-y-9 px-4">
        {articles.map((article, index) => (
          <article key={index} className=" g">
            <h2 className="font-semibold text-[#670098]  flex">
              {article.title}:<p className="text-black">{article.content}</p>
            </h2>
          </article>
        ))}
      </div>
    </div>
  );
};

export default page;
