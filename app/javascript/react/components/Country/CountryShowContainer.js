import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCountry } from "../redux/actions/countryActions";
import { setPosts } from "../redux/actions/postActions";
import PostIndexContainer from "../Post/PostIndexContainer";

const CountryShowContainer = (props) => {
  let slug = props.match.params.slug;
  const country = useSelector((state) => state.country);
  const posts = useSelector((state) => state.posts);
  // debugger;
  const dispatch = useDispatch();
  // const posts = useSelector((state) => state.posts);

  // const [posts, setPosts] = useState([]);

  // debugger;
  const [errorsList, setErrorsList] = useState([]);
  const [postInputs, setPostInputs] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    axios
      .get(`/api/v1/countries/${slug}.json`)
      .then((resp) => {
        dispatch(setCountry(resp.data));
        // setLoaded(true);
        // debugger;
        dispatch(setPosts(resp.data.posts));
      })
      .catch((resp) => console.log(resp));
  }, [country.length]);

  const handleChange = (event) => {
    setPostInputs({
      ...postInputs,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  // debugger;

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
      <h2>{country.name}</h2>
      <PostIndexContainer
        posts={posts.posts}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        postInputs={postInputs}
        countrySlug={slug}
      />
    </div>
  );
};

export default CountryShowContainer;
