import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="login-container">
        <Link to="/login">Login</Link>
        {/* <Link to="/signup">Sign up</Link> */}
      </div>
    );
  }
}
