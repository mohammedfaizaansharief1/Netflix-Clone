import { useEffect, useState } from "react";
import {
  getTrendingMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getMoviesByGenre,
  searchMovies,
  getMovies,
  getSeries
} from "../services/movieService";
import Navbar from "../components/Navbar";
import MovieModal from "../components/MovieModal";
import HeroBanner from "../components/HeroBanner";
// import { FaPlay } from "react-icons/fa";







// 🎯 Genre IDs from TMDB
const GENRE_IDS = {
  action: 28,
  horror: 27,
  comedy: 35,
};

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("trending");
  const [searchMode, setSearchMode] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  // const [movies, setMovies] = useState([]);
// const [page, setPage] = useState(1);
// const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMoviesByCategory(currentCategory);
  }, [currentCategory]);

  const fetchMoviesByCategory = async (category) => {
    try {
      let data = [];
      if (category === "trending") {
        data = await getTrendingMovies();
      } else if (category === "top-rated") {
        data = await getTopRatedMovies();
      } else if (category === "upcoming") {
        data = await getUpcomingMovies();
      } else if (category in GENRE_IDS) {
        const genreId = GENRE_IDS[category];
        data = await getMoviesByGenre(genreId);
      } else if (category === "movies") {
        data = await getMovies();
      } else if (category === "series") {
        data = await getSeries();
      }
      setMovies(data);
      setSearchMode(false); // Reset search mode when selecting category
    } catch (error) {
      console.error("Failed to fetch category movies", error);
    }
  };

  const handleSearch = async (query) => {
    if (!query) {
      fetchMoviesByCategory(currentCategory);
      return;
    }

    try {
      const data = await searchMovies(query);
      setMovies(data);
      setSearchMode(true);
    } catch (error) {
      console.error("Search failed", error);
    }
  };

  const handleCategorySelect = (category) => {
    setCurrentCategory(category);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closeMovieModal = () => {
    setSelectedMovie(null);
  };

  const renderMovies = (movies) => (
    
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {movies
       .filter((movie) => movie.poster_path)  // ⭐ Only movies with a poster
      .map((movie) => (
        <div
          key={movie.id}
          className="group relative cursor-pointer overflow-hidden rounded-lg transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
          onClick={() => handleMovieClick(movie)}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-cover rounded-lg"
          />
          
          

          <h4 className="text-white mt-2 text-center">{movie.title}</h4>
          
        </div>
      ))}
    </div>
  );

  

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
        <Navbar
          onSearch={handleSearch}
          onCategorySelect={handleCategorySelect}
        />
        {/* <HeroBanner movie={movies[0]} /> */}
        {movies.length > 0 && <HeroBanner movie={movies[0]} />}

        <div className="p-4">
          <h2 className="text-3xl font-bold mb-4">
            {searchMode
              ? "Search Results"
              : currentCategory === "movies"
              ? "Movies"
              : currentCategory === "series"
              ? "Series"
              : currentCategory.replace("-", " ").toUpperCase()}
          </h2>

          {movies.length === 0 ? (
            <p>No movies found. Try searching or selecting a category.</p>
          ) : (
            renderMovies(movies)
          )}
        </div>

        {selectedMovie && (
          <MovieModal movie={selectedMovie} onClose={closeMovieModal} />
        )}
      </div>
    </>
  );
}

export default HomePage;