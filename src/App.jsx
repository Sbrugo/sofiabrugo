import React from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import "./App.css";
import { useState } from "react";
import Blog from "./components/Blog";

export default function App() {
  const [language, setLanguage] = useState("english");
  const handleLanguage = () => {
    if (language == "english") {
      setLanguage("spanish");
    } else if (language == "spanish") {
      setLanguage("english");
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center p-4 space-y-16 px-6 py-12 bg-black text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full flex flex-col max-w-3/6"
        >
          {language == "english" ? (
            <>
              <ul className="text-md mb-16 flex self-start gap-6">
                <li>home</li>
                <button onClick={handleLanguage} className="p-0">
                  {language === "english" ? "español" : "english"}
                </button>
              </ul>
              <h4 className="text-2xl font-bold self-start mb-8 tracking-tight leading-10">
                My Portfolio
              </h4>
              <div className="self-start text-left">
                <p className="text-lg">
                  <span className="mt-6">
                    I have nearly three years of full-stack studies, covering
                    relational databases, object-oriented programming, APIs,
                    markup, and testing. I’ve built full-stack projects using
                    Java with React as well as Nest with Next. I also bring
                    professional experience in markup development, maintenance,
                    and localization, along with building responsive, real-time
                    data-driven interfaces.
                  </span>
                </p>
                <br />
                <ul className="text-lg tracking-tight leading-5 flex flex-col gap-6">
                  <li>
                    <span className="text-neutral-500">2025 Freelance</span>{" "}
                    Hogarth | Website production and localization
                  </li>
                  <li>
                    <span className="text-neutral-500">2024 Contractor</span>{" "}
                    Kopius | Integration Project for U.S. Financial Agents
                  </li>
                </ul>
                {/* <ul className="text-md mt-16 flex self-start gap-6">
                  <a href="#reactjava">react + java</a>
                </ul> */}
              </div>
            </>
          ) : (
            <>
              <ul className="text-md mb-16 flex self-start gap-6">
                <li>inicio</li>
                <button onClick={handleLanguage} className="p-0">
                  {language === "english" ? "español" : "english"}
                </button>
              </ul>
              <h4 className="text-2xl font-bold self-start mb-8 tracking-tight leading-10">
                Mi Portafolio
              </h4>
              <div className="self-start text-left">
                <p className="text-lg">
                  Full Stack developer con experiencia comprobable en trabajos
                  de Frontend y proyectos personales de Backend. Tengo una gran
                  habilidad para trabajar en equipo con metodologías agiles,
                  enfocandome en el detalle y en el resultado. Priorizo el
                  código escalable y limpio con principios SOLID. <br />
                  <span className="mt-6">
                    Tengo casi tres años de educación en full stack abarcando
                    bases de datos relacionales, programación orientada a
                    objetos, APIs, lenguaje de marcado y testing. Desarrollé
                    aplicaciones full stack usando Java + React y Nest + Next y
                    también interfaces responsivas con actualización de datos en
                    tiempo real.
                  </span>
                </p>
                <br />
                {/* <p className="text-lg font-serif mt-6 tracking-tighter text-gray-400">
              It’s about finding the best way to carry out a task:
            </p>
            <ul className="text-sm mt-3 ml-6 list-disc leading-5 text-gray-400">
              <li>
                ensuring correctness (does it always give the right answer?)
              </li>
              <li>efficiency (does it run fast and use memory wisely?)</li>
              <li>
                clarity (can someone else follow the logic and extend it later?)
              </li>
            </ul> */}
                <ul className="text-lg tracking-tight leading-5 flex flex-col gap-6">
                  <li>
                    <span className="text-neutral-500">2025 Freelance</span>{" "}
                    Hogarth | Website production and localization
                  </li>
                  <li>
                    <span className="text-neutral-500">2024 Contractor</span>{" "}
                    Kopius | Integration Project for U.S. Financial Agents
                  </li>
                </ul>
                {/* <ul className="text-md mt-16 flex self-start gap-6">
                  <li>
                    <a href="#reactjava">see demo</a>
                  </li>
                </ul> */}
              </div>
            </>
          )}
        </motion.div>
      </div>
      {/* <Blog language={language} /> */}
    </>
  );
}
