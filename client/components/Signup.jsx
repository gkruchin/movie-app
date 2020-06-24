import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      invalidEmail: false,
      incorrectInput: false,
    };

    // this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  validate() {
    const email = document.getElementById("email").value;
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;

    if (
      email.length === 0 ||
      (!email.includes("@") && username.length === 0 && password.length === 0)
    ) {
      return this.setState({
        invalidEmail: true,
        incorrectInput: true,
      });
    }

    axios.post("/createuser", { username, password }).then(
      this.setState({
        loggedIn: true,
      })
    );
  }

  // onSubmit(e) {
  //   e.preventDefault();
  //   //verifying user
  //   this.setState({
  //     loggedIn: true,
  //   });
  // }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/feed" />;
    }
    return (
      <div>
        <div className="box-container">
          <div className="content">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>

            <div className="input-group">
              <label htmlFor="username">Email</label>
              <input
                name="text"
                type="text"
                placeholder="Email"
                className="login-input"
                id="email"
              ></input>
            </div>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                name="username"
                type="text"
                placeholder="Username"
                className="login-input"
                id="signupUsername"
              ></input>
            </div>

            <div className="input-group">
              <label htmlFor="username">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="login-input"
                id="signupPassword"
              ></input>
            </div>
            <button className="login-btn" onClick={this.validate}>
              Sign Up
            </button>
            {this.state.incorrectInput && (
              <div className="failed">
                Please enter a valid username or password
              </div>
            )}
            {this.state.invalidEmail && (
              <div className="failed">Please enter a valid email address</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
