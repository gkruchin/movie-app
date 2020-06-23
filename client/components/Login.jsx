import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    return <Redirect to="/feed" />;
  }

  render() {
    return (
      <div>
        <form>
          <input name="username" type="text" placeholder="username"></input>
          <input name="password" type="password" placeholder="password"></input>
          <input type="submit" value="login" onSubmit={this.onSubmit} />
        </form>
      </div>
    );
  }
}

export default Login;
