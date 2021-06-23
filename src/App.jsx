import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// pages
import home from "./pages/home";
import signIn from "./pages/signIn";
import signUp from "./pages/signUp";
import { Guard } from "./Guard";
import PrivateRoute from "./PrivateRoute";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={home}></Route>
          <Route exact path="/signin" component={signIn}></Route>
          <Route exact path="/signUp" component={signUp}></Route>

          {/* protected routes */}
          <Guard
            path="/"
            token="user-token"
            routeRedirect="/signin"
            component={PrivateRoute}
          />
        </Switch>
      </Router>
    </div>
  );
}
