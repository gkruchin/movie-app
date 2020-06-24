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
      .then((res) => this.setState({ movies: res.data }));
  }

  deleteMovie(e) {
    axios.delete("/deletemovie", { data: { id: e.target.id } }).then((res) => {
      console.log(res);
      this.setState({ movies: res.data });
    });
  }

  render() {
    return (
      <div className="main-container">
        <MovieContainer
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          movies={this.state.movies}
          deleteMovie={this.deleteMovie}
        />
      </div>
    );
  }
}

export default Feed;
