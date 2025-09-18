"use client";
import React, { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Link from "next/link";
import { useLang } from "../context/LanguageContext";
export default function Demo() {
  const { language, toggleLanguage } = useLang();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const [loading, setLoading] = useState(false);
  //   const [login, setLogin] = useState(false);
  const [page, setPage] = useState("register");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log("Login...");
  };

  const handlePage = () => {
    if (page == "register") {
      setPage("login");
    } else if (page == "login") {
      setPage("register");
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center p-4 px-6 py-12 bg-neutral-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full flex flex-col max-w-3/6"
      >
        <ul className="text-md flex self-start gap-6 w-full justify-between">
          <Link href="/">home</Link>
          <p className="text-md font-semibold">full stack demo</p>
        </ul>
        <div
          id="demo"
          className="flex items-center justify-center min-h-screen w-full"
        >
          <div className="text-left w-full flex flex-col max-w-3/6">
            <div className="mx-auto w-[350px] space-y-6">
              {language == "spanish" ? (
                <>
                  <div className="space-y-2">
                    <h2 className="text-2xl tracking-tight leading-10 font-bold">
                      Registrarse
                    </h2>
                    <p className="text-gray-500 dark:text-neutral-200">
                      Ingresa tus datos a continuación para crear una cuenta
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="email">Correo electrónico</label>
                      <div className="relative">
                        <input
                          id="email"
                          placeholder="ejemplo@dominio.com"
                          required
                          type="email"
                          value={email}
                          onChange={handleEmailChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <label htmlFor="password">Contraseña</label>
                    </div>
                    <div className="relative">
                      <input
                        id="password"
                        required
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </div>
                    <div className="flex w-full justify-center">
                      <button
                        className="w-fit py-1 px-1.5 flex justify-center mt-4 bg-neutral-100 text-gray-900"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        {loading ? "Cargando..." : "Regístrate"}
                      </button>
                    </div>
                    <div className="mt-4 text-center text-md font-bold">
                      ¿Ya tienes una cuenta?{" "}
                      <button onClick={handlePage} className="underline">
                        Iniciar sesión
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <h2 className="text-2xl tracking-tight leading-10 font-bold">
                      Register
                    </h2>
                    <p className="text-gray-500 dark:text-neutral-200">
                      Fill in your information to create an account
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="email">Email</label>
                      <div className="relative">
                        <input
                          id="email"
                          placeholder="example@domain.com"
                          required
                          type="email"
                          value={email}
                          onChange={handleEmailChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <label htmlFor="password">Password</label>
                    </div>
                    <div className="relative">
                      <input
                        id="password"
                        required
                        type="password"
                        placeholder="Enter in your password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </div>
                    <div className="flex w-full justify-center">
                      <button
                        className="w-fit py-1 px-1.5 flex justify-center mt-4 bg-neutral-100 text-gray-900"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        {loading ? "Loading..." : "Sign in"}
                      </button>
                    </div>
                    <div className="mt-4 text-center text-md font-bold">
                      Already have an account?{" "}
                      <button onClick={handlePage} className="underline">
                        Sign in
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
