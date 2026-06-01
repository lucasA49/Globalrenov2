import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);
const BASE = import.meta.env.VITE_API_URL || '/api';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('gr_admin_token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) { setLoading(false); return; }
    axios.get(`${BASE}/auth/me`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setUser(res.data.user))
      .catch(() => { localStorage.removeItem('gr_admin_token'); setToken(null); })
      .finally(() => setLoading(false));
  }, [token]);

  const login = async (email, password) => {
    const res = await axios.post(`${BASE}/auth/login`, { email, password });
    const { token: t, user: u } = res.data;
    localStorage.setItem('gr_admin_token', t);
    setToken(t);
    setUser(u);
    return u;
  };

  const logout = () => {
    localStorage.removeItem('gr_admin_token');
    setToken(null);
    setUser(null);
  };

  const authAxios = useMemo(() =>
    axios.create({ baseURL: BASE, headers: { Authorization: `Bearer ${token}` } }),
    [token]
  );

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading, authAxios }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
