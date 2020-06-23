import React, { Component } from "react";
import Movie from "../components/Movie.jsx";

const MovieContainer = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input name="movie-input" onChange={(e) => props.handleChange(e)} />
        <input type="submit" value="Add Movie" />
        <Movie />
      </form>
    </div>
  );
};

export default MovieContainer;
