import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

/**
 * Protected Route Component
 * Melindungi route tertentu dari akses tanpa login
 * Jika user belum login, akan redirect ke halaman login
 * 
 * Penggunaan:
 * <Route path="/edit" element={<ProtectedRoute><EditPage /></ProtectedRoute>} />
 */
interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();

  // Jika belum login, arahkan ke halaman login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Jika sudah login, tampilkan komponen
  return children;
};