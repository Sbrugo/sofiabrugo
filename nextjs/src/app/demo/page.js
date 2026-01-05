"use client";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Link from "next/link";
import React, { use } from "react";
import { useLang } from "../context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const { language, toggleLanguage } = useLang();
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 sm:px-6 md:px-12 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl flex flex-col sm:flex-col md:flex-col lg:flex-col"
      >
        {language === "english" ? (
          <div className="space-y-10">
            <ul className="flex justify-between items-start sm:items-center gap-4 sm:gap-6 mb-8 w-full text-md sticky top-0 bg-black py-4">
              <Link href={"/"}>home</Link>
              <Link href="/files/Developer.pdf" download>
                resume
              </Link>
              <Link
                href="/demo/home"
                className="self-end text-white flex justify-center items-center gap-2"
              >
                watch demo
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </ul>
            <h4 className="text-2xl sm:text-3xl font-bold mb-6 tracking-tight leading-snug">
              FullStack Ecommerce Docs
            </h4>
            <div className="flex flex-col md:flex-row gap-6 text-left md:gap-2 mt-10">
              <div className="min-w-1/2">
                <p className="text-2xl tabular-nums text-neutral-400 min-w-1/3">
                  What does this do? What features does it have?
                </p>
              </div>
              <div className="min-w-1/2">
                <ul className="flex flex-col gap-2 ml-6 text-lg">
                  <li>
                    <span className="text-lime-400">List </span>products
                  </li>
                  <li>
                    <span className="text-lime-400">View </span>details
                  </li>
                  <li>
                    <span className="text-lime-400">Register </span>users and
                    manage reservations
                  </li>
                  <li>
                    <span className="text-lime-400">Manage </span>products and
                    categories from the backend
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 text-left md:gap-2 mt-10">
              <div className="min-w-1/2">
                <p className="text-2xl tabular-nums text-neutral-400 min-w-1/3">
                  What technologies are used?
                </p>
              </div>
              <div className="min-w-1/2">
                <ul className="flex flex-col gap-2 ml-6 text-lg text-white">
                  <li>
                    <span className="text-neutral-600 dark:text-neutral-300 w-[100px] tabular-nums">
                      Frontend:
                    </span>{" "}
                    React, TailwindCSS, Axios calls.
                  </li>
                  <li>
                    <span className="text-neutral-600 dark:text-neutral-300 w-[100px] tabular-nums">
                      Backend:
                    </span>{" "}
                    Java with Spring Boot, exposing a REST API.
                  </li>
                  <li>
                    <span className="text-neutral-600 dark:text-neutral-300 w-[100px] tabular-nums">
                      Database:
                    </span>{" "}
                    MySQL, managed with Docker.
                  </li>
                  <li>
                    <span className="text-neutral-600 dark:text-neutral-300 w-[100px] tabular-nums">
                      Containers:
                    </span>{" "}
                    Docker and Docker Compose.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-10">
            <ul className="flex justify-between items-start sm:items-center gap-4 sm:gap-6 mb-8 w-full text-md sticky top-0 bg-black py-4">
              <Link href={"/"}>inicio</Link>
              <Link href="/files/Developer.pdf" download>
                CV
              </Link>
              <Link
                href="/demo/home"
                className="self-end text-white flex justify-center items-center gap-2"
              >
                ver demo
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </ul>

            <h4 className="text-2xl sm:text-3xl font-bold mb-6 tracking-tight leading-snug">
              FullStack Ecommerce Docs
            </h4>
            <div className="flex flex-col md:flex-row gap-6 text-left md:gap-2 mt-10">
              <div className="min-w-1/2">
                <p className="text-2xl tabular-nums text-neutral-400 min-w-1/3">
                  ¿Qué hace esta app? ¿Qué funcionalidades tiene?
                </p>
              </div>
              <div className="min-w-1/2">
                <ul className="flex flex-col gap-2 ml-6 text-lg">
                  <li>
                    <span className="text-lime-400">Listar </span>por
                    categorías.
                  </li>
                  <li>
                    <span className="text-lime-400">Ver </span>detalles de cada
                    producto.
                  </li>
                  <li>
                    <span className="text-lime-400">Registrar </span>usuarios y
                    gestionar reservas.
                  </li>
                  <li>
                    <span className="text-lime-400">Administrar </span>productos
                    y categorías desde el backend.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 text-left md:gap-2 mt-10">
              <div className="min-w-1/2">
                <p className="text-2xl tabular-nums min-w-1/3 text-neutral-400">
                  ¿Qué tecnologías usa?
                </p>
              </div>
              <div className="min-w-1/2">
                <ul className="flex flex-col gap-2 ml-6 text-lg text-white">
                  <li>
                    <span className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                      Frontend:
                    </span>{" "}
                    Next.js (con Typescript).
                  </li>
                  <li>
                    <span className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                      Backend:
                    </span>{" "}
                    NestJS (con TypeScript).
                  </li>
                  <li>
                    <span className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                      Database:
                    </span>{" "}
                    PostgreSQL.
                  </li>
                  <li>
                    <span className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                      ORM:
                    </span>{" "}
                    Prisma.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
