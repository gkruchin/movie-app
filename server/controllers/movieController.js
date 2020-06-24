const fs = require("fs");
const path = require("path");
const Movie = require("../models/movieModel");
const { createSecretKey } = require("crypto");

let movieList;
movieController = {};

movieController.getMovies = (req, res, next) => {
  movieList = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../../db/movies.json"))
  );
  movieList = movieList.map((movie) => movie.title);
  res.locals.movies = movieList;
  next();
};

movieController.addMovie = (req, res, next) => {
  const movie = new Movie({ title: req.body.title });
  movieList = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../../db/movies.json"))
  );
  movieList.push(movie);
  fs.writeFileSync(
    path.resolve(__dirname, "../../db/movies.json"),
    JSON.stringify(movieList),
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
  next();
};

module.exports = movieController;
