import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthAdminContext';

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#4F7A28] border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500 text-sm">Vérification...</p>
        </div>
      </div>
    );
  }

  return user ? children : <Navigate to="/admin/login" replace />;
}
