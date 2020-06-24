import React, { Component } from "react";

const Movie = (props) => {
  return (
    <div className="movie-box">
      {props.movie.title}
      <br />
      <button onClick={(e) => props.deleteMovie(e)} id={props.id}>
        Delete Movie
      </button>
    </div>
  );
};

export default Movie;
