import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryContainer from "./Country/CountryContainer";
import CountryShowContainer from "./Country/CountryShowContainer";
import PostShowContainer from "./Post/PostShowContainer";
import CountrySearch from "./Search/CountrySearch";

export const App = (props) => {
  return (
    <Router>
      <Routes>
        <Route exact path="/countries" element={<CountryContainer />} />
        <Route
          exact
          path="/countries/:slug"
          element={<CountryShowContainer />}
        />
        <Route
          exact
          path="/countries/:slug/posts/:id"
          element={<PostShowContainer />}
        />
        <Route exact path="/" element={<CountryContainer />} />
        <Route exact path="/test" element={<CountrySearch />} />
      </Routes>
    </Router>
  );
};

export default App;
