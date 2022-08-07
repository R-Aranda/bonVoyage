import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostIndexContainer from "../Post/PostIndexContainer";
import slugify from "react-slugify";

const CountryShowContainer = (props) => {
  let { slug } = useParams();
  const [country, setCountry] = useState([]);
  // debugger;
  const [loaded, setLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  const [errorsList, setErrorsList] = useState([]);
  const [postInputs, setPostInputs] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    axios
      .get(`/api/v1/countries/${slugify(slug)}.json`)
      .then((resp) => {
        setCountry(resp.data);
        setLoaded(true);
        setPosts(resp.data.posts);
      })
      .catch((resp) => console.log(resp));
  }, [country]);

  const handleChange = (event) => {
    setPostInputs({
      ...postInputs,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const country_id = parseInt(country.id);
    const countryName = country.name;
    postInputs["country_id"] = country_id;
    postInputs["countryName"] = countryName;
    axios.post("/api/v1/posts", { ...postInputs }).then((resp) => {
      setPosts(posts.concat(resp.data));
      setPostInputs({
        title: "",
        body: "",
      })
        // .then((productBody) => {
        //   if (productBody.product) {
        //     setRedirect(productBody.product.id);
        //   } else if (productBody.error) {
        //     setErrorList(productBody.error);
        //   }
        // })
        .catch((resp) => {
          console.log(resp.message);
        });
    });
  };

  return (
    <div>
      {loaded && (
        <Fragment>
          <h2>{country.name}</h2>
          <PostIndexContainer
            posts={posts}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            postInputs={postInputs}
            countrySlug={slug}
          />
        </Fragment>
      )}
    </div>
  );
};

export default CountryShowContainer;
