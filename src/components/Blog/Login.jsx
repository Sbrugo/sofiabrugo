import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Login...");
  };
  return (
    <>
      <div className="mx-auto w-[350px] space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl tracking-tight leading-10 font-bold">
            Iniciar sesión
          </h2>
          <p className="text-gray-500 dark:text-neutral-200">
            Ingresa tu correo electrónico a continuación para iniciar sesión en
            tu cuenta
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
            <a className="ml-auto inline-block text-sm underline" href="#">
              ¿Olvidaste tu contraseña?
            </a>
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
          <div className="w-full flex justify-center">
            <button
              className="w-fit py-1 px-1.5 flex justify-center mt-4 bg-neutral-300 text-black"
              type="submit"
              onClick={handleSubmit}
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
