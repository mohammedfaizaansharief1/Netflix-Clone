import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      alert("Registration Successful! Please login.");
      navigate("/login");
    } catch (error) {
      console.error(error.response?.data?.message || "Registration failed");
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-4">
      <div className="bg-opacity-80 bg-gray-900 p-8 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-4">
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
            className="w-full py-2 px-4 bg-red-600 text-black rounded-lg hover:bg-red-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-red-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
