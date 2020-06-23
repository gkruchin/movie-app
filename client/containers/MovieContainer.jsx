import React, { Component } from "react";
import Movie from "../components/Movie.jsx";

const MovieContainer = (props) => {
  return (
    <div>
      <form>
        <input name="movie-input" onChange={(e) => props.handleChange(e)} />
        <Movie />
      </form>
    </div>
  );
};

export default MovieContainer;
