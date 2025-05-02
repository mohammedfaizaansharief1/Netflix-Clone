// src/pages/TVShowsPage.jsx
import { useEffect, useState } from "react";
import { getSeries } from "../services/movieService";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

const TVShowsPage = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchTVShows = async () => {
        try {
            const data = await getSeries();
            console.log("📺 Fetched TV shows:", data);
            setShows(data);
          } catch (err) {
            console.error("Failed to fetch TV shows:", err);
          }
    };
    fetchTVShows();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black pt-20">
      <Navbar />
      <h1 className="text-3xl font-bold mb-4 px-4">TV Shows</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
      {shows.length > 0 ? (
          shows.map((show) => <MovieCard key={show.id} movie={show} />)
        ) : (
          <p className="text-center col-span-full">No TV Shows found.</p>
        )}
      </div>
    </div>
  );
};

export default TVShowsPage;