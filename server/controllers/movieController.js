const fs = require("fs");
const path = require("path");
const Movie = require("../models/movieModel");

let movieList;
movieController = {};

movieController.getMovies = (req, res, next) => {
  movieList = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../../db/movies.json"))
  );
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

movieController.deleteMovie = (req, res, next) => {
  movieList = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../../db/movies.json"))
  );

  movieList = movieList.filter((movie) => movie._id !== req.body.id);
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
