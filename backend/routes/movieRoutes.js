// routes/movieRoutes.js
import express from "express";
import axios from "axios";

const router = express.Router();

// Get Trending Movies
router.get("/trending", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMDB_API_KEY}`
    );
    res.json(response.data.results); // Return the movie results
  } catch (error) {
    res.status(500).json({ message: "Error fetching trending movies" });
  }
});

// Get Popular TV Shows
router.get("/popular", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_API_KEY}`
    );
    res.json(response.data.results); // Return the popular TV shows
  } catch (error) {
    res.status(500).json({ message: "Error fetching popular TV shows" });
  }
});

// Search Movies/TV Shows
router.get("/search", async (req, res) => {
  const query = req.query.query;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.TMDB_API_KEY}&query=${query}`
    );
    res.json(response.data.results); // Return the search results
  } catch (error) {
    res.status(500).json({ message: "Error searching movies" });
  }
});

export default router;
