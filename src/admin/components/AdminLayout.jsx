import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthAdminContext';
import {
  LayoutDashboard, FileText, PlusCircle, LogOut, ExternalLink, ChevronRight,
} from 'lucide-react';

const navItems = [
  { to: '/admin/dashboard', icon: LayoutDashboard, label: 'Tableau de bord' },
  { to: '/admin/articles', icon: FileText, label: 'Articles' },
  { to: '/admin/articles/new', icon: PlusCircle, label: 'Nouvel article' },
];

export default function AdminLayout({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => { logout(); navigate('/admin/login'); };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1a2e1a] text-white flex flex-col flex-shrink-0">
        {/* Logo */}
        <div className="px-6 py-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img src="/globalreno.png" alt="Global Réno" className="h-10 brightness-0 invert" onError={(e) => e.target.style.display='none'} />
            <div>
              <p className="font-bold text-sm">Global Réno</p>
              <p className="text-xs text-white/50">Administration</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#4F7A28] text-white shadow-sm'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}

          {/* Lien vers le site public */}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-all cursor-pointer mt-2"
          >
            <ExternalLink size={18} />
            Voir le site
          </a>
        </nav>

        {/* Footer sidebar */}
        <div className="px-4 py-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-3 mb-1">
            <div className="w-8 h-8 rounded-full bg-[#4F7A28] flex items-center justify-center text-xs font-bold">
              {user?.name?.[0] || 'A'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{user?.name || 'Admin'}</p>
              <p className="text-xs text-white/50 truncate">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all cursor-pointer"
          >
            <LogOut size={16} />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
