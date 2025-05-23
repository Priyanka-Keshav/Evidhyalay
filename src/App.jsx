import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Courses from "./Components/Courses";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div
      className={`transition-all duration-300 ${
        isDark
          ? "bg-gradient-to-b from-[#0b0f19] to-[#1a237e] text-white"
          : "bg-gradient-to-b from-[#ffffff] to-[#e3f2fd] text-black"
      } min-h-screen`}
    >
      <BrowserRouter>
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <Routes>
          <Route
            path="/"
            element={<Home isDark={isDark} setIsDark={setIsDark} />}
          />
          <Route path="/courses" element={<Courses isDark={isDark} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
