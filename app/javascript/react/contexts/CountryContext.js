import { post } from "fetch-mock";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useAsync } from "../hooks/useAsync";
import { getCountry } from "../services/country";

const Context = React.createContext();

export const useCountry = () => {
  return useContext(Context);
};

export const CountryProvider = ({ children }) => {
  const slug = useParams();
  const { loading, error, value: country } = useAsync(
    () => getCountry(slug.slug),
    [slug.slug]
  );
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (country?.posts == null) return;
    setPosts(country.posts);
  }, [country?.posts]);

  const createLocalPost = (post) => {
    setPosts((prevPosts) => {
      return [post, ...prevPosts];
    });
  };

  return (
    <Context.Provider
      value={{
        country: { slug, ...country },
        posts: posts,
        createLocalPost: createLocalPost,
      }}
    >
      {loading ? <h1>Loading</h1> : error ? <h1>{error}</h1> : children}
    </Context.Provider>
  );
};
