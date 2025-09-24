"use client";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthContext } from "app/app/context/AuthContext";
import { useLang } from "app/app/context/LanguageContext";

export default function Demo() {
  const router = useRouter();
  const { language } = useLang();
  const { register, loading, error, user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formData;

    await register(email, password);

    if (!error && email && password) {
      router.push("/demo/home");
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col">
      <Link
        href="/"
        className="sticky top-0 self-start p-4 sm:p-6 text-neutral-400"
      >
        home
      </Link>

      <div className="flex items-center justify-center flex-1 px-4 sm:px-6">
        <div className="w-full max-w-md space-y-6">
          {language === "spanish" ? (
            <>
              <div className="space-y-2 text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight leading-10">
                  Registrarse
                </h2>
                <p className="text-gray-400 sm:text-gray-500 dark:text-neutral-200">
                  Ingresa tus datos a continuación para crear una cuenta
                </p>
              </div>

              <div className="space-y-4">
                <label htmlFor="email" className="block text-sm sm:text-base">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  placeholder="ejemplo@dominio.com"
                  required
                  type="email"
                  className="w-full p-2 sm:p-3 rounded bg-neutral-800 text-white"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm sm:text-base"
                >
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  required
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  className="w-full p-2 sm:p-3 rounded bg-neutral-800 text-white"
                  value={formData.password}
                  onChange={handleChange}
                />

                <div className="flex justify-center">
                  <button
                    className="w-full sm:w-auto py-2 px-4 mt-4 bg-neutral-100 text-gray-900 rounded font-semibold transition hover:bg-neutral-200"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Regístrate
                  </button>
                </div>

                <div className="mt-4 text-center text-sm sm:text-base font-bold">
                  ¿Ya tienes una cuenta?{" "}
                  <Link className="underline" href="/demo/login">
                    Iniciar sesión
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-2 text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight leading-10">
                  Register
                </h2>
                <p className="text-gray-400 sm:text-gray-500 dark:text-neutral-200">
                  Fill in your information to create an account
                </p>
              </div>

              <div className="space-y-4">
                <label htmlFor="email" className="block text-sm sm:text-base">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  placeholder="example@domain.com"
                  required
                  type="email"
                  className="w-full p-2 sm:p-3 rounded bg-neutral-800 text-white"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm sm:text-base"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  required
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-2 sm:p-3 rounded bg-neutral-800 text-white"
                  value={formData.password}
                  onChange={handleChange}
                />

                <div className="flex justify-center">
                  <button
                    className="w-full sm:w-auto py-2 px-4 mt-4 bg-neutral-100 text-gray-900 rounded font-semibold transition hover:bg-neutral-200"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Register
                  </button>
                </div>

                <div className="mt-4 text-center text-sm sm:text-base font-bold">
                  Already have an account?{" "}
                  <button
                    className="underline"
                    type="button"
                    onClick={() => setIsLogin(true)}
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
