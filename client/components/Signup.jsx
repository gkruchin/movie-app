import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

class Signup extends Component {
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
        <div className="box-container">
          <div className="content">
            <Link to="/login">Login</Link>
            <form onSubmit={this.onSubmit}>
              <div className="input-group">
                <label htmlFor="username">Email</label>
                <input
                  name="text"
                  type="text"
                  placeholder="Email"
                  className="login-input"
                ></input>
              </div>
              <div className="input-group">
                <label htmlFor="username">Username</label>
                <input
                  name="username"
                  type="text"
                  placeholder="Username"
                  className="login-input"
                ></input>
              </div>

              <div className="input-group">
                <label htmlFor="username">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="login-input"
                ></input>
              </div>
              <input type="submit" value="Sign Up" className="login-btn" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
