import React, { Component } from "react";
import MovieContainer from "./MovieContainer.jsx";

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      movies: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      title: e.target.value,
    });
  }

  componentDidMount() {
    fetch("/movies")
      .then((res) => res.json())
      .then((movies) =>
        this.setState({ movies: movies }, () =>
          console.log("movies fetched...", movies)
        )
      );
  }

  handleSubmit(e) {
    //make a get request to server
    e.preventDefault();
    console.log(this.state);

    fetch("/addmovies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: this.state.title,
      }),
    });
  }

  render() {
    return (
      <div className="main-container">
        <MovieContainer
          movie={this.state.title}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          movies={this.state.movies}
        />
      </div>
    );
  }
}

export default Feed;
