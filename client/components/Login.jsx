import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      loggedIn: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    //verifying user
    this.setState({
      loggedIn: true,
    });
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/feed" />;
    }
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="login-container">
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input name="username" type="text" placeholder="username"></input>
            </div>

            <div className="input-group">
              <label htmlFor="username">Password</label>
              <input
                name="password"
                type="password"
                placeholder="password"
              ></input>
            </div>
            <input type="submit" value="login" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
