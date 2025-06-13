const { Router } = require('express');
const { searchMovies } = require('../controllers/movieController');

const router = Router();

// GET /api/search?q=movie title
router.get('/search', searchMovies);

module.exports = router;
