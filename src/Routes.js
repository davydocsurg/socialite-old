import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home";
import signIn from "./pages/signIn";
import signUp from "./pages/signUp";
import PrivateRoute from "./PrivateRoute";
import { Guard } from "./Guard";
// import Navbar from "./components/Navbar";

function Routes() {
  return (
    <>
      {/* <Navbar /> */}
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Redirect to={{ pathname: "/" }} />}
        />
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={signIn} />
        <Route exact path="/signup" component={signUp} />
        {/*Redirect if not authenticated */}{" "}
        <Guard
          path="/"
          token="user-token"
          routeRedirect="/signin"
          component={PrivateRoute}
        />
      </Switch>
    </>
  );
}
export default Routes;
