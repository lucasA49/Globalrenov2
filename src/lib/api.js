import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '/api';

export const api = axios.create({ baseURL: API_URL });

export const adminApi = (token) =>
  axios.create({
    baseURL: API_URL,
    headers: { Authorization: `Bearer ${token}` },
  });

export function generateSlug(title) {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export const CATEGORIES = [
  { value: 'toiture', label: 'Toiture' },
  { value: 'facade', label: 'Façade' },
  { value: 'isolation', label: 'Isolation' },
  { value: 'renovation', label: 'Rénovation' },
  { value: 'entretien', label: 'Entretien' },
  { value: 'conseils', label: 'Conseils' },
];

export const CITY_OPTIONS = [
  'Cholet', 'Mazières-en-Mauges', 'Beaupréau', 'Saint-Macaire-en-Mauges',
  'Maulévrier', 'Mortagne-sur-Sèvre', 'Maine-et-Loire',
];
