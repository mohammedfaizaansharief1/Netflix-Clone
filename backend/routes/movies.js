// Already existing imports...
import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const TMDB_API_KEY = process.env.TMDB_API_KEY;

// Trending
router.get("/trending", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`
    );
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch trending movies" });
  }
});

// Top Rated
router.get("/top-rated", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}`
    );
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch top rated movies" });
  }
});

// Upcoming
router.get("/upcoming", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_API_KEY}`
    );
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch upcoming movies" });
  }
});

// Search (already exists)
router.get("/search", async (req, res) => {
  const { query } = req.query;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${query}`
    );
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ message: "Failed to search movies" });
  }
});

export default router;
