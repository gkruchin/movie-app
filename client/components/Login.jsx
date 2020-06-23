import React, { Component } from "react";
//import { BrowserRouter, Route, Switch } from "react-router-dom";

class Login extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     username: "",
  //     password: "",
  //   };
  // }

  render() {
    return (
      <div>
        <form method="POST" action="/login">
          <input name="username" type="text" placeholder="username"></input>
          <input name="password" type="password" placeholder="password"></input>
          <input type="submit" value="login" />
        </form>
        <a href="./signup">Sign up</a>
      </div>
    );
  }
}

export default Login;
