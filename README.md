# Movie Search Application

This project is a simple movie search app built with **Node.js**, **Express**, and **React**. It follows a minimal MVC structure and uses **TailwindCSS** for quick styling.

## Setup

1. Navigate into the `movie-search` directory.
2. Run `npm install` to install the dependencies.
3. Provide an `OMDB_API_KEY` environment variable when starting the server:

```bash
OMDB_API_KEY=<your_key> npm start
```


## Ejemplo: Buscador de Películas

En la carpeta [`movie-search`](./movie-search) encontrarás un ejemplo que sigue
una pequeña arquitectura **MVC**. Está desarrollado con **Node.js** y **React** y
utiliza **TailwindCSS** para los estilos. La aplicación consume la API de
[OMDb](https://www.omdbapi.com).

```bash
cd movie-search
npm install
OMDB_API_KEY=<tu_api_key> npm start
```

El servidor expone el endpoint `/api/search` y la interfaz se sirve en
`http://localhost:3000`.
main
