import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  // Saat pertama kali load, cek apakah user sudah login sebelumnya
  useEffect(() => {
    const savedAuth = localStorage.getItem('isAuthenticated');
    const savedUser = localStorage.getItem('user');
    
    if (savedAuth === 'true' && savedUser) {
      setIsAuthenticated(true);
      setUser(savedUser);
    }
  }, []);

  /**
   * Fungsi Login
   * Verifikasi username dan password
   * Return true jika login berhasil
   */
  const login = (username: string, password: string): boolean => {
    const VALID_USERNAME = 'adminteamc';
    const VALID_PASSWORD = 'sgkteamc';
    
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      setIsAuthenticated(true);
      setUser(username);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', username);
      return true;
    }
    return false;
  };

  /**
   * Fungsi Logout
   * Hapus semua data login dan session
   */
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
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