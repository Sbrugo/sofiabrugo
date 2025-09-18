import React, { useState } from "react";
import Login from "./Blog/Login";
import Register from "./Blog/Register";

const Blog = ({ language }) => {
  const [page, setPage] = useState("register");

  const handlePage = () => {
    if (page == "register") {
      setPage("login");
    } else if (page == "login") {
      setPage("register");
    }
  };
  return (
    <div
      id="reactjava"
      className="bg-neutral-950 min-h-screen flex flex-col items-center p-4 space-y-16 px-6 py-12 text-white"
    >
      <p className="text-md">full stack demo</p>
      <div className="text-left py-12 w-full flex flex-col max-w-3/6">
        {page == "login" ? (
          <>
            <Login language={language}></Login>
            <div className="mt-4 text-center text-md font-bold">
              {language == "spanish"
                ? "No tienes una cuenta?"
                : "Don´t have an account?"}
              <button onClick={handlePage} className="underline">
                {" "}
                {language == "spanish" ? "Regístrate" : "Register"}
              </button>
            </div>
          </>
        ) : (
          <>
            <Register language={language}></Register>
            <div className="mt-4 text-center text-md font-bold">
              {language == "spanish"
                ? "¿Ya tienes una cuenta?"
                : "Already have an account?"}{" "}
              <button onClick={handlePage} className="underline">
                {language == "spanish" ? "Iniciar sesión" : "Sign in"}{" "}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Blog;
