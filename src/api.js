// Central API base URL
// In development: Vite proxy handles /api → localhost:5000
// In production (Vercel): Uses VITE_API_URL env variable → Render backend URL
const BASE_URL = import.meta.env.VITE_API_URL || '';

export default BASE_URL;
