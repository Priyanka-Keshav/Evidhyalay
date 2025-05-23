import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-b from-[#0b0f19] to-[#1a237e] text-white px-6 py-4 md:px-20">
      <div className="flex items-center justify-between">
        <div className="text-left">
          <span className="block text-2xl font-bold tracking-wide">
            eVidyalaya.in
          </span>
          <span className="block text-sm font-semibold tracking-wide">
            Bharath ki sapno ki nayi udaan
          </span>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className="hidden md:flex gap-8 font-semibold">
          <li className="hover:text-blue-300 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-300 cursor-pointer">Courses</li>
          <li className="hover:text-blue-300 cursor-pointer">
            Prep tracker tool
          </li>
          <li className="hover:text-blue-300 cursor-pointer">Login</li>
        </ul>
      </div>

      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 font-semibold md:hidden">
          <li className="hover:text-blue-300 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-300 cursor-pointer">Courses</li>
          <li className="hover:text-blue-300 cursor-pointer">
            Prep tracker tool
          </li>
          <li className="hover:text-blue-300 cursor-pointer">Login</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
