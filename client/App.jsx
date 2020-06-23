import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import Feed from "./containers/Feed.jsx";
import Signup from "./components/Signup.jsx";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
