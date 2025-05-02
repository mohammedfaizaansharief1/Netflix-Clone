// src/pages/MoviesPage.jsx
import { useEffect, useState } from "react";
import { getMovies } from "../services/movieService";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black pt-20">
      <Navbar />
      <h1 className="text-3xl font-bold mb-4 px-4">Movies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;