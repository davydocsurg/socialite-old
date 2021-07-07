import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home";

export default function PrivateRoute(props) {
  return (
    <div>
      {/*<Header/>*/}
      <Switch>
        <Route exact path={`/`} component={Home} />
        <Route
          exact
          path={props.match.path}
          render={(props) => <Redirect to={{ pathname: `/` }} />}
        />
      </Switch>
    </div>
  );
}
// ${props.match.path}/view-profile
