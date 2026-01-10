import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  /* Restore session on refresh */
  useEffect(() => {
    const storedUser = localStorage.getItem("itraana_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  /* Login */
  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem("itraana_user", JSON.stringify(userData));
    setIsAuthOpen(false);
  };

  /* Logout */
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("itraana_user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isAuthOpen,
        setIsAuthOpen,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
