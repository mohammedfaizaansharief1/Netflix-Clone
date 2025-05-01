import axios from "axios";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;; // Replace with your API key

export const getTrendingMovies = async () => {
  const res = await axios.get(`${API_BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  return res.data.results;
};

export const getTopRatedMovies = async () => {
  const res = await axios.get(`${API_BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
  return res.data.results;
};

export const getUpcomingMovies = async () => {
  const res = await axios.get(`${API_BASE_URL}/movie/upcoming?api_key=${API_KEY}`);
  return res.data.results;
};

export const searchMovies = async (query) => {
  const res = await axios.get(`${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  return res.data.results;
};

// 🔥 New function to get movies by genre
export const getMoviesByGenre = async (genreId) => {
  const res = await axios.get(
    `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
  );
  return res.data.results;
};

export const getMovies = async () => {
  const res = await fetch(`${API_BASE_URL}/discover/movie?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

export const getSeries = async () => {
  const res = await fetch(`${API_BASE_URL}/discover/tv?api_key=${API_KEY}`);
  const data = await res.json();
  // console.log(data)
  return data.results;
};



