import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { token, user } = await login(email, password);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user)); // ✅ Add this line
      console.log("✅ User logged in:", user);
      navigate("/");
    } catch (error) {
      console.error(error.response?.data?.message || "Login failed");
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-4">
      <div className="bg-opacity-80 bg-gray-900 p-8 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="w-full py-2 bg-red-600 hover:bg-red-700 text-black font-semibold rounded transition duration-300"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-sm text-gray-400 text-center">
          New to this site? <span className="text-red-500 cursor-pointer">
          <a href="/signup" className="text-red-500 hover:underline">
          Sign up now
          </a>
            </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
