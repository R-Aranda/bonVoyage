import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import CountryShowContainer from "./Country/CountryShowContainer";
import PostShowContainer from "./Post/PostShowContainer";
import { CountryProvider } from "../contexts/CountryContext";
import { PostProvider } from "../contexts/PostContext";
import CityShowPage from "./Cities/CityShowPage";
import { CityProvider } from "../contexts/CityContext";

export const App = (props) => {
  return (
    <Router>
      <Routes>
        <Route exact path="/countries" element={<LandingPage />} />
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
          path="/countries/:slug/cities/:city"
          element={
            <CityProvider>
              <CityShowPage />
            </CityProvider>
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
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
