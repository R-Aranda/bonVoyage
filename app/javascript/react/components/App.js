import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import CountryShowContainer from "./Country/CountryShowContainer";
import PostShowContainer from "./Post/PostShowContainer";
import { CountryProvider } from "../contexts/CountryContext";
import { PostProvider } from "../contexts/PostContext";
import CityShowPage from "./City/CityShowPage";
import { CityProvider } from "../contexts/CityContext";
import Footer from "./Layout/Footer";
import TopBar from "./Layout/TopBar";
import { getUser } from "../services/user";
import { useAsync } from "../hooks/useAsync";
import TripForm from "./Trip/TripForm";
import NewForm from "./Trip/NewForm";

export const App = () => {
  const { value: currentUser } = useAsync(() => getUser(), []);

  return (
    <Fragment>
      <Router>
        <TopBar currentUser={currentUser} />
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

          <Route
            exact
            path="/"
            element={<LandingPage currentUser={currentUser} />}
          />
        </Routes>
      </Router>
      <Footer />
    </Fragment>
  );
};

export default App;
