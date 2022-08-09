import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCountry } from "../redux/actions/countryActions";
import { setPosts } from "../redux/actions/postActions";
import PostIndexContainer from "../Post/PostIndexContainer";
import slugify from "react-slugify";
import Weather from "../Weather/Weather";

const CountryShowContainer = (props) => {
  let { slug } = useParams();
  const country = useSelector((state) => state.country);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`/api/v1/countries/${slugify(slug)}.json`)
      .then((resp) => {
        dispatch(setCountry(resp.data));
        dispatch(setPosts(resp.data.posts));
        setLoaded(true);
      })
      .catch((resp) => console.log(resp));
  }, []);

  return (
    <div>
      {loaded && (
        <Fragment>
          <h2>{country.country.name}</h2>
          <Weather country={country.country.name} />
          <PostIndexContainer countrySlug={slug} />
        </Fragment>
      )}
    </div>
  );
};

export default CountryShowContainer;
