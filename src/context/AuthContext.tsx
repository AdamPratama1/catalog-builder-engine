import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { login as authLogin, logout as authLogout, getUser, isLoggedIn } from '@/lib/auth';

/**
 * Tipe data untuk Context Autentikasi
 * Mengelola state login dan informasi pengguna
 */
interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  user: string | null;
}

// Buat Context untuk Autentikasi
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * AuthProvider Component
 * Menyediakan state autentikasi ke seluruh aplikasi
 * Menyimpan data login di localStorage agar bertahan saat page refresh
 */
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn());
  const [user, setUser] = useState<string | null>(getUser()?.username || null);

  // Saat pertama kali load, cek apakah user sudah login sebelumnya
  useEffect(() => {
    setIsAuthenticated(isLoggedIn());
    setUser(getUser()?.username || null);
  }, []);

  /**
   * Fungsi Login
   * Verifikasi username dan password
   * Return true jika login berhasil
   */
  const login = (username: string, password: string): boolean => {
    const user = authLogin(username, password);
    if (user) {
      setIsAuthenticated(true);
      setUser(user.username);
      return true;
    }
    return false;
  };

  /**
   * Fungsi Logout
   * Hapus semua data login dan session
   */
  const logout = () => {
    authLogout();
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Hook untuk menggunakan Auth Context
 * Gunakan di komponen manapun untuk akses state autentikasi
 * Throw error jika tidak berada dalam AuthProvider
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth harus digunakan dalam AuthProvider');
  }
  return context;
};