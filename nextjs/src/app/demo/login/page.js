"use client";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { useLang } from "../../context/LanguageContext";
import { AuthContext } from "app/app/context/AuthContext";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const { language } = useLang();
  const { login, loading, error, user } = useContext(AuthContext);

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

    await login(email, password);

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

      <div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center flex-1 px-4 sm:px-6"
      >
        <div className="w-full max-w-md space-y-6">
          {language === "spanish" ? (
            <>
              <div className="space-y-2 text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight leading-10">
                  Iniciar sesión
                </h2>
                <p className="text-gray-400 sm:text-gray-500 dark:text-neutral-200">
                  Ingresa tu correo electrónico a continuación para iniciar
                  sesión en tu cuenta
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm sm:text-base">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    placeholder="ejemplo@dominio.com"
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 sm:p-3 rounded bg-neutral-800 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm sm:text-base"
                  >
                    Contraseña
                  </label>
                  <a className="text-sm underline" href="#">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <input
                  id="password"
                  name="password"
                  required
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 sm:p-3 rounded bg-neutral-800 text-white"
                />
                <div className="flex justify-center">
                  <button
                    className="w-full sm:w-auto py-2 px-4 mt-4 bg-neutral-100 text-gray-900 rounded font-semibold transition hover:bg-neutral-200"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Iniciar sesión
                  </button>
                </div>
                <div className="mt-4 text-center text-sm sm:text-base font-bold">
                  ¿No tienes una cuenta?{" "}
                  <Link className="underline" href={"/demo/"}>
                    Regístrate
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
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm sm:text-base">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    placeholder="example@domain.com"
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 sm:p-3 rounded bg-neutral-800 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm sm:text-base"
                  >
                    Password
                  </label>
                </div>
                <input
                  id="password"
                  name="password"
                  required
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 sm:p-3 rounded bg-neutral-800 text-white"
                />
                <div className="flex justify-center">
                  <button
                    className="w-full sm:w-auto py-2 px-4 mt-4 bg-neutral-100 text-gray-900 rounded font-semibold transition hover:bg-neutral-200"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    {loading ? "Loading..." : isLogin ? "Sign in" : "Register"}
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
};

export default Login;
