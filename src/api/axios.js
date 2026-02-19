import axios from 'axios';

const api = axios.create({
  // Pregunta a tus compañeros qué URL están usando (ej. http://localhost:4000)
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;