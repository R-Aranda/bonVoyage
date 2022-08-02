import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryContainer from "./Country/CountryContainer";
import CountryShowContainer from "./Country/CountryShowContainer";

export const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/countries" component={CountryContainer} />
        <Route exact path="/countries/:slug" component={CountryShowContainer} />
        <Route exact path="/" component={CountryContainer} />
      </Switch>
    </Router>
  );
};

export default App;
