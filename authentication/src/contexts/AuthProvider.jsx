import { createContext, useState, useEffect } from "react";
import { postAuth } from "@/utils/fetchData";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  // Проверка наличия токена при монтировании компонента
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setIsAuthenticated(true);
      setToken(storedToken);
      navigateToNews();
    }
  }, []);

  const login = async (username, password) => {
    const token = await postAuth({ "login": username, password });
    if (token) {
      setIsAuthenticated(true);
      setToken(token);
      localStorage.setItem("token", token);
      return true;
    } else {
      console.error("Ошибка авторизации");
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setToken(null);
    localStorage.removeItem("token")
  };

  //Функция для перенаправления
  const navigateToNews = () => {
    
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout, navigateToNews }}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
