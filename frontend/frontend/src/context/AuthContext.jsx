import { createContext, useState, useEffect } from "react";
import { loginUser, signupUser } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const login = async (data) => {
    const res = await loginUser(data);
    setUser(res.user);
    localStorage.setItem("token", res.token);
  };

  const signup = async (data) => {
    const res = await signupUser(data);
    setUser(res.user);
    localStorage.setItem("token", res.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
