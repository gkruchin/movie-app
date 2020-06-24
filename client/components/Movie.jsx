import React, { Component } from "react";

const Movie = (props) => {
  return (
    <div className="movie-box">
      {props.movie}
      <br />
      <button>Update Movie</button>
      <button>Delete Movie</button>
    </div>
  );
};

export default Movie;
