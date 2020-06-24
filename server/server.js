const path = require("path");
const express = require("express");
const movieController = require("./controllers/movieController.js");
const userController = require("./controllers/userController.js");

const app = express();
const port = process.env.PORT || 3000;

// app.get("/login", (req, res) => {
//   res.redirect(path.join(__dirname, "../client/containers/Feed.jsx"));
// });

app.use(express.json());

app.post("/validate", userController.validate, (req, res) => {
  console.log("after validate");
  res.json(res.locals.login);
});

app.post("/createuser", userController.createUser, (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

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

app.delete(
  "/deletemovie",
  movieController.deleteMovie,
  movieController.getMovies,
  (req, res) => {
    res.json(res.locals.movies);
  }
);

app.post("/addlike", movieController.addLike, (req, res) => {
  res.json(res.locals.likedMovies);
});

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Internal Server Error");
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
