import React, { Fragment } from "react";
import { useAsyncFn } from "../../hooks/useAsync";
import { signOut } from "../../services/user";
import SearchComponent from "../Search/SearchComponent";

const TopBar = ({ currentUser }) => {
  const { execute: userSignOut } = useAsyncFn(signOut);

  const handleClick = () => {
    userSignOut().then(handleRerender);
  };

  const handleRerender = (res) => {
    if (res.status === 204) {
      window.location.href = "/";
    }
  };

  return (
    <nav className="top-bar">
      <h1>
        <a className="nav-logo" href="/">
          bonVoyage
        </a>
      </h1>
      <SearchComponent />
      <section className="top-bar-section">
        <ul className="right">
          {currentUser ? (
            <a onClick={handleClick}>Sign Out</a>
          ) : (
            <Fragment>
              <a className="logged-out-links" href="/users/sign_up">
                Sign Up
              </a>
              <a className="logged-out-links" href="/users/sign_in">
                Sign in
              </a>
            </Fragment>
          )}
        </ul>
      </section>
    </nav>
  );
};

export default TopBar;
