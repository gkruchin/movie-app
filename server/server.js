const path = require("path");
const express = require("express");
const movieController = require("./controllers/movieController.js");

const app = express();
const port = process.env.PORT || 3000;

// app.get("/login", (req, res) => {
//   res.redirect(path.join(__dirname, "../client/containers/Feed.jsx"));
// });

app.use(express.json());

app.get("/movies", movieController.getMovies, (req, res) => {
  res.json(res.locals.movies);
});

app.post(
  "/addmovie",
  movieController.addMovie,
  movieController.getMovies,
  (req, res) => {
    res.json(res.locals.movies);
  }
);

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
