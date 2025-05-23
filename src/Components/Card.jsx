import React from "react";

function Card({ title, description, src, view, children }) {
  return (
    <div className="bg-gray-100 dark:bg-[#1e293b] shadow-md rounded-lg p-4 w-full max-w-sm transition duration-300 transform hover:scale-105 hover:shadow-xl text-black dark:text-white">
      <img
        className="w-full h-40 object-cover"
        src={src}
        alt={`Card image`}
      ></img>
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl text-white mb-2">{title}</h2>
        <p className="text-white text-base">{description}</p>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

export default Card;
