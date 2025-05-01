import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const register = async (email, password) => {
  const response = await axios.post(`${API_URL}/register`, { email, password });
  const { token, user } = response.data;
  // Save both token and user info to localStorage (optional, if you want to auto-login after signup)
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
  console.log("✅ Registered user:", response.data.user); // 👈 Console for testing
  // return response.data;
  return { token, user };
};

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  const { token, user } = response.data;
   // Save both token and user info to localStorage

   if (token && user) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user)); // 🟢 Store user info properly
  }
  console.log("✅ Logged in user:", response.data); // 👈 Console for testing
  // return response.data;
  return { token, user };
};