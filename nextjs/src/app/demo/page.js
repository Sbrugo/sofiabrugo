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
              <Link href="/demo/home" className="self-end text-white flex justify-center items-center gap-2">
                watch demo
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </ul>
            <h4 className="text-2xl sm:text-3xl font-bold mb-6 tracking-tight leading-snug">
              FullStack Ecommerce Docs
            </h4>
            <div className="flex flex-col md:flex-row gap-6 text-left md:gap-2 mt-10">
              <div className="min-w-1/2">
                <p className="text-2xl tabular-nums text-neutral-500 min-w-1/3">
                  What does this do? What features does it have?
                </p>
              </div>
              <div className="min-w-1/2">
                <ul className="flex flex-col gap-2 ml-6 text-lg">
                  <li>List products</li>
                  <li>View details</li>
                  <li>Register users and manage reservations</li>
                  <li>Manage products and categories from the backend</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 text-left md:gap-2 mt-10">
              <div className="min-w-1/2">
                <p className="text-2xl tabular-nums text-neutral-500 min-w-1/3">
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
            <div className="flex flex-col md:flex-row gap-6 text-left md:gap-2 mt-10">
              <div className="min-w-1/4">
                <p className="text-2xl tabular-nums text-neutral-500">
                  How is the project structured?
                </p>
              </div>
              <div className="min-w-3/4">
                <ul className="flex flex-col gap-2 ml-6 text-lg text-white">
                  <li>Root folder with frontend and backend subfolders.</li>
                  <li>
                    The frontend contains components, pages, services, and Vite
                    configuration.
                  </li>
                  <li>
                    The backend contains controllers, services, models,
                    configuration, and database scripts.
                  </li>
                  <li>
                    Docker files (Dockerfile, docker-compose.yml) to automate
                    deployment.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 text-left md:gap-2 mt-10">
              <div className="min-w-1/4">
                <p className="text-2xl tabular-nums min-w-1/3 text-neutral-500">
                  How does the backend work?
                </p>
              </div>
              <div className="min-w-3/4">
                <ul className="flex flex-col gap-2 ml-6 text-lg text-white">
                  <li>
                    Exposes REST endpoints for products, users, categories.
                  </li>
                  <li>It connects to the MySQL database using credentials.</li>
                  <li>Endpoints for CRUD operations.</li>
                  <li>
                    Runs with Docker and automatically connects to the MySQL
                    container.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 text-left md:gap-2 mt-10">
              <div className="min-w-1/4">
                <p className="text-2xl tabular-nums min-w-1/3 text-neutral-500">
                  How does the frontend work?
                </p>
              </div>
              <div className="min-w-3/4">
                <ul className="flex flex-col gap-2 ml-6 text-lg text-white">
                  <li>The frontend consumes the backend API using Axios. </li>
                  <li>Components display products, categories, and details.</li>
                  <li>Global state managed with React context.</li>
                  <li>Conects to the backend.</li>
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
                <Link href="/demo/home" className="self-end text-white flex justify-center items-center gap-2">
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
                  <li>Listar por categorías.</li>
                  <li>Ver detalles de cada producto.</li>
                  <li>Registrar usuarios y gestionar reservas.</li>
                  <li>Administrar productos y categorías desde el backend.</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 text-left md:gap-2 mt-10">
              <div className="min-w-1/2">
                <p className="text-2xl tabular-nums min-w-1/3 text-neutral-500">
                  ¿Qué tecnologías usa?
                </p>
              </div>
              <div className="min-w-1/2">
                <ul className="flex flex-col gap-2 ml-6 text-lg text-white">
                  <li>
                    <span className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                      Frontend:
                    </span>{" "}
                    React, TailwindCSS, Axios.
                  </li>
                  <li>
                    <span className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                      Backend:
                    </span>{" "}
                    Java con Spring Boot, expone una API REST.
                  </li>
                  <li>
                    <span className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                      Database:
                    </span>{" "}
                    MySQL, gestionada con Docker.
                  </li>
                  <li>
                    <span className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                      Containers:
                    </span>{" "}
                    Docker y Docker Compose.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 text-left md:gap-2 mt-10">
              <div className="min-w-1/4">
                <p className="text-2xl tabular-nums text-neutral-500">
                  ¿Cómo está estructurado el proyecto?
                </p>
              </div>
              <div className="min-w-3/4">
                <ul className="flex flex-col gap-2 ml-6 text-lg text-white">
                  <li>Carpeta raíz con subcarpetas frontend y backend.</li>
                  <li>
                    El frontend contiene componentes, páginas, servicios y
                    configuración de Vite.
                  </li>
                  <li>
                    El backend contiene controladores, servicios, modelos,
                    configuración y scripts de base de datos.
                  </li>
                  <li>
                    Archivos Docker (Dockerfile, docker-compose.yml) para
                    automatizar el despliegue.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 text-left md:gap-2 mt-10">
              <div className="min-w-1/4">
                <p className="text-2xl tabular-nums min-w-1/3 text-neutral-500">
                  ¿Cómo funciona el backend?
                </p>
              </div>
              <div className="min-w-3/4">
                <ul className="flex flex-col gap-2 ml-6 text-lg text-white">
                  <li>
                    Expone endpoints REST para productos, usuarios y categorías.
                  </li>
                  <li>
                    Se conecta a la base de datos MySQL usando credenciales.
                  </li>
                  <li>Endpoints para operaciones CRUD.</li>
                  <li>
                    Se levanta con Docker y se conecta automáticamente al
                    contenedor de MySQL.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 text-left md:gap-2 mt-10">
              <div className="min-w-1/4">
                <p className="text-2xl tabular-nums min-w-1/3 text-neutral-500">
                  ¿Cómo funciona el frontend?
                </p>
              </div>
              <div className="min-w-3/4">
                <ul className="flex flex-col gap-2 ml-6 text-lg text-white">
                  <li>Consume la API del backend usando Axios.</li>
                  <li>
                    Los componentes muestran productos, categorías y detalles.
                  </li>
                  <li>Estado global gestionado con contexto de React.</li>
                  <li>Con conexión al backend.</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
