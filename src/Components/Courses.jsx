import React from "react";
import Card from "./Card";

function Courses({ isDark }) {
  const courses = [
    {
      name: "NEET",
      image:
        "https://timesofindia.indiatimes.com/photo/msid-72073355,imgsize-434895.cms",
      type: "free",
      description:
        "NEET 2026 Test Series to boost your preparation. Aligned with NTA syllabus and structured for droppers and freshers alike.",
    },
    {
      name: "JEE",
      image:
        "https://media.assettype.com/freepressjournal/2024-01/03b5a12f-4110-437f-8814-65051ff79b08/JEE_Exam.jpg",
      type: "free",
      description:
        "Ace JEE Main 2026 with structured tests, practice problems, and strategy guides from top educators.",
    },
    {
      name: "BITSAT",
      image:
        "https://th.bing.com/th/id/OIP.nllOf2L5bBGWuoAMQCqizgAAAA?rs=1&pid=ImgDetMain",
      type: "free",
      description:
        "Complete BITSAT 2025 preparation with our smart modules, question banks, and expert insights.",
    },
    {
      name: "CUET",
      image:
        "https://www.careerpower.in/blog/wp-content/uploads/sites/2/2025/05/19121845/CUET-UG-Exam-Preparation-From-Class-11th.jpg",
      type: "free",
      description:
        "Crack CUET 2025 with comprehensive content across sections, tailored mocks, and revision material.",
    },
    {
      name: "Olympiads",
      image:
        "https://files.askiitians.com/cdn1/images/2014619-143114257-7512-ff.png",
      type: "free",
      description:
        "Maths, Science, and Coding Olympiad prep material designed to challenge and elevate your intellect.",
    },
    {
      name: "NDA",
      image:
        "https://www.studyiq.com/articles/wp-content/uploads/2023/10/30154734/NDA-Exam.jpg",
      type: "free",
      description:
        "Your complete guide to cracking NDA written exam with structured modules and current affairs support.",
    },
  ];

  return (
    <div
      className={`grid gap-8 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 transition-all duration-300 ${
        isDark
          ? "bg-gradient-to-b from-[#0b0f19] to-[#1a237e] text-white"
          : "bg-gradient-to-b from-[#ffffff] to-[#e3f2fd] text-black"
      }`}
    >
      {courses.map((course, index) => (
        <Card
          key={index}
          title={course.name}
          src={course.image}
          description={course.description}
        />
      ))}
    </div>
  );
}

export default Courses;
