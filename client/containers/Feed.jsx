import React, { Component } from "react";
import MovieContainer from "./MovieContainer.jsx";
import axios from "axios";

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      movies: [],
      comment: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.submitComment = this.submitComment.bind(this);
  }

  componentDidMount() {
    fetch("/movies")
      .then((res) => res.json())
      .then((movies) => {
        this.setState({ movies });
      });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      title: e.target.value,
    });
  }

  handleSubmit(e) {
    //make a get request to server
    e.preventDefault();
    axios
      .post("/addmovie", this.state)
      .then((res) => this.setState({ movies: res.data, title: "" }));
  }

  deleteMovie(e) {
    axios.delete("/deletemovie", { data: { id: e.target.id } }).then((res) => {
      this.setState({ movies: res.data });
    });
  }

  handleLike(e) {
    axios.post("/addlike", { id: e.target.id }).then((res) =>
      this.setState({
        movies: res.data,
      })
    );
  }

  handleComment(e) {
    this.setState({
      comment: e.target.value,
    });
  }

  submitComment(e) {
    axios
      .post("/submitcomment", {
        comment: this.state.comment,
        id: e.target.id,
      })
      .then((res) => {
        this.setState({
          movies: res.data,
        });
      });
  }

  render() {
    return (
      <div className="main-container">
        <MovieContainer
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          movies={this.state.movies}
          title={this.state.title}
          deleteMovie={this.deleteMovie}
          handleLike={this.handleLike}
          handleComment={this.handleComment}
          submitComment={this.submitComment}
        />
      </div>
    );
  }
}

export default Feed;
