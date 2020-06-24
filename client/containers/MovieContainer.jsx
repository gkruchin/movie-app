import React, { Component } from "react";
import Movie from "../components/Movie.jsx";

// const movieMaker = (movie) => <Movie {...movie} />;

const MovieContainer = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input name="movie-input" onChange={(e) => props.handleChange(e)} />
        <input type="submit" value="Add Movie" />
      </form>
      <div className="all-movies">
        <h3>Movies You've Watched</h3>
        {props.movies.map((movie) => (
          <Movie movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieContainer;
