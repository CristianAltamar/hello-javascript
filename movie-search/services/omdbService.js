const fetch = require('node-fetch');

const API_KEY = process.env.OMDB_API_KEY;

async function fetchMovies(query) {
  if (!API_KEY) {
    throw new Error('OMDB_API_KEY not set');
  }

  const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error('Failed to fetch from OMDB');
  }
  return response.json();
}

module.exports = { fetchMovies };
