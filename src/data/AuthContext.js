import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
      const storedAuth = JSON.parse(localStorage.getItem('auth'));
      if (storedAuth) {
        setIsAuthenticated(storedAuth.isAuthenticated);
        setUser(storedAuth.user);
      }  
      const logoutTimeout = setTimeout(() => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('auth');
      },  7200000 ); // 20 hours in milliseconds
  
      return () => clearTimeout(logoutTimeout);
  }, []);
  

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem('auth', JSON.stringify({ isAuthenticated: true, user: userData }));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('auth');
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
