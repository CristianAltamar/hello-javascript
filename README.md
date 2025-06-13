# Movie Search Application

This project is a simple movie search app built with **Node.js**, **Express**, and **React**. It follows a minimal MVC structure and uses **TailwindCSS** for quick styling.

## Setup

1. Navigate into the `movie-search` directory.
2. Run `npm install` to install the dependencies.
3. Provide an `OMDB_API_KEY` environment variable when starting the server:

```bash
OMDB_API_KEY=<your_key> npm start
```

The server exposes a single endpoint `/api/search` and serves the React client at `http://localhost:3000`.
