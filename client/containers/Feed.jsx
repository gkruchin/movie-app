import React, { Component } from "react";
import MovieContainer from "./MovieContainer.jsx";

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
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

  handleSubmit() {
    console.log("submitted!");
  }

  render() {
    return (
      <div className="main-container">
        <MovieContainer
          movie={this.state.title}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Feed;
