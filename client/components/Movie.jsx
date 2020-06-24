import React, { Component } from "react";

const Movie = (props) => {
  return (
    <div className="movie-box">
      <div className="title-and-heart">
        {props.movie.title}
        <i className="fas fa-heart"></i>
      </div>
      <button
        onClick={(e) => props.deleteMovie(e)}
        id={props.id}
        className="delete-btn"
      >
        Delete
      </button>
    </div>
  );
};

export default Movie;
