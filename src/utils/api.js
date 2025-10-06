// src/utils/api.js
const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://mystore-backend.onrender.com"   // <-- Replace with your deployed backend URL
    : "http://localhost:5000";                 // Local backend for dev

export default API_BASE_URL;
