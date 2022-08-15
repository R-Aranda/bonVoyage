import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostIndexContainer from "../Post/PostIndexContainer";
import slugify from "react-slugify";
import Weather from "../Weather/Weather";

const CountryShowContainer = (props) => {
  let { slug } = useParams();
  const [country, setCountry] = useState();
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/v1/countries/${slugify(slug)}.json`)
      .then((resp) => {
        setCountry(resp.data);
        setPosts(resp.data.posts);
        setLoaded(true);
      })
      .catch((resp) => console.log(resp));
  }, []);

  return (
    <div>
      {loaded && (
        <Fragment>
          <h2>{country.name}</h2>
          <img src={country.photo} />
          {/* <Weather country={country.country.name} /> */}
          <PostIndexContainer posts={posts} country={country} />
        </Fragment>
      )}
    </div>
  );
};

export default CountryShowContainer;
