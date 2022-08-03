import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryContainer from "./Country/CountryContainer";
import CountryShowContainer from "./Country/CountryShowContainer";
import PostShowContainer from "./Post/PostShowContainer";
import CountrySearch from "./Search/CountrySearch";

export const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/countries" component={CountryContainer} />
        <Route exact path="/countries/:slug" component={CountryShowContainer} />
        <Route
          exact
          path="/countries/:slug/posts/:id"
          component={PostShowContainer}
        />
        <Route exact path="/" component={CountryContainer} />
        <Route exact path="/test" component={CountrySearch} />
      </Switch>
    </Router>
  );
};

export default App;
