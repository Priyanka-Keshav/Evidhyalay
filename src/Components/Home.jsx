import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

function Home({ isDark, setIsDark }) {
  const navigate = useNavigate();
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  return (
    <div
      className={`min-h-screen flex flex-col transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-b from-[#0b0f19] to-[#1a237e] text-white"
          : "bg-gradient-to-b from-[#ffffff] to-[#e3f2fd] text-black"
      }`}
    >
      {/* Theme toggle button */}
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
          title="Toggle Theme"
        >
          {isDark ? (
            <Sun className="text-yellow-300" />
          ) : (
            <Moon className="text-blue-800" />
          )}
        </button>
      </div>

      <header className="flex flex-col md:flex-row items-center justify-center p-6 md:p-16">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1
            className={`text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg`}
          >
            <span className="text-blue-400">e Vidyalaya</span> hai toh{" "}
            <span className="text-yellow-400">success confirm hai</span>
          </h1>
          <p
            className={`text-lg ${isDark ? "text-gray-300" : "text-gray-700"}`}
          >
            Register for free test series for JEE, NEET & BITSAT
          </p>
          <button
            onClick={() => navigate("/courses")}
            className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-xl font-semibold text-white shadow-lg"
          >
            Explore Courses
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <DotLottieReact
            src="https://lottie.host/b3679b61-b6b9-466e-b417-ae36e8cabf9d/4JvH3okMSa.lottie"
            loop
            autoplay
            style={{ height: 300 }}
          />
        </div>
      </header>

      <main className="flex-grow px-6 py-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2 flex justify-center">
            <DotLottieReact
              src="https://lottie.host/fe842f67-b32d-4495-93cb-139d868a7eb7/YXZb1RrKSg.lottie"
              loop
              autoplay
              style={{ height: 300 }}
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2
              className={`text-3xl font-bold mb-4 ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              We offer a little more than just the syllabus
            </h2>
            <p className={`${isDark ? "text-white" : "text-gray-800"}`}>
              Skyrocket Your EXAM preparation with the dedicated support of
              mentors as well as the community with us.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-black bg-opacity-40 py-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} eVidyalaya.in — All rights reserved
      </footer>
    </div>
  );
}

export default Home;
