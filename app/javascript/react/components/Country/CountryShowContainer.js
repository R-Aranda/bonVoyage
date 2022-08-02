import React, { useState, useEffect } from "react";
import axios from "axios";
import PostIndexContainer from "../Post/PostIndexContainer";

const CountryShowContainer = (props) => {
  let slug = props.match.params.slug;
  const [country, setCountry] = useState([]);
  // const [loaded, setLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postInputs, setPostInputs] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    axios
      .get(`/api/v1/countries/${slug}.json`)
      .then((resp) => {
        setCountry(resp.data);
        // setLoaded(true);
        setPosts(resp.data.posts);
      })
      .catch((resp) => console.log(resp));
  }, [country.length]);

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
      }).catch((resp) => {
        console.log(resp.message);
      });
    });
  };

  return (
    <div>
      <h2>{country.name}</h2>
      <PostIndexContainer
        posts={posts}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        postInputs={postInputs}
        countrySlug={slug}
      />
    </div>
  );
};

export default CountryShowContainer;
