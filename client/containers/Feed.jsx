import React, { Component } from "react";
import MovieContainer from "./MovieContainer.jsx";
import axios from "axios";

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      movies: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    fetch("/movies")
      .then((res) => res.json())
      .then((movies) => this.setState({ movies }));
  }

  handleChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      title: e.target.value,
    });
  }

  handleSubmit(e) {
    //make a get request to server
    e.preventDefault();
    axios
      .post("/addmovie", this.state)
      .then((res) => this.setState({ movies: res.data }));
  }

  deleteMovie(e) {
    console.log(e);
  }

  render() {
    return (
      <div className="main-container">
        <MovieContainer
          movie={this.state.title}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          movies={this.state.movies}
          deleteMove={this.deleteMovie}
        />
      </div>
    );
  }
}

export default Feed;
