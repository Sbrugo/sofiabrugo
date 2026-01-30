"use client";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Link from "next/link";
import { useLang } from "./context/LanguageContext";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  const { language, toggleLanguage } = useLang();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-12 sm:px-6 md:px-12 bg-gray-950 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl tracking-wider"
      >
        {/* NAV */}
        <nav className="flex">
          <div className="sm:hidden flex justify-end w-fit">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 sm:hidden flex jutify-end"
            >
              <FontAwesomeIcon
                icon={faBars}
                className="h-6 w-6 text-gray-400"
              />
            </button>
          </div>
          <ul
            className={`flex-col sm:flex-row sm:flex flex-wrap justify-between sm:justify-end gap-4 md:mb-10 md:text-sm text-gray-400 ${isMenuOpen ? "flex" : "hidden"} items-center`}
          >
            <button onClick={toggleLanguage} className="font-thin px-3 pl-0">
              EN / ES
            </button>

            <Link
              href={
                language === "english"
                  ? "/files/Sofia_Brugo_Spinetto_CV_Backend_EN.pdf"
                  : "/files/Sofia_Brugo_Spinetto_CV_Backend.pdf"
              }
              download
              className="font-thin px-3 flex justify-center"
            >
              {language === "english"
                ? "Download resume"
                : "Descargar currículum"}
            </Link>

            <Link
              href="https://www.linkedin.com/in/sofiabrugo/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-thin px-3 flex justify-center"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="text-lg" />
            </Link>

            <Link
              href="https://github.com/Sbrugo"
              target="_blank"
              rel="noopener noreferrer"
              className="font-thin px-3 flex justify-center"
            >
              <FontAwesomeIcon icon={faGithub} className="text-lg" />
            </Link>
          </ul>
        </nav>

        {language === "english" ? (
          <div className="space-y-14">
            {/* INTRO */}
            <section className="space-y-6">
              <h4 className="mt-6 sm:mt-0 text-gray-300 text-2xl sm:text-5xl font-medium tracking-tight md:tracking-normal leading-relaxed">
                Sofía Brugo · Backend Developer
              </h4>
              <p className="text-lg sm:text-lg text-gray-400 max-w-prose md:max-w-fit leading-relaxed italic">
                APIs & Distributed Systems
              </p>
              <p className="text-base sm:text-lg text-gray-300 max-w-prose md:max-w-fit leading-relaxed font-bold underline underline-offset-4">
                Building REST APIs and backend services with Java and NestJS,
                with practical experience integrating React-based SPAs.
              </p>

              <p className="text-base sm:text-lg text-gray-500 max-w-prose md:max-w-fit leading-relaxed">
                Backend-focused developer with experience designing and
                implementing REST APIs, modular services, and data-driven
                applications. I focus on clear separation of responsibilities,
                maintainable code structure, and predictable API behavior. I
                work comfortably across backend layers and understand frontend
                concerns from hands-on experience building SPAs.
              </p>
            </section>

            {/* EXPERIENCE */}
            <section className="space-y-4">
              <p className="text-sm uppercase tracking-wide text-gray-400">
                Experience
              </p>
              <ul className="flex flex-col gap-3 text-gray-300">
                <li>
                  <span className="tabular-nums text-gray-400">
                    2025 Freelance:
                  </span>{" "}
                  Website production and localization projects
                </li>
                <li>
                  <span className="tabular-nums text-gray-400">
                    2024 Contractor:
                  </span>{" "}
                  Integration project for U.S.-based financial agents
                </li>
              </ul>
            </section>

            {/* FEATURED PROJECT */}
            <section className="space-y-4">
              <Link
                href="https://github.com/Sbrugo/nestjs-backend-lean"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Featured Project: API Backend on NestJS"
                className="group block border border-gray-700 rounded-xl p-6 sm:p-6 hover:border-gray-500 hover:shadow-lg transition"
                style={{ backgroundColor: "#D3D3D322" }}
              >
                <p className="text-sm uppercase tracking-wide text-gray-400 group-hover:text-shadow-lg">
                  Featured Project
                </p>
                <h5 className="text-lg font-semibold mt-1 flex items-center gap-2 text-gray-100 group-hover:text-shadow-lg">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="text-lg text-blue-300"
                  />{" "}
                  Backend API — NestJS{" "}
                </h5>
                <p className="text-sm text-gray-400 mt-1 group-hover:text-shadow-lg">
                  Modular REST API focused on clean architecture, validation,
                  and service separation.
                </p>
              </Link>
            </section>

            {/* SUPPORTING PROJECTS */}
            <section className="space-y-3 sm:space-y-4">
              <p className="text-sm uppercase tracking-wide text-gray-400">
                Supporting Projects
              </p>

              <Link
                href="https://github.com/Sbrugo/full-stack-implementation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Supporting Project: Full Stack REST Application"
                className="block hover:underline text-gray-300"
              >
                Full Stack REST Application (Java + React)
                <p className="text-sm text-gray-400 mt-1">
                  End-to-end application demonstrating API consumption, data
                  validation and frontend-backend integration.
                </p>
              </Link>

              <Link
                href="https://github.com/Sbrugo/Java_Responsibility_chain_pattern"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Featured Project: Design Patterns in Java"
                className="block hover:underline text-gray-300"
              >
                Design Patterns — Java
                <p className="text-sm text-gray-400 mt-1">
                  Object-oriented design patterns with focus on responsibilities
                  and maintainability.
                </p>
              </Link>
            </section>
          </div>
        ) : (
          <div className="space-y-14">
            {/* INTRO ES */}
            <section className="space-y-6">
              <h4 className="mt-6 sm:mt-0 text-gray-300 text-2xl sm:text-5xl font-bold tracking-tight md:tracking-normal leading-relaxed">
                Sofía Brugo · Desarrollo Backend
              </h4>
              <p className="text-lg sm:text-lg text-gray-400 max-w-prose md:max-w-fit leading-relaxed italic">
                APIs y Sistemas Distribuidos
              </p>
              <p className="text-base sm:text-lg text-gray-300 max-w-prose md:max-w-fit leading-relaxed font-medium underline underline-offset-4">
                Desarrollo de APIs REST y servicios backend con Java y NestJS,
                con experiencia práctica integrando SPAs basadas en React.
              </p>

              <p className="text-base sm:text-lg text-gray-500 max-w-prose md:max-w-fit leading-relaxed">
                Desarrolladora con foco en backend, con experiencia en el diseño
                e implementación de APIs REST, servicios modulares y
                aplicaciones orientadas a datos. Me enfoco en la separación
                clara de responsabilidades, una estructura de código mantenible
                y un comportamiento predecible de las APIs. Trabajo con
                comodidad en las distintas capas del backend y comprendo las
                necesidades del frontend a partir de la experiencia práctica
                construyendo SPAs.
              </p>
            </section>

            {/* EXPERIENCE ES */}
            <section className="space-y-4">
              <p className="text-sm uppercase tracking-wide text-gray-400">
                Experiencia
              </p>
              <ul className="flex flex-col gap-3 text-gray-300">
                <li>
                  <span className="tabular-nums text-gray-400">
                    2025 Freelance:
                  </span>{" "}
                  Producción y localización de sitios web
                </li>
                <li>
                  <span className="tabular-nums text-gray-400">
                    2024 Contractor:
                  </span>{" "}
                  Proyecto de integración para agentes financieros con base en
                  Estados Unidos
                </li>
              </ul>
            </section>

            {/* FEATURED PROJECT ES */}
            <section className="space-y-4">
              <Link
                href="https://github.com/Sbrugo/nestjs-backend-lean"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver proyecto destacado: API Backend en NestJS"
                className="group block border rounded-xl p-6 sm:p-6 border-gray-700 hover:border-gray-500 transition"
                style={{ backgroundColor: "#D3D3D322" }}
              >
                <p className="text-sm uppercase tracking-wide text-gray-400 transition group-hover:text-shadow-lg">
                  Proyecto destacado
                </p>

                <h5 className="text-lg font-semibold mt-1 text-gray-200 transition">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="text-lg text-blue-300 group-hover:text-shadow-lg"
                  />{" "}
                  API Backend — NestJS{" "}
                </h5>

                <p className="text-sm text-gray-400 mt-2 max-w-prose transition group-hover:text-shadow-lg">
                  API REST modular enfocada en arquitectura limpia, validaciones
                  y separación de servicios.
                </p>
              </Link>
            </section>

            {/* SUPPORTING PROJECTS ES */}
            <section className="space-y-3 sm:space-y-4">
              <p className="text-sm uppercase tracking-wide text-gray-400">
                Proyectos de soporte
              </p>

              <Link
                href="https://github.com/Sbrugo/full-stack-implementation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver proyecto de soporte: Aplicación Full Stack REST"
                className="block hover:underline text-gray-300"
              >
                Aplicación Full Stack REST (Java + React)
                <p className="text-sm text-gray-300 mt-1">
                  Aplicación end-to-end que demuestra consumo de APIs,
                  validación de datos e integración frontend-backend.
                </p>
              </Link>

              <Link
                href="https://github.com/Sbrugo/Java_Responsibility_chain_pattern"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver proyecto técnico: Patrones de Diseño en Java"
                className="block hover:underline text-gray-300"
              >
                Patrones de Diseño — Java
                <p className="text-sm text-gray-400 mt-1">
                  Implementación de patrones de diseño orientados a objetos con
                  foco en responsabilidades y mantenibilidad.
                </p>
              </Link>
            </section>
          </div>
        )}
      </motion.div>
    </div>
  );
}
