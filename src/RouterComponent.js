import React from "react";
import { Route, Redirect, HashRouter as Router } from "react-router-dom";
import HomeComponent from "./Components/HomeComponent";
import SpicesHomeComponent from "./Components/SpicesComponents/SpicesHomeComponent";

export default function Routes() {
  return (
    <Router>
      <Route path="/home" component={HomeComponent} />
      <Route exact path="/spices" component={SpicesHomeComponent} />
      {/* <Redirect to="home" /> */}
    </Router>
  );
}
