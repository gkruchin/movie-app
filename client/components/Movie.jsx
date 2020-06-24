import React, { Component } from "react";

const Movie = (props) => {
  return (
    <div className="movie-box">
      <div className="title-and-heart">
        {props.movie.title}
        {props.liked ? (
          <i
            className="fas fa-heart"
            onClick={(e) => props.handleLike(e)}
            id={props.id}
            style={{ color: "red" }}
          ></i>
        ) : (
          <i
            className="fas fa-heart"
            onClick={(e) => props.handleLike(e)}
            id={props.id}
            style={{ color: "gray" }}
          ></i>
        )}
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
