import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      failedLogin: false,
    };

    // this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  validate() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    axios.post("/validate", { username, password }).then((res) => {
      if (res.data === true) {
        this.setState({
          loggedIn: true,
        });
      } else {
        this.setState({
          failedLogin: true,
        });
      }
    });
  }

  // onSubmit(e) {
  //   e.preventDefault();
  //   //verifying user
  //   console.log(e.target);
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
              Don't have an account? <Link to="/signup">Register</Link>
            </p>

            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                name="username"
                type="text"
                placeholder="Username"
                className="login-input"
                id="username"
              ></input>
            </div>

            <div className="input-group">
              <label htmlFor="username">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="login-input"
                id="password"
              ></input>
            </div>
            <button value="Login" className="login-btn" onClick={this.validate}>
              Login
            </button>
            {this.state.failedLogin && (
              <div className="failed">Incorrect username or password </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
