"use client";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Link from "next/link";
import { useLang } from "./context/LanguageContext";

export default function Home() {
  const { language, toggleLanguage } = useLang();

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-12 sm:px-6 md:px-12 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl tracking-wider"
      >
        {/* NAV */}
        <ul className="flex flex-wrap justify-between sm:justify-end gap-4 mb-10 text-sm text-gray-400">
          <li>{language === "english" ? "home" : "inicio"}</li>

          <button onClick={toggleLanguage} className="font-thin">
            {language === "english" ? "change language" : "cambiar idioma"}
          </button>

          <Link
            href={
              language === "english"
                ? "/files/Sofia_Brugo_Spinetto_CV_Backend_EN.pdf"
                : "/files/Sofia_Brugo_Spinetto_CV_Backend.pdf"
            }
            download
            className="font-thin"
          >
            {language === "english" ? "resume" : "CV"}
          </Link>

          <Link
            href="https://www.linkedin.com/in/sofiabrugo/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-thin"
          >
            LinkedIn
          </Link>

          <Link
            href="https://github.com/Sbrugo"
            target="_blank"
            rel="noopener noreferrer"
            className="font-thin"
          >
            Github
          </Link>
        </ul>

        {language === "english" ? (
          <div className="space-y-14">
            {/* INTRO */}
            <section className="space-y-6">
              <h4 className="mt-6 sm:mt-0 text-gray-300 text-2xl sm:text-3xl font-bold tracking-tight leading-relaxed">
                Backend Developer · APIs & Distributed Systems
              </h4>

              <p className="text-base sm:text-lg text-gray-300 max-w-prose md:max-w-fit leading-relaxed font-medium">
                Building REST APIs and backend services with Java and NestJS,
                with practical experience integrating React-based SPAs.
              </p>

              <p className="text-base sm:text-lg text-gray-400 max-w-prose md:max-w-fit leading-relaxed">
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
                className="block border border-gray-700 rounded-xl p-6 sm:p-6 bg-neutral-900/40 hover:border-gray-500 transition"
              >
                <p className="text-sm uppercase tracking-wide text-gray-400">
                  Featured Project
                </p>
                <h5 className="text-lg font-semibold mt-1 flex items-center gap-2">
                  Backend API — NestJS{" "}
                  <span className="text-gray-500 text-sm">↗</span>
                </h5>
                <p className="text-sm text-gray-500 mt-1 max-w-prose">
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
                <p className="text-sm text-gray-400 mt-1 max-w-prose">
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
                <p className="text-sm text-gray-400 mt-1 max-w-prose">
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
              <h4 className="mt-6 sm:mt-0 text-gray-300 text-2xl sm:text-3xl font-bold tracking-tight leading-relaxed">
                Desarrolladora Backend · APIs y Sistemas Distribuidos
              </h4>

              <p className="text-base sm:text-lg text-gray-300 max-w-prose md:max-w-fit leading-relaxed font-medium">
                Desarrollo de APIs REST y servicios backend con Java y NestJS,
                con experiencia práctica integrando SPAs basadas en React.
              </p>

              <p className="text-base sm:text-lg text-gray-400 max-w-prose md:max-w-fit leading-relaxed">
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
                className="block border border-gray-700 rounded-xl p-6 hover:border-gray-500 transition"
              >
                <p className="text-sm uppercase tracking-wide text-gray-400">
                  Proyecto destacado
                </p>
                <h5 className="text-lg font-semibold mt-1">
                  API Backend — NestJS{" "}
                  <span className="text-gray-500 text-sm">↗</span>
                </h5>
                <p className="text-sm text-gray-400 mt-2 max-w-prose">
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
                <p className="text-sm text-gray-500 mt-1 max-w-prose">
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
                <p className="text-sm text-gray-400 mt-1 max-w-prose">
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
