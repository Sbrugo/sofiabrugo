"use client";
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = "http://localhost:4000";

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    // Simulación de login, reemplazar por endpoint real
    await new Promise((r) => setTimeout(r, 1000));
    if (email && password) {
      setUser({ email });
    } else {
      setError("Credenciales inválidas");
    }
    setLoading(false);
  };

  const register = async (email, password) => {
    setLoading(true);
    setError(null);
    // Simulación de registro, reemplazar por endpoint real
    await new Promise((r) => setTimeout(r, 1000));
    if (email && password) {
      setUser({ email });
    } else {
      setError("Datos inválidos");
    }
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, error, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
