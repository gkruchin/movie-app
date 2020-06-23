const fs = require("fs");
const path = require("path");
movieController = {};

movieController.getMovies = async (req, res, next) => {
  const movies = await JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../../db/movies.json"))
  );
  res.locals.movies = movies;
  next();
};

module.exports = movieController;
