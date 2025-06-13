const { fetchMovies } = require('../services/omdbService');

async function searchMovies(req, res) {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: 'q parameter required' });
  }
  try {
    const data = await fetchMovies(query);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { searchMovies };
