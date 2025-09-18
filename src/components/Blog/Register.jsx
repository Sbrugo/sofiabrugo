import React, { useState } from "react";
import Home from "../../pages/Home";

const Register = ({ language }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLogin(true);
    }, 2000);
    console.log("Login...");
  };
  return (
    <>
      <div className="mx-auto w-[350px] space-y-6">
        {language == "spanish" ? (
          <>
            {login == true ? (
              <Home />
            ) : (
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
                      className="w-fit py-1 px-1.5 flex justify-center mt-4 bg-neutral-200 text-black"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      {loading ? "Cargando..." : "Regístrate"}
                    </button>
                  </div>
                </div>
              </>
            )}{" "}
          </>
        ) : (
          <>
            {" "}
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
                  className="w-fit py-1 px-1.5 flex justify-center mt-4 bg-neutral-300 text-black"
                  type="submit"
                  onClick={handleSubmit}
                >
                  {loading ? "Loading..." : "Register"}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Register;
