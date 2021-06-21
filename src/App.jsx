import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// pages
import home from "./pages/home";
import signIn from "./pages/signIn";
import signUp from "./pages/signUp";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={home}></Route>
          <Route exact path="/signin" component={signIn}></Route>
          <Route exact path="/signUp" component={signUp}></Route>
        </Switch>
      </Router>
    </div>
  );
}

