const axios = require('axios');
require('dotenv').config();

const getSeries = async (req, res) => {
//   try {
//     const API_KEY = process.env.TMDB_API_KEY;
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`
//     );

//     const series = response.data.results.map((show) => ({
//       id: show.id,
//       title: show.name,
//       image: `https://image.tmdb.org/t/p/w500${show.poster_path}`,
//     }));

//     // res.render('series', { series });
//     res.json(series);
//   } catch (err) {
//     console.error('❌ Error fetching from TMDB:', err.message);
//     res.status(500).send('Failed to load series');
//   }
// };
res.json({ message: "Series route working!" });

module.exports = { getSeries };

}
