import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    <Redirect to="/feed/" />;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input name="username" type="text" placeholder="username"></input>
          <input name="password" type="password" placeholder="password"></input>
          <input type="submit" value="sign up" />
        </form>
      </div>
    );
  }
}

export default Signup;
