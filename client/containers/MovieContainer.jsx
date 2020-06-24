import React, { Component } from "react";
import Movie from "../components/Movie.jsx";

// const movieMaker = (movie) => <Movie {...movie} />;

const MovieContainer = (props) => {
  return (
    <div>
      <div className="movie-feed">
        <div className="movie-input">
          <form onSubmit={props.handleSubmit}>
            <label htmlFor="movie-input">Add a Movie: </label>
            <input
              name="movie-input"
              onChange={(e) => props.handleChange(e)}
              value={props.title}
            />
            <input type="submit" value="Add Movie" />
          </form>
        </div>

        <div className="all-movies">
          <h3>Movies You've Watched</h3>
          {props.movies.map((movie) => (
            <Movie
              movie={movie}
              deleteMovie={props.deleteMovie}
              key={movie._id}
              id={movie._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieContainer;
