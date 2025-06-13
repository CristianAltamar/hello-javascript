const express = require('express');
const path = require('path');
const movieRoutes = require('./routes/movieRoutes');

const app = express();

// Serve static files for the client
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api', movieRoutes);

module.exports = app;
