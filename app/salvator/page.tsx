"use client";

import { useState } from "react";
import {FaYoutube,FaSpotify,FaApple,FaPlayCircle,FaInstagram,FaTiktok, FaTwitter,FaNodeJs,FaDatabase,} from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMysql } from "react-icons/si";

export default function Home() {
  const [active, setActive] = useState("home");

  const platforms = [ 
     {
      icon: <FaInstagram />,
      color: "text-pink-500",
      link: "https://www.instagram.com/taker_1s/",
    },
     {
      icon: < FaTwitter />,
      color: "text-blue-500",
      link: "https://x.com/Taker1s",
    },{
      icon: <FaYoutube />,
      color: "text-red-600",
      link: "https://www.youtube.com/@salvator_1",
    },
   
   
    {
      icon: <FaTiktok />,
      color: "text-white",
      link: "https://www.tiktok.com/@taker__1s",
    },
   
  ];

  return (
    <main className="min-h-screen bg-gray-800 text-white">
      {/* Navigation */}
      <nav className="flex justify-center gap-6 bg-gray-900 p-4">
        <button onClick={() => setActive("home")} className="navBtn">
          Home
        </button>
        <button onClick={() => setActive("skills")} className="navBtn">
          Skills
        </button>
        <button onClick={() => setActive("contact")} className="navBtn">
          Contact
        </button>
      </nav>

      {/* Content */}
      <section className="p-10 text-center">
        {/* HOME */}
        {active === "home" && (
          <div>
            <h1 className="title text-blue-500"></h1>
            <h2 className="text-2xl mt-4">Welcome.</h2>
            <p className="mt-6 text-xl">Hi, I'm Igizeneza Salvator</p>
            <p className="text-gray-400 text-lg">Software Developer</p>

            <p className="mt-4 text-gray-400">
              Frontend (Next.js, HTML, Tailwind) & Backend (Express.js)
            </p>
            <p className="text-gray-400">
              Database Management (MySQL)
            </p>

            <div className="flex justify-center gap-8 mt-10">
              {platforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${platform.color} text-4xl hover:scale-110 transition`}
                >
                  {platform.icon}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* SKILLS */}
        {active === "skills" && (
          <div>
            <h1 className="title text-white">My Skills</h1>

            <div className="flex justify-center gap-16 mt-12">
              <div className="flex flex-col items-center">
                <SiNextdotjs className="text-6xl" />
                <p className="mt-3">Next.js</p>
              </div>

              <div className="flex flex-col items-center">
                <SiExpress className="text-6xl text-gray-300" />
                <p className="mt-3">Express.js</p>
              </div>

              <div className="flex flex-col items-center">
                <SiMysql className="text-6xl text-blue-500" />
                <p className="mt-3">MySQL</p>
              </div>
            </div>
          </div>
        )}

        {/* CONTACT */}
        {active === "contact" && (
          <div>
            <h1 className="title text-white">Contact Me</h1>
            <p className="text-gray-400 mt-4">Reach me on:</p>

            <div className="flex justify-center gap-8 mt-8">
              {platforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${platform.color} text-4xl hover:scale-110 transition`}
                >
                  {platform.icon}
                </a>
              ))}
            </div>

            <p className="mt-10 text-blue-400">
              We are here to serve the best things.
            </p>
          </div>
        )}
      </section>

      {/* Styles */}
      <style jsx>{`
        .navBtn {
          background: #2563eb;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 16px;
        }
        .navBtn:hover {
          background: #1d4ed8;
        }
        .title {
          font-size: 2rem;
          margin-bottom: 10px;
        }
      `}</style>
    </main>
  );
}
