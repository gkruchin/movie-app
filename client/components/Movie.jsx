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
      <div className="btn">
        <input
          className="comment-box"
          id={props.id}
          onChange={(e) => props.handleComment(e)}
          placeholder="Add Comment"
        ></input>
        <button
          className="function-btn"
          id={props.id}
          onClick={(e) => props.submitComment(e)}
        >
          Submit
        </button>
        <button
          onClick={(e) => props.deleteMovie(e)}
          id={props.id}
          className="function-btn"
        >
          Delete Movie
        </button>
      </div>
      <div className="comment-box">Your review: {props.comment}</div>
    </div>
  );
};

export default Movie;
