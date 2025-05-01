import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      navigate("/login");
      return;
    }

    try {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    } catch (err) {
      console.error("Failed to parse user data:", err);
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="bg-[#141414] p-8 rounded-lg shadow-lg max-w-md w-full mt-10 border border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-6">Profile</h2>
          {user ? (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-xl font-bold">
                  {user.email[0].toUpperCase()}
                </div>
                <div>
                  <p className="text-lg font-semibold">{user.email}</p>
                  <p className="text-sm text-gray-400">User ID: {user.id}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="w-full mt-6 bg-red-600 hover:bg-red-700 text-black py-2 rounded-lg font-semibold"
              >
                Logout
              </button>
            </div>
          ) : (
            <p className="text-center text-gray-400">Loading user info...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
