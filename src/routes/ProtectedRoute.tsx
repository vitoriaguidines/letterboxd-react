import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

function isUserLoggedIn() {
  const token = localStorage.getItem('token');
  return !!token;//ve se o token ta no localStorage
}

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  if (!isUserLoggedIn()) {//confere se ta logado
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}
