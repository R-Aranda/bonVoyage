import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryContainer from "./Country/CountryContainer";
import CountryShowContainer from "./Country/CountryShowContainer";
import PostShowContainer from "./Post/PostShowContainer";
import CountrySearch from "./Search/CountrySearch";
import SearchComponent from "./Search/SearchComponent";
import Weather from "./Weather/Weather";
import { CountryProvider } from "../contexts/CountryContext";
import { PostProvider } from "../contexts/PostContext";
import LandingHeader from "./Country/LandingHeader";

export const App = (props) => {
  return (
    <Router>
      <Routes>
        <Route exact path="/countries" element={<CountryContainer />} />
        <Route
          exact
          path="/countries/:slug"
          element={
            <CountryProvider>
              <CountryShowContainer />
            </CountryProvider>
          }
        />
        <Route
          exact
          path="/countries/:slug/posts/:id"
          element={
            <PostProvider>
              <PostShowContainer />
            </PostProvider>
          }
        />
        <Route exact path="/" element={<CountryContainer />} />
        <Route exact path="/test" element={<LandingHeader />} />
        <Route exact path="/weather" element={<Weather />} />
      </Routes>
    </Router>
  );
};

export default App;
