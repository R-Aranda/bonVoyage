import React, { useState, useEffect, Fragment } from "react";
import PostIndexContainer from "../Post/PostIndexContainer";
import Weather from "../Weather/Weather";
import { useCountry } from "../../contexts/CountryContext";
import { useAsyncFn } from "../../hooks/useAsync";
import { createPost } from "../../services/post";

const CountryShowContainer = (props) => {
  const { country, posts, createLocalPost } = useCountry();
  const { loading, error, execute: createPostFn } = useAsyncFn(createPost);

  const onPostCreate = (message) => {
    return createPostFn({ message, countryId: country.id }).then(
      createLocalPost(message)
    );
  };

  return (
    <Fragment>
      <h2>{country.name}</h2>
      <img src={country.photo} />
      {/* <Weather country={country.country.name} /> */}
      <PostIndexContainer
        posts={posts}
        country={country}
        loading={loading}
        error={error}
        onSubmit={onPostCreate}
      />
    </Fragment>
  );
};

export default CountryShowContainer;
