import { post } from "fetch-mock";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const [errors, setErrors] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [cities, setCities] = useState([]);
  const [cityErrors, setCityErrors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (country?.posts == null) return;
    setPosts(country.posts);
    setCities(country.cities);
    setCurrentUser(country.current_user);
  }, [country?.posts]);

  const createLocalPost = (post) => {
    if (post.status === 401) {
      window.location.href = "/users/sign_in";
    } else if (post.status === 400) {
      return setErrors(post.error);
    }

    setPosts((prevPosts) => {
      return [post, ...prevPosts];
    });
  };

  const createNewCity = (city) => {
    if (city.status === 401) {
      window.location.href = "/users/sign_in";
    } else if (city.status === 400) {
      return setCityErrors(city.error);
    }
    navigate(`cities/${city.slug}`);
  };

  return (
    <Context.Provider
      value={{
        country: { slug, ...country },
        posts: posts,
        createLocalPost,
        errors: errors,
        currentUser: currentUser,
        cities: cities,
        createNewCity,
        cityErrors: cityErrors,
      }}
    >
      {loading ? <h1>Loading</h1> : error ? <h1>{error}</h1> : children}
    </Context.Provider>
  );
};
